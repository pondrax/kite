function x(){}function lt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(Y)}function ot(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function At(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function at(t){return Object.keys(t).length===0}function $t(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Nt(t,e,n,i,s,l){if(s){const r=tt(e,n,i,l);t.p(r,s)}}function Mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ct(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function qt(t){const e={};for(const n in t)e[n]=!0;return e}let O=!1;function ut(){O=!0}function ft(){O=!1}function _t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:_t(1,s,d=>e[n[d]].claim_order,a))-1;i[c]=n[_]+1;const h=_+1;n[h]=c,s=Math.max(h,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(r[c],_)}}function I(t,e){if(O){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){O&&!n?I(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function mt(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Bt(){return J(" ")}function Ot(){return J("")}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:u(t,i,e[i])}function Lt(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function Pt(t){return t===""?null:+t}function C(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,s=!1){gt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function nt(t,e,n,i){return et(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Dt(t,e,n){return nt(t,e,n,mt)}function P(t,e,n){return nt(t,e,n,z)}function pt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function It(t){return pt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ft(t,e){t.value=e==null?"":e}function Gt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Jt(t,e,n){t.classList[n?"add":"remove"](e)}function Kt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function E(t){S=t}function K(){if(!S)throw new Error("Function called outside component initialization");return S}function Qt(t){K().$$.on_mount.push(t)}function Rt(t){K().$$.after_update.push(t)}function Ut(t,e){K().$$.context.set(t,e)}function Xt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],X=[],q=[],V=[],it=Promise.resolve();let F=!1;function rt(){F||(F=!0,it.then(st))}function Yt(){return rt(),it}function G(t){q.push(t)}function Zt(t){V.push(t)}const D=new Set;let M=0;function st(){const t=S;do{for(;M<v.length;){const e=v[M];M++,E(e),yt(e.$$)}for(E(null),v.length=0,M=0;X.length;)X.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];D.has(n)||(D.add(n),n())}q.length=0}while(v.length);for(;V.length;)V.pop()();F=!1,D.clear(),E(t)}function yt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const B=new Set;let w;function te(){w={r:0,c:[],p:w}}function ee(){w.r||A(w.c),w=w.p}function ct(t,e){t&&t.i&&(B.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),w.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function ie(t,e){t.d(1),e.delete(t.key)}function re(t,e,n,i,s,l,r,o,c,a,_,h){let d=t.length,g=l.length,m=d;const T={};for(;m--;)T[t[m].key]=m;const $=[],W=new Map,H=new Map;for(m=g;m--;){const f=h(s,l,m),p=n(f);let y=r.get(p);y?i&&y.p(f,e):(y=a(p,f),y.c()),W.set(p,$[m]=y),p in T&&H.set(p,Math.abs(m-T[p]))}const Q=new Set,R=new Set;function L(f){ct(f,1),f.m(o,_),r.set(f.key,f),_=f.first,g--}for(;d&&g;){const f=$[g-1],p=t[d-1],y=f.key,j=p.key;f===p?(_=f.first,d--,g--):W.has(j)?!r.has(y)||Q.has(y)?L(f):R.has(j)?d--:H.get(y)>H.get(j)?(R.add(y),L(f)):(Q.add(j),d--):(c(p,r),d--)}for(;d--;){const f=t[d];W.has(f.key)||c(f,r)}for(;g;)L($[g-1]);return $}function se(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function le(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function oe(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function wt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||G(()=>{const c=l.map(Y).filter(ot);r?r.push(...c):A(c),t.$$.on_mount=[]}),o.forEach(G)}function xt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kt(t,e,n,i,s,l,r,o=[-1]){const c=S;E(t);const a=t.$$={fragment:null,ctx:null,props:l,update:x,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(h,d,...g)=>{const m=g.length?g[0]:d;return a.ctx&&s(a.ctx[h],a.ctx[h]=m)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](m),_&&bt(t,h)),d}):[],a.update(),_=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ut();const h=C(e.target);a.fragment&&a.fragment.l(h),h.forEach(k)}else a.fragment&&a.fragment.c();e.intro&&ct(t.$$.fragment),wt(t,e.target,e.anchor,e.customElement),ft(),st()}E(c)}class vt{$destroy(){xt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const b=[];function ue(t,e=x){let n;const i=new Set;function s(o){if(Z(t,o)&&(t=o,n)){const c=!b.length;for(const a of i)a[1](),b.push(a,t);if(c){for(let a=0;a<b.length;a+=2)b[a][0](b[a+1]);b.length=0}}}function l(o){s(o(t))}function r(o,c=x){const a=[o,c];return i.add(a),i.size===1&&(n=e(s)||x),o(t),()=>{i.delete(a),i.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:r}}function Et(t){let e,n,i,s;return{c(){e=z("svg"),n=z("circle"),i=z("path"),this.h()},l(l){e=P(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var r=C(e);n=P(r,"circle",{cx:!0,cy:!0,r:!0}),C(n).forEach(k),i=P(r,"path",{d:!0}),C(i).forEach(k),r.forEach(k),this.h()},h(){u(n,"cx","12"),u(n,"cy","12"),u(n,"r","3"),u(i,"d","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width",t[0]),u(e,"height",t[0]),u(e,"fill","none"),u(e,"viewBox","0 0 24 24"),u(e,"stroke","currentColor"),u(e,"stroke-width",t[1]),u(e,"stroke-linecap","round"),u(e,"stroke-linejoin","round"),u(e,"class",s="feather feather-settings "+t[2])},m(l,r){ht(l,e,r),I(e,n),I(e,i)},p(l,[r]){r&1&&u(e,"width",l[0]),r&1&&u(e,"height",l[0]),r&2&&u(e,"stroke-width",l[1]),r&4&&s!==(s="feather feather-settings "+l[2])&&u(e,"class",s)},i:x,o:x,d(l){l&&k(e)}}}function St(t,e,n){let{size:i="100%"}=e,{strokeWidth:s=2}=e,{class:l=""}=e;return i!=="100%"&&(i=i.slice(-1)==="x"?i.slice(0,i.length-1)+"em":parseInt(i)+"px"),t.$$set=r=>{"size"in r&&n(0,i=r.size),"strokeWidth"in r&&n(1,s=r.strokeWidth),"class"in r&&n(2,l=r.class)},[i,s,l]}class fe extends vt{constructor(e){super();kt(this,e,St,Et,Z,{size:0,strokeWidth:1,class:2})}}export{re as $,ce as A,xt as B,lt as C,ue as D,Yt as E,$t as F,Kt as G,Nt as H,Mt as I,jt as J,I as K,fe as L,x as M,z as N,P as O,Jt as P,Xt as Q,Tt as R,vt as S,A as T,Ct as U,zt as V,X as W,le as X,Zt as Y,Lt as Z,Ht as _,C as a,ie as a0,Ft as a1,Pt as a2,qt as a3,At as a4,Wt as a5,u as b,Dt as c,k as d,mt as e,Gt as f,ht as g,pt as h,kt as i,Vt as j,Bt as k,Ot as l,It as m,te as n,ne as o,ee as p,ct as q,Ut as r,Z as s,J as t,Rt as u,Qt as v,oe as w,ae as x,wt as y,se as z};