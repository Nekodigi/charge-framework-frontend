(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{2996:function(e,t,a){Promise.resolve().then(a.bind(a,9154))},9154:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return W}});var n=a(9440),r=a(3271),o=a(4957),c=a(1007),i=a(9843),l=a(5793),s=a(5507),d=a(4240),u=a(8780),p=a(7653),h=a(6006),g=a(6008),m=a(9268),f=a(8511);function Z(e){let t=e.toUpperCase().split(" ");return{sx:{bgcolor:function(e){let t,a=0;for(t=0;t<e.length;t+=1)a=e.charCodeAt(t)+((a<<5)-a);let n="#";for(t=0;t<3;t+=1){let e=a>>8*t&255;n+="00".concat(e.toString(16)).slice(-2)}return n}(e)},children:"".concat(t[0][0]).concat(t.length>=2?t[1][0]:"")}}var b=a(4092),x=a(1771),y=a(9714),k=a(7455),w=a(122),v=a(3470),E=a(4200),S=a(3401);let C=e=>{let{user:t}=e;(0,g.useRouter)();let{service_id:a}=(0,g.useParams)(),[n,r]=(0,h.useState)(null),o=!!n,c=()=>{r(null)};return(0,m.jsxs)(x.Z,{children:[(0,m.jsx)(y.Z,{onClick:e=>{r(e.currentTarget)},"aria-controls":o?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,children:(0,m.jsx)(k.Z,{...Z(t.displayName?t.displayName:t.email)})}),(0,m.jsxs)(w.Z,{anchorEl:n,id:"account-menu",open:o,onClose:c,onClick:c,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))","& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,m.jsxs)(v.Z,{onClick:c,children:[(0,m.jsx)(k.Z,{...Z(t.displayName?t.displayName:t.email)})," ",t.displayName?t.displayName:t.email]}),(0,m.jsx)(E.Z,{}),(0,m.jsxs)(v.Z,{onClick:()=>{r(null),f.I8.signOut()},children:[(0,m.jsx)(S.Z,{children:(0,m.jsx)(b.Z,{fontSize:"small"})}),"Logout"]})]})]})};var F=a(4214);let j=()=>{let{user:e}=(0,p.E)(),t=(0,o.Z)();(0,g.useRouter)();let{service_id:a}=(0,g.useParams)(),m=(0,g.useSearchParams)(),[f,Z]=(0,h.useState)("");return(0,h.useEffect)(()=>{let e=async()=>{Z((await (0,F.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/service/").concat(a),method:"get",data:{}})).data.name)};e()},[a]),(0,n.tZ)(c.Z,{position:"static",sx:{background:"white",borderBottom:1,borderColor:t.palette.com.gray500Op50},elevation:0,children:(0,n.tZ)(i.Z,{maxWidth:"md",style:{paddingLeft:0,paddingRight:0},children:(0,n.tZ)(l.Z,{children:(0,n.BX)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,n.tZ)(d.Z,{css:(0,r.Ge)(t).title,children:f||a}),e?(0,n.tZ)(C,{user:e}):(0,n.tZ)(u.k,{type:"contained",href:"/".concat(a,"/login?link_target=").concat(m.get("link_target")),label:"Login",style:{padding:12,paddingTop:4,paddingBottom:4,height:27},labelStyle:(0,r.Ge)(t).body})]})})})})};var _=a(4066),B=a(6063),P=a(307);let I=e=>{let t=(0,o.Z)();return(0,m.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(x.Z,{sx:{width:"100%",mr:1},children:(0,m.jsx)(B.Z,{variant:"determinate",value:Math.min(100,e.current/e.maximum*100),...e,sx:{height:12,borderRadius:8,["& .".concat(P.Z.bar)]:{borderRadius:5,backgroundColor:t.palette.com.green500},["&.".concat(P.Z.colorPrimary)]:{border:1,borderColor:t.palette.com.gray400,backgroundColor:"transparent"}}})}),(0,m.jsx)(x.Z,{sx:{minWidth:35},children:(0,m.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:"".concat(e.current.toFixed(1),"/").concat(e.maximum.toFixed(0))})})]})};var A=a(7994),D=a(6626),N=a(5910);let R=e=>{let{checked:t,text:a}=e,c=(0,o.Z)();return(0,n.BX)(s.Z,{direction:"row",gap:1.5,children:[t?(0,n.tZ)(D.Z,{sx:{color:c.palette.com.green500}}):(0,n.tZ)(N.Z,{sx:{color:c.palette.com.red500}}),(0,n.tZ)(d.Z,{css:(0,r.Ge)(c).item,children:a})]})},O={free:"Starter",basic:"Professional","pay-as-you-go":"Pay as you go"},X=e=>({free:e.palette.com.gray500,basic:e.palette.com.green500,"pay-as-you-go":e.palette.com.blue500}),z=e=>{let{plan:t,currentPlan:a,cancelAtPeriodEnd:c}=e,{service_id:i}=(0,g.useParams)(),{user:l}=(0,p.E)(),m=(0,o.Z)(),[f,Z]=(0,h.useState)(void 0),[b,y]=(0,h.useState)("Apply"),k=(0,g.useSearchParams)(),w=(0,h.useMemo)(()=>["pay-as-you-go"===t.id?{checked:!0,text:"Add token for this month"}:{checked:!0,text:"".concat(t.quota," Token/month")},"free"===t.id?{checked:!1,text:"Available when demand is low"}:{checked:!0,text:"No limitation by demand"}],[t]),v=(0,h.useMemo)(()=>X(m)[t.id],[t]),E=(0,h.useMemo)(()=>O[t.id],[t]),S=(0,h.useMemo)(()=>{switch(t.id){case"free":return"Free";case"basic":return"".concat(t.currency.toUpperCase()," $").concat(t.price,"/mo");case"pay-as-you-go":return"".concat(t.currency.toUpperCase()," $").concat(t.price,"/token")}},[t]);(0,h.useEffect)(()=>{switch(t.id){case"free":c?y("Plan will be downgraded"):y("Downgrade plan"),"free"===a||c||Z("".concat(i,"/subscription/cancel"));break;case"basic":"free"===a&&y("Upgrade plan"),"basic"!==a?(console.log("".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/subscription/url/").concat(i,"/").concat(null==l?void 0:l.uid,"/").concat(t.id,"?success_url=").concat(window.location.href,"&cancel_url=").concat(window.location.href)),Z("".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/subscription/url/").concat(i,"/").concat(null==l?void 0:l.uid,"/").concat(t.id,"?success_url=").concat(window.location.href,"&cancel_url=").concat(window.location.href))):c?Z("".concat(i,"/subscription/resume")):Z("".concat(i,"/subscription/cancel"));break;case"pay-as-you-go":y("Purchase tokens"),Z("".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/payment/url/").concat(i,"/").concat(null==l?void 0:l.uid,"?quota=",500,"&success_url=").concat(window.location.href,"&cancel_url=").concat(window.location.href))}t.id===a&&("basic"===t.id&&c?y("Resume plan"):"free"===t.id&&c?y("Your plan will be downgraded"):y("You current plan"))},[t,a,c]);let C=(0,h.useMemo)(()=>{switch(t.id){case"free":if("free"===a)break;if(!c)return"pointer";break;case"basic":case"pay-as-you-go":return"pointer"}return"default"},[t,a,c]);return(0,n.tZ)(_.ZP,{item:!0,xs:12,sm:6,children:(0,n.BX)(x.Z,{borderRadius:2,overflow:"hidden",sx:{border:1,borderColor:m.palette.com.gray500},children:[(0,n.tZ)(x.Z,{sx:{backgroundColor:v,height:8}}),(0,n.BX)(s.Z,{sx:{p:2},gap:1.5,children:[(0,n.BX)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"flex-end",children:[(0,n.tZ)(d.Z,{css:(0,r.Ge)(m).title,children:E}),(0,n.tZ)(d.Z,{css:(0,r.Ge)(m).subtitle,children:S})]}),(0,n.tZ)(s.Z,{gap:1,children:w.map((e,t)=>(0,n.tZ)(R,{checked:e.checked,text:e.text},t))}),(0,n.tZ)(u.k,{type:a===t.id?"contained":"fill",color:v,href:l?f:"/".concat(i,"/login?action=subscribe&plan=").concat(t.id,"&link_target=").concat(k.get("link_target")),onClick:"free"===t.id||c?void 0:()=>{},style:{cursor:C},label:b})]})]})})};function W(e){let{params:t}=e,a=A.W,{service_id:o}=t,{user:c}=(0,p.E)(),[l,u]=(0,h.useState)(!1),[g,m]=(0,h.useState)(""),[f,Z]=(0,h.useState)({}),[b,x]=(0,h.useState)(0),[y,k]=(0,h.useState)(0);return(0,h.useEffect)(()=>{let e=async()=>{let e=await (0,F.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/user/").concat(o,"/").concat(null==c?void 0:c.uid),method:"get",data:{}}),t=e.data;u(t.cancel_at_period_end),m(t.plan),console.log(t),console.log(t=(e=await (0,F.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/service/plan/").concat(o),method:"get",data:{}})).data),Z(t.plan),console.log(t=(e=await (0,F.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/quota/").concat(o,"/").concat(null==c?void 0:c.uid),method:"get",data:{}})).data),x(t.allocQuota),k(t.remainQuota)};e()},[c,o]),(0,h.useEffect)(()=>{if(0===Object.keys(f).length||Object.keys(f).indexOf("pay-as-you-go")>-1)return;let e={...f.free};e.id="pay-as-you-go",f["pay-as-you-go"]=e,Z({...f})},[f]),(0,n.BX)("div",{children:[(0,n.tZ)(j,{}),(0,n.tZ)(i.Z,{maxWidth:"md",sx:{py:4},children:(0,n.BX)(s.Z,{gap:4,children:[(0,n.BX)(s.Z,{gap:1.5,children:[(0,n.tZ)(d.Z,{css:(0,r.Ge)(a).title,children:"Your Token"}),(0,n.tZ)(I,{current:y,maximum:b})]}),(0,n.tZ)(_.ZP,{container:!0,spacing:2,children:Object.keys(f).map(e=>{let t=f[e];return"pay-as-you-go"===e&&"free"===g?null:(0,n.tZ)(z,{plan:t,currentPlan:g,cancelAtPeriodEnd:l},e)})})]})})]})}},8780:function(e,t,a){"use strict";a.d(t,{k:function(){return l}});var n=a(9440),r=a(3271),o=a(4957),c=a(5507),i=a(4240);let l=e=>{let{type:t,buttonType:a,img:l,color:s,href:d,label:u,style:p,labelStyle:h,onClick:g}=e,m=(0,o.Z)(),f={display:"flex",justifyContent:"center",alignItems:"center",height:48,borderRadius:4,textDecoration:"none",..."contained"===t?{border:2,borderStyle:"solid",borderColor:m.palette.com.black}:{backgroundColor:s},...p},Z=(0,n.BX)(c.Z,{direction:"row",gap:1.5,alignItems:"center",children:[l?(0,n.tZ)("img",{src:l,width:24,height:24}):void 0,(0,n.tZ)(i.Z,{css:[(0,r.Ge)(m).item,{fontWeight:700,color:"contained"===t?m.palette.com.black:m.palette.com.white},h],children:u})]});return d?(0,n.tZ)("a",{style:f,href:d,onClick:g,children:Z}):(0,n.tZ)("button",{type:a,style:f,onClick:g,children:Z})}},8511:function(e,t,a){"use strict";a.d(t,{Ap:function(){return l},I8:function(){return s}});var n=a(1313),r=a(4734),o=a(2040);let c={apiKey:"AIzaSyChB7eBjMaX_lRpfIgUxQDi39Qh82R4oyQ",authDomain:"sandbox-35d1d.firebaseapp.com",projectId:"sandbox-35d1d",storageBucket:"sandbox-35d1d.appspot.com",messagingSenderId:o.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,appId:o.env.NEXT_PUBLIC_FIREBASE_SENDER_ID},i=(0,n.ZF)(c),l=new r.hJ,s=(0,r.v0)(i)},3271:function(e,t,a){"use strict";a.d(t,{Ge:function(){return c}});var n=a(2120);let r={Jp:(0,n.iv)({fontFamily:'"Roboto", "Noto Sans JP"'})},o={px32:(0,n.iv)({fontSize:32,lineHeight:"46px"}),px24:(0,n.iv)({fontSize:24,lineHeight:"29px"}),px20:(0,n.iv)({fontSize:20,lineHeight:"24px"}),px18:(0,n.iv)({fontSize:18,lineHeight:"26px"}),px16:(0,n.iv)({fontSize:16,lineHeight:"19px"}),px14:(0,n.iv)({fontSize:14,lineHeight:"20px"}),px12:(0,n.iv)({fontSize:12,lineHeight:"17px"})},c=e=>({title:(0,n.iv)([o.px20,r.Jp,{fontWeight:700,color:e.palette.text.primary}]),subtitle:(0,n.iv)([o.px16,r.Jp,{fontWeight:700,color:e.palette.text.secondary}]),item:(0,n.iv)([o.px18,r.Jp,{fontWeight:500,color:e.palette.text.primary}]),body:(0,n.iv)([o.px16,r.Jp,{fontWeight:500,color:e.palette.text.primary}]),disc:(0,n.iv)([o.px14,r.Jp,{fontWeight:500,color:e.palette.text.primary}])})},7994:function(e,t,a){"use strict";a.d(t,{W:function(){return u}});var n=a(2780),r=a(7090),o=a(8537),c=a(8238),i=a(1460);let l={white:"#FFFFFF",whiteOp70:"rgba(255, 255, 255, 0.7);",whiteOp20:"rgba(255, 255, 255, 0.2);",black:"#000000",blackOp50:"rgba(0, 0, 0, 0.5);",green500:c.Z["500"],red500:i.Z["500"],blue500:r.Z["500"],gray800:"#424242",gray500:"#9E9E9E",gray400:"#BDBDBD",gray500Op50:"rgba(158, 158, 158, 0.5);",artifactBg:"linear-gradient(117.46deg, #6D5654 0.71%, #E3AA54 101.54%);",dawn:" linear-gradient(156.05deg, #FF0000 -55.32%, #FFB199 111.96%);",main:{A100:n.Z.A100,A200:n.Z.A200,200:n.Z["200"],300:n.Z["300"],400:n.Z["400"],500:n.Z["500"],600:n.Z["600"],700:n.Z["700"],L500:r.Z["500"]},scale:{10:"#8FE646",20:"#C2E645",30:"#E6D517",40:"#E68D17",50:"#E66B45",60:"#E65370"}},s="#212121",d="#757575",u=(0,o.Z)({palette:{mode:"light",com:l,primary:n.Z,secondary:r.Z,local:{bg:"#EEEEEE",modal:"F5F5F5",paper:"#FFFFFF",white:"#FFFFFF",black:s,gray:d,nekodigi:"linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);"},text:{primary:s,secondary:d}}})},7653:function(e,t,a){"use strict";a.d(t,{E:function(){return i},H:function(){return l}});var n=a(9268),r=a(8511),o=a(6006);let c=(0,o.createContext)({});function i(){return(0,o.useContext)(c)}function l(e){let{children:t}=e,[a,i]=(0,o.useState)(null),[l,s]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{let e=r.I8.onAuthStateChanged(e=>{i(e),s(!1)});return()=>{e()}},[]),(0,n.jsx)(c.Provider,{value:{user:a,loading:l},children:!l&&t})}}},function(e){e.O(0,[913,799,56,214,883,725,253,769,744],function(){return e(e.s=2996)}),_N_E=e.O()}]);