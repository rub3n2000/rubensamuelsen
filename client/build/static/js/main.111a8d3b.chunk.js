(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__2KHsy",NavItems:"SideDrawer_NavItems__8iEsP",Open:"SideDrawer_Open__DbvbD",Close:"SideDrawer_Close__qQOKT"}},function(e,a,t){e.exports={Navbar:"Nav_Navbar__EL3d8",Sticky:"Nav_Sticky__1r4ib",DesktopOnly:"Nav_DesktopOnly__1s-8V",ErrorBox:"Nav_ErrorBox__1rJ1L"}},,,function(e,a,t){e.exports={NavigationItems:"NavigationItems_NavigationItems___88zi",NavigationButtons:"NavigationItems_NavigationButtons__2_lZt",LanguageButtons:"NavigationItems_LanguageButtons__-YIpW"}},function(e,a,t){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3mfxU",hidden:"DrawerToggle_hidden__27rPR"}},,,,,,,,,,,,function(e,a,t){e.exports={App:"App_App__1l7yn"}},function(e,a,t){e.exports={NavigationItem:"NavigationItem_NavigationItem__3sB2Q"}},function(e,a,t){e.exports={Logo:"Logo_Logo__2-tHv"}},function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__3NW-E"}},,function(e,a,t){e.exports=t(57)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),o=t.n(r),c=(t(30),t(31),t(20)),i=t.n(c),s=(t(32),t(33),function(e){return l.a.createElement("div",{className:"FollowMe"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",target:"_blank",href:"https://twitter.com/RubyIEDev",title:"Follow On Twitter"},l.a.createElement("span",null,"Follow on Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{className:"github",target:"_blank",href:"https://github.com/rub3n2000",title:"Follow On Github"},l.a.createElement("span",null,"Follow on Github"))),l.a.createElement("li",null,l.a.createElement("a",{className:"linkedin",target:"_blank",href:"https://www.linkedin.com/in/ruben-samuelsen/",title:"Add to LinkedIn network"},l.a.createElement("span",null,"Add to LinkedIn network"))),l.a.createElement("li",null,l.a.createElement("a",{className:"email",target:"_blank",href:"mailto:ruben@tresam.no",title:"Send me an Email"},l.a.createElement("span",null,"Send me an Email")))))}),m=function(e){return l.a.createElement("section",{id:"LandingPage"},l.a.createElement(s,null),l.a.createElement("div",{className:"LandingPageContent"},l.a.createElement("p",null,"Hello I'm ",l.a.createElement("span",null,"Ruben Samuelsen"),".",l.a.createElement("br",null),"I'm a full-stack web developer"),l.a.createElement("div",{id:"ViewMyWork"},l.a.createElement("a",{href:"#About"},"View my work"))))},d=t(2),u=(t(34),t(6)),E=t(5),p=t.n(E),v=t(4),g=t.n(v),b=t(7),w=t.n(b),N=t(21),f=t.n(N),h=function(e){return l.a.createElement("div",{onClick:e.closed,className:f.a.NavigationItem},l.a.createElement("a",{href:e.link},e.children))},_=function(e){return l.a.createElement("div",{className:w.a.NavigationItems},l.a.createElement(h,{closed:e.closed,link:"#LandingPage"}," Home "),l.a.createElement(h,{closed:e.closed,link:"#About"}," About "),l.a.createElement(h,{closed:e.closed,link:"#Projects"}," My Projects "),l.a.createElement(h,{closed:e.closed,link:"#Contact"}," Contact Me "),l.a.createElement("div",{className:w.a.LanguageButtons}))},k=(t(22),t(8)),C=t.n(k),y=function(e){var a=[C.a.DrawerToggle,C.a.hidden];return l.a.createElement("div",{className:a.join(" "),onClick:e.clicked},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))},S=t(23),j=t.n(S),I=function(e){return e.show?l.a.createElement("div",{className:j.a.Backdrop,onClick:e.clicked}):null},A=t(3),D=t.n(A),x=function(e){var a=[D.a.SideDrawer,D.a.Close];return e.open&&(a=[D.a.SideDrawer,D.a.Open]),l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{show:e.open,clicked:e.closed}),l.a.createElement("div",{className:a.join(" ")},l.a.createElement("div",{className:D.a.Logo}),l.a.createElement("nav",{className:D.a.NavItems},l.a.createElement(_,{closed:e.closed}))))},z=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=i[0],m=i[1];Object(u.useScrollPosition)((function(e){e.prevPos;var a=e.currPos.y<20-window.innerHeight;a!==s&&m(a)}),[s],!1,!1,300);var E=s?[g.a.Navbar,g.a.Sticky].join(" "):[g.a.Navbar].join(" ");return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:E},l.a.createElement(y,{clicked:function(){o(!0)}}),l.a.createElement(x,{open:r,closed:function(){o(!1)}}),l.a.createElement("nav",{className:g.a.DesktopOnly},l.a.createElement(_,{SetPath:e.SetPath}))))},O=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),r=t[0],o=t[1];Object(u.useScrollPosition)((function(e){e.prevPos;var a=e.currPos.y<20-window.innerHeight;a!==r&&o(a)}),[r],!1,!1,300);var c=r?"ExtraMargin":"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"About"},l.a.createElement(z,{SetPath:e.SetPath}),l.a.createElement("div",{id:"AboutContentContainer"},l.a.createElement("div",{id:"AboutContent",className:c},l.a.createElement("h1",null,"About"),l.a.createElement("div",{id:"AboutText"},l.a.createElement("p",null,l.a.createElement("span",{className:"Colorized"},"Hello! "),"My name is ",l.a.createElement("span",{className:"ColorizedAlt"},"Ruben Samuelsen. "),"I'm a ",l.a.createElement("span",{className:"Colorized"},"fullstack web-developer "),"with ",l.a.createElement("span",{className:"ColorizedAlt"},"2+ years ")," varied webdev experience using",l.a.createElement("span",{className:"ColorizedAlt"}," technologies ")," such as ",l.a.createElement("span",{className:"Colorized"},"reactjs"),", angular, ",l.a.createElement("span",{className:"ColorizedAlt"},"dotnet core"),", es6, typescript, javascript, css, less, sass, webpack, parcel, expressjs, mongodb, sql and more."),l.a.createElement("p",null,"I specialize in ",l.a.createElement("span",{className:"ColorizedAlt"},"react")," and ",l.a.createElement("span",{className:"Colorized"},"dotnet core"),", but have used and will use plenty of other",l.a.createElement("span",{className:"ColorizedAlt"}," technologies ")," in the future."),l.a.createElement("p",null,"I started my ",l.a.createElement("span",{className:"Colorized"},"dev journey ")," by making and publishing my own",l.a.createElement("span",{className:"ColorizedAlt"}," games ")," using ",l.a.createElement("span",{className:"Colorized"},"c#")," and unity. From there I went on to experiment with ",l.a.createElement("span",{className:"Colorized"},"webdev ")," for a year before landing my current job."),l.a.createElement("p",null,"I am very passionate about ",l.a.createElement("span",{className:"Colorized"},"software development"),", I work to constantly ",l.a.createElement("span",{className:"ColorizedAlt"},"learn ")," something new and",l.a.createElement("span",{className:"Colorized"}," improve"),"."),"Dynamic ",l.a.createElement("span",{className:"ColorizedAlt"},"user friendly ")," web apps are my jam!"),l.a.createElement("div",{id:"SkillSeksjon"},l.a.createElement("div",{id:"SkillCo1"}),l.a.createElement("div",{id:"SkillCo2"}),l.a.createElement("div",{id:"SkillCo3"}),l.a.createElement("div",{id:"SkillCo4"}),l.a.createElement("div",{id:"SkillCo5"}),l.a.createElement("div",{id:"SkillCo6"}))))))},P=(t(54),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"Projects"},l.a.createElement("div",{id:"ProjectsContentContainer"},l.a.createElement("h1",null,"Projects"))))}),B=t(9),F=t.n(B),L=t(24),T=(t(56),function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),r=t[0],o=t[1],c=function(){var e=Object(L.a)(F.a.mark((function e(a){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=a.target,n=new FormData(t),e.next=5,p.a.post("https://formspree.io/maypbljv",n);case 5:200===e.sent.status?o("Success! I will respond as soon as possible."):o("Something went wrong.. Try sending me an email directly at ruben@tresam.no");case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"Contact"},l.a.createElement("div",{id:"ContactContentContainer"},l.a.createElement("div",{id:"Label"},l.a.createElement("h1",null,"Contact Me")),l.a.createElement("div",{id:"ContactForm"},l.a.createElement("form",{onSubmit:c},l.a.createElement("input",{type:"text",placeholder:"Name",name:"name",required:!0}),l.a.createElement("input",{placeholder:"Enter email",type:"email",name:"email",required:!0}),l.a.createElement("textarea",{placeholder:"Your Message",type:"text",name:"message"}),l.a.createElement("div",{id:"ButtonAndFeedbackContact"},l.a.createElement("div",{id:"FeedbackDiv"},r),l.a.createElement("div",{id:"ButtonContactDiv"},l.a.createElement("button",null,"Send Message!")))))),l.a.createElement("div",{id:"TriangleTop"})))});var M=function(){return l.a.createElement("div",{className:i.a.App},l.a.createElement(m,null),l.a.createElement(O,null),l.a.createElement(P,null),l.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.111a8d3b.chunk.js.map