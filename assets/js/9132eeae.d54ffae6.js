"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[68917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>P});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),b=o,P=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return n?r.createElement(P,s(s({ref:t},u),{},{components:n})):r.createElement(P,s({ref:t},u))}));function P(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},24453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3,title:"PSP37 Burnable"},s=void 0,i={unversionedId:"smart-contracts/PSP37/Extensions/burnable",id:"version-3.1.0/smart-contracts/PSP37/Extensions/burnable",title:"PSP37 Burnable",description:"This example shows how you can reuse the implementation of PSP37 token with PSP37Burnable extension.",source:"@site/versioned_docs/version-3.1.0/smart-contracts/PSP37/Extensions/burnable.md",sourceDirName:"smart-contracts/PSP37/Extensions",slug:"/smart-contracts/PSP37/Extensions/burnable",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/burnable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.1.0/smart-contracts/PSP37/Extensions/burnable.md",tags:[],version:"3.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"PSP37 Burnable"},sidebar:"tutorialSidebar",previous:{title:"PSP37 Mintable",permalink:"/openbrush-contracts/smart-contracts/PSP37/Extensions/mintable"},next:{title:"Overview",permalink:"/openbrush-contracts/smart-contracts/example/overview"}},c={},p=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2}],u={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37"},"PSP37")," token with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37/extensions/burnable.rs"},"PSP37Burnable")," extension."),(0,o.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,o.kt)("p",null,"First, you should implement basic version of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37"},"PSP37"),"."),(0,o.kt)("p",null,"For your smart contract to use this extension, you only need to implement the\n",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Burnable")," trait in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37")," smart contract. Add import for\n",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp37::extensions::burnable::*"),", inherit the implementation for\n",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Burnable")," trait, where you can also customize (override) the original functions\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Burnable"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::psp37::extensions::burnable::*;\n\nimpl PSP37Burnable for Contract {}\n")),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37Burnable")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp37_extensions/burnable"},"PSP37 Burnable"),".\nthe documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37"},"PSP37"),"."))}m.isMDXComponent=!0}}]);