import{S as K,i as Q,s as Y,M as oe,e as E,t as T,k as V,c as S,a as $,h as z,m as A,d as f,b as h,g as B,J as c,j as O,N as ie,O as ce,P as ue,q as G,o as U,w as Z,x,y as ee,B as te,f as R,Q as X,R as q,K as ae,G as ne,H as se,T as Ce}from"../chunks/vendor-628f8b8b.js";var Pe="/_app/assets/YoungNate-4c0e0545.png";const Ve=l=>({}),de=l=>({});function Ae(l){let e,t,a,s,i,n,r,o,u,d;const y=l[2].options,I=oe(y,l,l[1],de),D=l[2].default,M=oe(D,l,l[1],null);return{c(){e=E("section"),t=E("div"),a=E("div"),s=T(l[0]),i=V(),n=E("span"),r=V(),o=E("div"),I&&I.c(),u=V(),M&&M.c(),this.h()},l(v){e=S(v,"SECTION",{});var g=$(e);t=S(g,"DIV",{class:!0});var p=$(t);a=S(p,"DIV",{class:!0});var m=$(a);s=z(m,l[0]),i=A(m),n=S(m,"SPAN",{class:!0}),$(n).forEach(f),m.forEach(f),r=A(p),o=S(p,"DIV",{class:!0});var k=$(o);I&&I.l(k),u=A(k),M&&M.l(k),k.forEach(f),p.forEach(f),g.forEach(f),this.h()},h(){h(n,"class","spacer svelte-n1gf94"),h(a,"class","header-wrapper svelte-n1gf94"),h(o,"class","options-wrapper svelte-n1gf94"),h(t,"class","container svelte-n1gf94")},m(v,g){B(v,e,g),c(e,t),c(t,a),c(a,s),c(a,i),c(a,n),c(t,r),c(t,o),I&&I.m(o,null),c(o,u),M&&M.m(o,null),d=!0},p(v,[g]){(!d||g&1)&&O(s,v[0]),I&&I.p&&(!d||g&2)&&ie(I,y,v,v[1],d?ue(y,v[1],g,Ve):ce(v[1]),de),M&&M.p&&(!d||g&2)&&ie(M,D,v,v[1],d?ue(D,v[1],g,null):ce(v[1]),null)},i(v){d||(G(I,v),G(M,v),d=!0)},o(v){U(I,v),U(M,v),d=!1},d(v){v&&f(e),I&&I.d(v),M&&M.d(v)}}}function Te(l,e,t){let{$$slots:a={},$$scope:s}=e,{header:i}=e;return l.$$set=n=>{"header"in n&&t(0,i=n.header),"$$scope"in n&&t(1,s=n.$$scope)},[i,s,a]}class he extends K{constructor(e){super();Q(this,e,Te,Ae,Y,{header:0})}}function fe(l,e,t){const a=l.slice();return a[1]=e[t].school,a[2]=e[t].study,a[3]=e[t].degree,a[4]=e[t].year,a[5]=e[t].additionalInfo,a}function me(l,e,t){const a=l.slice();return a[8]=e[t],a[10]=t,a}function pe(l,e){let t,a=e[8]+"",s;return{key:l,first:null,c(){t=E("div"),s=T(a),this.h()},l(i){t=S(i,"DIV",{});var n=$(t);s=z(n,a),n.forEach(f),this.h()},h(){this.first=t},m(i,n){B(i,t,n),c(t,s)},p(i,n){e=i,n&1&&a!==(a=e[8]+"")&&O(s,a)},d(i){i&&f(t)}}}function ge(l,e){let t,a,s=e[1]+"",i,n,r,o=e[4]+"",u,d,y,I=e[2]+"",D,M,v,g=e[3]+"",p,m,k,P=[],W=new Map,J,L=e[5];const b=_=>_[10];for(let _=0;_<L.length;_+=1){let w=me(e,L,_),N=b(w);W.set(N,P[_]=pe(N,w))}return{key:l,first:null,c(){t=E("div"),a=E("div"),i=T(s),n=V(),r=E("div"),u=T(o),d=V(),y=E("div"),D=T(I),M=V(),v=E("div"),p=T(g),m=V(),k=E("ul");for(let _=0;_<P.length;_+=1)P[_].c();J=V(),this.h()},l(_){t=S(_,"DIV",{class:!0});var w=$(t);a=S(w,"DIV",{class:!0,style:!0});var N=$(a);i=z(N,s),N.forEach(f),n=A(w),r=S(w,"DIV",{class:!0,style:!0});var j=$(r);u=z(j,o),j.forEach(f),d=A(w),y=S(w,"DIV",{class:!0,style:!0});var H=$(y);D=z(H,I),H.forEach(f),M=A(w),v=S(w,"DIV",{class:!0,style:!0});var F=$(v);p=z(F,g),F.forEach(f),m=A(w),k=S(w,"UL",{class:!0,style:!0});var re=$(k);for(let le=0;le<P.length;le+=1)P[le].l(re);re.forEach(f),J=A(w),w.forEach(f),this.h()},h(){h(a,"class","school svelte-d5s9wd"),R(a,"grid-area","school"),h(r,"class","year svelte-d5s9wd"),R(r,"grid-area","year"),h(y,"class","study"),R(y,"grid-area","study"),h(v,"class","degree"),R(v,"grid-area","degree"),h(k,"class","additionalInfo"),R(k,"grid-area","additionalInfo"),h(t,"class","education svelte-d5s9wd"),this.first=t},m(_,w){B(_,t,w),c(t,a),c(a,i),c(t,n),c(t,r),c(r,u),c(t,d),c(t,y),c(y,D),c(t,M),c(t,v),c(v,p),c(t,m),c(t,k);for(let N=0;N<P.length;N+=1)P[N].m(k,null);c(t,J)},p(_,w){e=_,w&1&&s!==(s=e[1]+"")&&O(i,s),w&1&&o!==(o=e[4]+"")&&O(u,o),w&1&&I!==(I=e[2]+"")&&O(D,I),w&1&&g!==(g=e[3]+"")&&O(p,g),w&1&&(L=e[5],P=X(P,w,b,1,e,L,W,k,q,pe,null,me))},d(_){_&&f(t);for(let w=0;w<P.length;w+=1)P[w].d()}}}function ze(l){let e,t=[],a=new Map,s=l[0];const i=n=>n[1]+n[4];for(let n=0;n<s.length;n+=1){let r=fe(l,s,n),o=i(r);a.set(o,t[n]=ge(o,r))}return{c(){e=E("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=S(n,"DIV",{class:!0});var r=$(e);for(let o=0;o<t.length;o+=1)t[o].l(r);r.forEach(f),this.h()},h(){h(e,"class","education-list-container svelte-d5s9wd")},m(n,r){B(n,e,r);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,r){r&1&&(s=n[0],t=X(t,r,i,1,n,s,a,e,q,ge,null,fe))},d(n){n&&f(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Ne(l){let e,t;return e=new he({props:{header:"Education",$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){Z(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,s){ee(e,a,s),t=!0},p(a,[s]){const i={};s&2049&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(a){t||(G(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){te(e,a)}}}function Oe(l,e,t){let{education:a}=e;return l.$$set=s=>{"education"in s&&t(0,a=s.education)},[a]}class Le extends K{constructor(e){super();Q(this,e,Oe,Ne,Y,{education:0})}}function ve(l,e,t){const a=l.slice();return a[1]=e[t].company,a[2]=e[t].companyStart,a[3]=e[t].companyEnd,a[4]=e[t].companyDescription,a[5]=e[t].periods,a}function _e(l,e,t){const a=l.slice();return a[8]=e[t].start,a[9]=e[t].end,a[10]=e[t].title,a[11]=e[t].achievements,a[12]=e[t].toolSets,a}function ye(l,e,t){const a=l.slice();return a[15]=e[t].tools,a[17]=t,a}function ke(l,e,t){const a=l.slice();return a[18]=e[t],a[17]=t,a}function we(l,e,t){const a=l.slice();return a[20]=e[t],a[17]=t,a}function $e(l){var r;let e,t=l[8]+"",a,s,i=((r=l[9])!=null?r:"present")+"",n;return{c(){e=E("div"),a=T(t),s=T(" - "),n=T(i),this.h()},l(o){e=S(o,"DIV",{class:!0,style:!0});var u=$(e);a=z(u,t),s=z(u," - "),n=z(u,i),u.forEach(f),this.h()},h(){h(e,"class","roll-dates svelte-4621zo"),R(e,"grid-area","roll-dates")},m(o,u){B(o,e,u),c(e,a),c(e,s),c(e,n)},p(o,u){var d;u&1&&t!==(t=o[8]+"")&&O(a,t),u&1&&i!==(i=((d=o[9])!=null?d:"present")+"")&&O(n,i)},d(o){o&&f(e)}}}function Ie(l,e){let t,a=e[20]+"",s;return{key:l,first:null,c(){t=E("li"),s=T(a),this.h()},l(i){t=S(i,"LI",{});var n=$(t);s=z(n,a),n.forEach(f),this.h()},h(){this.first=t},m(i,n){B(i,t,n),c(t,s)},p(i,n){e=i,n&1&&a!==(a=e[20]+"")&&O(s,a)},d(i){i&&f(t)}}}function be(l){let e,t=[],a=new Map,s=l[12];const i=n=>n[17];for(let n=0;n<s.length;n+=1){let r=ye(l,s,n),o=i(r);a.set(o,t[n]=Se(o,r))}return{c(){e=E("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=S(n,"DIV",{class:!0,style:!0});var r=$(e);for(let o=0;o<t.length;o+=1)t[o].l(r);r.forEach(f),this.h()},h(){h(e,"class","toolSets"),R(e,"grid-area","toolSets")},m(n,r){B(n,e,r);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,r){r&1&&(s=n[12],t=X(t,r,i,1,n,s,a,e,q,Se,null,ye))},d(n){n&&f(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Ee(l,e){let t,a=e[18]+"",s;return{key:l,first:null,c(){t=E("div"),s=T(a),this.h()},l(i){t=S(i,"DIV",{class:!0});var n=$(t);s=z(n,a),n.forEach(f),this.h()},h(){h(t,"class","tool svelte-4621zo"),this.first=t},m(i,n){B(i,t,n),c(t,s)},p(i,n){e=i,n&1&&a!==(a=e[18]+"")&&O(s,a)},d(i){i&&f(t)}}}function Se(l,e){let t,a,s=[],i=new Map,n,r=e[15];const o=u=>u[17];for(let u=0;u<r.length;u+=1){let d=ke(e,r,u),y=o(d);i.set(y,s[u]=Ee(y,d))}return{key:l,first:null,c(){t=E("div"),a=E("ul");for(let u=0;u<s.length;u+=1)s[u].c();n=V(),this.h()},l(u){t=S(u,"DIV",{class:!0});var d=$(t);a=S(d,"UL",{class:!0,style:!0});var y=$(a);for(let I=0;I<s.length;I+=1)s[I].l(y);y.forEach(f),n=A(d),d.forEach(f),this.h()},h(){h(a,"class","tools svelte-4621zo"),R(a,"grid-area","tool"),h(t,"class","tools svelte-4621zo"),this.first=t},m(u,d){B(u,t,d),c(t,a);for(let y=0;y<s.length;y+=1)s[y].m(a,null);c(t,n)},p(u,d){e=u,d&1&&(r=e[15],s=X(s,d,o,1,e,r,i,a,q,Ee,null,ke))},d(u){u&&f(t);for(let d=0;d<s.length;d+=1)s[d].d()}}}function De(l,e){let t,a,s=e[10]+"",i,n,r,o,u=[],d=new Map,y,I,D=e[8].length>1&&$e(e),M=e[11];const v=p=>p[17];for(let p=0;p<M.length;p+=1){let m=we(e,M,p),k=v(m);d.set(k,u[p]=Ie(k,m))}let g=e[12].length>=1&&be(e);return{key:l,first:null,c(){t=E("div"),a=E("div"),i=T(s),n=V(),D&&D.c(),r=V(),o=E("ul");for(let p=0;p<u.length;p+=1)u[p].c();y=V(),g&&g.c(),I=V(),this.h()},l(p){t=S(p,"DIV",{class:!0});var m=$(t);a=S(m,"DIV",{class:!0,style:!0});var k=$(a);i=z(k,s),k.forEach(f),n=A(m),D&&D.l(m),r=A(m),o=S(m,"UL",{class:!0,style:!0});var P=$(o);for(let W=0;W<u.length;W+=1)u[W].l(P);P.forEach(f),y=A(m),g&&g.l(m),I=A(m),m.forEach(f),this.h()},h(){h(a,"class","roll-title svelte-4621zo"),R(a,"grid-area","roll-title"),h(o,"class","achievements svelte-4621zo"),R(o,"grid-area","achievements"),h(t,"class","period svelte-4621zo"),this.first=t},m(p,m){B(p,t,m),c(t,a),c(a,i),c(t,n),D&&D.m(t,null),c(t,r),c(t,o);for(let k=0;k<u.length;k+=1)u[k].m(o,null);c(t,y),g&&g.m(t,null),c(t,I)},p(p,m){e=p,m&1&&s!==(s=e[10]+"")&&O(i,s),e[8].length>1?D?D.p(e,m):(D=$e(e),D.c(),D.m(t,r)):D&&(D.d(1),D=null),m&1&&(M=e[11],u=X(u,m,v,1,e,M,d,o,q,Ie,null,we)),e[12].length>=1?g?g.p(e,m):(g=be(e),g.c(),g.m(t,I)):g&&(g.d(1),g=null)},d(p){p&&f(t),D&&D.d();for(let m=0;m<u.length;m+=1)u[m].d();g&&g.d()}}}function Me(l,e){let t,a,s=e[1]+"",i,n,r,o=e[2]+"",u,d,y=e[3]+"",I,D,M,v=e[4]+"",g,p,m,k=[],P=new Map,W,J=e[5];const L=b=>`${b[8]}-${b[9]}`;for(let b=0;b<J.length;b+=1){let _=_e(e,J,b),w=L(_);P.set(w,k[b]=De(w,_))}return{key:l,first:null,c(){t=E("div"),a=E("div"),i=T(s),n=V(),r=E("div"),u=T(o),d=T(" - "),I=T(y),D=V(),M=E("div"),g=T(v),p=V(),m=E("div");for(let b=0;b<k.length;b+=1)k[b].c();W=V(),this.h()},l(b){t=S(b,"DIV",{class:!0});var _=$(t);a=S(_,"DIV",{class:!0,style:!0});var w=$(a);i=z(w,s),w.forEach(f),n=A(_),r=S(_,"DIV",{class:!0,style:!0});var N=$(r);u=z(N,o),d=z(N," - "),I=z(N,y),N.forEach(f),D=A(_),M=S(_,"DIV",{class:!0,style:!0});var j=$(M);g=z(j,v),j.forEach(f),p=A(_),m=S(_,"DIV",{class:!0,style:!0});var H=$(m);for(let F=0;F<k.length;F+=1)k[F].l(H);H.forEach(f),W=A(_),_.forEach(f),this.h()},h(){h(a,"class","company svelte-4621zo"),R(a,"grid-area","company"),h(r,"class","company-dates svelte-4621zo"),R(r,"grid-area","company-dates"),h(M,"class","company-description svelte-4621zo"),R(M,"grid-area","company-description"),h(m,"class","periods"),R(m,"grid-area","period"),h(t,"class","experience svelte-4621zo"),this.first=t},m(b,_){B(b,t,_),c(t,a),c(a,i),c(t,n),c(t,r),c(r,u),c(r,d),c(r,I),c(t,D),c(t,M),c(M,g),c(t,p),c(t,m);for(let w=0;w<k.length;w+=1)k[w].m(m,null);c(t,W)},p(b,_){e=b,_&1&&s!==(s=e[1]+"")&&O(i,s),_&1&&o!==(o=e[2]+"")&&O(u,o),_&1&&y!==(y=e[3]+"")&&O(I,y),_&1&&v!==(v=e[4]+"")&&O(g,v),_&1&&(J=e[5],k=X(k,_,L,1,e,J,P,m,q,De,null,_e))},d(b){b&&f(t);for(let _=0;_<k.length;_+=1)k[_].d()}}}function Be(l){let e,t=[],a=new Map,s=l[0];const i=n=>n[1];for(let n=0;n<s.length;n+=1){let r=ve(l,s,n),o=i(r);a.set(o,t[n]=Me(o,r))}return{c(){e=E("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=S(n,"DIV",{class:!0});var r=$(e);for(let o=0;o<t.length;o+=1)t[o].l(r);r.forEach(f),this.h()},h(){h(e,"class","experience-list-container svelte-4621zo")},m(n,r){B(n,e,r);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(n,r){r&1&&(s=n[0],t=X(t,r,i,1,n,s,a,e,q,Me,null,ve))},d(n){n&&f(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function We(l){let e,t;return e=new he({props:{header:"Experience",$$slots:{default:[Be]},$$scope:{ctx:l}}}),{c(){Z(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,s){ee(e,a,s),t=!0},p(a,[s]){const i={};s&4194305&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(a){t||(G(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){te(e,a)}}}function Re(l,e,t){let{experience:a}=e;return l.$$set=s=>{"experience"in s&&t(0,a=s.experience)},[a]}class Je extends K{constructor(e){super();Q(this,e,Re,We,Y,{experience:0})}}function Fe(l){let e,t;return{c(){e=E("section"),t=T(l[0]),this.h()},l(a){e=S(a,"SECTION",{class:!0});var s=$(e);t=z(s,l[0]),s.forEach(f),this.h()},h(){h(e,"class","svelte-2fmsfn")},m(a,s){B(a,e,s),c(e,t)},p(a,[s]){s&1&&O(t,a[0])},i:ae,o:ae,d(a){a&&f(e)}}}function He(l,e,t){let{summary:a}=e;return l.$$set=s=>{"summary"in s&&t(0,a=s.summary)},[a]}class je extends K{constructor(e){super();Q(this,e,He,Fe,Y,{summary:0})}}function Ge(l){let e,t,a,s,i,n,r=l[0].name+"",o,u,d,y,I=l[0].email+"",D,M,v,g,p,m,k,P,W,J;return{c(){e=E("div"),t=E("a"),a=E("img"),i=V(),n=E("div"),o=T(r),u=V(),d=E("div"),y=T("eMAIL: "),D=T(I),M=V(),v=E("div"),g=E("a"),p=ne("svg"),m=ne("rect"),k=ne("line"),P=ne("line"),W=T("Download Resume"),this.h()},l(L){e=S(L,"DIV",{class:!0});var b=$(e);t=S(b,"A",{href:!0});var _=$(t);a=S(_,"IMG",{src:!0,class:!0,alt:!0}),_.forEach(f),i=A(b),n=S(b,"DIV",{class:!0});var w=$(n);o=z(w,r),w.forEach(f),u=A(b),d=S(b,"DIV",{class:!0});var N=$(d);y=z(N,"eMAIL: "),D=z(N,I),N.forEach(f),M=A(b),v=S(b,"DIV",{class:!0});var j=$(v);g=S(j,"A",{href:!0,target:!0});var H=$(g);p=se(H,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var F=$(p);m=se(F,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0}),$(m).forEach(f),k=se(F,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),$(k).forEach(f),P=se(F,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),$(P).forEach(f),F.forEach(f),W=z(H,"Download Resume"),H.forEach(f),j.forEach(f),b.forEach(f),this.h()},h(){Ce(a.src,s=Pe)||h(a,"src",s),h(a,"class","userImage svelte-1pwzovg"),h(a,"alt","Nate"),h(t,"href","/"),h(n,"class","userName svelte-1pwzovg"),h(d,"class","emailText svelte-1pwzovg"),h(m,"x","3"),h(m,"y","3"),h(m,"width","18"),h(m,"height","18"),h(m,"rx","2"),h(m,"ry","2"),h(k,"x1","8"),h(k,"y1","12"),h(k,"x2","16"),h(k,"y2","12"),h(P,"x1","12"),h(P,"y1","8"),h(P,"x2","12"),h(P,"y2","16"),h(p,"xmlns","http://www.w3.org/2000/svg"),h(p,"width","24"),h(p,"height","24"),h(p,"viewBox","0 0 24 24"),h(p,"fill","none"),h(p,"stroke","currentColor"),h(p,"stroke-width","2"),h(p,"stroke-linecap","round"),h(p,"stroke-linejoin","round"),h(g,"href",J=l[0].downloadableResumeLink),h(g,"target","_blank"),h(v,"class","downloadableResume svelte-1pwzovg"),h(e,"class","resumeUserContainer svelte-1pwzovg")},m(L,b){B(L,e,b),c(e,t),c(t,a),c(e,i),c(e,n),c(n,o),c(e,u),c(e,d),c(d,y),c(d,D),c(e,M),c(e,v),c(v,g),c(g,p),c(p,m),c(p,k),c(p,P),c(g,W)},p(L,[b]){b&1&&r!==(r=L[0].name+"")&&O(o,r),b&1&&I!==(I=L[0].email+"")&&O(D,I),b&1&&J!==(J=L[0].downloadableResumeLink)&&h(g,"href",J)},i:ae,o:ae,d(L){L&&f(e)}}}function Ue(l,e,t){let{contact:a}=e;return l.$$set=s=>{"contact"in s&&t(0,a=s.contact)},[a]}class Xe extends K{constructor(e){super();Q(this,e,Ue,Ge,Y,{contact:0})}}var C;(function(l){l.Language="language",l.Framework="framework",l.Other="other",l.Tool="tool"})(C||(C={}));const qe={contact:{name:"Nate Blazier",phone:"+1-321-252-xxxx",email:"nblazier@gmail.com",linkedIn:"",github:"",downloadableResumeLink:"https://drive.google.com/file/d/1os3lNY1M6hZ_FVvWwlMEVUDkVtEuCQcG/view?usp=sharing"},summary:'"I currently manage a team of automation test engineers. We work with all our (SCRUM) Product/Dev teams to bring automation test coverage to all our Web products. Many of the products have been developed over the past 10 - 20 years. Keywords of the products could be (multi-environment, multi-tenant, multi-language, and heavily-customizable). I am self-driven, honest, and I care about my work."',skills:[{name:"agile",type:C.Other,rank:4,link:"https://en.wikipedia.org/wiki/Agile_Otherware_development"},{name:"angular",type:C.Framework,rank:5,link:"https://angular.io/"},{name:"aws",type:C.Tool,rank:2,link:"https://aws.amazon.com/"},{name:"c#",type:C.Language,rank:5,link:"https://docs.microOther.com/en-us/dotnet/csharp/"},{name:"c++",type:C.Language,rank:3,link:"https://www.cplusplus.com/"},{name:"css",type:C.Language,rank:4,link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{name:"deno",type:C.Framework,rank:1,link:"https://deno.land/"},{name:"docker-compose",type:C.Tool,rank:5,link:"https://docs.docker.com/compose/"},{name:"docker",type:C.Tool,rank:5,link:"https://www.docker.com/"},{name:"git",type:C.Tool,rank:3,link:"https://git-scm.com/"},{name:"github",type:C.Tool,rank:3,link:"https://github.com/"},{name:"html",type:C.Language,rank:4,link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"javascript",type:C.Language,rank:4,link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"jira",type:C.Tool,rank:3,link:"https://www.atlassian.com/software/jira"},{name:"kubernetes",type:C.Tool,rank:1,link:"https://kubernetes.io/"},{name:"ngrx",type:C.Framework,rank:4,link:"https://ngrx.io/"},{name:"node",type:C.Framework,rank:3,link:"https://nodejs.org/en/"},{name:"python",type:C.Language,rank:1,link:"https://www.python.org/"},{name:"react",type:C.Framework,rank:3,link:"https://reactjs.org/"},{name:"real-time",type:C.Other,rank:2,link:"https://www.smu.edu/guildhall"},{name:"redux",type:C.Framework,rank:4,link:"https://redux.js.org/"},{name:"shape up",type:C.Other,rank:2,link:"https://basecamp.com/shapeup"},{name:"svelte",type:C.Language,rank:4,link:"https://svelte.dev/"},{name:"sveltekit",type:C.Framework,rank:3,link:"https://kit.svelte.dev/"},{name:"typescript",type:C.Language,rank:5,link:"https://www.typescriptlang.org/"},{name:"vscode",type:C.Tool,rank:4,link:"https://code.visualstudio.com/"}].sort((l,e)=>e.rank-l.rank),experience:[{company:"Notified",companyStart:"May 2008",companyEnd:"Current",companyDescription:"Owned by Apollo Global - INXPO > West Corporation > Intrado > now Notified. Notified is the world's only communications cloud for events, public relations, and investor relations.",periods:[{title:"Sr Software Quality Automation Test Engineer",start:"January 2018",end:"Current",achievements:["Manage a core team of 5 UI and API Automation Test Engineers.","Support all other scrum teams towards automated testing coverage goals.","Help support Performance testing teams on product knowledge.","Train current manual tester to develop automation skills.","Code automation testing scripts.","Prioritize and Assign work to other teammembers.","Build Automation Frameworks."],toolSets:[{tools:["Selenium","RestAssured","Java","Maven","TestNG","Jenkins"]},{tools:["Microsoft Playwright","SuperTest API testing","typescript","Javascript","Node","Jenkins"]}]},{title:"Quality Assurance Engineer",start:"January 2010",end:"January 2018",achievements:["Work internally to assure high build quality of INXPO\u2019s proprietary software: Webcasting XPOCAST, INXPO Virtual Events, Social Business TV, Email Publication Suite, INXPO Mobile Applications, Mobile Browser , and Data Metrics, etc.","Involved in the software development process - monitoring and improving processes, making sure all agreed-upon processes, standards, and procedures are followed.","Work with Development, Solutions, Product Management, and Production on finding solutions to current and possible future web issues.","Manage test scenarios.","Write scripts used for training INXPO teams and INXPO clients on software uses.","Worked on custom INXPO projects with companies such as Microsoft, Cisco, Redhat, Jive, etc."],toolSets:[]},{title:"Senior Associate Producer in Client Services for New Media",start:"May 2008",end:"February 2010",achievements:["Assist Event Director in managing/Directing all aspects of building INXPO Virtual Environments for Businesses (Trade Shows, Job fairs, Virtual Office Buildings, Online Presentations, Social Communities.","Directly worked with clients such as: Cisco Systems(Cisco Live & Cisco Partner Space), GE Healthcare, Waters, Jack Morton, HSM, BG-Group, Global Spec, Highland Capital Partners, IDG, PennWell, IngramMicro, Informatica, Journal of Commerce, Shaker, ValleyForge, Motorcycle Industry and ATV Industry Magazine, UBM, and more..."],toolSets:[]}]},{company:"Orchard View Nursing Home - Princeton, IL",companyStart:"February 2008",companyEnd:"May 2008",companyDescription:"Started out as a volunteer. They lost most of their staff so I took a job until they could restaff.",periods:[{title:"Dietary/Cook",start:"",end:"",achievements:["Assist health-care staff in making sure residents receive nutritious good tasting food.","Following up on dietary regimens; monitoring and charting eating habits."],toolSets:[]}]},{company:"Allan Odis Inc. - Chicago, IL",companyStart:"January 2006",companyEnd:"January 2008",companyDescription:"Real-Estate Brokerage Condominium Management.",periods:[{title:"Property Management Operations Assistant",start:"",end:"",achievements:["Manage/Maintain Properties and Property Budgets.","Host Condo Association Meetings.","Involved in New Employee Hire and Training.","Handled Marketing and Administration Duties.","Maintained customers satisfaction with excellent customer service skills.","Vendor Relations."],toolSets:[]}]},{company:" Carthage College - Kenosha, WI",companyStart:"2003",companyEnd:"2007",companyDescription:"",periods:[{title:"Resident Assistant",start:"August 2005",end:"May 2006",achievements:["Aided in building a community among students.","Introduced residents to outside/inside events, opportunities and programs.","Provided paths for residents to follow during attendance.","Handled issues that appeared in resident's lives."],toolSets:[]},{title:"Website Administrator - Carthage College Paper \u201CThe Current\u201D.",start:"August 2005",end:"May 2006",achievements:["Maintained Website for the college paper \u201CThe Current\u201D.","Handled The Graphic Design and Maintenance."],toolSets:[]}]},{company:"Pioneer Hi-Bred International - Princeton, IL",companyStart:"Summers of 1997, 1999",companyEnd:"2006",companyDescription:"DuPont Pioneer, formerly Pioneer Hi-Bred is the largest U.S. producer of hybrid seeds for agriculture. They are a major producer of genetically modified organisms.",periods:[{title:"Crew Leader",start:"",end:"",achievements:["Handled the business of moving groups towards company goals.","In charge of training and overseeing crews.","Readied and maintained work areas for crews."],toolSets:[]},{title:"Research Assistant",start:"",end:"",achievements:["Dealt with the experimental genetic manipulation of different corn hybrids.","Performed inoculation experiments (Organic, Chemical, Biological).","Responsible for data collection.","Prepared workspaces/experiment zones for the Scientists."],toolSets:[]}]}],education:[{school:"Carthage College, Kenosha WI",study:"Business Administration & Marketing",additionalInfo:["Degrees with additional focuses - Economics, Computer Graphic Design, and IMS.","Economic Educational Study Tours - East Africa, Thailand, and Japan.","Awarded Carthage Business Fellowship."],degree:"Bachelor of Arts",year:"2007"}]};function Ke(l){let e,t,a,s,i,n,r,o,u;return t=new Xe({props:{contact:l[0]}}),s=new je({props:{summary:l[1]}}),n=new Je({props:{experience:l[2]}}),o=new Le({props:{education:l[3]}}),{c(){e=E("div"),Z(t.$$.fragment),a=V(),Z(s.$$.fragment),i=V(),Z(n.$$.fragment),r=V(),Z(o.$$.fragment),this.h()},l(d){e=S(d,"DIV",{class:!0});var y=$(e);x(t.$$.fragment,y),a=A(y),x(s.$$.fragment,y),i=A(y),x(n.$$.fragment,y),r=A(y),x(o.$$.fragment,y),y.forEach(f),this.h()},h(){h(e,"class","resumeContainer svelte-960xm6")},m(d,y){B(d,e,y),ee(t,e,null),c(e,a),ee(s,e,null),c(e,i),ee(n,e,null),c(e,r),ee(o,e,null),u=!0},p:ae,i(d){u||(G(t.$$.fragment,d),G(s.$$.fragment,d),G(n.$$.fragment,d),G(o.$$.fragment,d),u=!0)},o(d){U(t.$$.fragment,d),U(s.$$.fragment,d),U(n.$$.fragment,d),U(o.$$.fragment,d),u=!1},d(d){d&&f(e),te(t),te(s),te(n),te(o)}}}function Qe(l){const{contact:e,summary:t,skills:a,experience:s,education:i}=qe;return[e,t,s,i]}class Ze extends K{constructor(e){super();Q(this,e,Qe,Ke,Y,{})}}export{Ze as default};
