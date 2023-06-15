// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#[cfg(feature = "access_control")]
#[openbrush::implementation(AccessControl)]
#[openbrush::contract]
mod access_control {
    use ::ink::env::DefaultEnvironment;
    use ink::env::test::DefaultAccounts;
    use openbrush::{
        contracts::access_control::*,
        test_utils::{
            accounts,
            change_caller,
        },
    };

    use ink::codegen::{
        EmitEvent,
        Env,
    };

    #[ink(event)]
    pub struct RoleAdminChanged {
        #[ink(topic)]
        role: RoleType,
        #[ink(topic)]
        previous: RoleType,
        #[ink(topic)]
        new: RoleType,
    }

    #[ink(event)]
    pub struct RoleGranted {
        #[ink(topic)]
        role: RoleType,
        #[ink(topic)]
        grantee: AccountId,
        #[ink(topic)]
        grantor: Option<AccountId>,
    }

    #[ink(event)]
    pub struct RoleRevoked {
        #[ink(topic)]
        role: RoleType,
        #[ink(topic)]
        account: AccountId,
        #[ink(topic)]
        admin: AccountId,
    }

    // You can manually set the number for the role.
    // But better to use a hash of the variable name.
    // It will generate a unique identifier of this role.
    // And will reduce the chance to have overlapping roles.
    const MINTER: RoleType = ink::selector_id!("MINTER");
    const PAUSER: RoleType = ink::selector_id!("PAUSER");

    #[derive(Default)]
    #[openbrush::storage]
    #[ink(storage)]
    pub struct AccessControlStruct {
        #[storage_field]
        access: Data,
    }

    type Event = <AccessControlStruct as ::ink::reflect::ContractEventBase>::Type;

    #[overrider(access_control::Internal)]
    fn _emit_role_admin_changed(&mut self, role: u32, previous: u32, new: u32) {
        self.env().emit_event(RoleAdminChanged { role, previous, new })
    }

    #[overrider(access_control::Internal)]
    fn _emit_role_granted(&mut self, role: u32, grantee: AccountId, grantor: Option<AccountId>) {
        self.env().emit_event(RoleGranted { role, grantee, grantor })
    }

    #[overrider(access_control::Internal)]
    fn _emit_role_revoked(&mut self, role: u32, account: AccountId, sender: AccountId) {
        self.env().emit_event(RoleRevoked {
            role,
            account,
            admin: sender,
        })
    }

    impl AccessControlStruct {
        #[ink(constructor)]
        pub fn new(admin: AccountId) -> Self {
            let mut instance = Self::default();
            access_control::Internal::_init_with_admin(&mut instance, admin);
            instance
        }
    }

    fn assert_role_admin_change_event(
        event: &ink::env::test::EmittedEvent,
        expected_role: RoleType,
        expected_prev_admin: RoleType,
        expected_new_admin: RoleType,
    ) {
        if let Event::RoleAdminChanged(RoleAdminChanged { role, previous, new }) =
            <Event as scale::Decode>::decode(&mut &event.data[..])
                .expect("encountered invalid contract event data buffer")
        {
            assert_eq!(
                role, expected_role,
                "Roles were not equal: encountered role {:?}, expected role {:?}",
                role, expected_role
            );
            assert_eq!(
                previous, expected_prev_admin,
                "Previous admins were not equal: encountered previous admin {:?}, expected {:?}",
                previous, expected_prev_admin
            );
            assert_eq!(
                new, expected_new_admin,
                "New admins were not equal: encountered new admin {:?}, expected {:?}",
                new, expected_new_admin
            );
        }
    }

    fn assert_role_granted_event(
        event: &ink::env::test::EmittedEvent,
        expected_role: RoleType,
        expected_grantee: AccountId,
        expected_grantor: Option<AccountId>,
    ) {
        if let Event::RoleGranted(RoleGranted { role, grantee, grantor }) =
            <Event as scale::Decode>::decode(&mut &event.data[..])
                .expect("encountered invalid contract event data buffer")
        {
            assert_eq!(
                role, expected_role,
                "Roles were not equal: encountered role {:?}, expected role {:?}",
                role, expected_role
            );
            assert_eq!(
                grantee, expected_grantee,
                "Grantees were not equal: encountered grantee {:?}, expected {:?}",
                grantee, expected_grantee
            );
            assert_eq!(
                grantor, expected_grantor,
                "Grantors were not equal: encountered grantor {:?}, expected {:?}",
                grantor, expected_grantor
            );
        }
    }

