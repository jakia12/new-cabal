(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{2601:function(e,t,s){"use strict";var r,l;e.exports=(null==(r=s.g.process)?void 0:r.env)&&"object"==typeof(null==(l=s.g.process)?void 0:l.env)?s.g.process:s(8960)},5442:function(e,t,s){Promise.resolve().then(s.bind(s,9371))},9371:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var r=s(7437),l=s(1917);let a=()=>(0,r.jsx)("div",{className:"loader",children:(0,r.jsxs)("div",{className:"loader-inner",children:[(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"}),(0,r.jsx)("div",{className:"loader-block"})]})});var n=s(7900);let c=e=>(0,r.jsx)("div",{className:"".concat(e.className," ").concat(3===e.variation?"backdrop-blur-[50px]":"backdrop-blur-[17.5px]"," "),style:{borderRadius:"18px",borderTop:2===e.variation?"1.8px solid #FF9E3F77":"1.8px solid #FFB77088",background:["rgba(160, 94, 56, 0.25)","rgba(41, 26, 18, 0.50)","rgba(41, 26, 18, 0.50)"][(e.variation||1)-1],boxShadow:"0px 31px 40px -17px #000"},children:e.children});var i=s(2601);let o=e=>fetch("".concat(i.env.NEXT_PUBLIC_SBF_API,"/").concat(e),{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json());var x=s(2265);function u(){let[e,t]=(0,x.useState)({accumulatedEth:0,hashPower:0,minedBtc:0}),s=async()=>{let e=await o("sbf");t(e)};return(0,x.useEffect)(()=>{s()},[]),(0,r.jsxs)("div",{className:"flex flex-col min-h-screen w-full items-center justify-between bg-factory bg-cover bg-center bg-no-repeat",children:[(0,r.jsx)("div",{className:"absolute left-0 top-0 w-screen h-screen z-0",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.80) -6.43%, rgba(31, 0, 0, 0.00) 10.31%), linear-gradient(180deg, rgba(0, 0, 0, 0.80) -3.11%, rgba(31, 0, 0, 0.00) 14.08%)"}}),(0,r.jsxs)("div",{className:"max-w-[1128px] sm:max-w-[1128px] flex flex-col w-full min-h-[calc(100vh-58px)] items-between  z-10 px-8 sm:px-16",children:[(0,r.jsx)(n.Menu,{}),(0,r.jsxs)("div",{className:"w-full h-full flex flex-col items-center justify-center gap-16 grow my-8",children:[(0,r.jsxs)(c,{className:"p-8 py-12 relative text-c3 w-full max-w-xl flex justify-center",variation:2,children:[(0,r.jsx)(l.Z,{name:"mining-power",className:"w-[72px] h-[72px] absolute left-[calc(50%-36px)] -top-[40px] "}),(0,r.jsxs)("div",{className:"flex flex-col gap-8 items-center",children:[(0,r.jsx)("div",{className:"text-center text-[17px] text-c1 uppercase",children:"Accumulated ETH"}),(0,r.jsx)("div",{className:"font-medium text-[21px]",children:e.accumulatedEth?e.accumulatedEth:(0,r.jsx)(a,{})})]})]}),(0,r.jsxs)(c,{className:"p-8 py-12 relative text-c3 w-full max-w-xl flex justify-center",variation:2,children:[(0,r.jsx)(l.Z,{name:"mined-btc",className:"w-[72px] h-[72px] absolute left-[calc(50%-36px)] -top-[40px] "}),(0,r.jsxs)("div",{className:"flex flex-col gap-8 items-center",children:[(0,r.jsx)("div",{className:"text-center text-[17px] text-c1 uppercase",children:"Hash Power"}),(0,r.jsx)("div",{className:"font-medium text-[21px]",children:e.hashPower?"".concat(e.hashPower," TH/s"):(0,r.jsx)(a,{})})]})]}),(0,r.jsxs)(c,{className:"p-8 py-12 relative text-c3 w-full max-w-xl flex justify-center",variation:2,children:[(0,r.jsx)(l.Z,{name:"inscriptions",className:"w-[72px] h-[72px] absolute left-[calc(50%-36px)] -top-[40px] "}),(0,r.jsxs)("div",{className:"flex flex-col gap-8 items-center",children:[(0,r.jsx)("div",{className:"text-center text-[17px] text-c1 uppercase",children:"Mined BTC"}),(0,r.jsx)("div",{className:"font-medium text-[21px]",children:e.minedBtc?"".concat(e.minedBtc," BTC"):(0,r.jsx)(a,{})})]})]})]})]})]})}},1917:function(e,t,s){"use strict";var r=s(7437),l=s(9482);t.Z=e=>{let{className:t,size:s,name:a,width:n,height:c}=e;return(0,r.jsx)(l.default,{src:"/images/".concat(a,".svg"),width:n||s||16,height:c||s||16,className:t})}},7900:function(e,t,s){"use strict";s.r(t),s.d(t,{Menu:function(){return f}});var r=s(7437),l=s(1396),a=s.n(l),n=s(6691),c=s.n(n),i=s(1917),o=s(2265),x=s(4033);let u=()=>(0,r.jsx)("div",{className:"bg-c4 w-1 h-1 rounded-full"}),d=e=>{let t=(0,x.usePathname)();return(0,r.jsx)(a(),{className:"text-[22px] sm:text-[16px] md:text-[18px] font-medium tracking-[-0.18px] uppercase ".concat(e.disabled?"text-c2/30":t===e.href?"text-c1 hover:text-c3":"text-c2 hover:text-c3","  transition-colors duration-500 cursor-pointer"),href:e.disabled?t:e.href,children:e.label})},f=()=>{let[e,t]=(0,o.useState)(!1),[s,l]=(0,o.useState)(!1);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex sm:hidden w-full justify-between items-center my-[30px] overflow-hidden",children:[(0,r.jsx)(a(),{className:"cursor-pointer hover:scale-110 transition-all duration-300",href:"/",children:(0,r.jsx)(i.Z,{name:"logo",size:64})}),e?null:(0,r.jsx)("div",{onClick:()=>{t(!0),setTimeout(()=>{l(!0)},10)},children:(0,r.jsx)(i.Z,{name:"menu",size:32,className:"fill-c1 hover:fill-c3"})})]}),e?(0,r.jsxs)("div",{className:"flex flex-col bg-black/80 backdrop-blur-xl p-4 py-12 h-screen items-center gap-4 w-full absolute left-0 top-0  transition-all duration-500 ".concat(s?"z-50 opacity-100":"z-0 opacity-0"),children:[(0,r.jsx)("div",{onClick:()=>{l(!1),setTimeout(()=>{t(!1)},300)},className:"absolute right-8 cursor-pointer",children:(0,r.jsx)(i.Z,{name:"close",size:32,className:"fill-c1 hover:fill-c3"})}),(0,r.jsx)(d,{label:"Home",href:"/"}),(0,r.jsx)(d,{label:"Factory",href:"/factory"}),(0,r.jsx)(d,{label:"Lore",href:"/lore"}),(0,r.jsx)(d,{label:"Forge",href:"/forge",disabled:!0}),(0,r.jsx)(d,{label:"Oven",href:"/oven",disabled:!0})]}):null,(0,r.jsxs)("div",{className:"hidden sm:flex w-full justify-between items-center my-[30px]",children:[(0,r.jsx)(d,{label:"Factory",href:"/factory"}),(0,r.jsx)(u,{}),(0,r.jsx)(d,{label:"Lore",href:"/lore"}),(0,r.jsx)(u,{}),(0,r.jsx)(a(),{className:"cursor-pointer hover:scale-110 transition-all duration-300 w-[64px] h-[64px]",href:"/",children:(0,r.jsx)(c(),{src:"/images/logo.svg",priority:!0,width:64,height:64,className:"w-[64px] h-[64px]",alt:"Home"})}),(0,r.jsx)(u,{}),(0,r.jsx)(d,{label:"Forge",href:"/forge",disabled:!0}),(0,r.jsx)(u,{}),(0,r.jsx)(d,{label:"Oven",href:"/oven",disabled:!0})]})]})}},8960:function(e){!function(){var t={229:function(e){var t,s,r,l=e.exports={};function a(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{s="function"==typeof clearTimeout?clearTimeout:n}catch(e){s=n}}();var i=[],o=!1,x=-1;function u(){o&&r&&(o=!1,r.length?i=r.concat(i):x=-1,i.length&&d())}function d(){if(!o){var e=c(u);o=!0;for(var t=i.length;t;){for(r=i,i=[];++x<t;)r&&r[x].run();x=-1,t=i.length}r=null,o=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===n||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}l.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];i.push(new f(e,t)),1!==i.length||o||c(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=m,l.addListener=m,l.once=m,l.off=m,l.removeListener=m,l.removeAllListeners=m,l.emit=m,l.prependListener=m,l.prependOnceListener=m,l.listeners=function(e){return[]},l.binding=function(e){throw Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw Error("process.chdir is not supported")},l.umask=function(){return 0}}},s={};function r(e){var l=s[e];if(void 0!==l)return l.exports;var a=s[e]={exports:{}},n=!0;try{t[e](a,a.exports,r),n=!1}finally{n&&delete s[e]}return a.exports}r.ab="//";var l=r(229);e.exports=l}()}},function(e){e.O(0,[651,971,472,744],function(){return e(e.s=5442)}),_N_E=e.O()}]);