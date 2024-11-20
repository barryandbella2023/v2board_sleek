import{_ as f,k as _,l as L,o,c as n,f as e,n as x,t as v,d as r,e as i,m as b,J as $,K as P,w as z,P as y,S as k,g as w,j as h,E as B,L as C,i as T}from"./index-1223ee3d.js";import{_ as D}from"./BaseModal-86c9f799.js";import{h as I,b as M}from"./commonApi-cf33a198.js";import{_ as F}from"./EmptyState-69e3cdd7.js";import{t as j}from"./TicketList-278013ce.js";const V={class:"mt-4"},N={class:"w-full overflow-x-auto px-2 py-2"},Q={class:"grid grid-cols-3 gap-4"},S={class:"text-sm text-center"},H={class:"text-sm text-center"},E={class:"text-sm text-center"},A={__name:"PriorityRank",props:{priority:{type:Number,required:!0,validator:a=>[0,1,2].includes(a)}},emits:["update:priority"],setup(a,{emit:c}){const d=a,t=c,s=_(d.priority);return L(s,m=>{t("update:priority",Number(m))}),(m,l)=>(o(),n("div",V,[e("div",N,[e("div",Q,[e("div",{onClick:l[0]||(l[0]=u=>s.value=0),class:x(["bg-[var(--theme-com-item)] cursor-pointer px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center",s.value===0?"ring-2 ring-green-500 text-green-500":"text-[var(--theme-text)] hover:opacity-80"])},[(o(),n("svg",{class:x(["w-6 h-6 mb-2",s.value===0?"text-green-500":"text-[var(--theme-text)]"]),fill:"currentColor",viewBox:"0 0 493.407 493.407"},l[3]||(l[3]=[e("path",{d:"M488.474,270.899c-12.647-37.192-47.527-62.182-86.791-62.182c-5.892,0-11.728,0.749-17.499,1.879l-34.324-100.94 c-1.71-5.014-6.417-8.392-11.721-8.392H315.02c-6.836,0-12.382,5.547-12.382,12.382c0,6.836,5.545,12.381,12.382,12.381h14.252 l12.462,36.645H206.069v-21.998l21.732-2.821c3.353-0.434,6.135-3.079,6.585-6.585c0.54-4.183-2.402-8.013-6.585-8.553l-68.929-8.94 c-1.362-0.168-2.853-0.185-4.281,0c-9.116,1.186-15.55,9.537-14.373,18.653c1.185,9.118,9.537,15.55,18.653,14.364l22.434-2.909 v26.004l-41.255,52.798c-14.059-8.771-30.592-13.93-48.349-13.93C41.135,208.757,0,249.885,0,300.443 c0,50.565,41.135,91.7,91.701,91.7c44.882,0,82.261-32.437,90.113-75.095h33.605v12.647h-5.909c-4.563,0-8.254,3.693-8.254,8.254 c0,4.563,3.691,8.254,8.254,8.254h36.58c4.563,0,8.254-3.691,8.254-8.254c0-4.561-3.691-8.254-8.254-8.254h-5.908v-12.647h5.545 c3.814,0,7.409-1.756,9.755-4.756l95.546-122.267l9.776,28.729c-17.854,8.892-32.444,22.965-41.409,41.168 c-10.825,21.973-12.438,46.842-4.553,70.034c12.662,37.201,47.55,62.189,86.815,62.189c10.021,0,19.951-1.645,29.519-4.9 c23.191-7.885,41.926-24.329,52.744-46.302C494.746,318.966,496.367,294.09,488.474,270.899z"},null,-1)]),2)),e("div",S,v(r(i)("ticket.priority.low")),1)],2),e("div",{onClick:l[1]||(l[1]=u=>s.value=1),class:x(["bg-[var(--theme-com-item)] cursor-pointer px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center",s.value===1?"ring-2 ring-green-500 text-green-500":"text-[var(--theme-text)] hover:opacity-80"])},[(o(),n("svg",{class:x(["w-6 h-6 mb-2",s.value===1?"text-green-500":"text-[var(--theme-text)]"]),fill:"currentColor",viewBox:"0 0 467.168 467.168"},l[4]||(l[4]=[e("path",{d:"M76.849,210.531C34.406,210.531,0,244.937,0,287.388c0,42.438,34.406,76.847,76.849,76.847 c30.989,0,57.635-18.387,69.789-44.819l18.258,14.078c0,0,134.168,0.958,141.538-3.206c0,0-16.65-45.469,4.484-64.688 c2.225-2.024,5.021-4.332,8.096-6.777c-3.543,8.829-5.534,18.45-5.534,28.558c0,42.446,34.403,76.846,76.846,76.846 c42.443,0,76.843-34.415,76.843-76.846c0-42.451-34.408-76.849-76.843-76.849c-0.697,0-1.362,0.088-2.056,0.102 c5.551-3.603,9.093-5.865,9.093-5.865l-5.763-5.127c0,0,16.651-3.837,12.816-12.167c-3.848-8.33-44.19-58.28-44.19-58.28 s7.146-15.373-7.634-26.261l-7.098,15.371c0,0-18.093-12.489-25.295-10.084c-7.205,2.398-18.005,3.603-21.379,8.884l-3.358,3.124 c0,0-0.95,5.528,4.561,13.693c0,0,55.482,17.05,58.119,29.537c0,0,3.848,7.933-12.728,9.844l-3.354,4.328l-8.896,0.479 l-16.082-36.748c0,0-15.381,4.082-23.299,10.323l1.201,6.24c0,0-64.599-43.943-125.362,21.137c0,0-44.909,12.966-76.37-26.897 c0,0-0.479-12.968-76.367-10.565l5.286,5.524c0,0-5.286,0.479-7.444,3.841c-2.158,3.358,1.2,6.961,18.494,6.961 c0,0,39.153,44.668,69.17,42.032l42.743,20.656l18.975,32.42c0,0,0.034,2.785,0.23,7.045c-4.404,0.938-9.341,1.979-14.579,3.09 C139.605,232.602,110.832,210.531,76.849,210.531z"},null,-1)]),2)),e("div",H,v(r(i)("ticket.priority.medium")),1)],2),e("div",{onClick:l[2]||(l[2]=u=>s.value=2),class:x(["bg-[var(--theme-com-item)] cursor-pointer px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center",s.value===2?"ring-2 ring-green-500 text-green-500":"text-[var(--theme-text)] hover:opacity-80"])},[(o(),n("svg",{class:x(["w-6 h-6 mb-2",s.value===2?"text-green-500":"text-[var(--theme-text)]"]),fill:"currentColor",viewBox:"0 0 324.018 324.017"},l[5]||(l[5]=[e("path",{d:"M317.833,197.111c3.346-11.148,2.455-20.541-2.65-27.945c-9.715-14.064-31.308-15.864-35.43-16.076l-8.077-4.352 l-0.528-0.217c-8.969-2.561-42.745-3.591-47.805-3.733c-7.979-3.936-14.607-7.62-20.475-10.879 c-20.536-11.413-34.107-18.958-72.959-18.958c-47.049,0-85.447,20.395-90.597,23.25c-2.812,0.212-5.297,0.404-7.646,0.59 l-6.455-8.733l7.34,0.774c2.91,0.306,4.267-1.243,3.031-3.459c-1.24-2.216-4.603-4.262-7.519-4.57l-23.951-2.524 c-2.91-0.305-4.267,1.243-3.026,3.459c1.24,2.216,4.603,4.262,7.519,4.57l3.679,0.386l8.166,11.05 c-13.823,1.315-13.823,2.139-13.823,4.371c0,18.331-2.343,22.556-2.832,23.369L0,164.443v19.019l2.248,2.89 c-0.088,2.775,0.823,5.323,2.674,7.431c5.981,6.804,19.713,7.001,21.256,7.001c4.634,0,14.211-2.366,20.78-4.153 c-0.456-0.781-0.927-1.553-1.3-2.392c-0.36-0.809-0.603-1.668-0.885-2.517c-0.811-2.485-1.362-5.096-1.362-7.845 c0-14.074,11.449-25.516,25.515-25.516s25.52,11.446,25.52,25.521c0,6.068-2.221,11.578-5.773,15.964 c-0.753,0.927-1.527,1.828-2.397,2.641c-1.022,0.958-2.089,1.859-3.254,2.641c29.332,0.109,112.164,0.514,168.708,1.771 c-0.828-0.823-1.533-1.771-2.237-2.703c-0.652-0.854-1.222-1.75-1.761-2.688c-2.164-3.744-3.5-8.025-3.5-12.655 c0-14.069,11.454-25.513,25.518-25.513c14.064,0,25.518,11.449,25.518,25.513c0,5.126-1.553,9.875-4.152,13.878 c-0.605,0.922-1.326,1.755-2.04,2.594c-0.782,0.922-1.616,1.781-2.527,2.584c5.209,0.155,9.699,0.232,13.546,0.232 c19.563,0,23.385-1.688,23.861-5.018C324.114,202.108,324.472,199.602,317.833,197.111z"},null,-1)]),2)),e("div",E,v(r(i)("ticket.priority.high")),1)],2)])])]))}},R=f(A,[["__scopeId","data-v-51f821b6"]]);const U={class:"flex items-center gap-2"},q={class:"flex items-center"},J={class:"text-[var(--theme-text)]"},K=["placeholder"],G=["placeholder"],O={class:"mt-4 flex gap-4"},W={type:"submit",class:"flex-1 cursor-pointer bg-green-500 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 transition-opacity"},X={__name:"TicketModal",props:{onClose:{type:Function,required:!0}},setup(a){const c=b(),d=a,t=_(0),s=_(""),m=_(""),l=async()=>{if(!s.value||!m.value){h(i("common.submitFailed"),i("ticket.emptyFields"),400);return}try{await I(s.value,t.value,m.value),h(i("common.submitSuccess"),i("ticket.submitPrompt"),200);const u=await M();c.setTickets(u.data.data),d.onClose()}catch(u){h(i("common.submitFailed"),u.message||i("ticket.checkComplete"),400)}};return(u,p)=>(o(),$(D,{title:r(i)("ticket.modal.header"),"gradient-id":"ticket-gradient","on-close":d.onClose,width:"sm:w-[400px]"},{default:P(()=>[e("form",{class:"flex flex-col gap-4",onSubmit:z(l,["prevent"])},[e("div",U,[p[3]||(p[3]=e("div",{class:"icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 34 34",height:"34",width:"34"},[e("path",{"stroke-linejoin":"round","stroke-width":"2.5",stroke:"#115DFC",d:"M7.08385 9.91666L5.3572 11.0677C4.11945 11.8929 3.50056 12.3055 3.16517 12.9347C2.82977 13.564 2.83226 14.3035 2.83722 15.7825C2.84322 17.5631 2.85976 19.3774 2.90559 21.2133C3.01431 25.569 3.06868 27.7468 4.67008 29.3482C6.27148 30.9498 8.47873 31.0049 12.8932 31.1152C15.6396 31.1838 18.3616 31.1838 21.1078 31.1152C25.5224 31.0049 27.7296 30.9498 29.331 29.3482C30.9324 27.7468 30.9868 25.569 31.0954 21.2133C31.1413 19.3774 31.1578 17.5631 31.1639 15.7825C31.1688 14.3035 31.1712 13.564 30.8359 12.9347C30.5004 12.3055 29.8816 11.8929 28.6437 11.0677L26.9171 9.91666"}),e("path",{"stroke-linejoin":"round","stroke-width":"2.5",stroke:"#115DFC",d:"M2.83331 14.1667L12.6268 20.0427C14.7574 21.3211 15.8227 21.9603 17 21.9603C18.1772 21.9603 19.2426 21.3211 21.3732 20.0427L31.1666 14.1667"}),e("path",{"stroke-width":"2.5",stroke:"#115DFC",d:"M7.08331 17V8.50001C7.08331 5.82872 7.08331 4.49307 7.91318 3.66321C8.74304 2.83334 10.0787 2.83334 12.75 2.83334H21.25C23.9212 2.83334 25.2569 2.83334 26.0868 3.66321C26.9166 4.49307 26.9166 5.82872 26.9166 8.50001V17"}),e("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2.5",stroke:"#115DFC",d:"M14.1667 14.1667H19.8334M14.1667 8.5H19.8334"})])],-1)),e("div",q,[e("span",J,v(r(i)("ticket.modal.description")),1)])]),y(e("input",{"onUpdate:modelValue":p[0]||(p[0]=g=>s.value=g),placeholder:r(i)("ticket.modal.title"),class:"w-full p-4 rounded-lg text-[var(--theme-text)] bg-[var(--theme-com-item)] outline-none"},null,8,K),[[k,s.value]]),y(e("textarea",{"onUpdate:modelValue":p[1]||(p[1]=g=>m.value=g),placeholder:r(i)("ticket.modal.content"),class:"w-full p-4 rounded-lg text-[var(--theme-text)] bg-[var(--theme-com-item)] outline-none min-h-[100px]"},null,8,G),[[k,m.value]]),w(R,{priority:t.value,"onUpdate:priority":p[2]||(p[2]=g=>t.value=g)},null,8,["priority"]),e("div",O,[e("button",W,v(r(i)("common.submit")),1)])],32)]),_:1},8,["title","on-close"]))}},Y=f(X,[["__scopeId","data-v-6b614317"]]),Z=()=>{const c=B(Y,{onClose:()=>{C(null,document.getElementById("modal"))}});C(c,document.getElementById("modal"))};const e1={class:"star-1"},t1={"xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},i1={class:"star-2"},s1={"xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},o1={class:"star-3"},l1={"xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},r1={class:"star-4"},n1={"xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},c1={class:"star-5"},a1={"xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},d1={class:"star-6"},p1={"xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},m1={__name:"TicketCreate",setup(a){const c=()=>{Z()};return(d,t)=>(o(),n("button",{type:"button",onClick:c},[T(v(r(i)("ticket.create.button"))+" ",1),e("div",e1,[(o(),n("svg",t1,t[0]||(t[0]=[e("g",{id:"Layer_x0020_1"},[e("metadata",{id:"CorelCorpID_0Corel-Layer"}),e("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",class:"fil0"})],-1)])))]),e("div",i1,[(o(),n("svg",s1,t[1]||(t[1]=[e("defs",null,null,-1),e("g",{id:"Layer_x0020_1"},[e("metadata",{id:"CorelCorpID_0Corel-Layer"}),e("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",class:"fil0"})],-1)])))]),e("div",o1,[(o(),n("svg",l1,t[2]||(t[2]=[e("defs",null,null,-1),e("g",{id:"Layer_x0020_1"},[e("metadata",{id:"CorelCorpID_0Corel-Layer"}),e("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",class:"fil0"})],-1)])))]),e("div",r1,[(o(),n("svg",n1,t[3]||(t[3]=[e("defs",null,null,-1),e("g",{id:"Layer_x0020_1"},[e("metadata",{id:"CorelCorpID_0Corel-Layer"}),e("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",class:"fil0"})],-1)])))]),e("div",c1,[(o(),n("svg",a1,t[4]||(t[4]=[e("defs",null,null,-1),e("g",{id:"Layer_x0020_1"},[e("metadata",{id:"CorelCorpID_0Corel-Layer"}),e("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",class:"fil0"})],-1)])))]),e("div",d1,[(o(),n("svg",p1,t[5]||(t[5]=[e("defs",null,null,-1),e("g",{id:"Layer_x0020_1"},[e("metadata",{id:"CorelCorpID_0Corel-Layer"}),e("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",class:"fil0"})],-1)])))])]))}},u1=f(m1,[["__scopeId","data-v-9d5d80c8"]]),v1={class:"flex flex-col"},x1={class:"mt-2 text-neutral-400"},g1={class:"mt-10 overflow-scroll w-full mx-auto"},_1={key:1,class:"w-full h-full"},C1={__name:"TicketPage",setup(a){const c=b();return M().then(d=>{c.setTickets(d.data.data)}),(d,t)=>(o(),n("div",v1,[e("div",null,[w(u1)]),e("p",x1,v(r(i)("ticket.create.description")),1),e("div",g1,[r(c).tickets!==void 0&&r(c).tickets.length>0?(o(),$(j,{key:0})):(o(),n("div",_1,[w(r(F),{title:r(i)("ticket.empty")},null,8,["title"])]))])]))}};export{C1 as default};
