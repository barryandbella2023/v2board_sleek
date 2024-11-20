import{s as V,g as z,B as E}from"./InviteBanner-d1662d6b.js";import{k as b,l as N,o as a,c,f as t,F as k,r as C,n as w,t as n,_ as I,m as M,J as f,K as q,d as o,e,P as T,S as B,h as $,j as y,E as L,L as F,g as S}from"./index-1223ee3d.js";import{_ as j}from"./EmptyState-69e3cdd7.js";import{_ as P}from"./BaseModal-86c9f799.js";import{r as U,t as W}from"./orderApi-62bbc7c9.js";const A={class:"mt-4"},H={class:"w-full overflow-x-auto px-2 py-2"},G={class:"grid grid-cols-3 gap-4"},J=["onClick"],K={class:"text-sm text-center"},Y={__name:"PaymentMethodSelect",props:{selectedMethod:String,methods:{type:Array,required:!0}},emits:["update:selectedMethod"],setup(_,{emit:l}){const r=_,u=l,d=b(r.selectedMethod);return N(d,v=>{u("update:selectedMethod",String(v))}),(v,p)=>(a(),c("div",A,[t("div",H,[t("div",G,[(a(!0),c(k,null,C(_.methods,s=>(a(),c("div",{key:s,onClick:h=>d.value=s,class:w(["bg-[var(--theme-com-item)] cursor-pointer px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center",d.value===s?"ring-2 ring-green-500 text-green-500":"text-[var(--theme-text)] hover:opacity-80"])},[(a(),c("svg",{class:w(["w-6 h-6 mb-2",d.value===s?"text-green-500":"text-[var(--theme-text)]"]),fill:"currentColor",viewBox:"0 0 493.407 493.407"},p[0]||(p[0]=[t("g",null,[t("path",{d:"M488.474,270.899c-12.647-37.192-47.527-62.182-86.791-62.182c-5.892,0-11.728,0.749-17.499,1.879l-34.324-100.94 c-1.71-5.014-6.417-8.392-11.721-8.392H315.02c-6.836,0-12.382,5.547-12.382,12.382c0,6.836,5.545,12.381,12.382,12.381h14.252 l12.462,36.645H206.069v-21.998l21.732-2.821c3.353-0.434,6.135-3.079,6.585-6.585c0.54-4.183-2.402-8.013-6.585-8.553l-68.929-8.94 c-1.362-0.168-2.853-0.185-4.281,0c-9.116,1.186-15.55,9.537-14.373,18.653c1.185,9.118,9.537,15.55,18.653,14.364l22.434-2.909 v26.004l-41.255,52.798c-14.059-8.771-30.592-13.93-48.349-13.93C41.135,208.757,0,249.885,0,300.443 c0,50.565,41.135,91.7,91.701,91.7c44.882,0,82.261-32.437,90.113-75.095h33.605v12.647h-5.909c-4.563,0-8.254,3.693-8.254,8.254 c0,4.563,3.691,8.254,8.254,8.254h36.58c4.563,0,8.254-3.691,8.254-8.254c0-4.561-3.691-8.254-8.254-8.254h-5.908v-12.647h5.545 c3.814,0,7.409-1.756,9.755-4.756l95.546-122.267l9.776,28.729c-17.854,8.892-32.444,22.965-41.409,41.168 c-10.825,21.973-12.438,46.842-4.553,70.034c12.662,37.201,47.55,62.189,86.815,62.189c10.021,0,19.951-1.645,29.519-4.9 c23.191-7.885,41.926-24.329,52.744-46.302C494.746,318.966,496.367,294.09,488.474,270.899z"})],-1)]),2)),t("div",K,n(s),1)],10,J))),128))])])]))}};const O={class:"flex items-center gap-2 mb-4"},Q={class:"flex items-center"},R={class:"text-[var(--theme-text)]"},X=["placeholder"],Z=["placeholder"],tt={class:"mt-8 flex gap-4"},et={__name:"MoneyModal",props:{operationType:{type:Number,required:!0,validator:_=>[1,2].includes(_)},onClose:{type:Function,required:!0}},setup(_){var i;const l=M(),r=_,u=b(""),d=b(""),v=b(((i=l.systemConfig)==null?void 0:i.withdraw_methods)||[]);d.value=v.value[0];const p=async()=>{var x;if(!u.value){y(e("common.error.input"),e("common.error.account"),400);return}try{await U(u.value,d.value),y(e("invite.withdrawal.success"),e("invite.withdrawal.successPrompt"),200),r.onClose()}catch(m){throw y(e("common.error.withdrawal"),((x=m.data)==null?void 0:x.message)||e("common.error.unknown"),400),m}},s=async()=>{var x;if(!u.value||u.value<=0){y(e("common.error.input"),e("common.error.amount"),400);return}try{await W(u.value),y(e("invite.transfer.success"),null,200),r.onClose()}catch(m){throw y(e("common.error.transfer"),((x=m.data)==null?void 0:x.message)||e("common.error.unknown"),400),m}},h=r.operationType===1;return(x,m)=>(a(),f(P,{title:h?o(e)("invite.withdrawal.title"):o(e)("invite.transfer.title"),"gradient-id":"money-gradient","on-close":r.onClose,width:"sm:w-[400px]"},{default:q(()=>[t("div",O,[m[4]||(m[4]=t("div",{class:"icon"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#115DFC",class:"w-8 h-8"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)),t("div",Q,[t("span",R,n(h?o(e)("invite.withdrawal.prompt"):o(e)("invite.transfer.prompt")),1)])]),h?T((a(),c("input",{key:0,"onUpdate:modelValue":m[0]||(m[0]=g=>u.value=g),type:"text",placeholder:o(e)("invite.withdrawal.input"),class:"w-full p-4 rounded-lg text-[var(--theme-text)] bg-[var(--theme-com-item)] outline-none"},null,8,X)),[[B,u.value]]):T((a(),c("input",{key:1,"onUpdate:modelValue":m[1]||(m[1]=g=>u.value=g),type:"number",min:"0",step:"0.01",placeholder:o(e)("invite.transfer.input"),class:"w-full p-4 rounded-lg text-[var(--theme-text)] bg-[var(--theme-com-item)] outline-none"},null,8,Z)),[[B,u.value,void 0,{number:!0}]]),h?(a(),f(Y,{key:2,selectedMethod:d.value,"onUpdate:selectedMethod":m[2]||(m[2]=g=>d.value=g),methods:v.value,class:"mt-4"},null,8,["selectedMethod","methods"])):$("",!0),t("div",tt,[t("button",{onClick:m[3]||(m[3]=g=>h?p():s()),class:"flex-1 cursor-pointer bg-green-500 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 transition-opacity"},n(o(e)("common.submit")),1)])]),_:1},8,["title","on-close"]))}},ot=I(et,[["__scopeId","data-v-606cbc41"]]),D=_=>{const r=L(ot,{operationType:_,onClose:()=>{F(null,document.getElementById("modal"))}});F(r,document.getElementById("modal"))};const st={class:"invite-container"},nt={class:"inline-block min-w-full rounded-lg shadow"},at={class:"bg-[var(--theme-com)] p-4 rounded-t-lg flex justify-end gap-4"},rt={class:"min-w-full leading-normal text-[var(--theme-title)]"},it={class:"bg-[var(--theme-com)] sticky top-0 z-10"},ct={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},lt={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},dt={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},pt={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},mt={class:"bg-[var(--theme-com-item)] relative"},ut={class:"px-5 py-5 text-sm"},ht={class:"whitespace-nowrap"},vt={class:"px-5 py-5 text-sm"},_t={class:"whitespace-nowrap"},xt={class:"px-5 py-5 text-sm"},gt={class:"whitespace-nowrap"},yt={class:"px-5 py-5 text-sm"},bt={class:"relative inline-block px-3 py-1 font-semibold leading-tight text-green-600 bg-green-200 rounded-lg"},wt={class:"relative"},ft={key:1},$t={colspan:"4",class:"h-[100px]"},kt={__name:"InviteTable",setup(_){const l=M(),r=p=>{const s=new Date(p*1e3),h=s.getFullYear(),i=(s.getMonth()+1).toString().padStart(2,"0"),x=s.getDate().toString().padStart(2,"0"),m=s.getHours().toString().padStart(2,"0"),g=s.getMinutes().toString().padStart(2,"0");return`${h}/${i}/${x} — ${m}:${g}`},u=p=>(p/100).toFixed(2),d=()=>D(1),v=()=>D(2);return(p,s)=>{var h;return a(),c("div",st,[t("div",nt,[t("div",at,[t("button",{type:"button",class:"px-4 py-2 text-[var(--theme-title)] rounded-xl bg-[var(--theme-com-item)] hover:text-[var(--theme-button-imp)] transition-colors",onClick:d},n(o(e)("invite.withdrawal.title")),1),t("button",{type:"button",class:"px-4 py-2 text-[var(--theme-title)] rounded-xl bg-[var(--theme-com-item)] hover:text-[var(--theme-button-imp)] transition-colors",onClick:v},n(o(e)("invite.transfer.title")),1)]),t("table",rt,[t("thead",it,[t("tr",null,[t("th",ct,n(o(e)("invite.table.headers.time")),1),t("th",lt,n(o(e)("invite.table.headers.commission")),1),t("th",dt,n(o(e)("invite.table.headers.amount")),1),t("th",pt,n(o(e)("invite.table.headers.status")),1)])]),t("tbody",mt,[(h=o(l).inviteInfo)!=null&&h.data&&o(l).inviteInfo.data.length>0?(a(!0),c(k,{key:0},C(o(l).inviteInfo.data,i=>(a(),c("tr",{key:i.created_at},[t("td",ut,[t("p",ht,n(r(i.created_at)),1)]),t("td",vt,[t("p",_t,n(u(i.get_amount)),1)]),t("td",xt,[t("p",gt,n(u(i.order_amount)),1)]),t("td",yt,[t("span",bt,[t("span",wt,n(o(e)("invite.table.status.completed")),1)])])]))),128)):(a(),c("tr",ft,[t("td",$t,[S(o(j),{title:o(e)("invite.table.empty")},null,8,["title"])])]))])])])])}}},Ct=I(kt,[["__scopeId","data-v-018d4148"]]);const Mt={class:"invite-code-container"},It={class:"inline-block min-w-full rounded-lg shadow"},St={class:"bg-[var(--theme-com)] p-4 rounded-t-lg flex justify-end gap-4"},Tt={class:"min-w-full leading-normal text-[var(--theme-title)]"},Bt={class:"bg-[var(--theme-com)] sticky top-0 z-10"},Ft={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},Dt={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},jt={scope:"col",class:"px-5 py-3 text-sm font-normal text-left uppercase whitespace-nowrap"},Vt={class:"bg-[var(--theme-com-item)] relative"},zt={class:"px-5 py-5 text-sm"},Et={class:"whitespace-nowrap"},Nt={class:"px-5 py-5 text-sm"},qt={class:"relative"},Lt={class:"px-5 py-5 text-sm"},Pt=["disabled","onClick"],Ut={key:1},Wt={colspan:"4",class:"h-[100px]"},At={__name:"InviteCodeTable",setup(_){const l=M(),r=b(null),u=p=>p===0?e("invite.code.status.unused"):e("invite.code.status.used"),d=()=>{V()},v=async(p,s)=>{if(r.value===s)return;const h=`${window.location.host}/#/?code=${p}`;try{r.value=s,await z(h)?y(e("common.copySuccess"),e("invite.banner.copySuccess"),200):y(e("common.copyFailed"),e("common.error.networkError"),400)}finally{setTimeout(()=>{r.value=null},1e3)}};return(p,s)=>{var h;return a(),c("div",Mt,[t("div",It,[t("div",St,[t("button",{type:"button",class:"px-4 py-2 text-[var(--theme-title)] rounded-xl bg-[var(--theme-com-item)] hover:text-[var(--theme-button-imp)] transition-colors",onClick:d},n(o(e)("invite.code.generate.button")),1)]),t("table",Tt,[t("thead",Bt,[t("tr",null,[t("th",Ft,n(o(e)("invite.code.headers.code")),1),t("th",Dt,n(o(e)("invite.code.headers.status")),1),t("th",jt,n(o(e)("order.actions")),1)])]),t("tbody",Vt,[(h=o(l).inviteInfo)!=null&&h.codes&&o(l).inviteInfo.codes.length>0?(a(!0),c(k,{key:0},C(o(l).inviteInfo.codes,i=>(a(),c("tr",{key:i.id},[t("td",zt,[t("p",Et,n(i.code),1)]),t("td",Nt,[t("span",{class:w(["relative inline-block px-3 py-1 font-semibold leading-tight rounded-lg",i.status===0?"text-green-600 bg-green-200":"text-gray-600 bg-gray-200"])},[t("span",qt,n(u(i.status)),1)],2)]),t("td",Lt,[i.status===0?(a(),c("button",{key:0,disabled:r.value===i.id,onClick:x=>v(i.code,i.id),class:"whitespace-nowrap cursor-pointer bg-[var(--theme-button-imp)] text-[var(--theme-button-color)] px-3 py-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"},n(o(e)("common.copyLink")),9,Pt)):$("",!0)])]))),128)):(a(),c("tr",Ut,[t("td",Wt,[S(o(j),{title:o(e)("invite.code.empty")},null,8,["title"])])]))])])])])}}},Ht=I(At,[["__scopeId","data-v-6e70b948"]]),Gt={class:""},Jt={class:"sm:grid-cols-2 gap-5 grid text-[var(--theme-title)]"},Kt={class:"grid-cols-2 grid gap-5 mx-3"},Yt={key:0,class:"ml-2 text-lg font-bold text-left"},Ot={class:"mt-10"},Qt={class:"bg-[var(--theme-com-item)] shadow-sm shadow-[var(--theme-shadow-bg)] p-2 rounded-xl inline-flex"},Rt={class:"mt-5"},se={__name:"InvitePage",setup(_){const l=M(),r=b("orders");return(u,d)=>{var v;return a(),c("div",Gt,[t("div",Jt,[t("div",Kt,[(a(!0),c(k,null,C([o(e)("invite.stats.registeredUsers"),o(e)("invite.stats.totalCommission"),o(e)("invite.stats.pendingCommission"),o(e)("invite.stats.remainingCommission")],(p,s)=>(a(),c("div",{key:s,class:"bg-[var(--theme-com)] p-2 text-sm sm:text-md flex items-center justify-center rounded-2xl"},[t("p",null,n(p)+":",1),o(l).inviteInfo!==void 0?(a(),c("p",Yt,n(s===0?o(l).inviteInfo.stat[s]:s===3?(o(l).inviteInfo.stat[s+1]/100).toFixed(2):(o(l).inviteInfo.stat[s]/100).toFixed(2)),1)):$("",!0)]))),128))]),S(E)]),t("div",Ot,[t("div",Qt,[t("button",{class:w(["p-2 mr-1 text-[var(--theme-title)] rounded-xl",[r.value==="orders"?"bg-[var(--theme-button-imp)] text-[var(--theme-button-color)]":"border-b-2 border-transparent hover:text-[var(--theme-button-imp)] hover:border-[var(--theme-button-imp)] transition-colors"]]),onClick:d[0]||(d[0]=p=>r.value="orders")},n(o(e)("invite.orderCount"))+" "+n(((v=o(l).inviteDetails)==null?void 0:v.total)||0),3),t("button",{class:w(["p-2 mr-1 text-[var(--theme-title)] rounded-xl",[r.value==="codes"?"bg-[var(--theme-button-imp)] text-[var(--theme-button-color)]":"border-b-2 border-transparent hover:text-[var(--theme-button-imp)] hover:border-[var(--theme-button-imp)] transition-colors"]]),onClick:d[1]||(d[1]=p=>r.value="codes")},n(o(e)("invite.code.title")),3)]),t("div",Rt,[r.value==="orders"?(a(),f(Ct,{key:0})):r.value==="codes"?(a(),f(Ht,{key:1})):$("",!0)])])])}}};export{se as default};
