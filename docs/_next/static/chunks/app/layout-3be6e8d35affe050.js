(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1947:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(431),u=n(6750),a=n(6006);let o=a.createContext(null);function i(){let e=a.useContext(o);return e}let c="function"==typeof Symbol&&Symbol.for;var l=c?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(9268),d=function(e){let{children:t,theme:n}=e,r=i(),u=a.useMemo(()=>{let e=null===r?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return{...e,...t}}(r,n);return null!=e&&(e[l]=null!==r),e},[n,r]);return(0,s.jsx)(o.Provider,{value:u,children:t})},f=n(7464),h=n(5396);let m={};function p(e,t,n,u=!1){return a.useMemo(()=>{let a=e&&t[e]||t;if("function"==typeof n){let o=n(a),i=e?(0,r.Z)({},t,{[e]:o}):o;return u?()=>i:i}return e?(0,r.Z)({},t,{[e]:n}):(0,r.Z)({},t,n)},[e,t,n,u])}var g=function(e){let{children:t,theme:n,themeId:r}=e,u=(0,h.Z)(m),a=i()||m,o=p(r,u,n),c=p(r,a,n,!0);return(0,s.jsx)(d,{theme:c,children:(0,s.jsx)(f.T.Provider,{value:o,children:t})})},F=n(6356);let Z=["theme"];function E(e){let{theme:t}=e,n=(0,u.Z)(e,Z),a=t[F.Z];return(0,s.jsx)(g,(0,r.Z)({},n,{themeId:a?F.Z:void 0,theme:a||t}))}},9685:function(e,t,n){Promise.resolve().then(n.bind(n,8679)),Promise.resolve().then(n.t.bind(n,7977,23)),Promise.resolve().then(n.t.bind(n,7402,23))},8679:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(9268),u=n(2236),a=n(7994),o=n(1947),i=n(6006);function c(e){let{children:t}=e,[n,c]=(0,i.useState)(a.W);return(0,r.jsx)(o.Z,{theme:n,children:(0,r.jsx)(u.A,{children:t})})}},2236:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(9268),u=n(7994),a=n(1947);n(3821),n(7809),n(5416),n(9328);var o=n(7653);let i=e=>{let{children:t}=e,n=u.W;return(0,r.jsx)(a.Z,{theme:n,children:(0,r.jsx)(o.H,{children:t})})}},8511:function(e,t,n){"use strict";n.d(t,{Ap:function(){return o},I8:function(){return i}});var r=n(1313),u=n(4734);let a=(0,r.ZF)({apiKey:"AIzaSyChB7eBjMaX_lRpfIgUxQDi39Qh82R4oyQ",authDomain:"sandbox-35d1d.firebaseapp.com",projectId:"sandbox-35d1d",storageBucket:"sandbox-35d1d.appspot.com",messagingSenderId:"906287459396",appId:"1:906287459396:web:c931c95d943157cae36011"}),o=new u.hJ,i=(0,u.v0)(a)},7994:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var r=n(2780),u=n(7090),a=n(8537),o=n(8238),i=n(1460);let c={white:"#FFFFFF",whiteOp70:"rgba(255, 255, 255, 0.7);",whiteOp20:"rgba(255, 255, 255, 0.2);",black:"#000000",blackOp50:"rgba(0, 0, 0, 0.5);",green500:o.Z["500"],red500:i.Z["500"],blue500:u.Z["500"],gray800:"#424242",gray500:"#9E9E9E",gray400:"#BDBDBD",gray500Op50:"rgba(158, 158, 158, 0.5);",artifactBg:"linear-gradient(117.46deg, #6D5654 0.71%, #E3AA54 101.54%);",dawn:" linear-gradient(156.05deg, #FF0000 -55.32%, #FFB199 111.96%);",main:{A100:r.Z.A100,A200:r.Z.A200,200:r.Z["200"],300:r.Z["300"],400:r.Z["400"],500:r.Z["500"],600:r.Z["600"],700:r.Z["700"],L500:u.Z["500"]},scale:{10:"#8FE646",20:"#C2E645",30:"#E6D517",40:"#E68D17",50:"#E66B45",60:"#E65370"}},l="#212121",s="#757575",d=(0,a.Z)({palette:{mode:"light",com:c,primary:r.Z,secondary:u.Z,local:{bg:"#EEEEEE",modal:"F5F5F5",paper:"#FFFFFF",white:"#FFFFFF",black:l,gray:s,nekodigi:"linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);",whiteDark:"#D1D1D1"},text:{primary:l,secondary:s}}})},7653:function(e,t,n){"use strict";n.d(t,{E:function(){return l},H:function(){return s}});var r=n(9268),u=n(8511),a=n(4214),o=n(6008),i=n(6006);let c=(0,i.createContext)({});function l(){return(0,i.useContext)(c)}function s(e){let{children:t}=e,[n,l]=(0,i.useState)(null),[s,d]=(0,i.useState)(!0),f=(0,o.useSearchParams)(),{service_id:h}=(0,o.useParams)();return(0,i.useEffect)(()=>{let e=u.I8.onAuthStateChanged(e=>{l(e),d(!1);let t=async()=>{let t=f.get("link_target");console.log("proceed?"+t),(null==e?void 0:e.uid)&&t&&(console.log("updated!"),await (0,a.Z)({url:"".concat("https://charge-framework-backend-o3mmnjeefa-an.a.run.app","/redirect/").concat(h,"/").concat(t,"?dest_user=").concat(null==e?void 0:e.uid),method:"put",data:{}}))};t()});return()=>{e()}},[]),(0,r.jsx)(c.Provider,{value:{user:n,loading:s},children:!s&&t})}},7402:function(){},5416:function(){},9328:function(){},3821:function(){},7809:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}}},function(e){e.O(0,[913,833,717,253,769,744],function(){return e(e.s=9685)}),_N_E=e.O()}]);