"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[81239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3,title:"Proxy"},i=void 0,c={unversionedId:"smart-contracts/proxy",id:"version-3.1.0/smart-contracts/proxy",title:"Proxy",description:"This example shows how you can use the implementation of proxy to to implement proxy pattern for upgradeable contracts.",source:"@site/versioned_docs/version-3.1.0/smart-contracts/proxy.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/proxy",permalink:"/openbrush-contracts/3.1.0/smart-contracts/proxy",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.1.0/smart-contracts/proxy.md",tags:[],version:"3.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Proxy"},sidebar:"tutorialSidebar",previous:{title:"Ownable",permalink:"/openbrush-contracts/3.1.0/smart-contracts/ownable"},next:{title:"Diamond Standard",permalink:"/openbrush-contracts/3.1.0/smart-contracts/diamond/"}},s={},l=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Define forward function",id:"step-3-define-forward-function",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can use the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/upgradeability/proxy"},"proxy")," to to implement proxy pattern for upgradeable contracts."),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"Delegate calls ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1331#discussion_r953736863"},"were marked")," as a possible attack vector in ink! Therefore the ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy")," pattern will not work within OpenBrush until this is reimplemented in ink! 4."),(0,o.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ownable")," modules, enable the corresponding features, and embed data structures\nas described in ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,o.kt)("p",null,"The main traits are ",(0,o.kt)("inlineCode",{parentName:"p"},"Ownable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy"),"."),(0,o.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,o.kt)("p",null,"Define the constructor where you initialize the owner with the contract initiator\nand passing code hash of the logic layer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new(forward_to: Hash) -> Self {\n        let mut instance = Self::default();\n\n        let caller = Self::env().caller();\n        instance._init_with_forward_to(forward_to);\n        instance._init_with_owner(caller);\n        \n        instance\n    }\n}\n")),(0,o.kt)("h2",{id:"step-3-define-forward-function"},"Step 3: Define forward function"),(0,o.kt)("p",null,"Define the forward function to make delegate calls of upgradeable contract through proxy contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod proxy {\n    use openbrush::contracts::ownable::*;\n    use openbrush::contracts::proxy::*;\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        proxy: proxy::Data,\n        #[storage_field]\n        ownable: ownable::Data,\n    }\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(forward_to: Hash) -> Self {\n            let mut instance = Self::default();\n            \n            let caller = Self::env().caller();\n            instance._init_with_forward_to(forward_to);\n            instance._init_with_owner(caller);\n            \n            instance\n        }\n        #[ink(message, payable, selector = _)]\n        pub fn forward(&self) {\n            self._fallback()\n        }\n    }\n\n    impl Ownable for Contract {}\n\n    impl Proxy for Contract {}\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/proxy"},"Proxy"),"."))}m.isMDXComponent=!0}}]);