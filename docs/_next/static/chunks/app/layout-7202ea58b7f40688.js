(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1947:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(431),u=n(6750),a=n(6006);let i=a.createContext(null);function o(){let e=a.useContext(i);return e}let c="function"==typeof Symbol&&Symbol.for;var l=c?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(9268),d=function(e){let{children:t,theme:n}=e,r=o(),u=a.useMemo(()=>{let e=null===r?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return{...e,...t}}(r,n);return null!=e&&(e[l]=null!==r),e},[n,r]);return(0,s.jsx)(i.Provider,{value:u,children:t})},f=n(7464),E=n(5396);let m={};function h(e,t,n,u=!1){return a.useMemo(()=>{let a=e&&t[e]||t;if("function"==typeof n){let i=n(a),o=e?(0,r.Z)({},t,{[e]:i}):i;return u?()=>o:o}return e?(0,r.Z)({},t,{[e]:n}):(0,r.Z)({},t,n)},[e,t,n,u])}var _=function(e){let{children:t,theme:n,themeId:r}=e,u=(0,E.Z)(m),a=o()||m,i=h(r,u,n),c=h(r,a,n,!0);return(0,s.jsx)(d,{theme:c,children:(0,s.jsx)(f.T.Provider,{value:i,children:t})})},p=n(6356);let F=["theme"];function g(e){let{theme:t}=e,n=(0,u.Z)(e,F),a=t[p.Z];return(0,s.jsx)(_,(0,r.Z)({},n,{themeId:a?p.Z:void 0,theme:a||t}))}},8489:function(e,t,n){Promise.resolve().then(n.bind(n,8679)),Promise.resolve().then(n.t.bind(n,2126,23)),Promise.resolve().then(n.t.bind(n,7402,23))},8679:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(9268),u=n(2236);function a(e){let{children:t}=e;return(0,r.jsx)(u.A,{children:t})}n(6006)},2236:function(e,t,n){"use strict";n.d(t,{A:function(){return o}});var r=n(9268),u=n(7994),a=n(1947);n(3821),n(7809),n(5416),n(9328);var i=n(7653);let o=e=>{let{children:t}=e,n=u.W;return(0,r.jsx)(a.Z,{theme:n,children:(0,r.jsx)(i.H,{children:t})})}},8511:function(e,t,n){"use strict";n.d(t,{Ap:function(){return c},I8:function(){return l}});var r=n(1313),u=n(4734),a=n(2040);let i={apiKey:"AIzaSyChB7eBjMaX_lRpfIgUxQDi39Qh82R4oyQ",authDomain:"sandbox-35d1d.firebaseapp.com",projectId:"sandbox-35d1d",storageBucket:"sandbox-35d1d.appspot.com",messagingSenderId:a.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,appId:a.env.NEXT_PUBLIC_FIREBASE_SENDER_ID},o=(0,r.ZF)(i),c=new u.hJ,l=(0,u.v0)(o)},7994:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var r=n(2780),u=n(7090),a=n(8537),i=n(8238),o=n(1460);let c={white:"#FFFFFF",whiteOp70:"rgba(255, 255, 255, 0.7);",whiteOp20:"rgba(255, 255, 255, 0.2);",black:"#000000",blackOp50:"rgba(0, 0, 0, 0.5);",green500:i.Z["500"],red500:o.Z["500"],blue500:u.Z["500"],gray800:"#424242",gray500:"#9E9E9E",gray400:"#BDBDBD",gray500Op50:"rgba(158, 158, 158, 0.5);",artifactBg:"linear-gradient(117.46deg, #6D5654 0.71%, #E3AA54 101.54%);",dawn:" linear-gradient(156.05deg, #FF0000 -55.32%, #FFB199 111.96%);",main:{A100:r.Z.A100,A200:r.Z.A200,200:r.Z["200"],300:r.Z["300"],400:r.Z["400"],500:r.Z["500"],600:r.Z["600"],700:r.Z["700"],L500:u.Z["500"]},scale:{10:"#8FE646",20:"#C2E645",30:"#E6D517",40:"#E68D17",50:"#E66B45",60:"#E65370"}},l="#212121",s="#757575",d=(0,a.Z)({palette:{mode:"light",com:c,primary:r.Z,secondary:u.Z,local:{bg:"#EEEEEE",modal:"F5F5F5",paper:"#FFFFFF",white:"#FFFFFF",black:l,gray:s,nekodigi:"linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);"},text:{primary:l,secondary:s}}})},7653:function(e,t,n){"use strict";n.d(t,{E:function(){return l},H:function(){return s}});var r=n(9268),u=n(8511),a=n(4214),i=n(6008),o=n(6006);let c=(0,o.createContext)({});function l(){return(0,o.useContext)(c)}function s(e){let{children:t}=e,[n,l]=(0,o.useState)(null),[s,d]=(0,o.useState)(!0),f=(0,i.useSearchParams)(),{service_id:E}=(0,i.useParams)();return(0,o.useEffect)(()=>{let e=u.I8.onAuthStateChanged(e=>{l(e),d(!1);let t=async()=>{let t=f.get("link_target");t&&await (0,a.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/redirect/").concat(E,"/").concat(t,"?dest_user=").concat(null==e?void 0:e.uid),method:"put",data:{}})};t()});return()=>{e()}},[]),(0,r.jsx)(c.Provider,{value:{user:n,loading:s},children:!s&&t})}},7402:function(){},5416:function(){},9328:function(){},3821:function(){},7809:function(){},2126:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}}},function(e){e.O(0,[913,833,717,253,769,744],function(){return e(e.s=8489)}),_N_E=e.O()}]);