(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__igdnY",NavItems:"SideDrawer_NavItems__36aCF",Open:"SideDrawer_Open__1uqKR",Close:"SideDrawer_Close__JcHbc",Logo:"SideDrawer_Logo__U1hWa"}},,function(e,t,a){e.exports={Navbar:"Nav_Navbar__3Fnly",DesktopOnly:"Nav_DesktopOnly__1KFa-",ErrorBox:"Nav_ErrorBox__2Q7M7"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2UC6v",NavigationButtons:"NavigationItems_NavigationButtons__3MT-e",LanguageButtons:"NavigationItems_LanguageButtons__3WWEY"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2WsgF",Link:"NavigationItem_Link__2pVlk"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3ZFAS",hidden:"DrawerToggle_hidden__FHFud"}},function(e,t,a){e.exports={Content:"Customers_Content__2XJs4",Customer:"Customers_Customer__1KDAg"}},,,,,,,,,,,function(e,t,a){e.exports={root:"App_root__2CSG3",App:"App_App__15LM-"}},function(e,t,a){e.exports={Content:"LandingPage_Content__1LZhq"}},function(e,t,a){e.exports={Logo:"Logo_Logo__1PV18"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__FT4AB"}},,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),c=a.n(r),i=(a(29),a(3)),l=(a(30),a(19)),s=a.n(l),m=a(20),u=a.n(m),_=a(4),d=a.n(_),g=a(5),v=a.n(g),p=a(6),E=a.n(p),N=function(e){return o.a.createElement("div",{onClick:function(){e.SetPath(e.link)},className:E.a.NavigationItem},o.a.createElement("div",{className:E.a.Link},e.children))},f=function(e){return o.a.createElement("div",{className:v.a.NavigationItems},o.a.createElement(N,{SetPath:e.SetPath,link:"/"}," Home "),o.a.createElement(N,{SetPath:e.SetPath,link:"/customers"}," Customers "),o.a.createElement("div",{className:v.a.LanguageButtons}))},h=(a(21),a(7)),S=a.n(h),k=function(e){var t=[S.a.DrawerToggle,S.a.hidden];return o.a.createElement("div",{className:t.join(" "),onClick:e.clicked},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},w=a(22),C=a.n(w),D=function(e){return e.show?o.a.createElement("div",{className:C.a.Backdrop,onClick:e.clicked}):null},I=a(2),L=a.n(I),P=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{show:e.open,clicked:e.closed}),o.a.createElement("div",{className:t.join(" ")},o.a.createElement("div",{className:L.a.Logo}),o.a.createElement("nav",{className:L.a.NavItems},o.a.createElement(f,null))))},x=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:d.a.Navbar},o.a.createElement(k,{clicked:function(){c(!0)}}),o.a.createElement(P,{open:r,closed:function(){c(!1)}}),o.a.createElement("nav",{className:d.a.DesktopOnly},o.a.createElement(f,{SetPath:e.SetPath}))))},B=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{SetPath:e.SetPath}),o.a.createElement("div",{className:u.a.Content},o.a.createElement("h4",null,"Welcome!")))},F=a(8),b=a.n(F),O=a(23),j=a.n(O),A=function(e){var t,a=Object(n.useState)(),r=Object(i.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){j.a.get("api/customers").then((function(e){l(e.data)})).catch((function(e){console.log(e)}))})),t=void 0!==c?c.map((function(e){return o.a.createElement("div",{key:e.id,className:b.a.Customer},e.firstName+" "+e.lastName)})):o.a.createElement(o.a.Fragment,null),o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{SetPath:e.SetPath}),o.a.createElement("div",{className:b.a.Content},t))};var y=function(){var e=Object(n.useState)("/"),t=Object(i.a)(e,2),a=t[0],r=t[1],c=function(e){r(e)},l=o.a.createElement(o.a.Fragment,null);return"/"==a?l=o.a.createElement(B,{SetPath:c}):"/customers"==a&&(l=o.a.createElement(A,{SetPath:c})),o.a.createElement("div",{className:s.a.App},l)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.2719b380.chunk.js.map