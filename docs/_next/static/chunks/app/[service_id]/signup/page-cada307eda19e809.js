(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[996],{6646:function(e,t,n){Promise.resolve().then(n.bind(n,6154))},6154:function(e,t,n){"use strict";n.r(t);var a=n(9440),r=n(8780),i=n(6685),o=n(8511),c=n(3271),l=n(7994),u=n(7653),s=n(9843),d=n(5507),p=n(4240),h=n(4200),g=n(1313),f=n(4734),m=n(6006),Z=n(6008),y=n(5588);t.default=()=>{let{user:e}=(0,u.E)(),{service_id:t}=(0,Z.useParams)(),n=(0,m.useRef)(null),b=(0,m.useRef)(null),[x,w]=(0,m.useState)(""),v=l.W,k=async e=>{e.preventDefault();let n=new FormData(e.currentTarget);try{await (0,f.Xb)(o.I8,n.get("email").toString(),n.get("password").toString()),(0,Z.redirect)("/".concat(t))}catch(e){if(e instanceof g.ZR)switch(console.log(e),w(e.message),e.code){case"auth/email-already-in-use":w("Email already in use");break;case"auth/invalid-email":w("Invalid email");break;case"auth/weak-password":w("Weak password");break;default:w("Error")}}};return(0,a.tZ)(y.k,{children:(0,a.tZ)(s.Z,{maxWidth:"xs",sx:{py:4,pt:12},children:(0,a.BX)(d.Z,{gap:4,alignItems:"center",children:[(0,a.tZ)(p.Z,{css:(0,c.Ge)(v).title,children:"Sign up to Pinyin-OCR"}),x?(0,a.tZ)(p.Z,{css:[(0,c.Ge)(v).disc,{color:v.palette.error.main}],children:x}):void 0,(0,a.tZ)(r.k,{type:"contained",img:"/image/logo/google.svg",href:"nekodigi.com",color:v.palette.com.green500,label:"Continue with Google",style:{width:"100%"}}),(0,a.tZ)(h.Z,{flexItem:!0,children:(0,a.tZ)(p.Z,{css:[(0,c.Ge)(v).title,{color:v.palette.com.gray500}],children:"OR"})}),(0,a.BX)(d.Z,{gap:4,width:"100%",component:"form",onSubmit:k,children:[(0,a.BX)(d.Z,{gap:2,width:"100%",children:[(0,a.tZ)(i.y,{ref:n,required:!0,type:"email",label:"Email",id:"email",name:"email",autoComplete:"email",fullWidth:!0}),(0,a.tZ)(i.y,{ref:b,required:!0,type:"password",label:"Password",id:"password",name:"password",autoComplete:"current-password",fullWidth:!0})]}),(0,a.tZ)(r.k,{buttonType:"submit",type:"fill",color:v.palette.com.green500,label:"Continue",style:{width:"100%"}})]})]})})})}},8780:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var a=n(9440),r=n(3271),i=n(4957),o=n(5507),c=n(4240);let l=e=>{let{type:t,buttonType:n,img:l,color:u,href:s,label:d,style:p,labelStyle:h,onClick:g}=e,f=(0,i.Z)(),m={display:"flex",justifyContent:"center",alignItems:"center",height:48,borderRadius:4,textDecoration:"none",..."contained"===t?{border:2,borderStyle:"solid",borderColor:f.palette.com.black}:{backgroundColor:u},...p},Z=(0,a.BX)(o.Z,{direction:"row",gap:1.5,alignItems:"center",children:[l?(0,a.tZ)("img",{src:l,width:24,height:24}):void 0,(0,a.tZ)(c.Z,{css:[(0,r.Ge)(f).item,{fontWeight:700,color:"contained"===t?f.palette.com.black:f.palette.com.white},h],children:d})]});return s?(0,a.tZ)("a",{style:m,href:s,onClick:g,children:Z}):(0,a.tZ)("button",{type:n,style:m,onClick:g,children:Z})}},5588:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var a=n(9268),r=n(7653),i=n(6008),o=n(6006),c=n(2236),l=n(4214);let u=e=>{let{children:t,action:n,plan:u,...s}=e,d=(0,i.useRouter)(),{user:p}=(0,r.E)(),{service_id:h}=(0,i.useParams)();return(0,i.useSearchParams)(),(0,o.useEffect)(()=>{if(p){let e=async()=>{n&&"free"===(await (0,l.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/user/").concat(h,"/").concat(null==p?void 0:p.uid),method:"get",data:{}})).data.plan?d.push("".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/subscription/url/").concat(h,"/").concat(null==p?void 0:p.uid,"/").concat(u,"?success_url=").concat(window.location.origin,"/").concat(h,"&cancel_url=").concat(window.location.origin,"/").concat(h)):d.push("/".concat(h))};e()}},[p]),p?(0,a.jsx)(c.A,{children:"Loading"}):t}},6685:function(e,t,n){"use strict";n.d(t,{y:function(){return i}});var a=n(5457),r=n(631);let i=(0,a.ZP)(r.Z)(e=>({"& .MuiOutlinedInput-root":{"& fieldset":{}}}))},2236:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var a=n(9268),r=n(7994),i=n(1947);n(3821),n(7809),n(5416),n(9328);var o=n(7653);let c=e=>{let{children:t}=e,n=r.W;return(0,a.jsx)(i.Z,{theme:n,children:(0,a.jsx)(o.H,{children:t})})}},8511:function(e,t,n){"use strict";n.d(t,{Ap:function(){return o},I8:function(){return c}});var a=n(1313),r=n(4734);let i=(0,a.ZF)({apiKey:"AIzaSyChB7eBjMaX_lRpfIgUxQDi39Qh82R4oyQ",authDomain:"sandbox-35d1d.firebaseapp.com",projectId:"sandbox-35d1d",storageBucket:"sandbox-35d1d.appspot.com",messagingSenderId:"906287459396",appId:"1:906287459396:web:c931c95d943157cae36011"}),o=new r.hJ,c=(0,r.v0)(i)},3271:function(e,t,n){"use strict";n.d(t,{CH:function(){return i},Ge:function(){return o},Vl:function(){return r}});var a=n(2120);let r={Jp:(0,a.iv)({fontFamily:'"Roboto", "Noto Sans JP"'})},i={px32:(0,a.iv)({fontSize:32,lineHeight:"46px"}),px24:(0,a.iv)({fontSize:24,lineHeight:"29px"}),px20:(0,a.iv)({fontSize:20,lineHeight:"24px"}),px18:(0,a.iv)({fontSize:18,lineHeight:"26px"}),px16:(0,a.iv)({fontSize:16,lineHeight:"19px"}),px14:(0,a.iv)({fontSize:14,lineHeight:"20px"}),px12:(0,a.iv)({fontSize:12,lineHeight:"17px"})},o=e=>({title:(0,a.iv)([i.px20,r.Jp,{fontWeight:700,color:e.palette.text.primary}]),subtitle:(0,a.iv)([i.px16,r.Jp,{fontWeight:700,color:e.palette.text.secondary}]),item:(0,a.iv)([i.px18,r.Jp,{fontWeight:500,color:e.palette.text.primary}]),body:(0,a.iv)([i.px16,r.Jp,{fontWeight:500,color:e.palette.text.primary}]),disc:(0,a.iv)([i.px14,r.Jp,{fontWeight:500,color:e.palette.text.primary}])})},7994:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var a=n(2780),r=n(7090),i=n(8537),o=n(8238),c=n(1460);let l={white:"#FFFFFF",whiteOp70:"rgba(255, 255, 255, 0.7);",whiteOp20:"rgba(255, 255, 255, 0.2);",black:"#000000",blackOp50:"rgba(0, 0, 0, 0.5);",green500:o.Z["500"],red500:c.Z["500"],blue500:r.Z["500"],gray800:"#424242",gray500:"#9E9E9E",gray400:"#BDBDBD",gray500Op50:"rgba(158, 158, 158, 0.5);",artifactBg:"linear-gradient(117.46deg, #6D5654 0.71%, #E3AA54 101.54%);",dawn:" linear-gradient(156.05deg, #FF0000 -55.32%, #FFB199 111.96%);",main:{A100:a.Z.A100,A200:a.Z.A200,200:a.Z["200"],300:a.Z["300"],400:a.Z["400"],500:a.Z["500"],600:a.Z["600"],700:a.Z["700"],L500:r.Z["500"]},scale:{10:"#8FE646",20:"#C2E645",30:"#E6D517",40:"#E68D17",50:"#E66B45",60:"#E65370"}},u="#212121",s="#757575",d=(0,i.Z)({palette:{mode:"light",com:l,primary:a.Z,secondary:r.Z,local:{bg:"#EEEEEE",modal:"F5F5F5",paper:"#FFFFFF",white:"#FFFFFF",black:u,gray:s,nekodigi:"linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);",whiteDark:"#D1D1D1"},text:{primary:u,secondary:s}}})},7653:function(e,t,n){"use strict";n.d(t,{E:function(){return u},H:function(){return s}});var a=n(9268),r=n(8511),i=n(4214),o=n(6008),c=n(6006);let l=(0,c.createContext)({});function u(){return(0,c.useContext)(l)}function s(e){let{children:t}=e,[n,u]=(0,c.useState)(null),[s,d]=(0,c.useState)(!0),p=(0,o.useSearchParams)(),{service_id:h}=(0,o.useParams)();return(0,c.useEffect)(()=>{let e=r.I8.onAuthStateChanged(e=>{u(e),d(!1);let t=async()=>{let t=p.get("link_target");console.log("proceed?"+t),(null==e?void 0:e.uid)&&t&&(console.log("updated!"),await (0,i.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/redirect/").concat(h,"/").concat(t,"?dest_user=").concat(null==e?void 0:e.uid),method:"put",data:{}}))};t()});return()=>{e()}},[]),(0,a.jsx)(l.Provider,{value:{user:n,loading:s},children:!s&&t})}}},function(e){e.O(0,[913,833,813,717,883,267,253,769,744],function(){return e(e.s=6646)}),_N_E=e.O()}]);