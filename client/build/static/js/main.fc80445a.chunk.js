(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,a,t){e.exports={root:"App_root__3rdsK",App:"App_App__1jObQ",ModalWrap:"App_ModalWrap__TYshJ"}},13:function(e,a,t){e.exports={Navbar:"Nav_Navbar__31qDS",DesktopOnly:"Nav_DesktopOnly__1ubwA",ErrorBox:"Nav_ErrorBox__1TFOa"}},14:function(e,a,t){e.exports={NavigationItems:"NavigationItems_NavigationItems__3HIZ3",NavigationButtons:"NavigationItems_NavigationButtons__qKhis",LanguageButtons:"NavigationItems_LanguageButtons__50MFr"}},15:function(e,a,t){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__13q7b",hidden:"DrawerToggle_hidden__1nFLl"}},16:function(e,a,t){e.exports={Content:"Customers_Content__4DVNr",Customer:"Customers_Customer__1vAz0"}},30:function(e,a,t){e.exports={Content:"LandingPage_Content__2Jdia"}},31:function(e,a,t){e.exports={NavigationItem:"NavigationItem_NavigationItem__ePuEt"}},32:function(e,a,t){e.exports={Logo:"Logo_Logo__3UWLH"}},33:function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__16SqJ"}},37:function(e,a,t){e.exports=t(66)},42:function(e,a,t){},43:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(29),c=t.n(o),l=(t(42),t(43),t(35)),i=t(1),s=t(12),m=t.n(s),u=t(30),_=t.n(u),d=t(10),v=t(13),g=t.n(v),p=t(14),E=t.n(p),N=t(31),f=t.n(N),h=function(e){return r.a.createElement("div",{className:f.a.NavigationItem},r.a.createElement("a",{href:e.link},e.children))},w=function(e){return r.a.createElement("div",{className:E.a.NavigationItems},r.a.createElement(h,{link:"/"}," Home "),r.a.createElement(h,{link:"/customers"}," Customers "),r.a.createElement("div",{className:E.a.LanguageButtons}))},k=(t(32),t(15)),S=t.n(k),D=function(e){var a=[S.a.DrawerToggle,S.a.hidden];return r.a.createElement("div",{className:a.join(" "),onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},C=t(33),I=t.n(C),x=function(e){return e.show?r.a.createElement("div",{className:I.a.Backdrop,onClick:e.clicked}):null},B=t(8),O=t.n(B),b=function(e){var a=[O.a.SideDrawer,O.a.Close];return e.open&&(a=[O.a.SideDrawer,O.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:a.join(" ")},r.a.createElement("div",{className:O.a.Logo}),r.a.createElement("nav",{className:O.a.NavItems},r.a.createElement(w,null))))},L=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),o=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:g.a.Navbar},r.a.createElement(D,{clicked:function(){c(!0)}}),r.a.createElement(b,{open:o,closed:function(){c(!1)}}),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(w,{SetPath:e.SetPath}))))},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{SetPath:e.SetPath}),r.a.createElement("div",{className:_.a.Content},r.a.createElement("h4",null,"Welcome!")))},A=t(16),F=t.n(A),P=t(34),T=t.n(P),W=function(e){var a,t=Object(n.useState)(),o=Object(d.a)(t,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){T.a.get("api/customers").then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),a=void 0!==c?c.map((function(e){return r.a.createElement("div",{key:e.id,className:F.a.Customer},e.firstName+" "+e.lastName)})):r.a.createElement(r.a.Fragment,null),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{SetPath:e.SetPath}),r.a.createElement("div",{className:F.a.Content},a))};var y=function(){return r.a.createElement("div",{className:m.a.App},r.a.createElement("div",{className:m.a.ModalWrap},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/customers"},r.a.createElement(W,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(j,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__H4Blo",NavItems:"SideDrawer_NavItems__2q_se",Open:"SideDrawer_Open__3tMlC",Close:"SideDrawer_Close__3OJsH",Logo:"SideDrawer_Logo__1nG-6"}}},[[37,1,2]]]);
//# sourceMappingURL=main.fc80445a.chunk.js.map