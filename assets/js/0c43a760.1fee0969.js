"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[7349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3,title:"Implement PSP22 contract"},i=void 0,l={unversionedId:"smart-contracts/example/psp22",id:"smart-contracts/example/psp22",title:"Implement PSP22 contract",description:"First, we will cover the implementation of PSP22",source:"@site/docs/smart-contracts/example/psp22.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/psp22",permalink:"/openbrush-contracts/next/smart-contracts/example/psp22",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/docs/smart-contracts/example/psp22.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Implement PSP22 contract"},sidebar:"tutorialSidebar",previous:{title:"Setup the project",permalink:"/openbrush-contracts/next/smart-contracts/example/setup_project"},next:{title:"Shares contract",permalink:"/openbrush-contracts/next/smart-contracts/example/shares"}},s={},p=[{value:"Definition of the <code>StableCoin</code> trait",id:"definition-of-the-stablecoin-trait",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Implement the contract",id:"implement-the-contract",level:2},{value:"Define the storage",id:"define-the-storage",level:2},{value:"Implement the PSP22 and PSP22Metadata traits and define the constructor",id:"implement-the-psp22-and-psp22metadata-traits-and-define-the-constructor",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First, we will cover the implementation of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"\ntoken used by our smart contract, which will represent the stable coin that we will be\nlending and another ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," token which we will be\nusing as collateral. These are used just to test our example, you will not be creating\nan actual ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," implementation of stable coin or collateral\ntoken in your lending protocol, but this will also showcase how to implement\na basic implementation of a fungible token with OpenBrush."),(0,r.kt)("h2",{id:"definition-of-the-stablecoin-trait"},"Definition of the ",(0,r.kt)("inlineCode",{parentName:"h2"},"StableCoin")," trait"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"traits/stable_coin.rs"),", we will define a ",(0,r.kt)("inlineCode",{parentName:"p"},"StableCoin")," trait.\nThat trait contains only two super traits: ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata"),", without any other method.\nThat shows that ",(0,r.kt)("inlineCode",{parentName:"p"},"StableCoin")," is simple ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22"),". In the implementation of the contract\nwe will implement that trait to be sure that all super traits are also implemented.\n",(0,r.kt)("inlineCode",{parentName:"p"},"StableCoinRef")," can be used by other developers to do a cross contract call to ",(0,r.kt)("inlineCode",{parentName:"p"},"StableCoinContract"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::traits::psp22::{\n    extensions::metadata::*,\n    extensions::mintable::*,\n    *,\n};\n\n#[openbrush::wrapper]\npub type StableCoinRef = dyn PSP22 + PSP22Metadata + PSP22Mintable;\n\n#[openbrush::trait_definition]\npub trait StableCoin: PSP22 + PSP22Metadata + PSP22Mintable {}\n")),(0,r.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,r.kt)("p",null,"First we will add the dependencies used in our ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"\ncontract to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file. You will import the same dependencies as in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," documentation, so we will not show\nit here to keep it simple."),(0,r.kt)("h2",{id:"implement-the-contract"},"Implement the contract"),(0,r.kt)("p",null,"We want a basic ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," token with metadata,\nso we will add the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22/extensions/metadata"},"PSP22 Metadata"),"\nextension to our contract. We will add a ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro to our contract\nand add some imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n/// This is a simple `PSP22` which will be used as a stable coin and a collateral token in our lending contract\n#[openbrush::contract]\npub mod token {\n    use openbrush::traits::String;\n    use lending_project::traits::stable_coin::*;\n    use openbrush::{\n        contracts::psp22::extensions::metadata::*,\n        contracts::psp22::extensions::mintable::*,\n        traits::Storage,\n    };\n')),(0,r.kt)("h2",{id:"define-the-storage"},"Define the storage"),(0,r.kt)("p",null,"We will derive the storage traits related to ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," and declare\nthe fields related to these traits."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Define the storage for PSP22 data and Metadata data\n#[ink(storage)]\n#[derive(Default, Storage)]\npub struct StableCoinContract {\n    #[storage_field]\n    psp22: psp22::Data,\n    #[storage_field]\n    metadata: metadata::Data,\n}\n")),(0,r.kt)("h2",{id:"implement-the-psp22-and-psp22metadata-traits-and-define-the-constructor"},"Implement the PSP22 and PSP22Metadata traits and define the constructor"),(0,r.kt)("p",null,"We will implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," trait and define the constructor where we\nwill set the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," for our token. Also, we will mint the\ninitial supply of tokens to the caller of the constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Implement PSP22 Trait for our coin\nimpl PSP22 for StableCoinContract {}\n\n/// Implement PSP22Metadata Trait for our coin\nimpl PSP22Metadata for StableCoinContract {}\n\n/// implement PSP22Mintable Trait for our coin\nimpl PSP22Mintable for StableCoinContract {}\n\n// It forces the compiler to check that you implemented all super traits\nimpl StableCoin for StableCoinContract {}\n\nimpl StableCoinContract {\n    /// Constructor with name and symbol\n    #[ink(constructor)]\n    pub fn new(name: Option<String>, symbol: Option<String>) -> Self {\n        let mut instance = Self::default();\n\n        instance.metadata.name = name;\n        instance.metadata.symbol = symbol;\n        instance.metadata.decimals = 18;\n        let total_supply = 1_000_000 * 10_u128.pow(18);\n        assert!(instance._mint_to(Self::env().caller(), total_supply).is_ok());\n        \n        instance\n    }\n}\n")))}m.isMDXComponent=!0}}]);