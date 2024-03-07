import{r as c,o as x,l as s,I as d,A as l,J as o,L as m}from"./index-97e907e5.js";import{L as f}from"./Layout-0132f0f6.js";import{h as g}from"./moment-fbc5633a.js";import{P as j,C as k}from"./index.esm-5a99fac3.js";import{F as A}from"./index.esm-5da6e98a.js";import{G as I}from"./index.esm-80f1fc42.js";import{T as N}from"./Table-93fc8413.js";import"./index-40a788b9.js";import"./index-b8dd28ef.js";import"./motion-32b3f91a.js";import"./Dropdown-da03a51e.js";import"./index-2274756a.js";import"./debounce-aea7fb9f.js";function F(){const[p,h]=c.useState([]),e=x(),i=async()=>{try{e(d());const a=await l.get("/api/admin/get-all-doctors",{token:document.cookie});e(o()),a.data.success&&h(a.data.data)}catch{e(o())}},n=async(a,t)=>{try{e(d());const r=await l.post("/api/admin/change-doctor-account-status",{token:document.cookie,doctorId:a._id,userId:a.userId,status:t},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});e(o()),r.data.success&&(m.success(r.data.message),i())}catch{m.error("Error changing doctor account status"),e(o())}};c.useEffect(()=>{i()},[]);const u=[{title:"Name",dataIndex:"name",render:(a,t)=>s.jsxs("span",{children:[t.firstName," ",t.lastName]})},{title:"Phone",dataIndex:"phoneNumber",render:(a,t)=>s.jsxs("span",{style:{color:"#0087BA"},children:[s.jsx(j,{style:{fontSize:20}})," ",t==null?void 0:t.phoneNumber]})},{title:"Created At",dataIndex:"createdAt",render:a=>s.jsxs("span",{children:[s.jsx(A,{style:{fontSize:20,marginRight:8}}),g(a.createdAt).format("DD-MM-YYYY")]})},{title:"status",dataIndex:"status",render:(a,t)=>s.jsx("span",{children:s.jsx(k,{status:t==null?void 0:t.status})})},{title:"Actions",dataIndex:"actions",render:(a,t)=>s.jsxs("div",{className:"d-flex",children:[t.status==="pending"&&s.jsx("h1",{className:"anchor",onClick:()=>n(t,"approved"),children:"Approve"}),t.status==="approved"&&s.jsx("h1",{className:"anchor",onClick:()=>n(t,"blocked"),children:"Block"}),t.status==="blocked"&&s.jsx("h1",{className:"anchor",onClick:()=>n(t,"approved"),children:"Approve"})]})}];return s.jsxs(f,{children:[s.jsxs("h1",{style:{color:"#0087ba"},className:"page-header",children:[s.jsx(I,{})," Doctors List"]}),s.jsx("hr",{}),s.jsx(N,{columns:u,dataSource:p})]})}export{F as default};