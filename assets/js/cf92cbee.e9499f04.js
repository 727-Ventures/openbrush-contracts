"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[3566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),b=o,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,title:"AccessControl Enumerable"},s=void 0,c={unversionedId:"smart-contracts/access-control/Extensions/enumerable",id:"version-3.0.0-beta/smart-contracts/access-control/Extensions/enumerable",title:"AccessControl Enumerable",description:"This example shows how you can reuse the implementation of AccessControl with AccessControlEnumerable extension, which enables an easier overview of access control roles.",source:"@site/versioned_docs/version-3.0.0-beta/smart-contracts/access-control/Extensions/enumerable.md",sourceDirName:"smart-contracts/access-control/Extensions",slug:"/smart-contracts/access-control/Extensions/enumerable",permalink:"/openbrush-contracts/smart-contracts/access-control/Extensions/enumerable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta/smart-contracts/access-control/Extensions/enumerable.md",tags:[],version:"3.0.0-beta",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AccessControl Enumerable"},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/openbrush-contracts/smart-contracts/access-control/"},next:{title:"Ownable",permalink:"/openbrush-contracts/smart-contracts/ownable"}},l={},i=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Final code",id:"final-code",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/contracts/src/access/access_control/access_control.rs"},"AccessControl")," with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/contracts/src/access/access_control/extensions/enumerable.rs"},"AccessControlEnumerable")," extension, which enables an easier overview of access control roles."),(0,o.kt)("p",null,"First, you should implement basic version of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/access-control"},"AccessControl"),"."),(0,o.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,o.kt)("p",null,"Import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::access_control::extensions::enumerable"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_access_control {\n    use openbrush::contracts::access_control::extensions::enumerable::*;\n...\n')),(0,o.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,o.kt)("p",null,"Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"enumerable::Members")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"access_control::Data")," to be able to use ",(0,o.kt)("inlineCode",{parentName:"p"},"AcessControlEnumerable")," extension in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, Storage)]\n#[ink(storage)]\npub struct Contract {\n    #[storage_field]\n    access: access_control::Data<enumerable::Members>,\n}\n")),(0,o.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,o.kt)("p",null,"Inherit implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlEnumerable")," trait. You can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\nimpl AccessControl for Contract {}\n\nimpl AccessControlEnumerable for Contract {}\n")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_access_control {\n    use openbrush::{\n        contracts::access_control::extensions::enumerable::*,\n        traits::Storage,\n    };\n\n    #[derive(Default, Storage)]\n    #[ink(storage)]\n    pub struct Contract {\n        #[storage_field]\n        access: access_control::Data<enumerable::Members>,\n    }\n\n    impl AccessControl for Contract {}\n    impl AccessControlEnumerable for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n    }\n}\n')),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlEnumerable")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/blob/main/contracts/src/access/access_control/extensions/enumerable.rs"},"AccessControl Enumerable"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/access-control"},"AccessControl"),"."))}u.isMDXComponent=!0}}]);