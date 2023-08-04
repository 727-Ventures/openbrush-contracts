"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[10471],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,s(s({ref:e},l),{},{components:n})):r.createElement(d,s({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67466:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,title:"PSP22"},s=void 0,c={unversionedId:"smart-contracts/PSP22/psp22",id:"version-3.0.0-beta.1/smart-contracts/PSP22/psp22",title:"PSP22",description:"This example shows how you can reuse the implementation of PSP22 token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to hated_account.",source:"@site/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP22/psp22.md",sourceDirName:"smart-contracts/PSP22",slug:"/smart-contracts/PSP22/",permalink:"/openbrush-contracts/3.0.0-beta.1/smart-contracts/PSP22/",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP22/psp22.md",tags:[],version:"3.0.0-beta.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22"},sidebar:"tutorialSidebar",previous:{title:"Payment Splitter",permalink:"/openbrush-contracts/3.0.0-beta.1/smart-contracts/payment-splitter"},next:{title:"PSP22 Metadata",permalink:"/openbrush-contracts/3.0.0-beta.1/smart-contracts/PSP22/Extensions/metadata"}},i={},p=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Customize your contract",id:"step-3-customize-your-contract",level:2}],l={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22")," token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to ",(0,o.kt)("inlineCode",{parentName:"p"},"hated_account"),"."),(0,o.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22")," module, enable the corresponding feature, and embed the module data structure\nas described in ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,o.kt)("p",null,"The main trait is ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22"),"."),(0,o.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,o.kt)("p",null,"Define constructor where you mint tokens to caller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl Contract {\n    #[ink(constructor)]\n    pub fn new(total_supply: Balance) -> Self {\n        let mut instance = Self::default();\n\n        instance\n            ._mint_to(Self::env().caller(), total_supply)\n            .expect("Should mint");\n\n        instance\n    }\n}\n')),(0,o.kt)("h2",{id:"step-3-customize-your-contract"},"Step 3: Customize your contract"),(0,o.kt)("p",null,"Customize it by adding hated account logic. It will contain two public methods ",(0,o.kt)("inlineCode",{parentName:"p"},"set_hated_account")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get_hated_account"),".\nAlso we will override ",(0,o.kt)("inlineCode",{parentName:"p"},"_before_token_transfer")," method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation(that methods defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," trait),\nand we will add the ",(0,o.kt)("inlineCode",{parentName:"p"},"hated_account: AccountId")," field to the structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22 {\n    use openbrush::traits::String;\n    use openbrush::{\n        contracts::psp22::*,\n        traits::Storage,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp22: psp22::Data,\n        // fields for hater logic\n        hated_account: AccountId,\n    }\n\n    impl Transfer for Contract {\n        // Let\'s override method to reject transactions to bad account\n        fn _before_token_transfer(\n            &mut self,\n            _from: Option<&AccountId>,\n            to: Option<&AccountId>,\n            _amount: &Balance,\n        ) -> Result<(), PSP22Error> {\n            if to == Some(&self.hated_account) {\n                return Err(PSP22Error::Custom(String::from("I hate this account!")));\n            }\n            Ok(())\n        }\n    }\n\n    impl PSP22 for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(total_supply: Balance) -> Self {\n            let mut instance = Self::default();\n\n            instance\n                ._mint_to(Self::env().caller(), total_supply)\n                .expect("Should mint");\n            \n            instance\n        }\n\n        #[ink(message)]\n        pub fn set_hated_account(&mut self, hated: AccountId) {\n            self.hated_account = hated;\n        }\n\n        #[ink(message)]\n        pub fn get_hated_account(&self) -> AccountId {\n            self.hated_account.clone()\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp22"},"PSP22"),"."),(0,o.kt)("p",null,"Also you can use extensions for PSP22 token:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/psp22/extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/psp22/extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/psp22/extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/psp22/extensions/wrapper"},"PSP22Wrapper"),": token wrapper for PSP22."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/psp22/extensions/flashmint"},"PSP22FlashMint"),": extension which allows the user to perform flashloans on the token by minting and burning the token."),(0,o.kt)("p",null,"Check out the utilities for PSP22 token:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/psp22/utils/token-timelock"},"PSP22TokenTimelock"),": utility for locking PSP22 tokens for a specified time."))}m.isMDXComponent=!0}}]);