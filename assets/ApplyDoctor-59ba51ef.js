import{o as p,n as d,m as h,l as o,s as u,A as g,p as e,J as a}from"./index-240d5420.js";import{L as f}from"./Layout-b50ea5b8.js";import{D as l}from"./DoctorForm-95a4e340.js";import{h as i}from"./index-c8793afa.js";import{G as x}from"./index.esm-52c48fbb.js";import"./index-9d6e3f3e.js";import"./motion-2e8f3aaa.js";import"./index-feb2b448.js";import"./index-4d2b8163.js";function F(){const r=p(),{user:n}=d(s=>s.user),m=h(),c=async s=>{try{r(u());const t=await g.post("/api/user/apply-doctor-account",{token:document.cookie,...s,userId:n._id,timings:[i(s.timings[0]).format("HH:mm"),i(s.timings[1]).format("HH:mm")]});r(e()),t.data.success?(a.success(t.data.message),m("/")):a.error(t.data.message)}catch{r(e()),a.error("Something went wrong")}};return o.jsxs(f,{children:[o.jsxs("h1",{className:"page-title",children:[" ",o.jsx(x,{})," Apply Doctor"]}),o.jsx("hr",{}),o.jsx(l,{onFinish:c})]})}export{F as default};
