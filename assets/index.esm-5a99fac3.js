import{R as l,_ as $,u as z,a as A,aU as f,P as a,l as L,az as w}from"./index-97e907e5.js";import{j as y}from"./Layout-0132f0f6.js";var g,x,r=l.forwardRef(function(e,s){var t=e.as,C=t===void 0?"div":t,c=e.classPrefix,u=c===void 0?"tag":c,i=e.size,p=i===void 0?"md":i,n=e.color,P=n===void 0?"default":n,v=e.children,m=e.closable,h=e.className,_=e.onClose,N=$(e,["as","classPrefix","size","color","children","closable","className","onClose"]),o=z(u),b=o.withClassPrefix,d=o.prefix,T=o.merge,j=T(h,b(p,P,{closable:m}));return l.createElement(C,A({},N,{ref:s,className:j}),l.createElement("span",{className:d(g||(g=f(["text"])))},v),m&&l.createElement(y,{className:d(x||(x=f(["icon-close"]))),onClick:_}))});r.displayName="Tag";r.propTypes={closable:a.bool,classPrefix:a.string,onClose:a.func,children:a.node,className:a.string,as:a.elementType};const E=r,B=({status:e})=>{const s=e;return L.jsx(E,{color:`${s==="rejected"?"red":s==="pending"?"orange":"green"}`,children:e})};function O(e){return w({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"}}]})(e)}export{B as C,O as P};
