import{aH as B,aI as $,aJ as K,aK as j,r as n,L as D,a as F}from"./index-7eebd061.js";import{k as J,t as V}from"./index-62d1e2ca.js";import{s as X,d as Y,o as M,t as q}from"./Layout-c4c940da.js";var c=new Map;function G(e){e.forEach(function(t){var r,o=t.target;(r=c.get(o))===null||r===void 0||r.forEach(function(i){return i(o)})})}var S=new J(G);function Q(e,t){c.has(e)||(c.set(e,new Set),S.observe(e)),c.get(e).add(t)}function U(e,t){c.has(e)&&(c.get(e).delete(t),c.get(e).size||(S.unobserve(e),c.delete(e)))}var Z=function(e){B(r,e);var t=$(r);function r(){return K(this,r),t.apply(this,arguments)}return j(r,[{key:"render",value:function(){return this.props.children}}]),r}(n.Component),E=n.createContext(null);function ee(e){var t=e.children,r=e.onBatchResize,o=n.useRef(0),i=n.useRef([]),a=n.useContext(E),l=n.useCallback(function(v,u,f){o.current+=1;var d=o.current;i.current.push({size:v,element:u,data:f}),Promise.resolve().then(function(){d===o.current&&(r==null||r(i.current),i.current=[])}),a==null||a(v,u,f)},[r,a]);return n.createElement(E.Provider,{value:l},t)}function re(e,t){var r=e.children,o=e.disabled,i=n.useRef(null),a=n.useRef(null),l=n.useContext(E),v=typeof r=="function",u=v?r(i):r,f=n.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),d=!v&&n.isValidElement(u)&&X(u),H=d?u.ref:null,I=n.useMemo(function(){return Y(H,i)},[H,i]),b=function(){return M(i.current)||M(a.current)};n.useImperativeHandle(t,function(){return b()});var y=n.useRef(e);y.current=e;var z=n.useCallback(function(s){var w=y.current,_=w.onResize,N=w.data,k=s.getBoundingClientRect(),p=k.width,R=k.height,h=s.offsetWidth,g=s.offsetHeight,L=Math.floor(p),x=Math.floor(R);if(f.current.width!==L||f.current.height!==x||f.current.offsetWidth!==h||f.current.offsetHeight!==g){var W={width:L,height:x,offsetWidth:h,offsetHeight:g};f.current=W;var T=h===Math.round(p)?p:h,P=g===Math.round(R)?R:g,A=D(D({},W),{},{offsetWidth:T,offsetHeight:P});l==null||l(A,s,N),_&&Promise.resolve().then(function(){_(A,s)})}},[]);return n.useEffect(function(){var s=b();return s&&!o&&Q(s,z),function(){return U(s,z)}},[i.current,o]),n.createElement(Z,{ref:a},d?n.cloneElement(u,{ref:I}):u)}var te=n.forwardRef(re),ne="rc-observer-key";function ie(e,t){var r=e.children,o=typeof r=="function"?[r]:V(r);return o.map(function(i,a){var l=(i==null?void 0:i.key)||"".concat(ne,"-").concat(a);return n.createElement(te,F({},e,{key:l,ref:a===0?t:void 0}),i)})}var oe=n.forwardRef(ie);oe.Collection=ee;var m=function(){return{height:0,opacity:0}},O=function(t){var r=t.scrollHeight;return{height:r,opacity:1}},ae=function(t){return{height:t?t.offsetHeight:0}},C=function(t,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},ce={motionName:"ant-motion-collapse",onAppearStart:m,onEnterStart:m,onAppearActive:O,onEnterActive:O,onLeaveStart:ae,onLeaveActive:m,onAppearEnd:C,onEnterEnd:C,onLeaveEnd:C,motionDeadline:500};q("bottomLeft","bottomRight","topLeft","topRight");var le=function(t){return t!==void 0&&(t==="topLeft"||t==="topRight")?"slide-down":"slide-up"},ve=function(t,r,o){return o!==void 0?o:"".concat(t,"-").concat(r)};export{oe as R,le as a,ce as c,ve as g};