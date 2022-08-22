import{S as ae,i as oe,s as ne,e as k,k as C,c as j,a as y,m as I,d as E,b as n,I as G,g as K,J as f,V as R,W as Q,X as le,Y as se,Z as re,_ as ie,$ as x,a0 as de,t as ue,U as ce,h as _e,Q as fe,p as he,q as me,o as pe,a1 as ve,a2 as $,n as be,a3 as ge,K as Ee}from"../../chunks/vendor-4731a546.js";function B(d,{pending:t,error:e,result:a}){let h;async function T(m){const c=h={};m.preventDefault();const v=new FormData(d);t&&t(v,d);try{const r=await fetch(d.action,{method:d.method,headers:{accept:"application/json"},body:v});if(c!==h)return;r.ok?a(r,d):e?e(r,null,d):console.error(await r.text())}catch(r){if(e)e(null,r,d);else throw r}}return d.addEventListener("submit",T),{destroy(){d.removeEventListener("submit",T)}}}function ee(d,t,e){const a=d.slice();return a[6]=t[e],a[7]=t,a[8]=e,a}function te(d,t){let e,a,h,T,m,c,v,r,o,p,_,b,O,D,M,s,i,l,q,N,P,A,L,U,S,V=Ee,w,J,W;function X(...g){return t[3](t[6],t[7],t[8],...g)}function Y(){return t[4](t[6],t[7],t[8])}function Z(){return t[5](t[6])}return{key:d,first:null,c(){e=k("div"),a=k("form"),h=k("input"),m=C(),c=k("button"),p=C(),_=k("form"),b=k("input"),D=C(),M=k("button"),i=C(),l=k("form"),q=k("button"),L=C(),this.h()},l(g){e=j(g,"DIV",{class:!0});var u=y(e);a=j(u,"FORM",{action:!0,method:!0});var F=y(a);h=j(F,"INPUT",{type:!0,name:!0,class:!0}),m=I(F),c=j(F,"BUTTON",{class:!0,"aria-label":!0}),y(c).forEach(E),F.forEach(E),p=I(u),_=j(u,"FORM",{class:!0,action:!0,method:!0});var H=y(_);b=j(H,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),D=I(H),M=j(H,"BUTTON",{class:!0,"aria-label":!0}),y(M).forEach(E),H.forEach(E),i=I(u),l=j(u,"FORM",{action:!0,method:!0});var z=y(l);q=j(z,"BUTTON",{class:!0,"aria-label":!0}),y(q).forEach(E),z.forEach(E),L=I(u),u.forEach(E),this.h()},h(){n(h,"type","hidden"),n(h,"name","done"),h.value=T=t[6].done?"":"true",n(h,"class","svelte-dmxqmd"),n(c,"class","toggle svelte-dmxqmd"),n(c,"aria-label",v="Mark todo as "+(t[6].done?"not done":"done")),n(a,"action",r="/todos/"+t[6].uid+".json?_method=PATCH"),n(a,"method","post"),n(b,"aria-label","Edit todo"),n(b,"type","text"),n(b,"name","text"),b.value=O=t[6].text,n(b,"class","svelte-dmxqmd"),n(M,"class","save svelte-dmxqmd"),n(M,"aria-label","Save todo"),n(_,"class","text svelte-dmxqmd"),n(_,"action",s="/todos/"+t[6].uid+".json?_method=PATCH"),n(_,"method","post"),n(q,"class","delete svelte-dmxqmd"),n(q,"aria-label","Delete todo"),q.disabled=N=t[6].pending_delete,n(l,"action",P="/todos/"+t[6].uid+".json?_method=DELETE"),n(l,"method","post"),n(e,"class","todo svelte-dmxqmd"),G(e,"done",t[6].done),this.first=e},m(g,u){K(g,e,u),f(e,a),f(a,h),f(a,m),f(a,c),f(e,p),f(e,_),f(_,b),f(_,D),f(_,M),f(e,i),f(e,l),f(l,q),f(e,L),w=!0,J||(W=[R(o=B.call(null,a,{pending:X,result:t[1]})),R(B.call(null,_,{result:t[1]})),R(A=B.call(null,l,{pending:Y,result:Z}))],J=!0)},p(g,u){t=g,(!w||u&1&&T!==(T=t[6].done?"":"true"))&&(h.value=T),(!w||u&1&&v!==(v="Mark todo as "+(t[6].done?"not done":"done")))&&n(c,"aria-label",v),(!w||u&1&&r!==(r="/todos/"+t[6].uid+".json?_method=PATCH"))&&n(a,"action",r),o&&Q(o.update)&&u&1&&o.update.call(null,{pending:X,result:t[1]}),(!w||u&1&&O!==(O=t[6].text)&&b.value!==O)&&(b.value=O),(!w||u&1&&s!==(s="/todos/"+t[6].uid+".json?_method=PATCH"))&&n(_,"action",s),(!w||u&1&&N!==(N=t[6].pending_delete))&&(q.disabled=N),(!w||u&1&&P!==(P="/todos/"+t[6].uid+".json?_method=DELETE"))&&n(l,"action",P),A&&Q(A.update)&&u&1&&A.update.call(null,{pending:Y,result:Z}),u&1&&G(e,"done",t[6].done)},r(){S=e.getBoundingClientRect()},f(){le(e),V(),se(e,S)},a(){V(),V=re(e,S,ve,{duration:200})},i(g){w||(g&&ie(()=>{U||(U=x(e,$,{start:.7},!0)),U.run(1)}),w=!0)},o(g){g&&(U||(U=x(e,$,{start:.7},!1)),U.run(0)),w=!1},d(g){g&&E(e),g&&U&&U.end(),J=!1,de(W)}}}function Te(d){let t,e,a,h,T,m,c,v,r,o=[],p=new Map,_,b,O,D=d[0];const M=s=>s[6].uid;for(let s=0;s<D.length;s+=1){let i=ee(d,D,s),l=M(i);p.set(l,o[s]=te(l,i))}return{c(){t=C(),e=k("div"),a=k("h1"),h=ue("Todos"),T=C(),m=k("form"),c=k("input"),r=C();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(E),t=I(s),e=j(s,"DIV",{class:!0});var l=y(e);a=j(l,"H1",{});var q=y(a);h=_e(q,"Todos"),q.forEach(E),T=I(l),m=j(l,"FORM",{class:!0,action:!0,method:!0});var N=y(m);c=j(N,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),N.forEach(E),r=I(l);for(let P=0;P<o.length;P+=1)o[P].l(l);l.forEach(E),this.h()},h(){document.title="Todos",n(c,"name","text"),n(c,"aria-label","Add todo"),n(c,"placeholder","+ tap to add a todo"),n(c,"class","svelte-dmxqmd"),n(m,"class","new svelte-dmxqmd"),n(m,"action","/todos.json"),n(m,"method","post"),n(e,"class","todos svelte-dmxqmd")},m(s,i){K(s,t,i),K(s,e,i),f(e,a),f(a,h),f(e,T),f(e,m),f(m,c),f(e,r);for(let l=0;l<o.length;l+=1)o[l].m(e,null);_=!0,b||(O=R(v=B.call(null,m,{result:d[2]})),b=!0)},p(s,[i]){if(v&&Q(v.update)&&i&1&&v.update.call(null,{result:s[2]}),i&3){D=s[0],be();for(let l=0;l<o.length;l+=1)o[l].r();o=fe(o,i,M,1,s,D,p,e,ge,te,null,ee);for(let l=0;l<o.length;l+=1)o[l].a();he()}},i(s){if(!_){for(let i=0;i<D.length;i+=1)me(o[i]);_=!0}},o(s){for(let i=0;i<o.length;i+=1)pe(o[i]);_=!1},d(s){s&&E(t),s&&E(e);for(let i=0;i<o.length;i+=1)o[i].d();b=!1,O()}}}const qe=async({fetch:d})=>{const t=await d("/todos.json");if(t.ok)return{props:{todos:await t.json()}};const{message:e}=await t.json();return{error:new Error(e)}};function ke(d,t,e){let{todos:a}=t;async function h(r){const o=await r.json();e(0,a=a.map(p=>p.uid===o.uid?o:p))}const T=async(r,o)=>{const p=await r.json();e(0,a=[...a,p]),o.reset()},m=(r,o,p,_)=>{e(0,o[p].done=!!_.get("done"),a)},c=(r,o,p)=>e(0,o[p].pending_delete=!0,a),v=r=>{e(0,a=a.filter(o=>o.uid!==r.uid))};return d.$$set=r=>{"todos"in r&&e(0,a=r.todos)},[a,h,T,m,c,v]}class we extends ae{constructor(t){super();oe(this,t,ke,Te,ne,{todos:0})}}export{we as default,qe as load};
