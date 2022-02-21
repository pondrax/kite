import{S as x,i as ee,s as te,_ as ae,$ as se,w as z,x as H,y as N,a0 as ne,q as L,o as q,B as F,F as re,e as m,k as I,c as _,a as p,d as f,m as S,b as d,g as Q,H as le,I as oe,J as ie,a5 as ce,t as V,h as y,a4 as ue,K as l,M as Z,a6 as fe}from"../../chunks/vendor-4d9e2aef.js";import{E as me}from"../../chunks/variables-dacf274e.js";import{a as _e,B as pe}from"../../chunks/index-9b66a2c6.js";function de(c){let e,a;return e=new fe({props:{size:"24"}}),{c(){z(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,i){N(e,n,i),a=!0},p:Z,i(n){a||(L(e.$$.fragment,n),a=!0)},o(n){q(e.$$.fragment,n),a=!1},d(n){F(e,n)}}}function $e(c){let e,a,n,i;a=new pe({props:{ghost:!0,$$slots:{default:[de]},$$scope:{ctx:c}}}),a.$on("click",c[2]);const o=c[1].default,s=re(o,c,c[4],null);return{c(){e=m("div"),z(a.$$.fragment),n=I(),s&&s.c(),this.h()},l(t){e=_(t,"DIV",{class:!0});var r=p(e);H(a.$$.fragment,r),r.forEach(f),n=S(t),s&&s.l(t),this.h()},h(){d(e,"class","p-2")},m(t,r){Q(t,e,r),N(a,e,null),Q(t,n,r),s&&s.m(t,r),i=!0},p(t,r){const u={};r&16&&(u.$$scope={dirty:r,ctx:t}),a.$set(u),s&&s.p&&(!i||r&16)&&le(s,o,t,t[4],i?ie(o,t[4],r,null):oe(t[4]),null)},i(t){i||(L(a.$$.fragment,t),L(s,t),i=!0)},o(t){q(a.$$.fragment,t),q(s,t),i=!1},d(t){t&&f(e),F(a),t&&f(n),s&&s.d(t)}}}function he(c){let e,a,n,i,o,s=me.name+"",t,r,u,A,g,b,G,J,B,K,v,k,P,U,D,E,j,C;return b=new ce({props:{size:"24"}}),{c(){e=m("div"),a=m("a"),n=m("img"),o=I(),t=V(s),r=I(),u=m("ul"),A=m("li"),g=m("a"),z(b.$$.fragment),G=V(" Dashboard"),J=I(),B=m("li"),K=I(),v=m("li"),k=m("span"),P=V("Components"),U=I(),D=m("li"),E=m("a"),j=V("Alert"),this.h()},l($){e=_($,"DIV",{slot:!0});var w=p(e);a=_(w,"A",{href:!0,class:!0});var M=p(a);n=_(M,"IMG",{src:!0,alt:!0,class:!0}),o=S(M),t=y(M,s),M.forEach(f),r=S(w),u=_(w,"UL",{class:!0});var h=p(u);A=_(h,"LI",{});var R=p(A);g=_(R,"A",{href:!0});var O=p(g);H(b.$$.fragment,O),G=y(O," Dashboard"),O.forEach(f),R.forEach(f),J=S(h),B=_(h,"LI",{}),p(B).forEach(f),K=S(h),v=_(h,"LI",{class:!0});var T=p(v);k=_(T,"SPAN",{});var W=p(k);P=y(W,"Components"),W.forEach(f),T.forEach(f),U=S(h),D=_(h,"LI",{});var X=p(D);E=_(X,"A",{href:!0});var Y=p(E);j=y(Y,"Alert"),Y.forEach(f),X.forEach(f),h.forEach(f),w.forEach(f),this.h()},h(){ue(n.src,i="/favicon.png")||d(n,"src",i),d(n,"alt","icon"),d(n,"class","h-8"),d(a,"href","/"),d(a,"class","flex gap-2 py-2 text-base-800 text-2xl font-bold mb-5"),d(g,"href","/demo/"),d(v,"class","menu-title"),d(E,"href","/demo/components"),d(u,"class","menu menu-compact"),d(e,"slot","menu")},m($,w){Q($,e,w),l(e,a),l(a,n),l(a,o),l(a,t),l(e,r),l(e,u),l(u,A),l(A,g),N(b,g,null),l(g,G),l(u,J),l(u,B),l(u,K),l(u,v),l(v,k),l(k,P),l(u,U),l(u,D),l(D,E),l(E,j),C=!0},p:Z,i($){C||(L(b.$$.fragment,$),C=!0)},o($){q(b.$$.fragment,$),C=!1},d($){$&&f(e),F(b)}}}function ge(c){let e,a,n;function i(s){c[3](s)}let o={mobile:!0,class:"min-h-screen bg-base-200",$$slots:{menu:[he],default:[$e]},$$scope:{ctx:c}};return c[0]!==void 0&&(o.open=c[0]),e=new _e({props:o}),ae.push(()=>se(e,"open",i)),{c(){z(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,t){N(e,s,t),n=!0},p(s,[t]){const r={};t&17&&(r.$$scope={dirty:t,ctx:s}),!a&&t&1&&(a=!0,r.open=s[0],ne(()=>a=!1)),e.$set(r)},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){q(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function be(c,e,a){let{$$slots:n={},$$scope:i}=e,{openSidebar:o=!0}=e;const s=()=>a(0,o=!o);function t(r){o=r,a(0,o)}return c.$$set=r=>{"openSidebar"in r&&a(0,o=r.openSidebar),"$$scope"in r&&a(4,i=r.$$scope)},[o,n,s,t,i]}class Ie extends x{constructor(e){super();ee(this,e,be,ge,te,{openSidebar:0})}}export{Ie as default};