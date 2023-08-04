"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[98574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6,title:"Pausable"},s=void 0,i={unversionedId:"smart-contracts/pausable",id:"version-3.2.0/smart-contracts/pausable",title:"Pausable",description:"This example shows how you can reuse the implementation of",source:"@site/versioned_docs/version-3.2.0/smart-contracts/pausable.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/pausable",permalink:"/openbrush-contracts/smart-contracts/pausable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.2.0/smart-contracts/pausable.md",tags:[],version:"3.2.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Pausable"},sidebar:"tutorialSidebar",previous:{title:"Diamond Loupe",permalink:"/openbrush-contracts/smart-contracts/diamond/Extensions/loupe"},next:{title:"Payment Splitter",permalink:"/openbrush-contracts/smart-contracts/payment-splitter"}},p={},l=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Customize your contract",id:"step-3-customize-your-contract",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/security/pausable"},"pausable")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Flipper")," contract to ",(0,a.kt)("inlineCode",{parentName:"p"},"flip")," only if the contract is not paused."),(0,a.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"/openbrush-contracts/smart-contracts/overview/#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"pausable")," feature, embed modules data structures and implement them via ",(0,a.kt)("inlineCode",{parentName:"p"},"#[openbrush::implementation]")," macro\nas described in ",(0,a.kt)("a",{parentName:"p",href:"/openbrush-contracts/smart-contracts/overview/#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,a.kt)("p",null,"The main trait is ",(0,a.kt)("inlineCode",{parentName:"p"},"Pausable"),"."),(0,a.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,a.kt)("p",null,"Define constructor with default value(paused variable is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in that case)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n   #[ink(constructor)]\n   pub fn new() -> Self {\n      Self::default()\n   }\n}\n")),(0,a.kt)("h2",{id:"step-3-customize-your-contract"},"Step 3: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding flipper logic. We will implement ",(0,a.kt)("inlineCode",{parentName:"p"},"flip")," method marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"when_not_paused")," modifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::implementation(Pausable)]\n#[openbrush::contract]\npub mod my_pausable {\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        pause: pausable::Data,\n        flipped: bool,\n    }\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n\n        #[ink(message)]\n        #[openbrush::modifiers(when_not_paused)]\n        pub fn flip(&mut self) -> Result<(), PausableError> {\n            self.flipped = !self.flipped;\n            Ok(())\n        }\n        \n        #[ink(message)]\n        pub fn pause(&mut self) -> Result<(), PausableError> {\n            Internal::_pause(self)\n        }\n\n        #[ink(message)]\n        pub fn unpause(&mut self) -> Result<(), PausableError> {\n            Internal::_unpause(self)\n        }\n\n        #[ink(message)]\n        pub fn change_state(&mut self) -> Result<(), PausableError> {\n            Internal::_switch_pause(self)\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/examples/pausable"},"Pausable"),"."))}m.isMDXComponent=!0}}]);