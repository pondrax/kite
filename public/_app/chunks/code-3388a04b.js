import{S as ee,i as te,s as ae,a4 as le,a5 as K,a6 as A,e as k,w as q,k as G,c as y,a as E,x as Q,d as p,m as W,b as v,N as b,g as L,H as m,y as z,P as X,n as Y,o as H,B as J,p as Z,q as N,_ as ne,a7 as se,F as ie,I as oe,J as re,K as fe,t as V,h as B,j as ce,M as j,a8 as ue,a9 as _e}from"./vendor-5195766e.js";import{P as $}from"./index-c1a8d211.js";function he(i){let e;const a=i[13].default,t=ie(a,i,i[12],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&4096)&&oe(t,a,l,l[12],e?fe(a,l[12],n,null):re(l[12]),null)},i(l){e||(N(t,l),e=!0)},o(l){H(t,l),e=!1},d(l){t&&t.d(l)}}}function de(i){let e,a,t,l,n;return{c(){e=k("pre"),a=V(`
        `),t=k("code"),l=V(i[6]),n=V(`
      `),this.h()},l(r){e=y(r,"PRE",{"data-prefix":!0,class:!0});var c=E(e);a=B(c,`
        `),t=y(c,"CODE",{});var g=E(t);l=B(g,i[6]),g.forEach(p),n=B(c,`
      `),c.forEach(p),this.h()},h(){v(e,"data-prefix",i[1]),v(e,"class","svelte-1h0c39x")},m(r,c){L(r,e,c),m(e,a),m(e,t),m(t,l),m(e,n)},p(r,c){c&64&&ce(l,r[6]),c&2&&v(e,"data-prefix",r[1])},i:j,o:j,d(r){r&&p(e)}}}function me(i){let e,a,t,l;return{c(){e=k("pre"),a=V(`
        `),t=new ue,l=V(`
      `),this.h()},l(n){e=y(n,"PRE",{class:!0});var r=E(e);a=B(r,`
        `),t=_e(r),l=B(r,`
      `),r.forEach(p),this.h()},h(){t.a=l,v(e,"class","svelte-1h0c39x")},m(n,r){L(n,e,r),m(e,a),t.m(i[9],e),m(e,l)},p(n,r){r&512&&t.p(n[9])},i:j,o:j,d(n){n&&p(e)}}}function ge(i){let e,a,t,l,n,r,c,g,s,O,d,u,_,C,w,P;n=new le({props:{size:"24"}});var I=i[0]?K:A;function U(o){return{props:{size:"24"}}}I&&(s=new I(U()));const f=[me,de,he],T=[];function M(o,h){return o[2]?0:o[8]==0?1:2}return u=M(i),_=T[u]=f[u](i),{c(){e=k("div"),a=k("div"),t=k("div"),l=k("button"),q(n.$$.fragment),c=G(),g=k("button"),s&&q(s.$$.fragment),O=G(),d=k("div"),_.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var h=E(e);a=y(h,"DIV",{class:!0});var D=E(a);t=y(D,"DIV",{class:!0,"data-tip":!0});var S=E(t);l=y(S,"BUTTON",{});var R=E(l);Q(n.$$.fragment,R),R.forEach(p),S.forEach(p),c=W(D),g=y(D,"BUTTON",{});var x=E(g);s&&Q(s.$$.fragment,x),x.forEach(p),D.forEach(p),O=W(h),d=y(h,"DIV",{class:!0});var F=E(d);_.l(F),F.forEach(p),h.forEach(p),this.h()},h(){v(t,"class","tooltip tooltip-left tooltip-primary"),v(t,"data-tip",r=i[7]?"Copied":"Copy"),v(a,"class","absolute flex gap-2 top-3 right-3"),v(d,"class","-mt-8"),b(d,"hidden",!i[0]),v(e,"class","svelte-1h0c39x"),b(e,"relative",1),b(e,"mockup-code",1),b(e,"text-xs",i[3]),b(e,"text-sm",i[4]),b(e,"text-lg",i[5])},m(o,h){L(o,e,h),m(e,a),m(a,t),m(t,l),z(n,l,null),m(a,c),m(a,g),s&&z(s,g,null),m(e,O),m(e,d),T[u].m(d,null),C=!0,w||(P=[X(l,"click",i[10]),X(g,"click",i[14])],w=!0)},p(o,[h]){if((!C||h&128&&r!==(r=o[7]?"Copied":"Copy"))&&v(t,"data-tip",r),I!==(I=o[0]?K:A)){if(s){Y();const S=s;H(S.$$.fragment,1,0,()=>{J(S,1)}),Z()}I?(s=new I(U()),q(s.$$.fragment),N(s.$$.fragment,1),z(s,g,null)):s=null}let D=u;u=M(o),u===D?T[u].p(o,h):(Y(),H(T[D],1,1,()=>{T[D]=null}),Z(),_=T[u],_?_.p(o,h):(_=T[u]=f[u](o),_.c()),N(_,1),_.m(d,null)),h&1&&b(d,"hidden",!o[0]),h&8&&b(e,"text-xs",o[3]),h&16&&b(e,"text-sm",o[4]),h&32&&b(e,"text-lg",o[5])},i(o){C||(N(n.$$.fragment,o),s&&N(s.$$.fragment,o),N(_),C=!0)},o(o){H(n.$$.fragment,o),s&&H(s.$$.fragment,o),H(_),C=!1},d(o){o&&p(e),J(n),s&&J(s),T[u].d(),w=!1,ne(P)}}}function pe(i,e,a){let t,l,n,{$$slots:r={},$$scope:c}=e;const g=se(r);let{data:s=null}=e,{prefix:O=null}=e,{highlight:d=null}=e,{tiny:u=!1}=e,{small:_=!1}=e,{large:C=!1}=e,{open:w=!1}=e,P;const I=()=>{navigator.clipboard.writeText(s),a(7,P=!0),setTimeout(()=>a(7,P=!1),3e3)},U=()=>a(0,w=!w);return i.$$set=f=>{"data"in f&&a(11,s=f.data),"prefix"in f&&a(1,O=f.prefix),"highlight"in f&&a(2,d=f.highlight),"tiny"in f&&a(3,u=f.tiny),"small"in f&&a(4,_=f.small),"large"in f&&a(5,C=f.large),"open"in f&&a(0,w=f.open),"$$scope"in f&&a(12,c=f.$$scope)},i.$$.update=()=>{i.$$.dirty&2048&&a(6,t=`
`+(typeof s=="string"?s.trim():JSON.stringify(s,null,2).trim())),i.$$.dirty&68&&a(9,l=d?$.highlight(`
`+t,$.languages[d]):"")},a(8,n=Object.keys(g).length),[w,O,d,u,_,C,t,P,n,l,I,s,c,r,U]}class ke extends ee{constructor(e){super();te(this,e,pe,ge,ae,{data:11,prefix:1,highlight:2,tiny:3,small:4,large:5,open:0})}}export{ke as C};
