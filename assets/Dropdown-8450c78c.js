import{r as t,a as U,c as me,L as _,aM as Bt,R as zn,M as D,aI as Wn,aJ as Un,aK as Hn,aL as jn,O as Gn}from"./index-240d5420.js";import{a as qn,d as Bn,A as Yn,j as Yt,_ as We,f as Xn,K as he,b as vt,w as Xt,o as Jt,t as Jn,T as Zt}from"./index-9d6e3f3e.js";import{_ as Y,w as ze,a as O,l as Zn,u as Qn,C as er}from"./Layout-b50ea5b8.js";import{R as Qt}from"./motion-2e8f3aaa.js";var tr=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],qe=void 0;function nr(e,n){var a=e.prefixCls,o=e.invalidate,r=e.item,l=e.renderItem,i=e.responsive,u=e.responsiveDisabled,s=e.registerSize,c=e.itemKey,d=e.className,C=e.style,v=e.children,y=e.display,f=e.order,I=e.component,S=I===void 0?"div":I,R=Y(e,tr),P=i&&!y;function b(E){s(c,E)}t.useEffect(function(){return function(){b(null)}},[]);var p=l&&r!==qe?l(r):v,h;o||(h={opacity:P?0:1,height:P?0:qe,overflowY:P?"hidden":qe,order:i?f:qe,pointerEvents:P?"none":qe,position:P?"absolute":qe});var m={};P&&(m["aria-hidden"]=!0);var k=t.createElement(S,U({className:me(!o&&a,d),style:_(_({},h),C)},m,R,{ref:n}),p);return i&&(k=t.createElement(Qt,{onResize:function(q){var V=q.offsetWidth;b(V)},disabled:u},k)),k}var ot=t.forwardRef(nr);ot.displayName="Item";function rr(e){if(typeof MessageChannel>"u")ze(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function ar(){var e=t.useRef(null),n=function(o){e.current||(e.current=[],rr(function(){Bt.unstable_batchedUpdates(function(){e.current.forEach(function(r){r()}),e.current=null})})),e.current.push(o)};return n}function rt(e,n){var a=t.useState(n),o=O(a,2),r=o[0],l=o[1],i=qn(function(u){e(function(){l(u)})});return[r,i]}var gt=zn.createContext(null),ir=["component"],or=["className"],lr=["className"],ur=function(n,a){var o=t.useContext(gt);if(!o){var r=n.component,l=r===void 0?"div":r,i=Y(n,ir);return t.createElement(l,U({},i,{ref:a}))}var u=o.className,s=Y(o,or),c=n.className,d=Y(n,lr);return t.createElement(gt.Provider,{value:null},t.createElement(ot,U({ref:a,className:me(u,c)},s,d)))},en=t.forwardRef(ur);en.displayName="RawItem";var sr=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],tn="responsive",nn="invalidate";function cr(e){return"+ ".concat(e.length," ...")}function fr(e,n){var a=e.prefixCls,o=a===void 0?"rc-overflow":a,r=e.data,l=r===void 0?[]:r,i=e.renderItem,u=e.renderRawItem,s=e.itemKey,c=e.itemWidth,d=c===void 0?10:c,C=e.ssr,v=e.style,y=e.className,f=e.maxCount,I=e.renderRest,S=e.renderRawRest,R=e.suffix,P=e.component,b=P===void 0?"div":P,p=e.itemComponent,h=e.onVisibleChange,m=Y(e,sr),k=C==="full",E=ar(),q=rt(E,null),V=O(q,2),K=V[0],W=V[1],H=K||0,j=rt(E,new Map),G=O(j,2),$=G[0],L=G[1],ie=rt(E,0),pe=O(ie,2),oe=pe[0],ne=pe[1],F=rt(E,0),M=O(F,2),x=M[0],J=M[1],Me=rt(E,0),Se=O(Me,2),le=Se[0],Ce=Se[1],Z=t.useState(null),B=O(Z,2),xe=B[0],Ke=B[1],Oe=t.useState(null),Pe=O(Oe,2),ye=Pe[0],Ue=Pe[1],ue=t.useMemo(function(){return ye===null&&k?Number.MAX_SAFE_INTEGER:ye||0},[ye,K]),He=t.useState(!1),Ae=O(He,2),se=Ae[0],Ze=Ae[1],Re="".concat(o,"-item"),De=Math.max(oe,x),ke=f===tn,Q=l.length&&ke,we=f===nn,$e=Q||typeof f=="number"&&l.length>f,re=t.useMemo(function(){var g=l;return Q?K===null&&k?g=l:g=l.slice(0,Math.min(l.length,H/d)):typeof f=="number"&&(g=l.slice(0,f)),g},[l,d,K,f,Q]),be=t.useMemo(function(){return Q?l.slice(ue+1):l.slice(re.length)},[l,re,Q,ue]),X=t.useCallback(function(g,w){var z;return typeof s=="function"?s(g):(z=s&&(g==null?void 0:g[s]))!==null&&z!==void 0?z:w},[s]),Ne=t.useCallback(i||function(g){return g},[i]);function ce(g,w,z){ye===g&&(w===void 0||w===xe)||(Ue(g),z||(Ze(g<l.length-1),h==null||h(g)),w!==void 0&&Ke(w))}function fe(g,w){W(w.clientWidth)}function ee(g,w){L(function(z){var ve=new Map(z);return w===null?ve.delete(g):ve.set(g,w),ve})}function bt(g,w){J(w),ne(x)}function It(g,w){Ce(w)}function Le(g){return $.get(X(re[g],g))}Bn(function(){if(H&&typeof De=="number"&&re){var g=le,w=re.length,z=w-1;if(!w){ce(0,null);return}for(var ve=0;ve<w;ve+=1){var Te=Le(ve);if(k&&(Te=Te||0),Te===void 0){ce(ve-1,void 0,!0);break}if(g+=Te,z===0&&g<=H||ve===z-1&&g+Le(z)<=H){ce(z,null);break}else if(g+De>H){ce(ve-1,g-Te-le+x);break}}R&&Le(0)+le>H&&Ke(null)}},[H,$,x,le,X,re]);var st=se&&!!be.length,Qe={};xe!==null&&Q&&(Qe={position:"absolute",left:xe,top:0});var Ie={prefixCls:Re,responsive:Q,component:p,invalidate:we},et=u?function(g,w){var z=X(g,w);return t.createElement(gt.Provider,{key:z,value:_(_({},Ie),{},{order:w,item:g,itemKey:z,registerSize:ee,display:w<=ue})},u(g,w))}:function(g,w){var z=X(g,w);return t.createElement(ot,U({},Ie,{order:w,key:z,item:g,renderItem:Ne,itemKey:z,registerSize:ee,display:w<=ue}))},je,ct={order:st?ue:Number.MAX_SAFE_INTEGER,className:"".concat(Re,"-rest"),registerSize:bt,display:st};if(S)S&&(je=t.createElement(gt.Provider,{value:_(_({},Ie),ct)},S(be)));else{var Ge=I||cr;je=t.createElement(ot,U({},Ie,ct),typeof Ge=="function"?Ge(be):Ge)}var de=t.createElement(b,U({className:me(!we&&o,y),style:v,ref:n},m),re.map(et),$e?je:null,R&&t.createElement(ot,U({},Ie,{responsive:ke,responsiveDisabled:!Q,order:ue,className:"".concat(Re,"-suffix"),registerSize:It,display:!0,style:Qe}),R));return ke&&(de=t.createElement(Qt,{onResize:fe,disabled:!Q},de)),de}var Ee=t.forwardRef(fr);Ee.displayName="Overflow";Ee.Item=en;Ee.RESPONSIVE=tn;Ee.INVALIDATE=nn;var dr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const vr=dr;var rn=function(n,a){return t.createElement(Yn,_(_({},n),{},{ref:a,icon:vr}))};rn.displayName="EllipsisOutlined";const oa=t.forwardRef(rn);var an=t.createContext(null);function Nt(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function on(e){var n=t.useContext(an);return Nt(n,e)}var mr=["children","locked"],ge=t.createContext(null);function pr(e,n){var a=_({},e);return Object.keys(n).forEach(function(o){var r=n[o];r!==void 0&&(a[o]=r)}),a}function lt(e){var n=e.children,a=e.locked,o=Y(e,mr),r=t.useContext(ge),l=Zn(function(){return pr(r,o)},[r,o],function(i,u){return!a&&(i[0]!==u[0]||!Yt(i[1],u[1],!0))});return t.createElement(ge.Provider,{value:l},n)}var gr=[],ln=t.createContext(null);function Ct(){return t.useContext(ln)}var un=t.createContext(gr);function ut(e){var n=t.useContext(un);return t.useMemo(function(){return e!==void 0?[].concat(We(n),[e]):n},[n,e])}var sn=t.createContext(null),_t=t.createContext({});function Ut(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Xn(e)){var a=e.nodeName.toLowerCase(),o=["input","select","textarea","button"].includes(a)||e.isContentEditable||a==="a"&&!!e.getAttribute("href"),r=e.getAttribute("tabindex"),l=Number(r),i=null;return r&&!Number.isNaN(l)?i=l:o&&i===null&&(i=0),o&&e.disabled&&(i=null),i!==null&&(i>=0||n&&i<0)}return!1}function cn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=We(e.querySelectorAll("*")).filter(function(o){return Ut(o,n)});return Ut(e,n)&&a.unshift(e),a}var Et=he.LEFT,Mt=he.RIGHT,xt=he.UP,mt=he.DOWN,pt=he.ENTER,fn=he.ESC,at=he.HOME,it=he.END,Ht=[xt,mt,Et,Mt];function hr(e,n,a,o){var r,l,i,u,s="prev",c="next",d="children",C="parent";if(e==="inline"&&o===pt)return{inlineTrigger:!0};var v=(r={},D(r,xt,s),D(r,mt,c),r),y=(l={},D(l,Et,a?c:s),D(l,Mt,a?s:c),D(l,mt,d),D(l,pt,d),l),f=(i={},D(i,xt,s),D(i,mt,c),D(i,pt,d),D(i,fn,C),D(i,Et,a?d:C),D(i,Mt,a?C:d),i),I={inline:v,horizontal:y,vertical:f,inlineSub:v,horizontalSub:f,verticalSub:f},S=(u=I["".concat(e).concat(n?"":"Sub")])===null||u===void 0?void 0:u[o];switch(S){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case C:return{offset:-1,sibling:!1};case d:return{offset:1,sibling:!1};default:return null}}function Cr(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function yr(e,n){for(var a=e||document.activeElement;a;){if(n.has(a))return a;a=a.parentElement}return null}function dn(e,n){var a=cn(e,!0);return a.filter(function(o){return n.has(o)})}function jt(e,n,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var r=dn(e,n),l=r.length,i=r.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,r[i]}function br(e,n,a,o,r,l,i,u,s,c){var d=t.useRef(),C=t.useRef();C.current=n;var v=function(){ze.cancel(d.current)};return t.useEffect(function(){return function(){v()}},[]),function(y){var f=y.which;if([].concat(Ht,[pt,fn,at,it]).includes(f)){var I,S,R,P=function(){I=new Set,S=new Map,R=new Map;var G=l();return G.forEach(function($){var L=document.querySelector("[data-menu-id='".concat(Nt(o,$),"']"));L&&(I.add(L),R.set(L,$),S.set($,L))}),I};P();var b=S.get(n),p=yr(b,I),h=R.get(p),m=hr(e,i(h,!0).length===1,a,f);if(!m&&f!==at&&f!==it)return;(Ht.includes(f)||[at,it].includes(f))&&y.preventDefault();var k=function(G){if(G){var $=G,L=G.querySelector("a");L!=null&&L.getAttribute("href")&&($=L);var ie=R.get(G);u(ie),v(),d.current=ze(function(){C.current===ie&&$.focus()})}};if([at,it].includes(f)||m.sibling||!p){var E;!p||e==="inline"?E=r.current:E=Cr(p);var q,V=dn(E,I);f===at?q=V[0]:f===it?q=V[V.length-1]:q=jt(E,I,p,m.offset),k(q)}else if(m.inlineTrigger)s(h);else if(m.offset>0)s(h,!0),v(),d.current=ze(function(){P();var j=p.getAttribute("aria-controls"),G=document.getElementById(j),$=jt(G,I);k($)},5);else if(m.offset<0){var K=i(h,!0),W=K[K.length-2],H=S.get(W);s(W,!1),k(H)}}c==null||c(y)}}function Ir(e){Promise.resolve().then(e)}var Kt="__RC_UTIL_PATH_SPLIT__",Gt=function(n){return n.join(Kt)},Sr=function(n){return n.split(Kt)},Pt="rc-menu-more";function Rr(){var e=t.useState({}),n=O(e,2),a=n[1],o=t.useRef(new Map),r=t.useRef(new Map),l=t.useState([]),i=O(l,2),u=i[0],s=i[1],c=t.useRef(0),d=t.useRef(!1),C=function(){d.current||a({})},v=t.useCallback(function(b,p){var h=Gt(p);r.current.set(h,b),o.current.set(b,h),c.current+=1;var m=c.current;Ir(function(){m===c.current&&C()})},[]),y=t.useCallback(function(b,p){var h=Gt(p);r.current.delete(h),o.current.delete(b)},[]),f=t.useCallback(function(b){s(b)},[]),I=t.useCallback(function(b,p){var h=o.current.get(b)||"",m=Sr(h);return p&&u.includes(m[0])&&m.unshift(Pt),m},[u]),S=t.useCallback(function(b,p){return b.some(function(h){var m=I(h,!0);return m.includes(p)})},[I]),R=function(){var p=We(o.current.keys());return u.length&&p.push(Pt),p},P=t.useCallback(function(b){var p="".concat(o.current.get(b)).concat(Kt),h=new Set;return We(r.current.keys()).forEach(function(m){m.startsWith(p)&&h.add(r.current.get(m))}),h},[]);return t.useEffect(function(){return function(){d.current=!0}},[]),{registerPath:v,unregisterPath:y,refreshOverflowKeys:f,isSubPathKey:S,getKeyPath:I,getKeys:R,getSubPathKeys:P}}function Je(e){var n=t.useRef(e);n.current=e;var a=t.useCallback(function(){for(var o,r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(o=n.current)===null||o===void 0?void 0:o.call.apply(o,[n].concat(l))},[]);return e?a:void 0}var Er=Math.random().toFixed(5).toString().slice(2),qt=0;function Mr(e){var n=vt(e,{value:e}),a=O(n,2),o=a[0],r=a[1];return t.useEffect(function(){qt+=1;var l="".concat(Er,"-").concat(qt);r("rc-menu-uuid-".concat(l))},[]),o}function vn(e,n,a,o){var r=t.useContext(ge),l=r.activeKey,i=r.onActive,u=r.onInactive,s={active:l===e};return n||(s.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),i(e)},s.onMouseLeave=function(c){o==null||o({key:e,domEvent:c}),u(e)}),s}function mn(e){var n=t.useContext(ge),a=n.mode,o=n.rtl,r=n.inlineIndent;if(a!=="inline")return null;var l=e;return o?{paddingRight:l*r}:{paddingLeft:l*r}}function pn(e){var n=e.icon,a=e.props,o=e.children,r;return typeof n=="function"?r=t.createElement(n,_({},a)):r=n,r||o||null}var xr=["item"];function ht(e){var n=e.item,a=Y(e,xr);return Object.defineProperty(a,"item",{get:function(){return Xt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),a}var Pr=["title","attribute","elementRef"],wr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Nr=["active"],_r=function(e){Wn(a,e);var n=Un(a);function a(){return Hn(this,a),n.apply(this,arguments)}return jn(a,[{key:"render",value:function(){var r=this.props,l=r.title,i=r.attribute,u=r.elementRef,s=Y(r,Pr),c=Jt(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Xt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(Ee.Item,U({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(t.Component),Kr=t.forwardRef(function(e,n){var a,o=e.style,r=e.className,l=e.eventKey;e.warnKey;var i=e.disabled,u=e.itemIcon,s=e.children,c=e.role,d=e.onMouseEnter,C=e.onMouseLeave,v=e.onClick,y=e.onKeyDown,f=e.onFocus,I=Y(e,wr),S=on(l),R=t.useContext(ge),P=R.prefixCls,b=R.onItemClick,p=R.disabled,h=R.overflowDisabled,m=R.itemIcon,k=R.selectedKeys,E=R.onActive,q=t.useContext(_t),V=q._internalRenderMenuItem,K="".concat(P,"-item"),W=t.useRef(),H=t.useRef(),j=p||i,G=Qn(n,H),$=ut(l),L=function(Z){return{key:l,keyPath:We($).reverse(),item:W.current,domEvent:Z}},ie=u||m,pe=vn(l,j,d,C),oe=pe.active,ne=Y(pe,Nr),F=k.includes(l),M=mn($.length),x=function(Z){if(!j){var B=L(Z);v==null||v(ht(B)),b(B)}},J=function(Z){if(y==null||y(Z),Z.which===he.ENTER){var B=L(Z);v==null||v(ht(B)),b(B)}},Me=function(Z){E(l),f==null||f(Z)},Se={};e.role==="option"&&(Se["aria-selected"]=F);var le=t.createElement(_r,U({ref:W,elementRef:G,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":h&&S?null:S},I,ne,Se,{component:"li","aria-disabled":i,style:_(_({},M),o),className:me(K,(a={},D(a,"".concat(K,"-active"),oe),D(a,"".concat(K,"-selected"),F),D(a,"".concat(K,"-disabled"),j),a),r),onClick:x,onKeyDown:J,onFocus:Me}),s,t.createElement(pn,{props:_(_({},e),{},{isSelected:F}),icon:ie}));return V&&(le=V(le,e,{selected:F})),le});function Or(e,n){var a=e.eventKey,o=Ct(),r=ut(a);return t.useEffect(function(){if(o)return o.registerPath(a,r),function(){o.unregisterPath(a,r)}},[r]),o?null:t.createElement(Kr,U({},e,{ref:n}))}const Ot=t.forwardRef(Or);var Ar=["className","children"],Dr=function(n,a){var o=n.className,r=n.children,l=Y(n,Ar),i=t.useContext(ge),u=i.prefixCls,s=i.mode,c=i.rtl;return t.createElement("ul",U({className:me(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),r)},At=t.forwardRef(Dr);At.displayName="SubMenuList";var kr=["label","children","key","type"];function Dt(e,n){return Jn(e).map(function(a,o){if(t.isValidElement(a)){var r,l,i=a.key,u=(r=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&r!==void 0?r:i,s=u==null;s&&(u="tmp_key-".concat([].concat(We(n),[o]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}function wt(e){return(e||[]).map(function(n,a){if(n&&Gn(n)==="object"){var o=n,r=o.label,l=o.children,i=o.key,u=o.type,s=Y(o,kr),c=i??"tmp-".concat(a);return l||u==="group"?u==="group"?t.createElement(hn,U({key:c},s,{title:r}),wt(l)):t.createElement(kt,U({key:c},s,{title:r}),wt(l)):u==="divider"?t.createElement(Cn,U({key:c},s)):t.createElement(Ot,U({key:c},s),r)}return null}).filter(function(n){return n})}function $r(e,n,a){var o=e;return n&&(o=wt(n)),Dt(o,a)}var _e={adjustX:1,adjustY:1},Lr={topLeft:{points:["bl","tl"],overflow:_e,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:_e,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:_e,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:_e,offset:[4,0]}},Tr={topLeft:{points:["bl","tl"],overflow:_e,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:_e,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:_e,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:_e,offset:[4,0]}};function gn(e,n,a){if(n)return n;if(a)return a[e]||a.other}var Vr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Fr(e){var n=e.prefixCls,a=e.visible,o=e.children,r=e.popup,l=e.popupClassName,i=e.popupOffset,u=e.disabled,s=e.mode,c=e.onVisibleChange,d=t.useContext(ge),C=d.getPopupContainer,v=d.rtl,y=d.subMenuOpenDelay,f=d.subMenuCloseDelay,I=d.builtinPlacements,S=d.triggerSubMenuAction,R=d.forceSubMenuRender,P=d.rootClassName,b=d.motion,p=d.defaultMotions,h=t.useState(!1),m=O(h,2),k=m[0],E=m[1],q=v?_(_({},Tr),I):_(_({},Lr),I),V=Vr[s],K=gn(s,b,p),W=t.useRef(K);s!=="inline"&&(W.current=K);var H=_(_({},W.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),j=t.useRef();return t.useEffect(function(){return j.current=ze(function(){E(a)}),function(){ze.cancel(j.current)}},[a]),t.createElement(Zt,{prefixCls:n,popupClassName:me("".concat(n,"-popup"),D({},"".concat(n,"-rtl"),v),l,P),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:C,builtinPlacements:q,popupPlacement:V,popupVisible:k,popup:r,popupAlign:i&&{offset:i},action:u?[]:[S],mouseEnterDelay:y,mouseLeaveDelay:f,onPopupVisibleChange:c,forceRender:R,popupMotion:H},o)}function zr(e){var n=e.id,a=e.open,o=e.keyPath,r=e.children,l="inline",i=t.useContext(ge),u=i.prefixCls,s=i.forceSubMenuRender,c=i.motion,d=i.defaultMotions,C=i.mode,v=t.useRef(!1);v.current=C===l;var y=t.useState(!v.current),f=O(y,2),I=f[0],S=f[1],R=v.current?a:!1;t.useEffect(function(){v.current&&S(!1)},[C]);var P=_({},gn(l,c,d));o.length>1&&(P.motionAppear=!1);var b=P.onVisibleChanged;return P.onVisibleChanged=function(p){return!v.current&&!p&&S(!0),b==null?void 0:b(p)},I?null:t.createElement(lt,{mode:l,locked:!v.current},t.createElement(er,U({visible:R},P,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(p){var h=p.className,m=p.style;return t.createElement(At,{id:n,className:h,style:m},r)}))}var Wr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Ur=["active"],Hr=function(n){var a,o=n.style,r=n.className,l=n.title,i=n.eventKey;n.warnKey;var u=n.disabled,s=n.internalPopupClose,c=n.children,d=n.itemIcon,C=n.expandIcon,v=n.popupClassName,y=n.popupOffset,f=n.onClick,I=n.onMouseEnter,S=n.onMouseLeave,R=n.onTitleClick,P=n.onTitleMouseEnter,b=n.onTitleMouseLeave,p=Y(n,Wr),h=on(i),m=t.useContext(ge),k=m.prefixCls,E=m.mode,q=m.openKeys,V=m.disabled,K=m.overflowDisabled,W=m.activeKey,H=m.selectedKeys,j=m.itemIcon,G=m.expandIcon,$=m.onItemClick,L=m.onOpenChange,ie=m.onActive,pe=t.useContext(_t),oe=pe._internalRenderSubMenuItem,ne=t.useContext(sn),F=ne.isSubPathKey,M=ut(),x="".concat(k,"-submenu"),J=V||u,Me=t.useRef(),Se=t.useRef(),le=d||j,Ce=C||G,Z=q.includes(i),B=!K&&Z,xe=F(H,i),Ke=vn(i,J,P,b),Oe=Ke.active,Pe=Y(Ke,Ur),ye=t.useState(!1),Ue=O(ye,2),ue=Ue[0],He=Ue[1],Ae=function(ee){J||He(ee)},se=function(ee){Ae(!0),I==null||I({key:i,domEvent:ee})},Ze=function(ee){Ae(!1),S==null||S({key:i,domEvent:ee})},Re=t.useMemo(function(){return Oe||(E!=="inline"?ue||F([W],i):!1)},[E,Oe,W,ue,i,F]),De=mn(M.length),ke=function(ee){J||(R==null||R({key:i,domEvent:ee}),E==="inline"&&L(i,!Z))},Q=Je(function(fe){f==null||f(ht(fe)),$(fe)}),we=function(ee){E!=="inline"&&L(i,ee)},$e=function(){ie(i)},re=h&&"".concat(h,"-popup"),be=t.createElement("div",U({role:"menuitem",style:De,className:"".concat(x,"-title"),tabIndex:J?null:-1,ref:Me,title:typeof l=="string"?l:null,"data-menu-id":K&&h?null:h,"aria-expanded":B,"aria-haspopup":!0,"aria-controls":re,"aria-disabled":J,onClick:ke,onFocus:$e},Pe),l,t.createElement(pn,{icon:E!=="horizontal"?Ce:null,props:_(_({},n),{},{isOpen:B,isSubMenu:!0})},t.createElement("i",{className:"".concat(x,"-arrow")}))),X=t.useRef(E);if(E!=="inline"&&M.length>1?X.current="vertical":X.current=E,!K){var Ne=X.current;be=t.createElement(Fr,{mode:Ne,prefixCls:x,visible:!s&&B&&E!=="inline",popupClassName:v,popupOffset:y,popup:t.createElement(lt,{mode:Ne==="horizontal"?"vertical":Ne},t.createElement(At,{id:re,ref:Se},c)),disabled:J,onVisibleChange:we},be)}var ce=t.createElement(Ee.Item,U({role:"none"},p,{component:"li",style:o,className:me(x,"".concat(x,"-").concat(E),r,(a={},D(a,"".concat(x,"-open"),B),D(a,"".concat(x,"-active"),Re),D(a,"".concat(x,"-selected"),xe),D(a,"".concat(x,"-disabled"),J),a)),onMouseEnter:se,onMouseLeave:Ze}),be,!K&&t.createElement(zr,{id:re,open:B,keyPath:M},c));return oe&&(ce=oe(ce,n,{selected:xe,active:Re,open:B,disabled:J})),t.createElement(lt,{onItemClick:Q,mode:E==="horizontal"?"vertical":E,itemIcon:le,expandIcon:Ce},ce)};function kt(e){var n=e.eventKey,a=e.children,o=ut(n),r=Dt(a,o),l=Ct();t.useEffect(function(){if(l)return l.registerPath(n,o),function(){l.unregisterPath(n,o)}},[o]);var i;return l?i=r:i=t.createElement(Hr,e,r),t.createElement(un.Provider,{value:o},i)}var jr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Be=[],Gr=t.forwardRef(function(e,n){var a,o,r=e,l=r.prefixCls,i=l===void 0?"rc-menu":l,u=r.rootClassName,s=r.style,c=r.className,d=r.tabIndex,C=d===void 0?0:d,v=r.items,y=r.children,f=r.direction,I=r.id,S=r.mode,R=S===void 0?"vertical":S,P=r.inlineCollapsed,b=r.disabled,p=r.disabledOverflow,h=r.subMenuOpenDelay,m=h===void 0?.1:h,k=r.subMenuCloseDelay,E=k===void 0?.1:k,q=r.forceSubMenuRender,V=r.defaultOpenKeys,K=r.openKeys,W=r.activeKey,H=r.defaultActiveFirst,j=r.selectable,G=j===void 0?!0:j,$=r.multiple,L=$===void 0?!1:$,ie=r.defaultSelectedKeys,pe=r.selectedKeys,oe=r.onSelect,ne=r.onDeselect,F=r.inlineIndent,M=F===void 0?24:F,x=r.motion,J=r.defaultMotions,Me=r.triggerSubMenuAction,Se=Me===void 0?"hover":Me,le=r.builtinPlacements,Ce=r.itemIcon,Z=r.expandIcon,B=r.overflowedIndicator,xe=B===void 0?"...":B,Ke=r.overflowedIndicatorPopupClassName,Oe=r.getPopupContainer,Pe=r.onClick,ye=r.onOpenChange,Ue=r.onKeyDown;r.openAnimation,r.openTransitionName;var ue=r._internalRenderMenuItem,He=r._internalRenderSubMenuItem,Ae=Y(r,jr),se=t.useMemo(function(){return $r(y,v,Be)},[y,v]),Ze=t.useState(!1),Re=O(Ze,2),De=Re[0],ke=Re[1],Q=t.useRef(),we=Mr(I),$e=f==="rtl",re=vt(V,{value:K,postState:function(N){return N||Be}}),be=O(re,2),X=be[0],Ne=be[1],ce=function(N){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function te(){Ne(N),ye==null||ye(N)}A?Bt.flushSync(te):te()},fe=t.useState(X),ee=O(fe,2),bt=ee[0],It=ee[1],Le=t.useRef(!1),st=t.useMemo(function(){return(R==="inline"||R==="vertical")&&P?["vertical",P]:[R,!1]},[R,P]),Qe=O(st,2),Ie=Qe[0],et=Qe[1],je=Ie==="inline",ct=t.useState(Ie),Ge=O(ct,2),de=Ge[0],g=Ge[1],w=t.useState(et),z=O(w,2),ve=z[0],Te=z[1];t.useEffect(function(){g(Ie),Te(et),Le.current&&(je?Ne(bt):ce(Be))},[Ie,et]);var yn=t.useState(0),$t=O(yn,2),ft=$t[0],bn=$t[1],St=ft>=se.length-1||de!=="horizontal"||p;t.useEffect(function(){je&&It(X)},[X]),t.useEffect(function(){return Le.current=!0,function(){Le.current=!1}},[]);var Ve=Rr(),Lt=Ve.registerPath,Tt=Ve.unregisterPath,In=Ve.refreshOverflowKeys,Vt=Ve.isSubPathKey,Sn=Ve.getKeyPath,Rn=Ve.getKeys,En=Ve.getSubPathKeys,Mn=t.useMemo(function(){return{registerPath:Lt,unregisterPath:Tt}},[Lt,Tt]),xn=t.useMemo(function(){return{isSubPathKey:Vt}},[Vt]);t.useEffect(function(){In(St?Be:se.slice(ft+1).map(function(T){return T.key}))},[ft,St]);var Pn=vt(W||H&&((a=se[0])===null||a===void 0?void 0:a.key),{value:W}),Ft=O(Pn,2),tt=Ft[0],Rt=Ft[1],wn=Je(function(T){Rt(T)}),Nn=Je(function(){Rt(void 0)});t.useImperativeHandle(n,function(){return{list:Q.current,focus:function(N){var A,te=tt??((A=se.find(function(Fn){return!Fn.props.disabled}))===null||A===void 0?void 0:A.key);if(te){var ae,Fe,nt;(ae=Q.current)===null||ae===void 0||(Fe=ae.querySelector("li[data-menu-id='".concat(Nt(we,te),"']")))===null||Fe===void 0||(nt=Fe.focus)===null||nt===void 0||nt.call(Fe,N)}}}});var _n=vt(ie||[],{value:pe,postState:function(N){return Array.isArray(N)?N:N==null?Be:[N]}}),zt=O(_n,2),dt=zt[0],Kn=zt[1],On=function(N){if(G){var A=N.key,te=dt.includes(A),ae;L?te?ae=dt.filter(function(nt){return nt!==A}):ae=[].concat(We(dt),[A]):ae=[A],Kn(ae);var Fe=_(_({},N),{},{selectedKeys:ae});te?ne==null||ne(Fe):oe==null||oe(Fe)}!L&&X.length&&de!=="inline"&&ce(Be)},An=Je(function(T){Pe==null||Pe(ht(T)),On(T)}),Wt=Je(function(T,N){var A=X.filter(function(ae){return ae!==T});if(N)A.push(T);else if(de!=="inline"){var te=En(T);A=A.filter(function(ae){return!te.has(ae)})}Yt(X,A,!0)||ce(A,!0)}),Dn=Je(Oe),kn=function(N,A){var te=A??!X.includes(N);Wt(N,te)},$n=br(de,tt,$e,we,Q,Rn,Sn,Rt,kn,Ue);t.useEffect(function(){ke(!0)},[]);var Ln=t.useMemo(function(){return{_internalRenderMenuItem:ue,_internalRenderSubMenuItem:He}},[ue,He]),Tn=de!=="horizontal"||p?se:se.map(function(T,N){return t.createElement(lt,{key:T.key,overflowDisabled:N>ft},T)}),Vn=t.createElement(Ee,U({id:I,ref:Q,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:Ot,className:me(i,"".concat(i,"-root"),"".concat(i,"-").concat(de),c,(o={},D(o,"".concat(i,"-inline-collapsed"),ve),D(o,"".concat(i,"-rtl"),$e),o),u),dir:f,style:s,role:"menu",tabIndex:C,data:Tn,renderRawItem:function(N){return N},renderRawRest:function(N){var A=N.length,te=A?se.slice(-A):null;return t.createElement(kt,{eventKey:Pt,title:xe,disabled:St,internalPopupClose:A===0,popupClassName:Ke},te)},maxCount:de!=="horizontal"||p?Ee.INVALIDATE:Ee.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(N){bn(N)},onKeyDown:$n},Ae));return t.createElement(_t.Provider,{value:Ln},t.createElement(an.Provider,{value:we},t.createElement(lt,{prefixCls:i,rootClassName:u,mode:de,openKeys:X,rtl:$e,disabled:b,motion:De?x:null,defaultMotions:De?J:null,activeKey:tt,onActive:wn,onInactive:Nn,selectedKeys:dt,inlineIndent:M,subMenuOpenDelay:m,subMenuCloseDelay:E,forceSubMenuRender:q,builtinPlacements:le,triggerSubMenuAction:Se,getPopupContainer:Dn,itemIcon:Ce,expandIcon:Z,onItemClick:An,onOpenChange:Wt},t.createElement(sn.Provider,{value:xn},Vn),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(ln.Provider,{value:Mn},se)))))}),qr=["className","title","eventKey","children"],Br=["children"],Yr=function(n){var a=n.className,o=n.title;n.eventKey;var r=n.children,l=Y(n,qr),i=t.useContext(ge),u=i.prefixCls,s="".concat(u,"-item-group");return t.createElement("li",U({role:"presentation"},l,{onClick:function(d){return d.stopPropagation()},className:me(s,a)}),t.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),t.createElement("ul",{role:"group",className:"".concat(s,"-list")},r))};function hn(e){var n=e.children,a=Y(e,Br),o=ut(a.eventKey),r=Dt(n,o),l=Ct();return l?r:t.createElement(Yr,Jt(a,["warnKey"]),r)}function Cn(e){var n=e.className,a=e.style,o=t.useContext(ge),r=o.prefixCls,l=Ct();return l?null:t.createElement("li",{className:me("".concat(r,"-item-divider"),n),style:a})}var yt=Gr;yt.Item=Ot;yt.SubMenu=kt;yt.ItemGroup=hn;yt.Divider=Cn;var Ye={adjustX:1,adjustY:1},Xe=[0,0],Xr={topLeft:{points:["bl","tl"],overflow:Ye,offset:[0,-4],targetOffset:Xe},topCenter:{points:["bc","tc"],overflow:Ye,offset:[0,-4],targetOffset:Xe},topRight:{points:["br","tr"],overflow:Ye,offset:[0,-4],targetOffset:Xe},bottomLeft:{points:["tl","bl"],overflow:Ye,offset:[0,4],targetOffset:Xe},bottomCenter:{points:["tc","bc"],overflow:Ye,offset:[0,4],targetOffset:Xe},bottomRight:{points:["tr","br"],overflow:Ye,offset:[0,4],targetOffset:Xe}},Jr=he.ESC,Zr=he.TAB;function Qr(e){var n=e.visible,a=e.setTriggerVisible,o=e.triggerRef,r=e.onVisibleChange,l=e.autoFocus,i=t.useRef(!1),u=function(){if(n&&o.current){var C,v,y,f;(C=o.current)===null||C===void 0||(v=C.triggerRef)===null||v===void 0||(y=v.current)===null||y===void 0||(f=y.focus)===null||f===void 0||f.call(y),a(!1),typeof r=="function"&&r(!1)}},s=function(){var C,v,y,f,I=cn((C=o.current)===null||C===void 0||(v=C.popupRef)===null||v===void 0||(y=v.current)===null||y===void 0||(f=y.getElement)===null||f===void 0?void 0:f.call(y)),S=I[0];return S!=null&&S.focus?(S.focus(),i.current=!0,!0):!1},c=function(C){switch(C.keyCode){case Jr:u();break;case Zr:{var v=!1;i.current||(v=s()),v?C.preventDefault():u();break}}};t.useEffect(function(){return n?(window.addEventListener("keydown",c),l&&ze(s,3),function(){window.removeEventListener("keydown",c),i.current=!1}):function(){i.current=!1}},[n])}var ea=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function ta(e,n){var a=e.arrow,o=a===void 0?!1:a,r=e.prefixCls,l=r===void 0?"rc-dropdown":r,i=e.transitionName,u=e.animation,s=e.align,c=e.placement,d=c===void 0?"bottomLeft":c,C=e.placements,v=C===void 0?Xr:C,y=e.getPopupContainer,f=e.showAction,I=e.hideAction,S=e.overlayClassName,R=e.overlayStyle,P=e.visible,b=e.trigger,p=b===void 0?["hover"]:b,h=e.autoFocus,m=Y(e,ea),k=t.useState(),E=O(k,2),q=E[0],V=E[1],K="visible"in e?P:q,W=t.useRef(null);t.useImperativeHandle(n,function(){return W.current}),Qr({visible:K,setTriggerVisible:V,triggerRef:W,onVisibleChange:e.onVisibleChange,autoFocus:h});var H=function(){var M=e.overlay,x;return typeof M=="function"?x=M():x=M,x},j=function(M){var x=e.onOverlayClick;V(!1),x&&x(M)},G=function(M){var x=e.onVisibleChange;V(M),typeof x=="function"&&x(M)},$=function(){var M=H();return t.createElement(t.Fragment,null,o&&t.createElement("div",{className:"".concat(l,"-arrow")}),M)},L=function(){var M=e.overlay;return typeof M=="function"?$:$()},ie=function(){var M=e.minOverlayWidthMatchTrigger,x=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?M:!x},pe=function(){var M=e.openClassName;return M!==void 0?M:"".concat(l,"-open")},oe=function(){var M=e.children,x=M.props?M.props:{},J=me(x.className,pe());return K&&M?t.cloneElement(M,{className:J}):M},ne=I;return!ne&&p.indexOf("contextMenu")!==-1&&(ne=["click"]),t.createElement(Zt,_(_({builtinPlacements:v},m),{},{prefixCls:l,ref:W,popupClassName:me(S,D({},"".concat(l,"-show-arrow"),o)),popupStyle:R,action:p,showAction:f,hideAction:ne||[],popupPlacement:d,popupAlign:s,popupTransitionName:i,popupAnimation:u,popupVisible:K,stretch:ie()?"minWidth":"",popup:L(),onPopupVisibleChange:G,onPopupClick:j,getPopupContainer:y}),oe())}const la=t.forwardRef(ta);export{la as D,yt as E,Ee as F,Ot as M,kt as S,oa as a,Cn as b,hn as c,ut as u};
