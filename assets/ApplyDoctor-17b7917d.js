import{o as p,n as d,m as h,l as s,I as g,A as u,J as e,L as i}from"./index-97e907e5.js";import{L as f}from"./Layout-0132f0f6.js";import{D as l}from"./DoctorForm-75579c4d.js";import{h as m}from"./moment-fbc5633a.js";import{G as x}from"./index.esm-80f1fc42.js";import"./index-b8dd28ef.js";import"./index-40a788b9.js";import"./motion-32b3f91a.js";import"./index-997c21e6.js";import"./index-2274756a.js";function G(){const r=p(),{user:a}=d(o=>o.userSlice),n=h(),c=async o=>{try{r(g());const t=await u.post("/api/user/apply-doctor-account",{token:document.cookie,...o,userId:a==null?void 0:a._id,timings:[m(o.timings[0]).format("HH:mm"),m(o.timings[1]).format("HH:mm")]});r(e()),t.data.success?(i.success(t.data.message),n("/")):i.error(t.data.message)}catch{r(e()),i.error("Something went wrong")}};return s.jsxs(f,{children:[s.jsxs("h1",{className:"page-title",children:[" ",s.jsx(x,{})," Apply Doctor"]}),s.jsx("hr",{}),s.jsx(l,{onFinish:c})]})}export{G as default};