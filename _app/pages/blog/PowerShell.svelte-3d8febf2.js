import{S as yo,i as go,s as Do,k as d,e as r,t as c,Q as wo,d as o,m as i,c as l,a as s,h as n,b as h,g as $o,J as e,K as kt}from"../../chunks/vendor-7667521d.js";import{d as Co,b as To}from"../../chunks/env-859c48a7.js";function Ro(bo){let p,t,v,Pe,ye,R,I,Mt="Update-Help",ge,De,O,G,Ut=`Get-Help <cmdlet>
Help <cmdlet>`,we,Ce,q,x,zt="<cmdlet> -?",Te,Re,S,V,Bt="Get-Help <cmdlet> -example",Ie,Oe,F,N,Kt="Get-Help <cmdlet> -detailed",Ge,qe,H,W,At="Get-Help <cmdlet> -full",xe,Se,j,L,Yt="Get-Help <cmdlet> -ShowWindow",Ve,Fe,k,M,Qt="Get-Command",Ne,He,U,z,Jt="Get-Command | more",We,je,B,K,Zt="get-help get-command - ShowWindow",Le,ke,u,Me,Ue,A,Y,Xt=` 
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
`,ze,Be,f,Ke,Ae,Q,J,ea=` 
 '$sName = "Hello World"'
 '$sName | Get-Member'
 '$sName.Length'
 `,Ye,Qe,E,Je,Ze,Z,X,ta=` 
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
 `,Xe,et,_,tt,at,ee,te,aa=` 
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
 `,ot,rt,$,lt,st,ae,oe,oa=` 
 "If(condition) {run this code}"
 "ElseIf (condition) {run this code}"
 "Else {Run this code}"
 `,ct,nt,b,dt,it,re,le,ra=` 
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
 `,ht,mt,P,pt,vt,se,ce,la=` 
 "In powershell everything is a .net object"
 "Get-Member gets information about the .NET object."
 "the .net framework is a bunch of classes.. objects are created based on classes."
 "There are three concepts to understand:"
 ".NET Framework Classes"
 "objects"
 "Powershell commands"
 "note for self maybe learn to build some classes and objects."
 `,ut,ft,y,Et,_t,ne,de,sa=` 
 dir, gci, ls
 gci c:*.* -include *.txt
 `,$t,bt,g,Pt,yt,ie,he,ca=` 
 "Pipes information from one command to another"
 'Get-Service | where-Object {$_.DisplayName -Match "MS"}'
 '$_ is the current information in the pipline}'
 `,gt,Dt,D,wt,Ct,me,pe,na=` 
 "You can do this in any editor but Windows PowerShell ISE can be used "
 "By default executing PowerShell scripts might be restricted"
 "type - Get-ExecutionPolicy ... if it is Restricted you need to Set-ExecutionPolicy RemoteSigned"
 "to run a script, the path and file name is required"
Wrire-Host "Get-Location | .PowershellNateNotes.ps1"
`,Tt,Rt,w,It,Ot,ve,ue,da=` 
 "EnterKey - displays the next line."
 "Spacebar - displays everything to the end of the page."

 `,Gt,qt,C,xt,St,fe,Ee,ia=` 
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
 `,Vt,Ft,T,Nt,Ht,_e,$e,ha=`
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


 `,Wt,jt,be;return{c(){p=d(),t=r("div"),v=r("div"),Pe=c("Get Help!!!"),ye=c(`

You can run the Update-Help Command btw to get the newest.
`),R=r("pre"),I=r("code"),ge=c(Mt),De=c(`

To display information on one page.
`),O=r("pre"),G=r("code"),we=c(Ut),Ce=c(`

To display information on multiple pages.
`),q=r("pre"),x=r("code"),Te=c(zt),Re=c(`

To display examples of a command.
`),S=r("pre"),V=r("code"),Ie=c(Bt),Oe=c(`

To display detailed information of a command.
`),F=r("pre"),N=r("code"),Ge=c(Kt),qe=c(`

To display all the information of a command.
`),H=r("pre"),W=r("code"),xe=c(At),Se=c(`


To display information of a command in a new window. you can ctl+f in this."
`),j=r("pre"),L=r("code"),Ve=c(Yt),Fe=c(`


If you want to see all the commands.
`),k=r("pre"),M=r("code"),Ne=c(Qt),He=d(),U=r("pre"),z=r("code"),We=c(Jt),je=d(),B=r("pre"),K=r("code"),Le=c(Zt),ke=d(),u=r("div"),Me=c("Formats"),Ue=d(),A=r("pre"),Y=r("code"),ze=c(Xt),Be=d(),f=r("div"),Ke=c("Get-Member"),Ae=d(),Q=r("pre"),J=r("code"),Ye=c(ea),Qe=d(),E=r("div"),Je=c("Variables"),Ze=d(),Z=r("pre"),X=r("code"),Xe=c(ta),et=d(),_=r("div"),tt=c("comparison operators"),at=d(),ee=r("pre"),te=r("code"),ot=c(aa),rt=d(),$=r("div"),lt=c("If Statment"),st=d(),ae=r("pre"),oe=r("code"),ct=c(oa),nt=d(),b=r("div"),dt=c("Looping"),it=d(),re=r("pre"),le=r("code"),ht=c(ra),mt=d(),P=r("div"),pt=c(".Net Objects"),vt=d(),se=r("pre"),ce=r("code"),ut=c(la),ft=d(),y=r("div"),Et=c("Get-ChildItem"),_t=d(),ne=r("pre"),de=r("code"),$t=c(sa),bt=d(),g=r("div"),Pt=c("pipeline"),yt=d(),ie=r("pre"),he=r("code"),gt=c(ca),Dt=d(),D=r("div"),wt=c("Creating scripts"),Ct=d(),me=r("pre"),pe=r("code"),Tt=c(na),Rt=d(),w=r("div"),It=c("HotKeys"),Ot=d(),ve=r("pre"),ue=r("code"),Gt=c(da),qt=d(),C=r("div"),xt=c("Regular expression"),St=d(),fe=r("pre"),Ee=r("code"),Vt=c(ia),Ft=d(),T=r("div"),Nt=c("Paramaters"),Ht=d(),_e=r("pre"),$e=r("code"),Wt=c(ha),jt=d(),be=r("div"),this.h()},l(m){wo('[data-svelte="svelte-160bk8o"]',document.head).forEach(o),p=i(m),t=l(m,"DIV",{class:!0});var a=s(t);v=l(a,"DIV",{class:!0});var ma=s(v);Pe=n(ma,"Get Help!!!"),ma.forEach(o),ye=n(a,`

You can run the Update-Help Command btw to get the newest.
`),R=l(a,"PRE",{});var pa=s(R);I=l(pa,"CODE",{});var va=s(I);ge=n(va,Mt),va.forEach(o),pa.forEach(o),De=n(a,`

To display information on one page.
`),O=l(a,"PRE",{});var ua=s(O);G=l(ua,"CODE",{});var fa=s(G);we=n(fa,Ut),fa.forEach(o),ua.forEach(o),Ce=n(a,`

To display information on multiple pages.
`),q=l(a,"PRE",{});var Ea=s(q);x=l(Ea,"CODE",{});var _a=s(x);Te=n(_a,zt),_a.forEach(o),Ea.forEach(o),Re=n(a,`

To display examples of a command.
`),S=l(a,"PRE",{});var $a=s(S);V=l($a,"CODE",{});var ba=s(V);Ie=n(ba,Bt),ba.forEach(o),$a.forEach(o),Oe=n(a,`

To display detailed information of a command.
`),F=l(a,"PRE",{});var Pa=s(F);N=l(Pa,"CODE",{});var ya=s(N);Ge=n(ya,Kt),ya.forEach(o),Pa.forEach(o),qe=n(a,`

To display all the information of a command.
`),H=l(a,"PRE",{});var ga=s(H);W=l(ga,"CODE",{});var Da=s(W);xe=n(Da,At),Da.forEach(o),ga.forEach(o),Se=n(a,`


To display information of a command in a new window. you can ctl+f in this."
`),j=l(a,"PRE",{});var wa=s(j);L=l(wa,"CODE",{});var Ca=s(L);Ve=n(Ca,Yt),Ca.forEach(o),wa.forEach(o),Fe=n(a,`


If you want to see all the commands.
`),k=l(a,"PRE",{});var Ta=s(k);M=l(Ta,"CODE",{});var Ra=s(M);Ne=n(Ra,Qt),Ra.forEach(o),Ta.forEach(o),He=i(a),U=l(a,"PRE",{});var Ia=s(U);z=l(Ia,"CODE",{});var Oa=s(z);We=n(Oa,Jt),Oa.forEach(o),Ia.forEach(o),je=i(a),B=l(a,"PRE",{});var Ga=s(B);K=l(Ga,"CODE",{});var qa=s(K);Le=n(qa,Zt),qa.forEach(o),Ga.forEach(o),ke=i(a),u=l(a,"DIV",{class:!0});var xa=s(u);Me=n(xa,"Formats"),xa.forEach(o),Ue=i(a),A=l(a,"PRE",{});var Sa=s(A);Y=l(Sa,"CODE",{});var Va=s(Y);ze=n(Va,Xt),Va.forEach(o),Sa.forEach(o),Be=i(a),f=l(a,"DIV",{class:!0});var Fa=s(f);Ke=n(Fa,"Get-Member"),Fa.forEach(o),Ae=i(a),Q=l(a,"PRE",{});var Na=s(Q);J=l(Na,"CODE",{});var Ha=s(J);Ye=n(Ha,ea),Ha.forEach(o),Na.forEach(o),Qe=i(a),E=l(a,"DIV",{class:!0});var Wa=s(E);Je=n(Wa,"Variables"),Wa.forEach(o),Ze=i(a),Z=l(a,"PRE",{});var ja=s(Z);X=l(ja,"CODE",{});var La=s(X);Xe=n(La,ta),La.forEach(o),ja.forEach(o),et=i(a),_=l(a,"DIV",{class:!0});var ka=s(_);tt=n(ka,"comparison operators"),ka.forEach(o),at=i(a),ee=l(a,"PRE",{});var Ma=s(ee);te=l(Ma,"CODE",{});var Ua=s(te);ot=n(Ua,aa),Ua.forEach(o),Ma.forEach(o),rt=i(a),$=l(a,"DIV",{class:!0});var za=s($);lt=n(za,"If Statment"),za.forEach(o),st=i(a),ae=l(a,"PRE",{});var Ba=s(ae);oe=l(Ba,"CODE",{});var Ka=s(oe);ct=n(Ka,oa),Ka.forEach(o),Ba.forEach(o),nt=i(a),b=l(a,"DIV",{class:!0});var Aa=s(b);dt=n(Aa,"Looping"),Aa.forEach(o),it=i(a),re=l(a,"PRE",{});var Ya=s(re);le=l(Ya,"CODE",{});var Qa=s(le);ht=n(Qa,ra),Qa.forEach(o),Ya.forEach(o),mt=i(a),P=l(a,"DIV",{class:!0});var Ja=s(P);pt=n(Ja,".Net Objects"),Ja.forEach(o),vt=i(a),se=l(a,"PRE",{});var Za=s(se);ce=l(Za,"CODE",{});var Xa=s(ce);ut=n(Xa,la),Xa.forEach(o),Za.forEach(o),ft=i(a),y=l(a,"DIV",{class:!0});var eo=s(y);Et=n(eo,"Get-ChildItem"),eo.forEach(o),_t=i(a),ne=l(a,"PRE",{});var to=s(ne);de=l(to,"CODE",{});var ao=s(de);$t=n(ao,sa),ao.forEach(o),to.forEach(o),bt=i(a),g=l(a,"DIV",{class:!0});var oo=s(g);Pt=n(oo,"pipeline"),oo.forEach(o),yt=i(a),ie=l(a,"PRE",{});var ro=s(ie);he=l(ro,"CODE",{});var lo=s(he);gt=n(lo,ca),lo.forEach(o),ro.forEach(o),Dt=i(a),D=l(a,"DIV",{class:!0});var so=s(D);wt=n(so,"Creating scripts"),so.forEach(o),Ct=i(a),me=l(a,"PRE",{});var co=s(me);pe=l(co,"CODE",{});var no=s(pe);Tt=n(no,na),no.forEach(o),co.forEach(o),Rt=i(a),w=l(a,"DIV",{class:!0});var io=s(w);It=n(io,"HotKeys"),io.forEach(o),Ot=i(a),ve=l(a,"PRE",{});var ho=s(ve);ue=l(ho,"CODE",{});var mo=s(ue);Gt=n(mo,da),mo.forEach(o),ho.forEach(o),qt=i(a),C=l(a,"DIV",{class:!0});var po=s(C);xt=n(po,"Regular expression"),po.forEach(o),St=i(a),fe=l(a,"PRE",{});var vo=s(fe);Ee=l(vo,"CODE",{});var uo=s(Ee);Vt=n(uo,ia),uo.forEach(o),vo.forEach(o),Ft=i(a),T=l(a,"DIV",{class:!0});var fo=s(T);Nt=n(fo,"Paramaters"),fo.forEach(o),Ht=i(a),_e=l(a,"PRE",{});var Eo=s(_e);$e=l(Eo,"CODE",{});var _o=s($e);Wt=n(_o,ha),_o.forEach(o),Eo.forEach(o),jt=i(a),be=l(a,"DIV",{});var Po=s(be);Po.forEach(o),a.forEach(o),this.h()},h(){document.title="PowerShell",h(v,"class","sectionTitle svelte-scsuq8"),h(u,"class","sectionTitle svelte-scsuq8"),h(f,"class","sectionTitle svelte-scsuq8"),h(E,"class","sectionTitle svelte-scsuq8"),h(_,"class","sectionTitle svelte-scsuq8"),h($,"class","sectionTitle svelte-scsuq8"),h(b,"class","sectionTitle svelte-scsuq8"),h(P,"class","sectionTitle svelte-scsuq8"),h(y,"class","sectionTitle svelte-scsuq8"),h(g,"class","sectionTitle svelte-scsuq8"),h(D,"class","sectionTitle svelte-scsuq8"),h(w,"class","sectionTitle svelte-scsuq8"),h(C,"class","sectionTitle svelte-scsuq8"),h(T,"class","sectionTitle svelte-scsuq8"),h(t,"class","mainContainer svelte-scsuq8")},m(m,Lt){$o(m,p,Lt),$o(m,t,Lt),e(t,v),e(v,Pe),e(t,ye),e(t,R),e(R,I),e(I,ge),e(t,De),e(t,O),e(O,G),e(G,we),e(t,Ce),e(t,q),e(q,x),e(x,Te),e(t,Re),e(t,S),e(S,V),e(V,Ie),e(t,Oe),e(t,F),e(F,N),e(N,Ge),e(t,qe),e(t,H),e(H,W),e(W,xe),e(t,Se),e(t,j),e(j,L),e(L,Ve),e(t,Fe),e(t,k),e(k,M),e(M,Ne),e(t,He),e(t,U),e(U,z),e(z,We),e(t,je),e(t,B),e(B,K),e(K,Le),e(t,ke),e(t,u),e(u,Me),e(t,Ue),e(t,A),e(A,Y),e(Y,ze),e(t,Be),e(t,f),e(f,Ke),e(t,Ae),e(t,Q),e(Q,J),e(J,Ye),e(t,Qe),e(t,E),e(E,Je),e(t,Ze),e(t,Z),e(Z,X),e(X,Xe),e(t,et),e(t,_),e(_,tt),e(t,at),e(t,ee),e(ee,te),e(te,ot),e(t,rt),e(t,$),e($,lt),e(t,st),e(t,ae),e(ae,oe),e(oe,ct),e(t,nt),e(t,b),e(b,dt),e(t,it),e(t,re),e(re,le),e(le,ht),e(t,mt),e(t,P),e(P,pt),e(t,vt),e(t,se),e(se,ce),e(ce,ut),e(t,ft),e(t,y),e(y,Et),e(t,_t),e(t,ne),e(ne,de),e(de,$t),e(t,bt),e(t,g),e(g,Pt),e(t,yt),e(t,ie),e(ie,he),e(he,gt),e(t,Dt),e(t,D),e(D,wt),e(t,Ct),e(t,me),e(me,pe),e(pe,Tt),e(t,Rt),e(t,w),e(w,It),e(t,Ot),e(t,ve),e(ve,ue),e(ue,Gt),e(t,qt),e(t,C),e(C,xt),e(t,St),e(t,fe),e(fe,Ee),e(Ee,Vt),e(t,Ft),e(t,T),e(T,Nt),e(t,Ht),e(t,_e),e(_e,$e),e($e,Wt),e(t,jt),e(t,be)},p:kt,i:kt,o:kt,d(m){m&&o(p),m&&o(t)}}}const Go=Co,qo=To,xo=!0;class So extends yo{constructor(p){super();go(this,p,null,Ro,Do,{})}}export{So as default,Go as hydrate,xo as prerender,qo as router};