    fn assert_role_revoked_event(
        event: &ink::env::test::EmittedEvent,
        expected_role: RoleType,
        expected_account: AccountId,
        expected_admin: AccountId,
    ) {
        if let Event::RoleRevoked(RoleRevoked { role, account, admin }) =
            <Event as scale::Decode>::decode(&mut &event.data[..])
                .expect("encountered invalid contract event data buffer")
        {
            assert_eq!(
                role, expected_role,
                "Roles were not equal: encountered role {:?}, expected role {:?}",
                role, expected_role
            );
            assert_eq!(
                account, expected_account,
                "Accounts were not equal: encountered account {:?}, expected {:?}",
                account, expected_account
            );
            assert_eq!(
                admin, expected_admin,
                "Admins were not equal: encountered admin {:?}, expected {:?}",
                admin, expected_admin
            );
        }
    }

    fn setup() -> DefaultAccounts<DefaultEnvironment> {
        let accounts = accounts();

        accounts
    }

    #[ink::test]
    fn should_init_with_default_admin() {
        let accounts = setup();
        let access_control = AccessControlStruct::new(accounts.alice);
        assert!(AccessControl::has_role(
            &access_control,
            DEFAULT_ADMIN_ROLE,
            accounts.alice
        ));
        assert_eq!(
            AccessControl::get_role_admin(&access_control, DEFAULT_ADMIN_ROLE),
            DEFAULT_ADMIN_ROLE
        );
        let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
        assert_role_granted_event(&emitted_events[0], DEFAULT_ADMIN_ROLE, accounts.alice, None);
    }

    #[ink::test]
    fn should_grant_role() {
        let accounts = setup();
        let alice = accounts.alice;
        let mut access_control = AccessControlStruct::new(alice);

        assert!(AccessControl::grant_role(&mut access_control, PAUSER, alice).is_ok());
        assert!(AccessControl::grant_role(&mut access_control, MINTER, alice).is_ok());

        assert!(AccessControl::has_role(&mut access_control, DEFAULT_ADMIN_ROLE, alice));
        assert!(AccessControl::has_role(&mut access_control, PAUSER, alice));
        assert!(AccessControl::has_role(&mut access_control, MINTER, alice));

        let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
        assert_role_granted_event(&emitted_events[0], DEFAULT_ADMIN_ROLE, alice, None);
        assert_role_granted_event(&emitted_events[1], PAUSER, alice, Some(alice));
        assert_role_granted_event(&emitted_events[2], MINTER, alice, Some(alice));
    }

    #[ink::test]
    fn should_grant_role_fail() {
        let accounts = setup();
        let alice = accounts.alice;
        let mut access_control = AccessControlStruct::new(alice);

        assert_eq!(AccessControl::grant_role(&mut access_control, PAUSER, alice), Ok(()));
        assert_eq!(
            AccessControl::grant_role(&mut access_control, PAUSER, alice),
            Err(AccessControlError::RoleRedundant)
        );
    }

    #[ink::test]
    fn should_revoke_role() {
        let accounts = setup();
        let mut access_control = AccessControlStruct::new(accounts.alice);

        assert!(AccessControl::grant_role(&mut access_control, PAUSER, accounts.bob).is_ok());
        assert!(AccessControl::has_role(&mut access_control, PAUSER, accounts.bob));
        assert!(AccessControl::revoke_role(&mut access_control, PAUSER, accounts.bob).is_ok());

        assert!(!AccessControl::has_role(&mut access_control, PAUSER, accounts.bob));

        let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
        assert_role_granted_event(&emitted_events[0], DEFAULT_ADMIN_ROLE, accounts.alice, None);
        assert_role_granted_event(&emitted_events[1], PAUSER, accounts.bob, Some(accounts.alice));
        assert_role_revoked_event(&emitted_events[2], PAUSER, accounts.bob, accounts.alice);
    }

