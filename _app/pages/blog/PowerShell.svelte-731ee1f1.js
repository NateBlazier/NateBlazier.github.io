import{S as er,i as tr,s as ar,k as d,e as r,t as n,U as or,d as o,m as i,c as s,a as l,h as c,b as h,g as Qo,J as e,K as na}from"../../chunks/vendor-4731a546.js";import{d as rr,b as sr}from"../../chunks/env-859c48a7.js";function lr(Zo){let p,t,v,Ie,Se,R,I,ca="Update-Help",Ge,qe,S,G,da=`Get-Help <cmdlet>
Help <cmdlet>`,xe,Ve,q,x,ia="<cmdlet> -?",Fe,He,V,F,ha="Get-Help <cmdlet> -example",Ne,We,H,N,ma="Get-Help <cmdlet> -detailed",je,Le,W,j,pa="Get-Help <cmdlet> -full",ke,Me,L,k,va="Get-Help <cmdlet> -ShowWindow",Ue,Ae,M,U,ua="Get-Command",Be,ze,A,B,fa="Get-Command | more",Ke,Ye,z,K,Ea="get-help get-command - ShowWindow",Je,Qe,Y,J,_a="Help about_*",Ze,Xe,Q,Z,ga="Help -Category sdfsdf",et,tt,X,ee,ya="get-service | ConvertTo-html -Property name,status | out-file c:	est.htm | c:	est.htm ",at,ot,u,rt,st,te,ae,$a=` 
Format-Wide -
Format-List -
Format-Table -
Format-Custom -

Examples:
Get-Process | Format-Wide
Get-Process | Format-Wide - column 5
Get-Process | Format-List"
Get-Process -Name powershell | Format-List -Property ProcessName,FileVersion,Id
To Get all the properties you can use the WildCard
Get-Process -Name powershell | Format-List -Property *
`,lt,nt,f,ct,dt,oe,re,Pa=` 
 '$sName = "Hello World"'
 '$sName | Get-Member'
 '$sName.Length'
 `,it,ht,E,mt,pt,se,le,ba=` 
 '$sName = "Hello World"'
 '[datetime]$dtDateOrTime = 3:00pm'
 '[String]$sString = "hello"'
 '[char]$chCharacter = a'
 '[double]$dFloatingNumber = 13.1'
 '[int]$iCount = 13'
 '[boolean]$bBoolean = true'
 ""
 "Constant is a write-protected variable"
 "New-Variable cmdlet is used to create constants"
 'ex. $serverIP ="10.10.10.10"'
 "Set-Variable severIP -option ReadOnly"
 "Set-Variable severIP -option Constant -value '12.12.12.12'"
 `,vt,ut,_,ft,Et,ne,ce,wa=` 
 "-eq Equal to"
 "-lt Less Than"
 "-gt Greater than"
 "-ge Greater than or equal to"
 "-le Less than or equal to"
 "-ne Note equal to (!=)"
 ""
 "Logical operators:"
 "-not  Not"
 "! Not"
 "-and AND"
 "-or OR"
 ""
 "ex."
 '$a=6'
 '$b=6'
 '$a -eq $b'
 ""
 '($a -eq 100) -or ($a -gt $b)'
 ""
 '$a="abc"'
 '$b="ABC"'
 '$a -ieq $b   = true'
 '$a -ceq $b   = false'
 ""
 ""
 '$dtDate = Get-Date'
 'if($dtDate.day -ne 12){ "today"} else{ "not today"}'
 `,_t,gt,g,yt,$t,de,ie,Da=` 
 "If(condition) {run this code}"
 "ElseIf (condition) {run this code}"
 "Else {Run this code}"
 `,Pt,bt,y,wt,Dt,he,me,Ca=` 
 "For Each-Object"
 "For"
 "While"
 "Do While"
 "Do Until"
 ""
 ""
 '$a=5,6,4,3,2'
 '$a | ForEach { $_}'
 ""
 'ForEach ($Value in $a){ $Value}'
 ""
 'For ($a=1; $a -le 5; $a++) { $a}'
 ""
 'while($val -ne 10) { $val++ ;  $val }'
 ""
 '$a = 1'
 'do { $a; $a++}'
 'while ($a -lt 0)'
 ""
 '$a = 1'
 'do { $a; $a++}'
 'until ($a -gt 5)'
 `,Ct,Tt,$,Ot,Rt,pe,ve,Ta=` 
 "In powershell everything is a .net object"
 "Get-Member gets information about the .NET object."
 "the .net framework is a bunch of classes.. objects are created based on classes."
 "There are three concepts to understand:"
 ".NET Framework Classes"
 "objects"
 "Powershell commands"
 "note for self maybe learn to build some classes and objects."
 `,It,St,P,Gt,qt,ue,fe,Oa=` 
 dir, gci, ls
 gci c:*.* -include *.txt
 `,xt,Vt,b,Ft,Ht,Ee,_e,Ra=` 
 "Pipes information from one command to another"
 'Get-Service | where-Object {$_.DisplayName -Match "MS"}'
 '$_ is the current information in the pipline}'
 `,Nt,Wt,w,jt,Lt,ge,ye,Ia=` 
 "You can do this in any editor but Windows PowerShell ISE can be used "
 "By default executing PowerShell scripts might be restricted"
 "type - Get-ExecutionPolicy ... if it is Restricted you need to Set-ExecutionPolicy RemoteSigned"
 "to run a script, the path and file name is required"
Wrire-Host "Get-Location | .PowershellNateNotes.ps1"
`,kt,Mt,D,Ut,At,$e,Pe,Sa=` 
 "EnterKey - displays the next line."
 "Spacebar - displays everything to the end of the page."

 `,Bt,zt,C,Kt,Yt,be,we,Ga=` 
 "Get-Help about_regular_expression"
 ""
 "Literal matches:"
 '"Microsoft" -match "soft"'
 '"Microsoft" -cmatch "Soft"'
 ""
 "Pattern matches:"
 ". (period) matched a single character"
 "[aeiou] matched at least one character specified within the brackets"
 "[b-f] matched at least one character specified within a range"
 "[^bfghjk] matched any character except those within the brackets"
 "^ matches characters locasted at the beginning of a string"
 "$ matches characters located at the end of a string"
 "*matched zero or more occurrences of the preceding character"
 "? matches zero or one occurrence of the preceding character"
 " matches the character following the escape () character"
 ""
 "Regular Expression Qualifiers:"
 "* must match zero or more times"
 "+ must match one or more times"
 "? Must match no more than one time"
 "{n} must match n times"
 "{n,} must at least n matches"
 "{n,m} must match at least n times, but nor more than m times"
 ""
 "Regular Expression Shortcuts"
 "d matches any decimal digit, same as [0-9]"
 "w matches any word character, same as [0-9A-Za-z]"
 "D matches any non-digit"
 "W matches any non-word character such as space"
 "S matched any non-whitespace charater"
 ""
 'ex. $ip="192.168.15.21"'
 '$rx="d{1,3}.d{1,3}.d{1,3}.d{1,3}"'
 '$ip -match $rx'
 ""
 ""
 `,Jt,Qt,T,Zt,Xt,De,Ce,qa=`
 "Simple Param Block:"
 'Param([string]$variablename)'
 ''
 'Full param block'
 'Param([Parameter(Mandatory=$true)][string]$variablename)'
 ''
 'ex.'
 'Param([Parameter(Mandatory=$true)][string]$Username)'
 '$a = $Username'
 ' "Hello $a!"'
 ''


 `,ea,ta,O,aa,oa,Te,Oe,xa=` 
 cls ; get-help about_Eventlogs
`,ra,sa,Re;return{c(){p=d(),t=r("div"),v=r("div"),Ie=n("Get Help!!!"),Se=n(`

You can run the Update-Help Command btw to get the newest.
`),R=r("pre"),I=r("code"),Ge=n(ca),qe=n(`

To display information on one page.
`),S=r("pre"),G=r("code"),xe=n(da),Ve=n(`

To display information on multiple pages.
`),q=r("pre"),x=r("code"),Fe=n(ia),He=n(`

To display examples of a command.
`),V=r("pre"),F=r("code"),Ne=n(ha),We=n(`

To display detailed information of a command.
`),H=r("pre"),N=r("code"),je=n(ma),Le=n(`

To display all the information of a command.
`),W=r("pre"),j=r("code"),ke=n(pa),Me=n(`


To display information of a command in a new window. you can ctl+f in this."
`),L=r("pre"),k=r("code"),Ue=n(va),Ae=n(`


If you want to see all the commands.
`),M=r("pre"),U=r("code"),Be=n(ua),ze=d(),A=r("pre"),B=r("code"),Ke=n(fa),Ye=d(),z=r("pre"),K=r("code"),Je=n(Ea),Qe=n(`

ABOUT PAGES
`),Y=r("pre"),J=r("code"),Ze=n(_a),Xe=n(`

-Category (finger smashing with show you an error of what you can do.)
`),Q=r("pre"),Z=r("code"),et=n(ga),tt=n(`

-Category (finger smashing with show you an error of what you can do.)
`),X=r("pre"),ee=r("code"),at=n(ya),ot=n(`

-whatif



`),u=r("div"),rt=n("Formats"),st=d(),te=r("pre"),ae=r("code"),lt=n($a),nt=d(),f=r("div"),ct=n("Get-Member"),dt=d(),oe=r("pre"),re=r("code"),it=n(Pa),ht=d(),E=r("div"),mt=n("Variables"),pt=d(),se=r("pre"),le=r("code"),vt=n(ba),ut=d(),_=r("div"),ft=n("comparison operators"),Et=d(),ne=r("pre"),ce=r("code"),_t=n(wa),gt=d(),g=r("div"),yt=n("If Statment"),$t=d(),de=r("pre"),ie=r("code"),Pt=n(Da),bt=d(),y=r("div"),wt=n("Looping"),Dt=d(),he=r("pre"),me=r("code"),Ct=n(Ca),Tt=d(),$=r("div"),Ot=n(".Net Objects"),Rt=d(),pe=r("pre"),ve=r("code"),It=n(Ta),St=d(),P=r("div"),Gt=n("Get-ChildItem"),qt=d(),ue=r("pre"),fe=r("code"),xt=n(Oa),Vt=d(),b=r("div"),Ft=n("pipeline"),Ht=d(),Ee=r("pre"),_e=r("code"),Nt=n(Ra),Wt=d(),w=r("div"),jt=n("Creating scripts"),Lt=d(),ge=r("pre"),ye=r("code"),kt=n(Ia),Mt=d(),D=r("div"),Ut=n("HotKeys"),At=d(),$e=r("pre"),Pe=r("code"),Bt=n(Sa),zt=d(),C=r("div"),Kt=n("Regular expression"),Yt=d(),be=r("pre"),we=r("code"),Jt=n(Ga),Qt=d(),T=r("div"),Zt=n("Paramaters"),Xt=d(),De=r("pre"),Ce=r("code"),ea=n(qa),ta=d(),O=r("div"),aa=n("Statement Separator"),oa=n(`
to run one command after another use semicolons
`),Te=r("pre"),Oe=r("code"),ra=n(xa),sa=d(),Re=r("div"),this.h()},l(m){or('[data-svelte="svelte-160bk8o"]',document.head).forEach(o),p=i(m),t=s(m,"DIV",{class:!0});var a=l(t);v=s(a,"DIV",{class:!0});var Va=l(v);Ie=c(Va,"Get Help!!!"),Va.forEach(o),Se=c(a,`

You can run the Update-Help Command btw to get the newest.
`),R=s(a,"PRE",{});var Fa=l(R);I=s(Fa,"CODE",{});var Ha=l(I);Ge=c(Ha,ca),Ha.forEach(o),Fa.forEach(o),qe=c(a,`

To display information on one page.
`),S=s(a,"PRE",{});var Na=l(S);G=s(Na,"CODE",{});var Wa=l(G);xe=c(Wa,da),Wa.forEach(o),Na.forEach(o),Ve=c(a,`

To display information on multiple pages.
`),q=s(a,"PRE",{});var ja=l(q);x=s(ja,"CODE",{});var La=l(x);Fe=c(La,ia),La.forEach(o),ja.forEach(o),He=c(a,`

To display examples of a command.
`),V=s(a,"PRE",{});var ka=l(V);F=s(ka,"CODE",{});var Ma=l(F);Ne=c(Ma,ha),Ma.forEach(o),ka.forEach(o),We=c(a,`

To display detailed information of a command.
`),H=s(a,"PRE",{});var Ua=l(H);N=s(Ua,"CODE",{});var Aa=l(N);je=c(Aa,ma),Aa.forEach(o),Ua.forEach(o),Le=c(a,`

To display all the information of a command.
`),W=s(a,"PRE",{});var Ba=l(W);j=s(Ba,"CODE",{});var za=l(j);ke=c(za,pa),za.forEach(o),Ba.forEach(o),Me=c(a,`


To display information of a command in a new window. you can ctl+f in this."
`),L=s(a,"PRE",{});var Ka=l(L);k=s(Ka,"CODE",{});var Ya=l(k);Ue=c(Ya,va),Ya.forEach(o),Ka.forEach(o),Ae=c(a,`


If you want to see all the commands.
`),M=s(a,"PRE",{});var Ja=l(M);U=s(Ja,"CODE",{});var Qa=l(U);Be=c(Qa,ua),Qa.forEach(o),Ja.forEach(o),ze=i(a),A=s(a,"PRE",{});var Za=l(A);B=s(Za,"CODE",{});var Xa=l(B);Ke=c(Xa,fa),Xa.forEach(o),Za.forEach(o),Ye=i(a),z=s(a,"PRE",{});var eo=l(z);K=s(eo,"CODE",{});var to=l(K);Je=c(to,Ea),to.forEach(o),eo.forEach(o),Qe=c(a,`

ABOUT PAGES
`),Y=s(a,"PRE",{});var ao=l(Y);J=s(ao,"CODE",{});var oo=l(J);Ze=c(oo,_a),oo.forEach(o),ao.forEach(o),Xe=c(a,`

-Category (finger smashing with show you an error of what you can do.)
`),Q=s(a,"PRE",{});var ro=l(Q);Z=s(ro,"CODE",{});var so=l(Z);et=c(so,ga),so.forEach(o),ro.forEach(o),tt=c(a,`

-Category (finger smashing with show you an error of what you can do.)
`),X=s(a,"PRE",{});var lo=l(X);ee=s(lo,"CODE",{});var no=l(ee);at=c(no,ya),no.forEach(o),lo.forEach(o),ot=c(a,`

-whatif



`),u=s(a,"DIV",{class:!0});var co=l(u);rt=c(co,"Formats"),co.forEach(o),st=i(a),te=s(a,"PRE",{});var io=l(te);ae=s(io,"CODE",{});var ho=l(ae);lt=c(ho,$a),ho.forEach(o),io.forEach(o),nt=i(a),f=s(a,"DIV",{class:!0});var mo=l(f);ct=c(mo,"Get-Member"),mo.forEach(o),dt=i(a),oe=s(a,"PRE",{});var po=l(oe);re=s(po,"CODE",{});var vo=l(re);it=c(vo,Pa),vo.forEach(o),po.forEach(o),ht=i(a),E=s(a,"DIV",{class:!0});var uo=l(E);mt=c(uo,"Variables"),uo.forEach(o),pt=i(a),se=s(a,"PRE",{});var fo=l(se);le=s(fo,"CODE",{});var Eo=l(le);vt=c(Eo,ba),Eo.forEach(o),fo.forEach(o),ut=i(a),_=s(a,"DIV",{class:!0});var _o=l(_);ft=c(_o,"comparison operators"),_o.forEach(o),Et=i(a),ne=s(a,"PRE",{});var go=l(ne);ce=s(go,"CODE",{});var yo=l(ce);_t=c(yo,wa),yo.forEach(o),go.forEach(o),gt=i(a),g=s(a,"DIV",{class:!0});var $o=l(g);yt=c($o,"If Statment"),$o.forEach(o),$t=i(a),de=s(a,"PRE",{});var Po=l(de);ie=s(Po,"CODE",{});var bo=l(ie);Pt=c(bo,Da),bo.forEach(o),Po.forEach(o),bt=i(a),y=s(a,"DIV",{class:!0});var wo=l(y);wt=c(wo,"Looping"),wo.forEach(o),Dt=i(a),he=s(a,"PRE",{});var Do=l(he);me=s(Do,"CODE",{});var Co=l(me);Ct=c(Co,Ca),Co.forEach(o),Do.forEach(o),Tt=i(a),$=s(a,"DIV",{class:!0});var To=l($);Ot=c(To,".Net Objects"),To.forEach(o),Rt=i(a),pe=s(a,"PRE",{});var Oo=l(pe);ve=s(Oo,"CODE",{});var Ro=l(ve);It=c(Ro,Ta),Ro.forEach(o),Oo.forEach(o),St=i(a),P=s(a,"DIV",{class:!0});var Io=l(P);Gt=c(Io,"Get-ChildItem"),Io.forEach(o),qt=i(a),ue=s(a,"PRE",{});var So=l(ue);fe=s(So,"CODE",{});var Go=l(fe);xt=c(Go,Oa),Go.forEach(o),So.forEach(o),Vt=i(a),b=s(a,"DIV",{class:!0});var qo=l(b);Ft=c(qo,"pipeline"),qo.forEach(o),Ht=i(a),Ee=s(a,"PRE",{});var xo=l(Ee);_e=s(xo,"CODE",{});var Vo=l(_e);Nt=c(Vo,Ra),Vo.forEach(o),xo.forEach(o),Wt=i(a),w=s(a,"DIV",{class:!0});var Fo=l(w);jt=c(Fo,"Creating scripts"),Fo.forEach(o),Lt=i(a),ge=s(a,"PRE",{});var Ho=l(ge);ye=s(Ho,"CODE",{});var No=l(ye);kt=c(No,Ia),No.forEach(o),Ho.forEach(o),Mt=i(a),D=s(a,"DIV",{class:!0});var Wo=l(D);Ut=c(Wo,"HotKeys"),Wo.forEach(o),At=i(a),$e=s(a,"PRE",{});var jo=l($e);Pe=s(jo,"CODE",{});var Lo=l(Pe);Bt=c(Lo,Sa),Lo.forEach(o),jo.forEach(o),zt=i(a),C=s(a,"DIV",{class:!0});var ko=l(C);Kt=c(ko,"Regular expression"),ko.forEach(o),Yt=i(a),be=s(a,"PRE",{});var Mo=l(be);we=s(Mo,"CODE",{});var Uo=l(we);Jt=c(Uo,Ga),Uo.forEach(o),Mo.forEach(o),Qt=i(a),T=s(a,"DIV",{class:!0});var Ao=l(T);Zt=c(Ao,"Paramaters"),Ao.forEach(o),Xt=i(a),De=s(a,"PRE",{});var Bo=l(De);Ce=s(Bo,"CODE",{});var zo=l(Ce);ea=c(zo,qa),zo.forEach(o),Bo.forEach(o),ta=i(a),O=s(a,"DIV",{class:!0});var Ko=l(O);aa=c(Ko,"Statement Separator"),Ko.forEach(o),oa=c(a,`
to run one command after another use semicolons
`),Te=s(a,"PRE",{});var Yo=l(Te);Oe=s(Yo,"CODE",{});var Jo=l(Oe);ra=c(Jo,xa),Jo.forEach(o),Yo.forEach(o),sa=i(a),Re=s(a,"DIV",{});var Xo=l(Re);Xo.forEach(o),a.forEach(o),this.h()},h(){document.title="PowerShell",h(v,"class","sectionTitle svelte-scsuq8"),h(u,"class","sectionTitle svelte-scsuq8"),h(f,"class","sectionTitle svelte-scsuq8"),h(E,"class","sectionTitle svelte-scsuq8"),h(_,"class","sectionTitle svelte-scsuq8"),h(g,"class","sectionTitle svelte-scsuq8"),h(y,"class","sectionTitle svelte-scsuq8"),h($,"class","sectionTitle svelte-scsuq8"),h(P,"class","sectionTitle svelte-scsuq8"),h(b,"class","sectionTitle svelte-scsuq8"),h(w,"class","sectionTitle svelte-scsuq8"),h(D,"class","sectionTitle svelte-scsuq8"),h(C,"class","sectionTitle svelte-scsuq8"),h(T,"class","sectionTitle svelte-scsuq8"),h(O,"class","sectionTitle svelte-scsuq8"),h(t,"class","mainContainer svelte-scsuq8")},m(m,la){Qo(m,p,la),Qo(m,t,la),e(t,v),e(v,Ie),e(t,Se),e(t,R),e(R,I),e(I,Ge),e(t,qe),e(t,S),e(S,G),e(G,xe),e(t,Ve),e(t,q),e(q,x),e(x,Fe),e(t,He),e(t,V),e(V,F),e(F,Ne),e(t,We),e(t,H),e(H,N),e(N,je),e(t,Le),e(t,W),e(W,j),e(j,ke),e(t,Me),e(t,L),e(L,k),e(k,Ue),e(t,Ae),e(t,M),e(M,U),e(U,Be),e(t,ze),e(t,A),e(A,B),e(B,Ke),e(t,Ye),e(t,z),e(z,K),e(K,Je),e(t,Qe),e(t,Y),e(Y,J),e(J,Ze),e(t,Xe),e(t,Q),e(Q,Z),e(Z,et),e(t,tt),e(t,X),e(X,ee),e(ee,at),e(t,ot),e(t,u),e(u,rt),e(t,st),e(t,te),e(te,ae),e(ae,lt),e(t,nt),e(t,f),e(f,ct),e(t,dt),e(t,oe),e(oe,re),e(re,it),e(t,ht),e(t,E),e(E,mt),e(t,pt),e(t,se),e(se,le),e(le,vt),e(t,ut),e(t,_),e(_,ft),e(t,Et),e(t,ne),e(ne,ce),e(ce,_t),e(t,gt),e(t,g),e(g,yt),e(t,$t),e(t,de),e(de,ie),e(ie,Pt),e(t,bt),e(t,y),e(y,wt),e(t,Dt),e(t,he),e(he,me),e(me,Ct),e(t,Tt),e(t,$),e($,Ot),e(t,Rt),e(t,pe),e(pe,ve),e(ve,It),e(t,St),e(t,P),e(P,Gt),e(t,qt),e(t,ue),e(ue,fe),e(fe,xt),e(t,Vt),e(t,b),e(b,Ft),e(t,Ht),e(t,Ee),e(Ee,_e),e(_e,Nt),e(t,Wt),e(t,w),e(w,jt),e(t,Lt),e(t,ge),e(ge,ye),e(ye,kt),e(t,Mt),e(t,D),e(D,Ut),e(t,At),e(t,$e),e($e,Pe),e(Pe,Bt),e(t,zt),e(t,C),e(C,Kt),e(t,Yt),e(t,be),e(be,we),e(we,Jt),e(t,Qt),e(t,T),e(T,Zt),e(t,Xt),e(t,De),e(De,Ce),e(Ce,ea),e(t,ta),e(t,O),e(O,aa),e(t,oa),e(t,Te),e(Te,Oe),e(Oe,ra),e(t,sa),e(t,Re)},p:na,i:na,o:na,d(m){m&&o(p),m&&o(t)}}}const dr=rr,ir=sr,hr=!0;class mr extends er{constructor(p){super();tr(this,p,null,lr,ar,{})}}export{mr as default,dr as hydrate,hr as prerender,ir as router};
