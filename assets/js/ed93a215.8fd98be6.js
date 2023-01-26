"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[14774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1,title:"Overview"},s=void 0,l={unversionedId:"smart-contracts/example/overview",id:"smart-contracts/example/overview",title:"Overview",description:"This example will show you how you can reuse OpenBrush smart contracts and macros in your",source:"@site/docs/smart-contracts/example/overview.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/overview",permalink:"/openbrush-contracts/next/smart-contracts/example/overview",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/docs/smart-contracts/example/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"PSP37 Burnable",permalink:"/openbrush-contracts/next/smart-contracts/PSP37/Extensions/burnable"},next:{title:"Setup the project",permalink:"/openbrush-contracts/next/smart-contracts/example/setup_project"}},i={},c=[{value:"Lending of assets accepted by the smart contract",id:"lending-of-assets-accepted-by-the-smart-contract",level:2},{value:"Borrowing of assets by depositing accepted assets as collateral",id:"borrowing-of-assets-by-depositing-accepted-assets-as-collateral",level:2},{value:"Repaying the loan",id:"repaying-the-loan",level:2},{value:"Withdraw deposited assets",id:"withdraw-deposited-assets",level:2},{value:"Liquidate a loan",id:"liquidate-a-loan",level:2},{value:"Allow an asset for lending or being used as a collateral",id:"allow-an-asset-for-lending-or-being-used-as-a-collateral",level:2},{value:"Pause the contract",id:"pause-the-contract",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example will show you how you can reuse OpenBrush smart contracts and macros in your\nproject to ease the development process. We will also pay attention to the project\nstructure to keep the maintenance and future development of the project simple."),(0,r.kt)("p",null,"We will be implementing a simple lending protocol, in which users can lend\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," tokens, borrow them against a collateral token,\nrepay their loans with interest, and of course withdraw the deposited assets.\nWe will create a ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," implementation which will be used\nfor a stable coin and a collateral token, another ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"\ntoken which will represent the shares of assets in the contract,\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34"},"PSP34")," token which will represent the loans and the\nlending contract itself. The simple ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," token\nimplementation will be created just for this example and to test the contract's functions.\nThe contract will have the following features:"),(0,r.kt)("h2",{id:"lending-of-assets-accepted-by-the-smart-contract"},"Lending of assets accepted by the smart contract"),(0,r.kt)("p",null,"Users can lend ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," tokens, which are accepted by the\ncontract. The allowance of lending specific tokens is decided in the smart contract\nby the accounts which have the Manager role. Upon lending the user gets a\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," token representing their share of the asset pool."),(0,r.kt)("h2",{id:"borrowing-of-assets-by-depositing-accepted-assets-as-collateral"},"Borrowing of assets by depositing accepted assets as collateral"),(0,r.kt)("p",null,"Users can borrow ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," tokens, which are available in\nthe contract. To borrow an asset, the user has to deposit an accepted\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22")," token as collateral. The allowance of specific\ntokens being used as collateral is decided in the smart contract by the accounts\nwhich have the Manager role. The value of the borrowed assets can be equal at most\nto 70% of the value of the deposited collateral. If the value of the deposited\ncollateral drops to or below 75% of the original value, the loan can be liquidated.\nUpon borrowing the assets user gets a ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34"},"PSP34")," token\nrepresenting info about their loan (how much assets were borrowed, when did they\nborrow, what asset was borrowed, what asset was used as collateral, amount of\ncollateral asset deposited, the liquidation price of the loan and if it was liquidated\nor not). This NFT token can be then used to repay the loan and get the collateral back."),(0,r.kt)("h2",{id:"repaying-the-loan"},"Repaying the loan"),(0,r.kt)("p",null,"Users can repay their loan by depositing the borrowed amount of the borrowed assets\nwith the interest which is calculated by the contract. Our contract has an interest\nrate of 10% per year. Users can repay the whole loan or a portion of the loan. The\nuser will use their NFT to repay the loan. If the loan was liquidated in the meantime,\nthey do not get their collateral back and the NFT is burned."),(0,r.kt)("h2",{id:"withdraw-deposited-assets"},"Withdraw deposited assets"),(0,r.kt)("p",null,"Users will deposit their share tokens to the smart contract and get back the deposited\nassets along with the interest generated if any."),(0,r.kt)("h2",{id:"liquidate-a-loan"},"Liquidate a loan"),(0,r.kt)("p",null,"Users can liquidate a loan which's collateral value is below or equal to 75% of the\noriginal value of the collateral. After the loan is liquidated, the liquidator\ngets 1% of the liquidated assets. "),(0,r.kt)("h2",{id:"allow-an-asset-for-lending-or-being-used-as-a-collateral"},"Allow an asset for lending or being used as a collateral"),(0,r.kt)("p",null,"Users with the Manager role can allow an asset to be available for lending and\nborrowing or for being used as collateral."),(0,r.kt)("h2",{id:"pause-the-contract"},"Pause the contract"),(0,r.kt)("p",null,"Users with the Manager role can pause the contract. When the contract is paused,\nusers can not deposit new assets for lending or borrowing assets. Users can still\nrepay their loans, liquidate loans or withdraw their deposits when paused."))}h.isMDXComponent=!0}}]);