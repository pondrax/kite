import{S as K,i as V,s as F,F as G,e as v,k as w,w as g,G as H,c as D,d as $,m as B,a as q,x as h,b as E,H as C,g as m,y as b,I as J,J as L,K as M,q as _,o as p,B as k,L as T,M as j,t as z,h as A}from"../chunks/vendor-3d9fcae7.js";import{D as N,B as I,s as S}from"../chunks/index-d17396a7.js";function O(u){let t,e;return t=new T({props:{size:"20"}}),{c(){g(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,n){b(t,s,n),e=!0},p:j,i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){p(t.$$.fragment,s),e=!1},d(s){k(t,s)}}}function P(u){let t,e;return t=new I({props:{small:!0,gap:!0,$$slots:{default:[O]},$$scope:{ctx:u}}}),{c(){g(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,n){b(t,s,n),e=!0},p(s,n){const r={};n&16&&(r.$$scope={dirty:n,ctx:s}),t.$set(r)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){p(t.$$.fragment,s),e=!1},d(s){k(t,s)}}}function Q(u){let t;return{c(){t=z("Dark")},l(e){t=A(e,"Dark")},m(e,s){m(e,t,s)},d(e){e&&$(t)}}}function R(u){let t;return{c(){t=z("Cupcake")},l(e){t=A(e,"Cupcake")},m(e,s){m(e,t,s)},d(e){e&&$(t)}}}function U(u){let t,e,s,n,r;return e=new I({props:{ghost:!0,small:!0,block:!0,left:!0,$$slots:{default:[Q]},$$scope:{ctx:u}}}),e.$on("click",u[2]),n=new I({props:{ghost:!0,small:!0,block:!0,left:!0,$$slots:{default:[R]},$$scope:{ctx:u}}}),n.$on("click",u[3]),{c(){t=v("div"),g(e.$$.fragment),s=w(),g(n.$$.fragment),this.h()},l(l){t=D(l,"DIV",{slot:!0});var o=q(t);h(e.$$.fragment,o),s=B(o),h(n.$$.fragment,o),o.forEach($),this.h()},h(){E(t,"slot","menu")},m(l,o){m(l,t,o),b(e,t,null),C(t,s),b(n,t,null),r=!0},p(l,o){const i={};o&16&&(i.$$scope={dirty:o,ctx:l}),e.$set(i);const f={};o&16&&(f.$$scope={dirty:o,ctx:l}),n.$set(f)},i(l){r||(_(e.$$.fragment,l),_(n.$$.fragment,l),r=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),r=!1},d(l){l&&$(t),k(e),k(n)}}}function W(u){let t,e,s,n,r,l,o;document.title=t=u[0],r=new N({props:{top:!0,end:!0,$$slots:{menu:[U],default:[P]},$$scope:{ctx:u}}});const i=u[1].default,f=G(i,u,u[4],null);return{c(){e=v("base"),s=w(),n=v("div"),g(r.$$.fragment),l=w(),f&&f.c(),this.h()},l(a){const c=H('[data-svelte="svelte-alu3tx"]',document.head);e=D(c,"BASE",{href:!0}),c.forEach($),s=B(a),n=D(a,"DIV",{class:!0});var d=q(n);h(r.$$.fragment,d),d.forEach($),l=B(a),f&&f.l(a),this.h()},h(){E(e,"href","/"),E(n,"class","fixed bottom-5 right-1 z-50")},m(a,c){C(document.head,e),m(a,s,c),m(a,n,c),b(r,n,null),m(a,l,c),f&&f.m(a,c),o=!0},p(a,[c]){(!o||c&1)&&t!==(t=a[0])&&(document.title=t);const d={};c&16&&(d.$$scope={dirty:c,ctx:a}),r.$set(d),f&&f.p&&(!o||c&16)&&J(f,i,a,a[4],o?M(i,a[4],c,null):L(a[4]),null)},i(a){o||(_(r.$$.fragment,a),_(f,a),o=!0)},o(a){p(r.$$.fragment,a),p(f,a),o=!1},d(a){$(e),a&&$(s),a&&$(n),k(r),a&&$(l),f&&f.d(a)}}}function X(u,t,e){let{$$slots:s={},$$scope:n}=t,{title:r="Kite App"}=t;const l=()=>S("dark"),o=()=>S("cupcake");return u.$$set=i=>{"title"in i&&e(0,r=i.title),"$$scope"in i&&e(4,n=i.$$scope)},[r,s,l,o,n]}class y extends K{constructor(t){super();V(this,t,X,W,F,{title:0})}}export{y as default};
