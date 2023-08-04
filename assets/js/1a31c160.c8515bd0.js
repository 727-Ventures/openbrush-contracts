"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[94904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,title:"PSP37 Mintable"},s=void 0,i={unversionedId:"smart-contracts/PSP37/Extensions/mintable",id:"version-3.2.0/smart-contracts/PSP37/Extensions/mintable",title:"PSP37 Mintable",description:"This example shows how you can reuse the implementation of PSP37 token with PSP37Mintable extension.",source:"@site/versioned_docs/version-3.2.0/smart-contracts/PSP37/Extensions/mintable.md",sourceDirName:"smart-contracts/PSP37/Extensions",slug:"/smart-contracts/PSP37/Extensions/mintable",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/mintable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.2.0/smart-contracts/PSP37/Extensions/mintable.md",tags:[],version:"3.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP37 Mintable"},sidebar:"tutorialSidebar",previous:{title:"PSP37 Batch",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/batch"},next:{title:"PSP37 Burnable",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/burnable"}},c={},p=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2},{value:"Final code",id:"final-code",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/token/psp37"},"PSP37")," token with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/token/psp37/extensions/mintable.rs"},"PSP37Mintable")," extension."),(0,o.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,o.kt)("p",null,"First, you should implement basic version of ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/smart-contracts/PSP37/"},"PSP37"),"."),(0,o.kt)("p",null,"For your smart contract to use this extension, you only need to implement the\n",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Mintable")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"#[openbrush::implementation(PSP37Mintable)]")," attribute."),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::implementation(PSP37, PSP37Mintable)]\n#[openbrush::contract]\npub mod my_psp37 {\n    use openbrush::traits::Storage;\n\n    #[derive(Default, Storage)]\n    #[ink(storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp37: psp37::Data,\n    }\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n    }\n}\n')),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Mintable")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp37_extensions/mintable"},"PSP37 Mintable"),"."))}m.isMDXComponent=!0}}]);