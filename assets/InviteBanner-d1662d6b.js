import{a0 as Et,I as A,C as _,k as g,p,a1 as St,E as L,F as et,D as k,G as M,A as O,H as R,l as ee,a2 as Tt,a3 as $t,a4 as Lt,a5 as xt,a6 as Ft,n as Ot,o as oe,c as we,f as T,m as tt,J as Pt,K as Q,g as J,d as $,i as Ct,t as U,e as S,z as At,j as ie,a7 as _t,_ as kt}from"./index-1223ee3d.js";const Dt=""+new URL("../img/klipartz.com.png",import.meta.url).href,Nt=async e=>{try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999);let n=!1;return navigator.clipboard&&window.isSecureContext?(await navigator.clipboard.writeText(e),n=!0):n=document.execCommand("copy"),document.body.removeChild(t),n}catch(t){throw t}};function Be(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function se(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Be(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=se();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}var ze;let Mt=Symbol("headlessui.useid"),Rt=0;const Te=(ze=Et)!=null?ze:function(){return A(Mt,()=>`${++Rt}`)()};function E(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function j(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}var jt=Object.defineProperty,Ht=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t,n)=>(Ht(e,typeof t!="symbol"?t+"":t,n),n);let Bt=class{constructor(){Ke(this,"current",this.detect()),Ke(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ue=new Bt;function te(e){if(ue.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let _e=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var W=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(W||{}),nt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(nt||{}),It=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(It||{});function Ut(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(_e)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var rt=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(rt||{});function Wt(e,t=0){var n;return e===((n=te(e))==null?void 0:n.body)?!1:j(t,{0(){return e.matches(_e)},1(){let r=e;for(;r!==null;){if(r.matches(_e))return!0;r=r.parentElement}return!1}})}var Vt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Vt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function K(e){e==null||e.focus({preventScroll:!0})}let qt=["textarea","input"].join(",");function Gt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,qt))!=null?n:!1}function Yt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let i=l.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function be(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?n?Yt(e):e:Ut(e);l.length>0&&o.length>1&&(o=o.filter(f=>!l.includes(f))),r=r??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},m=0,c=o.length,v;do{if(m>=c||m+c<=0)return 0;let f=u+m;if(t&16)f=(f+c)%c;else{if(f<0)return 3;if(f>=c)return 1}v=o[f],v==null||v.focus(d),m+=s}while(v!==i.activeElement);return t&6&&Gt(v)&&v.select(),2}function lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function zt(){return/Android/gi.test(window.navigator.userAgent)}function Kt(){return lt()||zt()}function he(e,t,n){ue.isServer||_(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function at(e,t,n){ue.isServer||_(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function Xt(e,t,n=p(()=>!0)){function r(a,i){if(!n.value||a.defaultPrevented)return;let o=i(a);if(o===null||!o.getRootNode().contains(o))return;let s=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let u of s){if(u===null)continue;let d=u instanceof HTMLElement?u:E(u);if(d!=null&&d.contains(o)||a.composed&&a.composedPath().includes(d))return}return!Wt(o,rt.Loose)&&o.tabIndex!==-1&&a.preventDefault(),t(a,o)}let l=g(null);he("pointerdown",a=>{var i,o;n.value&&(l.value=((o=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:o[0])||a.target)},!0),he("mousedown",a=>{var i,o;n.value&&(l.value=((o=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:o[0])||a.target)},!0),he("click",a=>{Kt()||l.value&&(r(a,()=>l.value),l.value=null)},!0),he("touchend",a=>r(a,()=>a.target instanceof HTMLElement?a.target:null),!0),at("blur",a=>r(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Ee=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Ee||{}),V=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(V||{});function H({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var a;let i=it(r,n),o=Object.assign(l,{props:i});if(e||t&2&&i.static)return Pe(o);if(t&1){let s=(a=i.unmount)==null||a?0:1;return j(s,{0(){return null},1(){return Pe({...l,props:{...i,hidden:!0,style:{display:"none"}}})}})}return Pe(o)}function Pe({props:e,attrs:t,slots:n,slot:r,name:l}){var a,i;let{as:o,...s}=st(e,["unmount","static"]),u=(a=n.default)==null?void 0:a.call(n,r),d={};if(r){let m=!1,c=[];for(let[v,f]of Object.entries(r))typeof f=="boolean"&&(m=!0),f===!0&&c.push(v);m&&(d["data-headlessui-state"]=c.join(" "))}if(o==="template"){if(u=ot(u??[]),Object.keys(s).length>0||Object.keys(t).length>0){let[m,...c]=u??[];if(!Zt(m)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map(h=>h.trim()).filter((h,w,D)=>D.indexOf(h)===w).sort((h,w)=>h.localeCompare(w)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let v=it((i=m.props)!=null?i:{},s,d),f=St(m,v,!0);for(let h in v)h.startsWith("on")&&(f.props||(f.props={}),f.props[h]=v[h]);return f}return Array.isArray(u)&&u.length===1?u[0]:u}return L(o,Object.assign({},s,d),{default:()=>u})}function ot(e){return e.flatMap(t=>t.type===et?ot(t.children):[t])}function it(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...a){let i=n[r];for(let o of i){if(l instanceof Event&&l.defaultPrevented)return;o(l,...a)}}});return t}function st(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Zt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var Se=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Se||{});let ke=k({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:l,...a}=e,i={"aria-hidden":(l&2)===2?!0:(r=a["aria-hidden"])!=null?r:void 0,hidden:(l&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return H({ourProps:i,theirProps:a,slot:{},attrs:n,slots:t,name:"Hidden"})}}}),ut=Symbol("Context");var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function Qt(){return Ie()!==null}function Ie(){return A(ut,null)}function Jt(e){M(ut,e)}var dt=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(dt||{});function en(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let Y=[];en(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&Y[0]!==t.target&&(Y.unshift(t.target),Y=Y.filter(n=>n!=null&&n.isConnected),Y.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ct(e,t,n,r){ue.isServer||_(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}var ae=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ae||{});function tn(){let e=g(0);return at("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function ft(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=E(n);r instanceof HTMLElement&&t.add(r)}return t}var vt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(vt||{});let re=Object.assign(k({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=g(null);r({el:l,$el:l});let a=p(()=>te(l)),i=g(!1);O(()=>i.value=!0),R(()=>i.value=!1),rn({ownerDocument:a},p(()=>i.value&&!!(e.features&16)));let o=ln({ownerDocument:a,container:l,initialFocus:p(()=>e.initialFocus)},p(()=>i.value&&!!(e.features&2)));an({ownerDocument:a,container:l,containers:e.containers,previousActiveElement:o},p(()=>i.value&&!!(e.features&8)));let s=tn();function u(v){let f=E(l);f&&(h=>h())(()=>{j(s.value,{[ae.Forwards]:()=>{be(f,W.First,{skipElements:[v.relatedTarget]})},[ae.Backwards]:()=>{be(f,W.Last,{skipElements:[v.relatedTarget]})}})})}let d=g(!1);function m(v){v.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(v){if(!i.value)return;let f=ft(e.containers);E(l)instanceof HTMLElement&&f.add(E(l));let h=v.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(pt(f,h)||(d.value?be(E(l),j(s.value,{[ae.Forwards]:()=>W.Next,[ae.Backwards]:()=>W.Previous})|W.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&K(v.target)))}return()=>{let v={},f={ref:l,onKeydown:m,onFocusout:c},{features:h,initialFocus:w,containers:D,...x}=e;return L(et,[!!(h&4)&&L(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Se.Focusable}),H({ourProps:f,theirProps:{...t,...x},slot:v,attrs:t,slots:n,name:"FocusTrap"}),!!(h&4)&&L(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Se.Focusable})])}}}),{features:vt});function nn(e){let t=g(Y.slice());return ee([e],([n],[r])=>{r===!0&&n===!1?Be(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=Y.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function rn({ownerDocument:e},t){let n=nn(t);O(()=>{_(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&K(n())},{flush:"post"})}),R(()=>{t.value&&K(n())})}function ln({ownerDocument:e,container:t,initialFocus:n},r){let l=g(null),a=g(!1);return O(()=>a.value=!0),R(()=>a.value=!1),O(()=>{ee([t,n,r],(i,o)=>{if(i.every((u,d)=>(o==null?void 0:o[d])===u)||!r.value)return;let s=E(t);s&&Be(()=>{var u,d;if(!a.value)return;let m=E(n),c=(u=e.value)==null?void 0:u.activeElement;if(m){if(m===c){l.value=c;return}}else if(s.contains(c)){l.value=c;return}m?K(m):be(s,W.First|W.NoScroll)===nt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function an({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var a;ct((a=e.value)==null?void 0:a.defaultView,"focus",i=>{if(!l.value)return;let o=ft(n);E(t)instanceof HTMLElement&&o.add(E(t));let s=r.value;if(!s)return;let u=i.target;u&&u instanceof HTMLElement?pt(o,u)?(r.value=u,K(u)):(i.preventDefault(),i.stopPropagation(),K(s)):K(r.value)},!0)}function pt(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function on(e){let t=Tt(e.getSnapshot());return R(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function sn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let i=t[l].call(n,...a);i&&(n=i,r.forEach(o=>o()))}}}function un(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function dn(){return lt()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(a=>a()).some(a=>a.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let o=se();o.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>o.dispose()))}let a=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",o=>{if(o.target instanceof HTMLElement)try{let s=o.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),d=e.querySelector(u);d&&!r(d)&&(i=d)}catch{}},!0),t.addEventListener(e,"touchstart",o=>{if(o.target instanceof HTMLElement)if(r(o.target)){let s=o.target;for(;s.parentElement&&r(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(o.target,"touchAction","none")}),t.addEventListener(e,"touchmove",o=>{if(o.target instanceof HTMLElement){if(o.target.tagName==="INPUT")return;if(r(o.target)){let s=o.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&o.preventDefault()}else o.preventDefault()}},{passive:!1}),t.add(()=>{var o;let s=(o=window.scrollY)!=null?o:window.pageYOffset;a!==s&&window.scrollTo(0,a),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function cn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function fn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let z=sn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:se(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:fn(n)},l=[dn(),un(),cn()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});z.subscribe(()=>{let e=z.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&z.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&z.dispatch("TEARDOWN",n)}});function vn(e,t,n){let r=on(z),l=p(()=>{let a=e.value?r.value.get(e.value):void 0;return a?a.count>0:!1});return ee([e,t],([a,i],[o],s)=>{if(!a||!i)return;z.dispatch("PUSH",a,n);let u=!1;s(()=>{u||(z.dispatch("POP",o??a,n),u=!0)})},{immediate:!0}),l}let Ce=new Map,le=new Map;function Xe(e,t=g(!0)){_(n=>{var r;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var i;if(!l)return;let o=(i=le.get(l))!=null?i:1;if(o===1?le.delete(l):le.set(l,o-1),o!==1)return;let s=Ce.get(l);s&&(s["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",s["aria-hidden"]),l.inert=s.inert,Ce.delete(l))});let a=(r=le.get(l))!=null?r:0;le.set(l,a+1),a===0&&(Ce.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}function pn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let r=g(null),l=te(r);function a(){var i,o,s;let u=[];for(let d of e)d!==null&&(d instanceof HTMLElement?u.push(d):"value"in d&&d.value instanceof HTMLElement&&u.push(d.value));if(t!=null&&t.value)for(let d of t.value)u.push(d);for(let d of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(r))||d.contains((s=(o=E(r))==null?void 0:o.getRootNode())==null?void 0:s.host)||u.some(m=>d.contains(m))||u.push(d));return u}return{resolveContainers:a,contains(i){return a().some(o=>o.contains(i))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:L(ke,{features:Se.Hidden,ref:r})}}}let mt=Symbol("ForcePortalRootContext");function mn(){return A(mt,!1)}let Ze=k({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return M(mt,e.force),()=>{let{force:r,...l}=e;return H({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),ht=Symbol("StackContext");var De=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(De||{});function hn(){return A(ht,()=>{})}function gn({type:e,enabled:t,element:n,onUpdate:r}){let l=hn();function a(...i){r==null||r(...i),l(...i)}O(()=>{ee(t,(i,o)=>{i?a(0,e,n):o===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),R(()=>{t.value&&a(1,e,n)}),M(ht,a)}let yn=Symbol("DescriptionContext");function wn({slot:e=g({}),name:t="Description",props:n={}}={}){let r=g([]);function l(a){return r.value.push(a),()=>{let i=r.value.indexOf(a);i!==-1&&r.value.splice(i,1)}}return M(yn,{register:l,slot:e,name:t,props:n}),p(()=>r.value.length>0?r.value.join(" "):void 0)}function bn(e){let t=te(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}const Ne=new WeakMap;function En(e){var t;return(t=Ne.get(e))!=null?t:0}function Qe(e,t){let n=t(En(e));return n<=0?Ne.delete(e):Ne.set(e,n),n}let Sn=k({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=g(null),l=p(()=>te(r)),a=mn(),i=A(gt,null),o=g(a===!0||i==null?bn(r.value):i.resolveTarget());o.value&&Qe(o.value,c=>c+1);let s=g(!1);O(()=>{s.value=!0}),_(()=>{a||i!=null&&(o.value=i.resolveTarget())});let u=A(Me,null),d=!1,m=xt();return ee(r,()=>{if(d||!u)return;let c=E(r);c&&(R(u.register(c),m),d=!0)}),R(()=>{var c,v;let f=(c=l.value)==null?void 0:c.getElementById("headlessui-portal-root");!f||o.value!==f||Qe(o.value,h=>h-1)||o.value.children.length>0||(v=o.value.parentElement)==null||v.removeChild(o.value)}),()=>{if(!s.value||o.value===null)return null;let c={ref:r,"data-headlessui-portal":""};return L($t,{to:o.value},H({ourProps:c,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Me=Symbol("PortalParentContext");function Tn(){let e=A(Me,null),t=g([]);function n(a){return t.value.push(a),e&&e.register(a),()=>r(a)}function r(a){let i=t.value.indexOf(a);i!==-1&&t.value.splice(i,1),e&&e.unregister(a)}let l={register:n,unregister:r,portals:t};return[t,k({name:"PortalWrapper",setup(a,{slots:i}){return M(Me,l),()=>{var o;return(o=i.default)==null?void 0:o.call(i)}}})]}let gt=Symbol("PortalGroupContext"),$n=k({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=Lt({resolveTarget(){return e.target}});return M(gt,r),()=>{let{target:l,...a}=e;return H({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var Ln=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ln||{});let Re=Symbol("DialogContext");function Ue(e){let t=A(Re,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ue),n}return t}let ge="DC8F892D-2EBD-447C-A4C8-A03058436FF4",xn=k({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ge},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var a,i;let o=(a=e.id)!=null?a:`headlessui-dialog-${Te()}`,s=g(!1);O(()=>{s.value=!0});let u=!1,d=p(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(u||(u=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),m=g(0),c=Ie(),v=p(()=>e.open===ge&&c!==null?(c.value&F.Open)===F.Open:e.open),f=g(null),h=p(()=>te(f));if(l({el:f,$el:f}),!(e.open!==ge||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof v.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value===ge?void 0:e.open}`);let w=p(()=>s.value&&v.value?0:1),D=p(()=>w.value===0),x=p(()=>m.value>1),q=A(Re,null)!==null,[de,ce]=Tn(),{resolveContainers:X,mainTreeNodeRef:fe,MainTreeNode:ve}=pn({portals:de,defaultContainers:[p(()=>{var y;return(y=Z.panelRef.value)!=null?y:f.value})]}),Le=p(()=>x.value?"parent":"leaf"),pe=p(()=>c!==null?(c.value&F.Closing)===F.Closing:!1),xe=p(()=>q||pe.value?!1:D.value),Fe=p(()=>{var y,b,P;return(P=Array.from((b=(y=h.value)==null?void 0:y.querySelectorAll("body > *"))!=null?b:[]).find(C=>C.id==="headlessui-portal-root"?!1:C.contains(E(fe))&&C instanceof HTMLElement))!=null?P:null});Xe(Fe,xe);let N=p(()=>x.value?!0:D.value),ne=p(()=>{var y,b,P;return(P=Array.from((b=(y=h.value)==null?void 0:y.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(C=>C.contains(E(fe))&&C instanceof HTMLElement))!=null?P:null});Xe(ne,N),gn({type:"Dialog",enabled:p(()=>w.value===0),element:f,onUpdate:(y,b)=>{if(b==="Dialog")return j(y,{[De.Add]:()=>m.value+=1,[De.Remove]:()=>m.value-=1})}});let B=wn({name:"DialogDescription",slot:p(()=>({open:v.value}))}),I=g(null),Z={titleId:I,panelRef:g(null),dialogState:w,setTitleId(y){I.value!==y&&(I.value=y)},close(){t("close",!1)}};M(Re,Z);let qe=p(()=>!(!D.value||x.value));Xt(X,(y,b)=>{y.preventDefault(),Z.close(),Ft(()=>b==null?void 0:b.focus())},qe);let Ge=p(()=>!(x.value||w.value!==0));ct((i=h.value)==null?void 0:i.defaultView,"keydown",y=>{Ge.value&&(y.defaultPrevented||y.key===dt.Escape&&(y.preventDefault(),y.stopPropagation(),Z.close()))});let Ye=p(()=>!(pe.value||w.value!==0||q));return vn(h,Ye,y=>{var b;return{containers:[...(b=y.containers)!=null?b:[],X]}}),_(y=>{if(w.value!==0)return;let b=E(f);if(!b)return;let P=new ResizeObserver(C=>{for(let Oe of C){let me=Oe.target.getBoundingClientRect();me.x===0&&me.y===0&&me.width===0&&me.height===0&&Z.close()}});P.observe(b),y(()=>P.disconnect())}),()=>{let{open:y,initialFocus:b,...P}=e,C={...n,ref:f,id:o,role:d.value,"aria-modal":w.value===0?!0:void 0,"aria-labelledby":I.value,"aria-describedby":B.value},Oe={open:w.value===0};return L(Ze,{force:!0},()=>[L(Sn,()=>L($n,{target:f.value},()=>L(Ze,{force:!1},()=>L(re,{initialFocus:b,containers:X,features:D.value?j(Le.value,{parent:re.features.RestoreFocus,leaf:re.features.All&~re.features.FocusLock}):re.features.None},()=>L(ce,{},()=>H({ourProps:C,theirProps:{...P,...n},slot:Oe,attrs:n,slots:r,visible:w.value===0,features:Ee.RenderStrategy|Ee.Static,name:"Dialog"})))))),L(ve)])}}}),Fn=k({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:r}){var l;let a=(l=e.id)!=null?l:`headlessui-dialog-panel-${Te()}`,i=Ue("DialogPanel");r({el:i.panelRef,$el:i.panelRef});function o(s){s.stopPropagation()}return()=>{let{...s}=e,u={id:a,ref:i.panelRef,onClick:o};return H({ourProps:u,theirProps:s,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),On=k({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var r;let l=(r=e.id)!=null?r:`headlessui-dialog-title-${Te()}`,a=Ue("DialogTitle");return O(()=>{a.setTitleId(l),R(()=>a.setTitleId(null))}),()=>{let{...i}=e;return H({ourProps:{id:l},theirProps:i,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function Pn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ae(e,...t){e&&t.length>0&&e.classList.add(...t)}function ye(e,...t){e&&t.length>0&&e.classList.remove(...t)}var je=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(je||{});function Cn(e,t){let n=se();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,i]=[r,l].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Je(e,t,n,r,l,a){let i=se(),o=a!==void 0?Pn(a):()=>{};return ye(e,...l),Ae(e,...t,...n),i.nextFrame(()=>{ye(e,...n),Ae(e,...r),i.add(Cn(e,s=>(ye(e,...r,...t),Ae(e,...l),o(s))))}),i.add(()=>ye(e,...t,...n,...r,...l)),i.add(()=>o("cancelled")),i.dispose}function G(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let We=Symbol("TransitionContext");var An=(e=>(e.Visible="visible",e.Hidden="hidden",e))(An||{});function _n(){return A(We,null)!==null}function kn(){let e=A(We,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Dn(){let e=A(Ve,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ve=Symbol("NestingContext");function $e(e){return"children"in e?$e(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function yt(e){let t=g([]),n=g(!1);O(()=>n.value=!0),R(()=>n.value=!1);function r(a,i=V.Hidden){let o=t.value.findIndex(({id:s})=>s===a);o!==-1&&(j(i,{[V.Unmount](){t.value.splice(o,1)},[V.Hidden](){t.value[o].state="hidden"}}),!$e(t)&&n.value&&(e==null||e()))}function l(a){let i=t.value.find(({id:o})=>o===a);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,V.Unmount)}return{children:t,register:l,unregister:r}}let wt=Ee.RenderStrategy,He=k({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){let a=g(0);function i(){a.value|=F.Opening,t("beforeEnter")}function o(){a.value&=~F.Opening,t("afterEnter")}function s(){a.value|=F.Closing,t("beforeLeave")}function u(){a.value&=~F.Closing,t("afterLeave")}if(!_n()&&Qt())return()=>L(bt,{...e,onBeforeEnter:i,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},r);let d=g(null),m=p(()=>e.unmount?V.Unmount:V.Hidden);l({el:d,$el:d});let{show:c,appear:v}=kn(),{register:f,unregister:h}=Dn(),w=g(c.value?"visible":"hidden"),D={value:!0},x=Te(),q={value:!1},de=yt(()=>{!q.value&&w.value!=="hidden"&&(w.value="hidden",h(x),u())});O(()=>{let N=f(x);R(N)}),_(()=>{if(m.value===V.Hidden&&x){if(c.value&&w.value!=="visible"){w.value="visible";return}j(w.value,{hidden:()=>h(x),visible:()=>f(x)})}});let ce=G(e.enter),X=G(e.enterFrom),fe=G(e.enterTo),ve=G(e.entered),Le=G(e.leave),pe=G(e.leaveFrom),xe=G(e.leaveTo);O(()=>{_(()=>{if(w.value==="visible"){let N=E(d);if(N instanceof Comment&&N.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Fe(N){let ne=D.value&&!v.value,B=E(d);!B||!(B instanceof HTMLElement)||ne||(q.value=!0,c.value&&i(),c.value||s(),N(c.value?Je(B,ce,X,fe,ve,I=>{q.value=!1,I===je.Finished&&o()}):Je(B,Le,pe,xe,ve,I=>{q.value=!1,I===je.Finished&&($e(de)||(w.value="hidden",h(x),u()))})))}return O(()=>{ee([c],(N,ne,B)=>{Fe(B),D.value=!1},{immediate:!0})}),M(Ve,de),Jt(p(()=>j(w.value,{visible:F.Open,hidden:F.Closed})|a.value)),()=>{let{appear:N,show:ne,enter:B,enterFrom:I,enterTo:Z,entered:qe,leave:Ge,leaveFrom:Ye,leaveTo:y,...b}=e,P={ref:d},C={...b,...v.value&&c.value&&ue.isServer?{class:Ot([n.class,b.class,...ce,...X])}:{}};return H({theirProps:C,ourProps:P,slot:{},slots:r,attrs:n,features:wt,visible:w.value==="visible",name:"TransitionChild"})}}}),Nn=He,bt=k({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let l=Ie(),a=p(()=>e.show===null&&l!==null?(l.value&F.Open)===F.Open:e.show);_(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=g(a.value?"visible":"hidden"),o=yt(()=>{i.value="hidden"}),s=g(!0),u={show:a,appear:p(()=>e.appear||!s.value)};return O(()=>{_(()=>{s.value=!1,a.value?i.value="visible":$e(o)||(i.value="hidden")})}),M(Ve,o),M(We,u),()=>{let d=st(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return H({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[L(Nn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},r.default)]},attrs:{},features:wt,visible:i.value==="visible",name:"Transition"})}}});function Mn(e,t){return oe(),we("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[T("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})])}const Rn={class:"fixed inset-0 z-10 overflow-y-auto"},jn={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},Hn={class:"sm:flex sm:items-start"},Bn={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},In={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},Un={class:"mt-2"},Wn={class:"text-sm text-[var(--theme-text)]"},Vn={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},qn={__name:"GenerateCodeDialog",props:{onClose:{type:Function,required:!0}},setup(e){const t=e,n=tt(),r=g(!0),l=()=>{r.value=!1,setTimeout(()=>{t.onClose()},500)},a=async()=>{var i;try{await At(),await n.fetchInviteInfo(),ie(S("invite.code.generate.success.title"),S("invite.code.generate.success.message"),200),l()}catch(o){const s=((i=o.data)==null?void 0:i.message)||S("invite.code.generate.error.message");ie(S("invite.code.generate.error.title"),s,400)}};return(i,o)=>(oe(),Pt($(bt),{as:"template",show:r.value},{default:Q(()=>[J($(xn),{as:"div",class:"relative z-10",onClose:l},{default:Q(()=>[J($(He),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Q(()=>o[0]||(o[0]=[T("div",{class:"fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-75 transition-opacity"},null,-1)])),_:1}),T("div",Rn,[T("div",jn,[J($(He),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:Q(()=>[J($(Fn),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:Q(()=>[T("div",Hn,[T("div",Bn,[J($(Mn),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),T("div",In,[J($(On),{as:"h3",class:"text-base font-semibold leading-6 text-[var(--theme-title)]"},{default:Q(()=>[Ct(U($(S)("invite.code.generate.title")),1)]),_:1}),T("div",Un,[T("p",Wn,U($(S)("invite.code.generate.description")),1)])])]),T("div",Vn,[T("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:a},U($(S)("invite.code.generate.confirm")),1),T("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:l},U($(S)("invite.code.generate.cancel")),1)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},Gn=()=>new Promise(e=>{const t=document.createElement("div");document.body.appendChild(t);const n=_t(qn,{onClose:()=>{n.unmount(),t.remove(),e()}});n.mount(t)});const Yn={class:"banner-container"},zn={class:"banner-title"},Kn={class:"banner-subtitle"},Xn={class:"banner-actions"},Zn=["disabled"],Qn={__name:"InviteBanner",setup(e){const t=tt(),n=g(!1),r=p(()=>{var s,u,d;return(d=(u=(s=t.inviteInfo)==null?void 0:s.codes)==null?void 0:u.find(m=>m.status===0))==null?void 0:d.code}),l=p(()=>r.value?`${window.location.host}/#/?code=${r.value}`:""),a=p(()=>{var s;return(s=t.inviteInfo)!=null&&s.stat?t.inviteInfo.stat[3]??"":""}),i=async()=>{if(!n.value){if(!l.value){ie(S("invite.banner.error.linkNotReady"),S("invite.banner.error.tryAgain"),400);return}try{n.value=!0,await Nt(l.value)?ie(S("common.copySuccess"),S("invite.banner.copySuccess"),200):ie(S("common.copyFailed"),S("common.error.networkError"),400)}finally{setTimeout(()=>{n.value=!1},1e3)}}},o=()=>{Gn()};return(s,u)=>(oe(),we("div",Yn,[T("h1",zn,U($(S)("invite.banner.title")),1),T("p",Kn,U($(S)("invite.banner.subtitle"))+U(a.value),1),T("div",Xn,[r.value?(oe(),we("button",{key:0,disabled:n.value,onClick:i,class:"copy-button"},U($(S)("common.copyLink")),9,Zn)):(oe(),we("button",{key:1,onClick:o,class:"copy-button"},U($(S)("invite.code.generate.button")),1))]),u[0]||(u[0]=T("img",{class:"banner-decoration",src:Dt,alt:"Decoration",loading:"lazy"},null,-1))]))}},tr=kt(Qn,[["__scopeId","data-v-ff23e044"]]);export{H as A,tr as B,Fn as G,Ee as N,Yt as O,be as P,bt as S,st as T,On as V,xn as Y,j as a,dt as b,nt as c,te as d,W as e,ke as f,Nt as g,He as h,Te as i,E as o,Mn as r,Gn as s,Be as t,Se as u};