    #[ink::test]
    fn should_renounce_role() {
        let accounts = setup();
        let mut access_control = AccessControlStruct::new(accounts.alice);
        change_caller(accounts.alice);

        assert!(AccessControl::grant_role(&mut access_control, PAUSER, accounts.eve).is_ok());
        assert!(AccessControl::has_role(&mut access_control, PAUSER, accounts.eve));
        change_caller(accounts.eve);
        assert!(AccessControl::renounce_role(&mut access_control, PAUSER, accounts.eve).is_ok());

        assert!(!AccessControl::has_role(&mut access_control, PAUSER, accounts.eve));

        let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
        assert_role_granted_event(&emitted_events[0], DEFAULT_ADMIN_ROLE, accounts.alice, None);
        assert_role_granted_event(&emitted_events[1], PAUSER, accounts.eve, Some(accounts.alice));
        assert_role_revoked_event(&emitted_events[2], PAUSER, accounts.eve, accounts.eve);
    }

    #[ink::test]
    fn should_change_role_admin() {
        let accounts = setup();
        let mut access_control = AccessControlStruct::new(accounts.alice);

        assert!(AccessControl::grant_role(&mut access_control, MINTER, accounts.eve).is_ok());
        access_control::Internal::_set_role_admin(&mut access_control, PAUSER, MINTER);
        change_caller(accounts.eve);
        assert!(AccessControl::grant_role(&mut access_control, PAUSER, accounts.bob).is_ok());

        assert_eq!(
            AccessControl::get_role_admin(&mut access_control, MINTER),
            DEFAULT_ADMIN_ROLE
        );
        assert_eq!(AccessControl::get_role_admin(&mut access_control, PAUSER), MINTER);

        let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
        assert_role_granted_event(&emitted_events[0], DEFAULT_ADMIN_ROLE, accounts.alice, None);
        assert_role_granted_event(&emitted_events[1], MINTER, accounts.eve, Some(accounts.alice));
        assert_role_admin_change_event(&emitted_events[2], PAUSER, DEFAULT_ADMIN_ROLE, MINTER);
        assert_role_granted_event(&emitted_events[3], PAUSER, accounts.bob, Some(accounts.eve));
    }

    #[ink::test]
    fn should_return_error_when_not_admin_grant_role() {
        let accounts = setup();
        let mut access_control = AccessControlStruct::new(accounts.alice);

        assert!(AccessControl::grant_role(&mut access_control, MINTER, accounts.eve).is_ok());
        assert!(AccessControl::grant_role(&mut access_control, PAUSER, accounts.bob).is_ok());
        access_control::Internal::_set_role_admin(&mut access_control, PAUSER, MINTER);

        assert_eq!(
            AccessControl::grant_role(&mut access_control, PAUSER, accounts.eve),
            Err(AccessControlError::MissingRole)
        );
    }

    #[ink::test]
    fn should_return_error_when_not_admin_revoke_role() {
        let accounts = setup();
        let mut access_control = AccessControlStruct::new(accounts.alice);

        assert!(AccessControl::grant_role(&mut access_control, MINTER, accounts.eve).is_ok());
        assert!(AccessControl::grant_role(&mut access_control, PAUSER, accounts.bob).is_ok());
        access_control::Internal::_set_role_admin(&mut access_control, PAUSER, MINTER);

        change_caller(accounts.bob);

        assert_eq!(
            AccessControl::revoke_role(&mut access_control, MINTER, accounts.bob),
            Err(AccessControlError::MissingRole)
        );
    }

    #[ink::test]
    fn should_return_error_when_not_self_renounce_role() {
        let accounts = setup();
        let mut access_control = AccessControlStruct::new(accounts.alice);

        assert!(AccessControl::grant_role(&mut access_control, PAUSER, accounts.bob).is_ok());
        assert_eq!(
            AccessControl::renounce_role(&mut access_control, PAUSER, accounts.bob),
            Err(AccessControlError::InvalidCaller)
        );
    }

    #[ink::test]
    fn should_return_error_when_account_doesnt_have_role() {
        let accounts = setup();
        change_caller(accounts.alice);
        let mut access_control = AccessControlStruct::new(accounts.alice);

        assert_eq!(
            AccessControl::renounce_role(&mut access_control, PAUSER, accounts.alice),
            Err(AccessControlError::MissingRole)
        );
    }
}
