import{r as x,b as Lt,R as yt,j as N}from"./index-DUeXtjwj.js";import{m as $t}from"./spring-ClNvnvRS.js";import{u as Yt}from"./use-event-callback-DeH4NgoT.js";import{c as dt}from"./helper-CaAdfMs7.js";import{u as Xt}from"./use-is-client-e_MfQXFl.js";import{i as qt}from"./env-DbhK1WeT.js";import{A as Ut}from"./index-juxeFNWw.js";import{m as wt}from"./motion-minimal-7y_YfCp1.js";const nt=Math.min,$=Math.max,ot=Math.round,tt=Math.floor,H=t=>({x:t,y:t}),Kt={left:"right",right:"left",bottom:"top",top:"bottom"},Gt={start:"end",end:"start"};function vt(t,e,n){return $(t,nt(e,n))}function ct(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function lt(t){return t.split("-")[1]}function Tt(t){return t==="x"?"y":"x"}function kt(t){return t==="y"?"height":"width"}function ft(t){return["top","bottom"].includes(Y(t))?"y":"x"}function Pt(t){return Tt(ft(t))}function Jt(t,e,n){n===void 0&&(n=!1);const o=lt(t),i=Pt(t),r=kt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=it(s)),[s,it(s)]}function Qt(t){const e=it(t);return[mt(t),e,mt(e)]}function mt(t){return t.replace(/start|end/g,e=>Gt[e])}function Zt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function te(t,e,n,o){const i=lt(t);let r=Zt(Y(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(mt)))),r}function it(t){return t.replace(/left|right|bottom|top/g,e=>Kt[e])}function ee(t){return{top:0,right:0,bottom:0,left:0,...t}}function ne(t){return typeof t!="number"?ee(t):{top:t,right:t,bottom:t,left:t}}function rt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function bt(t,e,n){let{reference:o,floating:i}=t;const r=ft(e),s=Pt(e),c=kt(s),l=Y(e),f=r==="y",u=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,p=o[c]/2-i[c]/2;let d;switch(l){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:a};break;case"left":d={x:o.x-i.width,y:a};break;default:d={x:o.x,y:o.y}}switch(lt(e)){case"start":d[s]-=p*(n&&f?-1:1);break;case"end":d[s]+=p*(n&&f?-1:1);break}return d}const oe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:a}=bt(f,o,l),p=o,d={},m=0;for(let h=0;h<c.length;h++){const{name:b,fn:g}=c[h],{x:w,y:R,data:C,reset:y}=await g({x:u,y:a,initialPlacement:o,placement:p,strategy:i,middlewareData:d,rects:f,platform:s,elements:{reference:t,floating:e}});u=w??u,a=R??a,d={...d,[b]:{...d[b],...C}},y&&m<=50&&(m++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(f=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:u,y:a}=bt(f,p,l)),h=-1)}return{x:u,y:a,placement:p,strategy:i,middlewareData:d}};async function St(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:p=!1,padding:d=0}=ct(e,t),m=ne(d),b=c[p?a==="floating"?"reference":"floating":a],g=rt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(b)))==null||n?b:b.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:l})),w=a==="floating"?{...s.floating,x:o,y:i}:s.reference,R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),C=await(r.isElement==null?void 0:r.isElement(R))?await(r.getScale==null?void 0:r.getScale(R))||{x:1,y:1}:{x:1,y:1},y=rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:R,strategy:l}):w);return{top:(g.top-y.top+m.top)/C.y,bottom:(y.bottom-g.bottom+m.bottom)/C.y,left:(g.left-y.left+m.left)/C.x,right:(y.right-g.right+m.right)/C.x}}const ie=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...b}=ct(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=Y(i),w=Y(c)===c,R=await(l.isRTL==null?void 0:l.isRTL(f.floating)),C=p||(w||!h?[it(c)]:Qt(c));!p&&m!=="none"&&C.push(...te(c,h,m,R));const y=[c,...C],E=await St(e,b),T=[];let k=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&T.push(E[g]),a){const L=Jt(i,s,R);T.push(E[L[0]],E[L[1]])}if(k=[...k,{placement:i,overflows:T}],!T.every(L=>L<=0)){var q,S;const L=(((q=r.flip)==null?void 0:q.index)||0)+1,M=y[L];if(M)return{data:{index:L,overflows:k},reset:{placement:M}};let F=(S=k.filter(A=>A.overflows[0]<=0).sort((A,O)=>A.overflows[1]-O.overflows[1])[0])==null?void 0:S.placement;if(!F)switch(d){case"bestFit":{var z;const A=(z=k.map(O=>[O.placement,O.overflows.filter(v=>v>0).reduce((v,W)=>v+W,0)]).sort((O,v)=>O[1]-v[1])[0])==null?void 0:z[0];A&&(F=A);break}case"initialPlacement":F=c;break}if(i!==F)return{reset:{placement:F}}}return{}}}};async function re(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Y(n),c=lt(n),l=ft(n)==="y",f=["left","top"].includes(s)?-1:1,u=r&&l?-1:1,a=ct(e,t);let{mainAxis:p,crossAxis:d,alignmentAxis:m}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof m=="number"&&(d=c==="end"?m*-1:m),l?{x:d*u,y:p*f}:{x:p*f,y:d*u}}const se=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await re(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},ce=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:b=>{let{x:g,y:w}=b;return{x:g,y:w}}},...l}=ct(t,e),f={x:n,y:o},u=await St(e,l),a=ft(Y(i)),p=Tt(a);let d=f[p],m=f[a];if(r){const b=p==="y"?"top":"left",g=p==="y"?"bottom":"right",w=d+u[b],R=d-u[g];d=vt(w,d,R)}if(s){const b=a==="y"?"top":"left",g=a==="y"?"bottom":"right",w=m+u[b],R=m-u[g];m=vt(w,m,R)}const h=c.fn({...e,[p]:d,[a]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function I(t){return Mt(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(Mt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Mt(t){return t instanceof Node||t instanceof P(t).Node}function _(t){return t instanceof Element||t instanceof P(t).Element}function V(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function le(t){return["table","td","th"].includes(I(t))}function pt(t){const e=gt(),n=D(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Dt(t){let e=K(t);for(;V(e)&&!at(e);){if(pt(e))return e;e=K(e)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function at(t){return["html","body","#document"].includes(I(t))}function D(t){return P(t).getComputedStyle(t)}function ut(t){return _(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||j(t);return Rt(e)?e.host:e}function Ft(t){const e=K(t);return at(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&J(e)?e:Ft(e)}function G(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ft(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=P(i);return r?e.concat(s,s.visualViewport||[],J(i)?i:[],s.frameElement&&n?G(s.frameElement):[]):e.concat(i,G(i,[],n))}function Nt(t){const e=D(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=V(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=ot(n)!==r||ot(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function ht(t){return _(t)?t:t.contextElement}function U(t){const e=ht(t);if(!V(e))return H(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Nt(e);let s=(r?ot(n.width):n.width)/o,c=(r?ot(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const fe=H(0);function Bt(t){const e=P(t);return!gt()||!e.visualViewport?fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ae(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==P(t)?!1:e}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=ht(t);let s=H(1);e&&(o?_(o)&&(s=U(o)):s=U(t));const c=ae(r,n,o)?Bt(r):H(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,u=i.width/s.x,a=i.height/s.y;if(r){const p=P(r),d=o&&_(o)?P(o):o;let m=p.frameElement;for(;m&&o&&d!==p;){const h=U(m),b=m.getBoundingClientRect(),g=D(m),w=b.left+(m.clientLeft+parseFloat(g.paddingLeft))*h.x,R=b.top+(m.clientTop+parseFloat(g.paddingTop))*h.y;l*=h.x,f*=h.y,u*=h.x,a*=h.y,l+=w,f+=R,m=P(m).frameElement}}return rt({width:u,height:a,x:l,y:f})}const ue=[":popover-open",":modal"];function Vt(t){let e=!1,n=0,o=0;function i(r){try{e=e||t.matches(r)}catch{}}if(ue.forEach(r=>{i(r)}),e){const r=Dt(t);if(r){const s=r.getBoundingClientRect();n=s.x,o=s.y}}return[e,n,o]}function de(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=j(o),[s]=e?Vt(e.floating):[!1];if(o===r||s)return n;let c={scrollLeft:0,scrollTop:0},l=H(1);const f=H(0),u=V(o);if((u||!u&&i!=="fixed")&&((I(o)!=="body"||J(r))&&(c=ut(o)),V(o))){const a=X(o);l=U(o),f.x=a.x+o.clientLeft,f.y=a.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+f.x,y:n.y*l.y-c.scrollTop*l.y+f.y}}function me(t){return Array.from(t.getClientRects())}function Wt(t){return X(j(t)).left+ut(t).scrollLeft}function pe(t){const e=j(t),n=ut(t),o=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Wt(t);const c=-n.scrollTop;return D(o).direction==="rtl"&&(s+=$(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function ge(t,e){const n=P(t),o=j(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=gt();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function he(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=V(t)?U(t):H(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=o*r.y;return{width:s,height:c,x:l,y:f}}function Ct(t,e,n){let o;if(e==="viewport")o=ge(t,n);else if(e==="document")o=pe(j(t));else if(_(e))o=he(e,n);else{const i=Bt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return rt(o)}function _t(t,e){const n=K(t);return n===e||!_(n)||at(n)?!1:D(n).position==="fixed"||_t(n,e)}function xe(t,e){const n=e.get(t);if(n)return n;let o=G(t,[],!1).filter(c=>_(c)&&I(c)!=="body"),i=null;const r=D(t).position==="fixed";let s=r?K(t):t;for(;_(s)&&!at(s);){const c=D(s),l=pt(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(s)&&!l&&_t(t,s))?o=o.filter(u=>u!==s):i=c,s=K(s)}return e.set(t,o),o}function ye(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?xe(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((f,u)=>{const a=Ct(e,u,i);return f.top=$(a.top,f.top),f.right=nt(a.right,f.right),f.bottom=nt(a.bottom,f.bottom),f.left=$(a.left,f.left),f},Ct(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function we(t){const{width:e,height:n}=Nt(t);return{width:e,height:n}}function ve(t,e,n,o){const i=V(e),r=j(e),s=n==="fixed",c=X(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const f=H(0);if(i||!i&&!s)if((I(e)!=="body"||J(r))&&(l=ut(e)),i){const h=X(e,!0,s,e);f.x=h.x+e.clientLeft,f.y=h.y+e.clientTop}else r&&(f.x=Wt(r));let u=c.left+l.scrollLeft-f.x,a=c.top+l.scrollTop-f.y;const[p,d,m]=Vt(o);return p&&(u+=d,a+=m,i&&(u+=e.clientLeft,a+=e.clientTop)),{x:u,y:a,width:c.width,height:c.height}}function Et(t,e){return!V(t)||D(t).position==="fixed"?null:e?e(t):t.offsetParent}function jt(t,e){const n=P(t);if(!V(t))return n;let o=Et(t,e);for(;o&&le(o)&&D(o).position==="static";)o=Et(o,e);return o&&(I(o)==="html"||I(o)==="body"&&D(o).position==="static"&&!pt(o))?n:o||Dt(t)||n}const be=async function(t){const e=this.getOffsetParent||jt,n=this.getDimensions;return{reference:ve(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}};function Re(t){return D(t).direction==="rtl"}const Ce={convertOffsetParentRelativeRectToViewportRelativeRect:de,getDocumentElement:j,getClippingRect:ye,getOffsetParent:jt,getElementRects:be,getClientRects:me,getDimensions:we,getScale:U,isElement:_,isRTL:Re};function Ee(t,e){let n=null,o;const i=j(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:u,width:a,height:p}=t.getBoundingClientRect();if(c||e(),!a||!p)return;const d=tt(u),m=tt(i.clientWidth-(f+a)),h=tt(i.clientHeight-(u+p)),b=tt(f),w={rootMargin:-d+"px "+-m+"px "+-h+"px "+-b+"px",threshold:$(0,nt(1,l))||1};let R=!0;function C(y){const E=y[0].intersectionRatio;if(E!==l){if(!R)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},100)}R=!1}try{n=new IntersectionObserver(C,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,w)}n.observe(t)}return s(!0),r}function Ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=ht(t),u=i||r?[...f?G(f):[],...G(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const a=f&&c?Ee(f,n):null;let p=-1,d=null;s&&(d=new ResizeObserver(g=>{let[w]=g;w&&w.target===f&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var R;(R=d)==null||R.observe(e)})),n()}),f&&!l&&d.observe(f),d.observe(e));let m,h=l?X(t):null;l&&b();function b(){const g=X(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,m=requestAnimationFrame(b)}return n(),()=>{var g;u.forEach(w=>{i&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),a?.(),(g=d)==null||g.disconnect(),d=null,l&&cancelAnimationFrame(m)}}const Oe=ce,Le=ie,Te=(t,e,n)=>{const o=new Map,i={platform:Ce,...n},r={...i.platform,_c:o};return oe(t,e,{...i,platform:r})};var et=typeof document<"u"?x.useLayoutEffect:x.useEffect;function st(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!st(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!st(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function zt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function At(t,e){const n=zt(t);return Math.round(e*n)/n}function Ot(t){const e=x.useRef(t);return et(()=>{e.current=t}),e}function ke(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:c=!0,whileElementsMounted:l,open:f}=t,[u,a]=x.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,d]=x.useState(o);st(p,o)||d(o);const[m,h]=x.useState(null),[b,g]=x.useState(null),w=x.useCallback(v=>{v!==E.current&&(E.current=v,h(v))},[]),R=x.useCallback(v=>{v!==T.current&&(T.current=v,g(v))},[]),C=r||m,y=s||b,E=x.useRef(null),T=x.useRef(null),k=x.useRef(u),q=l!=null,S=Ot(l),z=Ot(i),L=x.useCallback(()=>{if(!E.current||!T.current)return;const v={placement:e,strategy:n,middleware:p};z.current&&(v.platform=z.current),Te(E.current,T.current,v).then(W=>{const B={...W,isPositioned:!0};M.current&&!st(k.current,B)&&(k.current=B,Lt.flushSync(()=>{a(B)}))})},[p,e,n,z]);et(()=>{f===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,a(v=>({...v,isPositioned:!1})))},[f]);const M=x.useRef(!1);et(()=>(M.current=!0,()=>{M.current=!1}),[]),et(()=>{if(C&&(E.current=C),y&&(T.current=y),C&&y){if(S.current)return S.current(C,y,L);L()}},[C,y,L,S,q]);const F=x.useMemo(()=>({reference:E,floating:T,setReference:w,setFloating:R}),[w,R]),A=x.useMemo(()=>({reference:C,floating:y}),[C,y]),O=x.useMemo(()=>{const v={position:n,left:0,top:0};if(!A.floating)return v;const W=At(A.floating,u.x),B=At(A.floating,u.y);return c?{...v,transform:"translate("+W+"px, "+B+"px)",...zt(A.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:B}},[n,c,A.floating,u.x,u.y]);return x.useMemo(()=>({...u,update:L,refs:F,elements:A,floatingStyles:O}),[u,L,F,A,O])}function Pe(t,...e){t&&t.addEventListener&&t.addEventListener(...e)}function Se(t,...e){t&&t.removeEventListener&&t.removeEventListener(...e)}const Me=["mousedown","touchstart"],De=(t,e,n=Me)=>{const o=x.useRef(e);x.useEffect(()=>{o.current=e},[e]),x.useEffect(()=>{const i=r=>{const{current:s}=t;s&&!s.contains(r.target)&&o.current(r)};for(const r of n)Pe(document,r,i);return()=>{for(const r of n)Se(document,r,i)}},[n,t])},Fe=()=>{const t=x.useContext(Ht);return qt?t.to||document.body:null},Ht=x.createContext({to:void 0});Ht.Provider;const Ne=t=>{const e=Xt(),n=Fe();return e?Lt.createPortal(t.children,t.to||n||document.body):null},Be=x.createContext(null),Ye=function(e){const{headless:n=!1,wrapperClassName:o,TriggerComponent:i,triggerElement:r,trigger:s="hover",padding:c,offset:l,popoverWrapperClassNames:f,popoverClassNames:u,debug:a,animate:p=!0,as:d="div",type:m="popover",triggerComponentProps:h,isDisabled:b,onOpen:g,onClose:w,to:R,asChild:C,...y}=e,[E,T]=x.useState(!1),{x:k,y:q,refs:S,strategy:z,isPositioned:L,elements:M,update:F}=ke({middleware:y.middleware??[Le({padding:c??20}),se(l??10),Oe()],strategy:y.strategy,placement:y.placement??"bottom-start",whileElementsMounted:y.whileElementsMounted});x.useEffect(()=>{if(E&&M.reference&&M.floating)return Ae(M.reference,M.floating,F)},[E,M,F]);const A=x.useRef(null);De(A,()=>{(s=="click"||s=="both")&&O()});const O=x.useCallback(()=>{a||T(!1)},[a]),v=Yt(()=>{b||T(!0)}),W=x.useCallback(()=>{O()},[O]),B=x.useMemo(()=>{const Z={};switch(s){case"click":return{...Z,onClick:v};case"hover":return{...Z,onMouseOver:v,onMouseOut:O};case"both":return{...Z,onClick:v,onMouseOver:v,onMouseOut:W}}},[O,v,W,s]),Q=r||(i?yt.cloneElement(x.createElement(i,h),{tabIndex:0}):N.jsx(N.Fragment,{})),xt=C?yt.cloneElement(typeof Q=="string"?N.jsx("span",{children:Q}):Q,{...B,ref:S.setReference}):N.jsx(d,{role:s==="both"||s==="click"?"button":"note",className:dt("inline-block",o),ref:S.setReference,...B,children:Q});x.useEffect(()=>{S.floating.current&&E&&m==="popover"&&S.floating.current.focus()},[E]),x.useEffect(()=>{E?g?.():w?.()},[E]);const It=x.useMemo(()=>({close:O}),[O]);return e.children?N.jsxs(N.Fragment,{children:[xt,N.jsx(Ut,{children:E&&N.jsx(Ne,{to:R,children:N.jsx(wt.div,{className:dt("float-popover","relative z-[99]",f),...s==="hover"||s==="both"?B:{},ref:A,children:N.jsx(wt.div,{tabIndex:-1,role:m==="tooltip"?"tooltip":"dialog",className:dt(!n&&["shadow-out-sm focus:!shadow-out-sm focus-visible:!shadow-out-sm","rounded-xl border border-zinc-400/20 p-4 shadow-lg outline-none backdrop-blur-lg dark:border-zinc-500/30","bg-zinc-50/80 dark:bg-neutral-900/80"],"relative z-[2]",m==="tooltip"?"max-w-[25rem] break-all rounded-xl px-4 py-2 shadow-sm":"",u),ref:S.setFloating,initial:{translateY:"10px",opacity:0},animate:{translateY:"0px",opacity:1},exit:{translateY:"10px",opacity:0},transition:$t,style:{position:z,top:q??"",left:k??"",visibility:L&&k!==null?"visible":"hidden"},children:N.jsx(Be.Provider,{value:It,children:e.children})})})})})]}):xt};export{Ye as F,Ne as R};
