import{_ as j}from"./logo-b1fe5eb1.js";import{u as L,a as y,b as M,o as t,c as s,d as l,t as o,e as c,f as e,w as B,s as H,_ as b,g,F as m,r as h,h as P,i as $,j as Z,k as C,l as D,n as z}from"./index-1223ee3d.js";const N=""+new URL("../img/hero-Illustration-1.png",import.meta.url).href,S={key:0},T={key:1},k={__name:"LoginButton",setup(f){const i=L(),a=!!y().authToken,n=M(),w=()=>{a?i.push("/dashboard"):H(n.query.code)};return(r,_)=>(t(),s("a",{href:"javascript:",onClick:B(w,["stop"]),class:"flex bg-[#42c990] hover:bg-[#2df399] ease-in duration-300 rounded-xl gap-6 px-6 py-3 text-black"},[l(a)?(t(),s("p",S,o(l(c)("home.auth.dashboard")),1)):(t(),s("p",T,o(l(c)("auth.login")),1)),_[0]||(_[0]=e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"text-white"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.73 6.60042C13.2963 3.56741 17.2746 2.15497 21.1481 2.85202C21.8451 6.72563 20.4327 10.7042 17.3998 13.2706L12.846 17.1239L11.7918 17.7469L6.25265 12.2075L6.87063 11.1617L10.73 6.60042ZM4.87237 9.37916L8.68656 4.8713C8.71603 4.83647 8.74565 4.80181 8.77542 4.76732C7.21133 5.11554 5.14211 6.01006 2.72421 8.10974L4.87237 9.37916ZM12.0147 2.01846C15.111 0.126844 18.8895 -0.497593 22.5246 0.411228C23.0486 0.542238 23.4578 0.951408 23.5888 1.47545C24.4977 5.11138 23.8729 8.89071 21.9806 11.9874C22.0888 12.6089 22.1542 13.4255 22.0649 14.4057C21.8587 16.6665 20.8401 19.6878 17.8346 23.1175C16.6146 24.5098 14.4903 24.1703 13.6158 22.6903L12.5134 20.8246C11.9325 21.078 11.2367 20.9664 10.7631 20.5037L10.9158 20.6564L9.96943 21.6029C8.92407 22.6482 7.22922 22.6482 6.18387 21.6029L2.39831 17.8171C1.35295 16.7717 1.35295 15.0768 2.39831 14.0314L3.3447 13.085L3.49714 13.2374C3.03431 12.7636 2.92278 12.0674 3.17656 11.4864L1.30968 10.3832C-0.170248 9.50864 -0.509748 7.38423 0.882445 6.16416C4.31206 3.15855 7.33325 2.13987 9.59389 1.93375C10.5755 1.84425 11.393 1.90998 12.0147 2.01846ZM5.2374 14.9779L4.29109 15.9243L8.07665 19.71L9.02296 18.7636L5.2374 14.9779ZM14.6206 19.1289L15.8891 21.2757C17.9875 18.8591 18.8821 16.7908 19.2308 15.227C19.197 15.2562 19.163 15.2852 19.1289 15.3141L14.6206 19.1289Z",fill:"#000"})],-1))]))}};const A={class:"flex justify-center mb-[30px] relative z-20"},I={class:"content flex max-w-[1300px] w-[1300px] justify-between p-8"},R={class:"left"},V={href:"",class:"flex items-center gap-3"},q={class:"text-white font-bold text-xl truncate max-w-[200px]"},F={class:"right flex gap-14 items-baseline"},U={class:"login hidden sm:block"},E={__name:"HomeHeader",setup(f){const i=window.config.title;return(d,a)=>(t(),s("div",A,[e("div",I,[e("div",R,[e("a",V,[a[0]||(a[0]=e("div",{class:"icon w-16 h-8"},[e("img",{class:"h-full",src:j,alt:""})],-1)),e("div",q,o(l(i)),1)])]),e("div",F,[e("div",U,[g(k)])])])]))}},O=b(E,[["__scopeId","data-v-67ee1274"]]),G={class:"flex justify-center overflow-hidden mt-[4rem]"},J={class:"main flex flex-col max-w-[1300px] w-[1300px] justify-around px-11 py-4 relative"},K={class:"text-center"},Q={class:"text-4xl text-slate-400 mb-14"},W={class:"flex flex-row gap-12 items-end sm:w-[100%] w-[100vw] overflow-auto"},X=["src"],Y={class:"sm:text-xl text-white cursor-pointer"},ee={__name:"MediaList",setup(f){const i=window.config.mediaProviders;return(d,a)=>(t(),s("div",G,[e("div",J,[e("div",K,[e("h1",Q,o(l(c)("home.media.title")),1),e("div",W,[(t(!0),s(m,null,h(l(i),n=>(t(),s("div",{key:n.name,class:"flex items-center"},[e("img",{class:"w-16 sm:w-22 max-w-none",src:n.img,alt:""},null,8,X),e("p",Y,o(n.name),1)]))),128))])])])]))}};const te={class:"flex justify-center mt-32 p-2"},se={class:"main max-w-[1300px] w-[1300px] justify-between"},oe={class:"text-4xl mb-12 text-center text-slate-400"},le={class:"sm:grid-cols-4 grid-cols-2 grid gap-4"},ne=["innerHTML"],ie={class:"flex flex-col flex-1"},ae={class:"text-slate-300 text-xl"},re={class:"text-slate-400"},ce={key:0,class:"absolute bg-[#4cd0a1] rounded-xl right-[0%] p-1 top-0 inline-table"},de={__name:"CountryList",setup(f){const i=window.config.country;return(d,a)=>(t(),s("div",te,[e("div",se,[e("h1",oe,o(l(c)("home.regions.title")),1),e("div",le,[(t(!0),s(m,null,h(l(i),n=>(t(),s("div",{key:n.name,class:"headline p-4 rounded-3xl m-2 flex flex-wrap gap-4 bg-slate-800 relative items-center"},[e("span",{class:"keyong w-6 h-6",innerHTML:n.img},null,8,ne),e("div",ie,[e("p",ae,o(n.name),1),e("p",re,o(n.city),1)]),n.hasOwnProperty("label")?(t(),s("span",ce,o(n.label),1)):P("",!0)]))),128))])])]))}},_e=b(de,[["__scopeId","data-v-1d2e5c0e"]]),xe={class:"max-w-6xl mx-auto pt-10 pb-36 px-8 mt-28"},pe={class:"max-w-md mx-auto mb-14 text-center"},ue={class:"text-4xl font-semibold text-gray-500 mb-6 lg:text-5xl"},me={class:"text-indigo-600"},he={class:"text-xl text-gray-500 font-medium"},fe={class:"flex flex-row flex-wrap justify-center items-center gap-20"},ge={class:"mb-7 pb-7 flex items-center border-b border-gray-300"},we={class:"ml-5"},ve={class:"block text-gray-300 text-2xl font-semibold"},be={class:"text-3xl text-green-700 font-bold"},Ce={class:"text-gray-500 font-medium"},Le={class:"mb-7 font-medium text-gray-500"},ye={class:"ml-3"},$e={__name:"PricingPlans",props:{planData:Array},setup(f){const i=L(),d=y(),a=f,n=()=>{d.authToken===void 0?Z(c("auth.errors.loginRequired"),null,400):i.push("/plan")};return(w,r)=>(t(),s("main",xe,[e("div",pe,[e("h1",ue,[e("span",me,o(l(c)("home.pricing.title")),1)]),e("p",he,o(l(c)("home.pricing.subtitle")),1)]),e("div",fe,[(t(!0),s(m,null,h(a.planData,(_,v)=>(t(),s("div",{key:v,class:"bg-[#111111] shadow-gray-800 mt-8 p-8 max-w-96 shadow-xl rounded-3xl"},[e("div",ge,[r[1]||(r[1]=e("img",{src:"https://res.cloudinary.com/williamsondesign/abstract-1.jpg",alt:"",class:"rounded-3xl w-20 h-20"},null,-1)),e("div",we,[e("span",ve,o(_.name),1),e("span",null,[r[0]||(r[0]=e("span",{class:"font-medium text-gray-500 text-xl align-top"},"¥ ",-1)),e("span",be,o(_.price),1)]),e("span",Ce,"/ "+o(l(c)("home.pricing.currency")),1)])]),e("ul",Le,[(t(!0),s(m,null,h(_.features,(x,p)=>(t(),s("li",{key:p,class:"flex text-lg mb-2"},[r[2]||(r[2]=e("img",{src:"https://res.cloudinary.com/williamsondesign/check-grey.svg"},null,-1)),e("span",ye,o(x),1)]))),128))]),e("a",{href:"javascript:;",onClick:n,class:"flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"},[$(o(l(c)("home.pricing.purchaseButton"))+" ",1),r[3]||(r[3]=e("img",{src:"https://res.cloudinary.com/williamsondesign/arrow-right.svg",class:"ml-2",alt:""},null,-1))])]))),128))])]))}};const ke={class:"bg-black w-full h-full"},je={class:"flex justify-center p-5"},Me={class:"main flex max-w-[1300px] w-[1300px] justify-between lg:p-11"},Be={class:"first flex-1"},He={class:"title flex flex-col gap-10"},Pe={class:"ti sm:whitespace-nowrap"},Ze={class:"text-5xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent"},De={class:"flex flex-row gap-4"},ze={class:"flex gap-5"},Ne={class:"text-lg text-slate-400"},Se={class:"flex sm:hidden"},Te={class:"bg-slate-900 overflow-x-scroll rounded-2xl max-w-[90vw] overflow-hidden whitespace-nowrap sm:w-[200%] items-baseline p-3"},Ae=["onClick"],Ie={class:"flex justify-center relative z-20"},Re={class:"main max-w-[1300px] w-[1300px] justify-between sm:px-11 sm:flex relative"},Ve={class:"mt-3 flex flex-row flex-wrap z-10 gap-7 px-3"},qe=["href"],Fe={__name:"HomePage",setup(f){const i=C(0),d=C();D(i,v=>{d.value=window.config.down[v]},{immediate:!0});const a=window.config.title,n=window.config.down,w=window.config.plans,r=window.config.title1,_=window.config.title2.split(",");return(v,x)=>(t(),s("div",ke,[g(O),e("div",je,[e("div",Me,[e("section",Be,[e("div",He,[e("div",Pe,[e("p",Ze,o(l(a)),1)]),e("div",De,[(t(!0),s(m,null,h(l(_),(p,u)=>(t(),s("p",{key:u,class:"px-6 rounded-3xl p-3 text-slate-300 bg-[#2b2d33] text-xl"},o(p),1))),128))]),e("div",ze,[x[0]||(x[0]=e("svg",{width:"25",height:"30",viewBox:"0 0 25 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.7295 0.190584C19.4166 0.536049 19.7415 1.26696 19.5088 1.94359L16.3954 10.9963L23.1423 10.2956C23.8402 10.2232 24.5137 10.5524 24.8261 11.1188C25.1385 11.6852 25.0227 12.3671 24.5366 12.8236L6.73903 29.5378C6.19231 30.0513 5.32012 30.1486 4.65058 29.7709C3.98105 29.3933 3.69822 28.6443 3.97335 27.9777L7.65892 19.0473L1.87483 19.7025C1.18832 19.7803 0.51981 19.4682 0.19503 18.9184C-0.129751 18.3685 -0.0432474 17.6952 0.412393 17.2265L16.6624 0.512308C17.1806 -0.0207393 18.0425 -0.154882 18.7295 0.190584ZM5.80716 16.2334L9.97042 15.7618C10.5486 15.6963 11.1228 15.9073 11.4847 16.3183C11.8467 16.7293 11.9438 17.2806 11.7409 17.7723L9.89973 22.2337L18.9302 13.7529L14.2386 14.2401C13.6791 14.2982 13.1248 14.0981 12.7651 13.708C12.4054 13.3179 12.2889 12.7907 12.4555 12.3065L14.0048 7.80157L5.80716 16.2334Z",fill:"#BCC9DB"})],-1)),e("p",Ne,o(l(r)),1)]),e("div",Se,[g(k)]),e("div",Te,[(t(!0),s(m,null,h(l(n),(p,u)=>(t(),s("p",{key:u,class:z(["px-6 inline-block text-white font-extrabold cursor-pointer py-4 rounded-2xl hover:bg-slate-800",[u===i.value?"border-4 border-green-400":"border-4 border-slate-900"]]),onClick:Ue=>i.value=u},o(p.name),11,Ae))),128))])])]),x[1]||(x[1]=e("div",{class:"relative w-full flex-1 sm:block hidden"},[e("img",{class:"absolute z-10 w-full top-[-26%]",src:N,alt:""}),e("span",{class:"fg rounded-full"})],-1))])]),e("div",Ie,[e("div",Re,[e("div",Ve,[(t(!0),s(m,null,h(d.value.down,(p,u)=>(t(),s("a",{key:u,href:p.href,class:"p-4 flex flex-row items-center gap-3 rounded-2xl hover:bg-[#2df399] hover:scale-105 transition-all duration-300 text-black bg-[#39c17d]"},[$(o(p.title)+" ",1),x[2]||(x[2]=e("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.34149 10.2526C4.92586 9.88889 4.88374 9.25713 5.24742 8.84149C5.61111 8.42586 6.24287 8.38374 6.6585 8.74742L9 10.7962L9 0.999999C9 0.447714 9.44772 -9.2251e-07 10 -8.74228e-07C10.5523 -8.25945e-07 11 0.447714 11 0.999999L11 10.7962L13.3415 8.74742C13.7571 8.38374 14.3889 8.42586 14.7526 8.84149C15.1163 9.25713 15.0741 9.88889 14.6585 10.2526L10.6585 13.7526C10.2815 14.0825 9.71852 14.0825 9.34149 13.7526L5.34149 10.2526ZM18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13L20 16C20 17.1046 19.1046 18 18 18L2 18C0.89543 18 -1.49533e-06 17.1046 -1.39876e-06 16L-1.1365e-06 13C-1.08821e-06 12.4477 0.447715 12 0.999999 12C1.55228 12 2 12.4477 2 13L2 16L18 16L18 13Z",fill:"#1C1D22"})],-1))],8,qe))),128))])])]),g(ee),g(_e),g($e,{planData:l(w)},null,8,["planData"])]))}},Ge=b(Fe,[["__scopeId","data-v-64d989f3"]]);export{Ge as default};