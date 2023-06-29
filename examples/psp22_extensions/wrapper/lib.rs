#![cfg_attr(not(feature = "std"), no_std, no_main)]
#![feature(default_alloc_error_handler)]

#[openbrush::implementation(PSP22, PSP22Wrapper)]
#[openbrush::contract]
pub mod my_psp22_wrapper {

    #[ink(storage)]
    #[derive(Default)]
    #[openbrush::storage]
    pub struct Contract {
        #[storage_field]
        psp22: psp22::Data,
        #[storage_field]
        wrapper: wrapper::Data,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(token_address: AccountId) -> Self {
            let mut instance = Self::default();

            Internal::_init(&mut instance, token_address);

            instance
        }

        /// Exposes the `_recover` function for message caller
        #[ink(message)]
        pub fn recover(&mut self) -> Result<Balance, PSP22Error> {
            Internal::_recover(self, Self::env().caller())
        }
    }
}
