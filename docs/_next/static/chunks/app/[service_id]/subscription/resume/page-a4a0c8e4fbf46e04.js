(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{6851:function(e,t,n){Promise.resolve().then(n.bind(n,7738))},7738:function(e,t,n){"use strict";n.r(t);var i=n(9440),r=n(8780),o=n(3271),a=n(7994),c=n(7881),l=n(7653),s=n(9843),u=n(5507),d=n(4240),p=n(4214),E=n(6008),h=n(6006);t.default=()=>{let{user:e}=(0,l.E)(),t=(0,E.useRouter)(),{service_id:n}=(0,E.useParams)(),[g,_]=(0,h.useState)(""),f=a.W,m=async()=>{let i=(await (0,p.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/subscription/resume/").concat(n,"/").concat(null==e?void 0:e.uid),method:"put",data:{}})).data;console.log(i),i.status===c.i.SUBSCRIPTION_RESUME_AT_PERIOD_END?t.push("/".concat(n,"/subscription/resumed")):_(i.status)};return(0,i.tZ)(s.Z,{maxWidth:"xs",sx:{py:4,pt:12},children:(0,i.BX)(u.Z,{gap:4,alignItems:"center",children:[(0,i.tZ)(d.Z,{css:(0,o.Ge)(f).title,children:"Welcome back!"}),g?(0,i.tZ)(d.Z,{css:[(0,o.Ge)(f).disc,{color:f.palette.error.main}],children:g}):void 0,(0,i.tZ)(d.Z,{css:(0,o.Ge)(f).disc,children:"We're glad you've chosen to resume your subscription.\n          Please note that you won't be charged until the next billing period\n          begins. We appreciate your continued support and look forward to\n          providing you with our services."}),(0,i.tZ)(r.k,{type:"fill",color:f.palette.com.green500,label:"Continue",onClick:m,style:{width:"100%"}}),(0,i.tZ)(r.k,{type:"contained",label:"Back to home",href:"/".concat(n),style:{width:"100%"}})]})})}},8780:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var i=n(9440),r=n(3271),o=n(4957),a=n(5507),c=n(4240);let l=e=>{let{type:t,buttonType:n,img:l,color:s,href:u,label:d,style:p,labelStyle:E,onClick:h}=e,g=(0,o.Z)(),_={display:"flex",justifyContent:"center",alignItems:"center",height:48,borderRadius:4,textDecoration:"none",..."contained"===t?{border:2,borderStyle:"solid",borderColor:g.palette.com.black}:{backgroundColor:s},...p},f=(0,i.BX)(a.Z,{direction:"row",gap:1.5,alignItems:"center",children:[l?(0,i.tZ)("img",{src:l,width:24,height:24}):void 0,(0,i.tZ)(c.Z,{css:[(0,r.Ge)(g).item,{fontWeight:700,color:"contained"===t?g.palette.com.black:g.palette.com.white},E],children:d})]});return u?(0,i.tZ)("a",{style:_,href:u,onClick:h,children:f}):(0,i.tZ)("button",{type:n,style:_,onClick:h,children:f})}},8511:function(e,t,n){"use strict";n.d(t,{Ap:function(){return l},I8:function(){return s}});var i=n(1313),r=n(4734),o=n(2040);let a={apiKey:"AIzaSyChB7eBjMaX_lRpfIgUxQDi39Qh82R4oyQ",authDomain:"sandbox-35d1d.firebaseapp.com",projectId:"sandbox-35d1d",storageBucket:"sandbox-35d1d.appspot.com",messagingSenderId:o.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,appId:o.env.NEXT_PUBLIC_FIREBASE_SENDER_ID},c=(0,i.ZF)(a),l=new r.hJ,s=(0,r.v0)(c)},3271:function(e,t,n){"use strict";n.d(t,{Ge:function(){return a}});var i=n(2120);let r={Jp:(0,i.iv)({fontFamily:'"Roboto", "Noto Sans JP"'})},o={px32:(0,i.iv)({fontSize:32,lineHeight:"46px"}),px24:(0,i.iv)({fontSize:24,lineHeight:"29px"}),px20:(0,i.iv)({fontSize:20,lineHeight:"24px"}),px18:(0,i.iv)({fontSize:18,lineHeight:"26px"}),px16:(0,i.iv)({fontSize:16,lineHeight:"19px"}),px14:(0,i.iv)({fontSize:14,lineHeight:"20px"}),px12:(0,i.iv)({fontSize:12,lineHeight:"17px"})},a=e=>({title:(0,i.iv)([o.px20,r.Jp,{fontWeight:700,color:e.palette.text.primary}]),subtitle:(0,i.iv)([o.px16,r.Jp,{fontWeight:700,color:e.palette.text.secondary}]),item:(0,i.iv)([o.px18,r.Jp,{fontWeight:500,color:e.palette.text.primary}]),body:(0,i.iv)([o.px16,r.Jp,{fontWeight:500,color:e.palette.text.primary}]),disc:(0,i.iv)([o.px14,r.Jp,{fontWeight:500,color:e.palette.text.primary}])})},7994:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var i=n(2780),r=n(7090),o=n(8537),a=n(8238),c=n(1460);let l={white:"#FFFFFF",whiteOp70:"rgba(255, 255, 255, 0.7);",whiteOp20:"rgba(255, 255, 255, 0.2);",black:"#000000",blackOp50:"rgba(0, 0, 0, 0.5);",green500:a.Z["500"],red500:c.Z["500"],blue500:r.Z["500"],gray800:"#424242",gray500:"#9E9E9E",gray400:"#BDBDBD",gray500Op50:"rgba(158, 158, 158, 0.5);",artifactBg:"linear-gradient(117.46deg, #6D5654 0.71%, #E3AA54 101.54%);",dawn:" linear-gradient(156.05deg, #FF0000 -55.32%, #FFB199 111.96%);",main:{A100:i.Z.A100,A200:i.Z.A200,200:i.Z["200"],300:i.Z["300"],400:i.Z["400"],500:i.Z["500"],600:i.Z["600"],700:i.Z["700"],L500:r.Z["500"]},scale:{10:"#8FE646",20:"#C2E645",30:"#E6D517",40:"#E68D17",50:"#E66B45",60:"#E65370"}},s="#212121",u="#757575",d=(0,o.Z)({palette:{mode:"light",com:l,primary:i.Z,secondary:r.Z,local:{bg:"#EEEEEE",modal:"F5F5F5",paper:"#FFFFFF",white:"#FFFFFF",black:s,gray:u,nekodigi:"linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);"},text:{primary:s,secondary:u}}})},7881:function(e,t,n){"use strict";n.d(t,{i:function(){return i}});let i={GLOBAL_QUOTA_NOT_ENOUGH:"GLOBAL_QUOTA_NOT_ENOUGH",QUOTA_NOT_ENOUGH:"QUOTA_NOT_ENOUGH",USER_QUOTA_UPDATED:"USER_QUOTA_UPDATED",SERVICE_QUOTA_UPDATED:"SERVICE_QUOTA_UPDATED",OK:"OK",FAILED:"FAILED",SUBSCRIPTION_CANCEL_AT_PERIOD_END:"SUBSCRIPTION_CANCEL_AT_PERIOD_END",SUBSCRIPTION_RESUME_AT_PERIOD_END:"SUBSCRIPTION_RESUME_AT_PERIOD_END"}},7653:function(e,t,n){"use strict";n.d(t,{E:function(){return s},H:function(){return u}});var i=n(9268),r=n(8511),o=n(4214),a=n(6008),c=n(6006);let l=(0,c.createContext)({});function s(){return(0,c.useContext)(l)}function u(e){let{children:t}=e,[n,s]=(0,c.useState)(null),[u,d]=(0,c.useState)(!0),p=(0,a.useSearchParams)(),{service_id:E}=(0,a.useParams)();return(0,c.useEffect)(()=>{let e=r.I8.onAuthStateChanged(e=>{s(e),d(!1);let t=async()=>{let t=p.get("link_target");t&&await (0,o.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/redirect/").concat(E,"/").concat(t,"?dest_user=").concat(null==e?void 0:e.uid),method:"put",data:{}})};t()});return()=>{e()}},[]),(0,i.jsx)(l.Provider,{value:{user:n,loading:u},children:!u&&t})}}},function(e){e.O(0,[913,833,813,253,769,744],function(){return e(e.s=6851)}),_N_E=e.O()}]);