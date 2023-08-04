"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[81172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),b=o,f=m["".concat(l,".").concat(b)]||m[b]||p[b]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,title:"AccessControl Enumerable"},s=void 0,c={unversionedId:"smart-contracts/access-control/Extensions/enumerable",id:"version-v4.0.0-beta/smart-contracts/access-control/Extensions/enumerable",title:"AccessControl Enumerable",description:"This example shows how you can reuse the implementation of AccessControl with AccessControlEnumerable extension, which enables an easier overview of access control roles.",source:"@site/versioned_docs/version-v4.0.0-beta/smart-contracts/access-control/Extensions/enumerable.md",sourceDirName:"smart-contracts/access-control/Extensions",slug:"/smart-contracts/access-control/Extensions/enumerable",permalink:"/openbrush-contracts/v4.0.0-beta/smart-contracts/access-control/Extensions/enumerable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-v4.0.0-beta/smart-contracts/access-control/Extensions/enumerable.md",tags:[],version:"v4.0.0-beta",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AccessControl Enumerable"},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/openbrush-contracts/v4.0.0-beta/smart-contracts/access-control/"},next:{title:"Ownable",permalink:"/openbrush-contracts/v4.0.0-beta/smart-contracts/ownable"}},l={},i=[{value:"Step 1: Add implemenation of AccessControlEnumerable",id:"step-1-add-implemenation-of-accesscontrolenumerable",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Final code",id:"final-code",level:2}],u={toc:i},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/blob/main/contracts/src/access/access_control/access_control.rs"},"AccessControl")," with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/blob/main/contracts/src/access/access_control/extensions/enumerable.rs"},"AccessControlEnumerable")," extension, which enables an easier overview of access control roles."),(0,o.kt)("p",null,"First, you should implement basic version of ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/v4.0.0-beta/smart-contracts/access-control/"},"AccessControl"),"."),(0,o.kt)("h2",{id:"step-1-add-implemenation-of-accesscontrolenumerable"},"Step 1: Add implemenation of AccessControlEnumerable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::contract]\n#[openbrush::implementation(AccessControl, AccessControlEnumerable)]\npub mod my_access_control {\n    ...\n')),(0,o.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, Storage)]\npub struct Contract {\n    #[storage_field]\n    enumerable: enumerable::Data,\n}\n")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::implementation(AccessControl, AccessControlEnumerable)]\n#[openbrush::contract]\npub mod my_access_control {\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        enumerable: enumerable::Data,\n    }\n\n    // You can manually set the number for the role.\n    // But better to use a hash of the variable name.\n    // It will generate a unique identifier of this role.\n    // And will reduce the chance to have overlapping roles.\n    const MINTER: RoleType = ink::selector_id!("MINTER");\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let mut instance = Self::default();\n\n            let caller = Self::env().caller();\n            access_control::Internal::_init_with_admin(&mut instance, Some(caller));\n            // We grant minter role to caller in constructor, so he can mint/burn tokens\n            AccessControl::grant_role(&mut instance, MINTER, Some(caller)).expect("Should grant MINTER role");\n            assert_eq!(AccessControlEnumerable::get_role_member_count(&instance, MINTER), 1);\n\n            instance\n        }\n    }\n}\n')),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlEnumerable")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/blob/main/contracts/src/access/access_control/extensions/enumerable.rs"},"AccessControl Enumerable"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/v4.0.0-beta/smart-contracts/access-control/"},"AccessControl"),"."))}p.isMDXComponent=!0}}]);