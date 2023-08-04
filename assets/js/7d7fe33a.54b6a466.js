"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[37742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1,title:"PSP22 Token Timelock"},a=void 0,c={unversionedId:"smart-contracts/PSP22/Utils/token-timelock",id:"version-1.1.0/smart-contracts/PSP22/Utils/token-timelock",title:"PSP22 Token Timelock",description:"This example shows how you can reuse the implementation of PSP22 Token Timelock utility for PSP22. This contract will lock user's PSP22 tokens until the time specified, when they can withdraw them.",source:"@site/versioned_docs/version-1.1.0/smart-contracts/PSP22/Utils/token-timelock.md",sourceDirName:"smart-contracts/PSP22/Utils",slug:"/smart-contracts/PSP22/Utils/token-timelock",permalink:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Utils/token-timelock",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.1.0/smart-contracts/PSP22/Utils/token-timelock.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22 Token Timelock"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Capped",permalink:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/capped"},next:{title:"PSP721",permalink:"/openbrush-contracts/1.1.0/smart-contracts/PSP721/"}},s={},l=[{value:"Step 1: Include dependencies and add imports",id:"step-1-include-dependencies-and-add-imports",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22/src/utils/token_timelock.rs"},"PSP22 Token Timelock")," utility for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22"),". This contract will lock user's ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," tokens until the time specified, when they can withdraw them."),(0,o.kt)("h2",{id:"step-1-include-dependencies-and-add-imports"},"Step 1: Include dependencies and add imports"),(0,o.kt)("p",null,"Include dependencies to ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"brush")," in the cargo file. Then we need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract")," macro by ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contract")," and import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22::traits")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22::utils::token_timelock"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_psp22_token_timelock {\n    use psp22::{\n        traits::*,\n        utils::token_timelock::*,\n    };\n")),(0,o.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,o.kt)("p",null,"Declare storage struct and declare the field related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelockStorage")," trait. Then you need to derive the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelockStorage")," trait and mark the corresponding field with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[PSP22TokenTimelockStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of and ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PSP22TokenTimelockStorage)]\npub struct MyPSP22TokenTimelock {\n    #[PSP22TokenTimelockStorageField]\n    timelock: PSP22TokenTimelockData\n}\n")),(0,o.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,o.kt)("p",null,"Inherit the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock")," trait. You can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22TokenTimelock for MyPSP22TokenTimelock {}\n")),(0,o.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyPSP22TokenTimelock {\n    #[ink(constructor)]\n    pub fn new(token_address: AccountId, beneficiary: AccountId, release_time: Timestamp) -> Self {\n        let mut instance = Self::default();\n        instance.init(token_address, beneficiary, release_time);\n        instance\n    }\n}\n")),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/"},"PSP22"),"."))}u.isMDXComponent=!0}}]);