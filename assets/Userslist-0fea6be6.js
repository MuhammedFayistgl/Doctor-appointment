import{V as n,r,o as m,l as e,s as h,A as p,p as o}from"./index-240d5420.js";import{L as x,B as f}from"./Layout-b50ea5b8.js";import{h as u}from"./index-c8793afa.js";import{F as g}from"./index.esm-5d72b6a9.js";import{G as j}from"./index.esm-52c48fbb.js";import{T as L}from"./Table-8ad9f1e2.js";import"./index-9d6e3f3e.js";import"./motion-2e8f3aaa.js";import"./Dropdown-8450c78c.js";import"./index-4d2b8163.js";import"./debounce-e3b0acd2.js";function C(s){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}}]})(s)}function M(s){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z"}}]})(s)}function w(){const[s,l]=r.useState([]),i=m(),c=async()=>{try{i(h());const t=await p.get("/api/admin/get-all-users",{token:document.cookie});i(o()),t.data.success&&l(t.data.data)}catch{i(o())}};r.useEffect(()=>{c()},[]);const d=[{title:"Name",dataIndex:"name"},{title:"Role",render:(t,a)=>e.jsx("span",{children:t!=null&&t.isAdmin?e.jsx(M,{style:{fontSize:20,color:"green"}}):t!=null&&t.isDoctor?e.jsx(j,{}):e.jsx(f,{style:{fontSize:20,color:"deeppink"}})})},{title:"Email",dataIndex:"email",render:(t,a)=>e.jsxs("span",{children:[e.jsx(C,{style:{fontSize:20,marginRight:8,color:"#4caf50"}}),a.email]})},{title:"Created At",dataIndex:"createdAt",render:(t,a)=>e.jsxs("span",{children:[e.jsx(g,{style:{fontSize:20,marginRight:8}}),u(t.createdAt).format("DD-MM-YYYY")]})},{title:"Actions",dataIndex:"actions",render:(t,a)=>e.jsx("div",{className:"d-flex",children:e.jsx("h1",{className:"anchor",children:"Block"})})}];return e.jsxs(x,{children:[e.jsx("h1",{className:"page-header",children:"Users List"}),e.jsx("hr",{}),e.jsx(L,{columns:d,dataSource:s})]})}export{w as default};
