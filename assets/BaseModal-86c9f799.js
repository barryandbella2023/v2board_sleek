import{p as c,A as u,H as m,o as r,c as a,f as e,n as p,t as w,a8 as f}from"./index-1223ee3d.js";const h={class:"fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-[9999]"},v={class:"w-screen h-screen flex fixed top-0 justify-center items-center"},x={class:"flex items-center justify-between border-b border-[var(--theme-com-item)] p-4"},y={class:"flex-1 text-center"},g={class:"text-xl font-semibold text-[var(--theme-title)]"},_={class:"px-6 py-4"},b={viewBox:"0 0 1024 1024",class:"absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]","aria-hidden":"true"},k=["fill"],C=["id"],B={__name:"BaseModal",props:{title:{type:String,required:!0},gradientId:{type:String,required:!0},onClose:{type:Function,required:!0},width:{type:String,default:"sm:w-[500px]"}},setup(t){const i=t,d=c(()=>`url(#${i.gradientId})`),s=()=>{i.onClose()},l=n=>{n.key==="Escape"&&s()};return u(()=>{window.addEventListener("keydown",l),document.body.style.overflow="hidden"}),m(()=>{window.removeEventListener("keydown",l),document.body.style.overflow=""}),(n,o)=>(r(),a("div",h,[e("div",v,[e("div",{class:p(["animate__animated animate__zoomIn relative shadow-xl w-[90vw] bg-[var(--theme-model-bg)] rounded-xl z-[10000]",t.width]),style:{"animation-duration":"0.3s","box-shadow":"0px 0px 20px 8px #414141"}},[e("div",x,[e("div",y,[e("div",g,w(t.title),1)]),e("button",{onClick:s,class:"text-[var(--theme-text)] hover:opacity-80 transition-opacity p-2"},o[0]||(o[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),e("div",_,[f(n.$slots,"default")]),(r(),a("svg",b,[e("circle",{cx:"512",cy:"512",r:"512",fill:d.value,"fill-opacity":"0.7"},null,8,k),e("defs",null,[e("radialGradient",{id:t.gradientId},o[1]||(o[1]=[e("stop",{"stop-color":"#7775D6"},null,-1),e("stop",{offset:"1","stop-color":"#E935C1"},null,-1)]),8,C)])]))],2),e("div",{class:"absolute -z-10 w-full h-full",onClick:s})])]))}};export{B as _};
