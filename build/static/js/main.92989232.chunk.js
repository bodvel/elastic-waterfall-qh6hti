(this["webpackJsonpreact-qr-reader4"]=this["webpackJsonpreact-qr-reader4"]||[]).push([[0],{14:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(6),o=n.n(r),a=n(5),i=n(7),s=n(4),u=(n(14),n(8)),d=n.n(u),p=n(1),b=window.Telegram.WebApp,j=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),u=Object(s.a)(o,2),j=u[0],l=u[1],f=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("loaded data data",t),t&&""!==t&&(console.log("loaded >>>",t),r(!1),l(t),n="https://2y4y5p6k6b.apigw.corezoid.com/webApp?qr="+t+"&id="+b.initDataUnsafe.user.id,fetch(n),setTimeout((function(){b.close()}),1e3));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){setTimeout((function(){r(!0)}),1e3)}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("button",{onClick:function(){r(!n)},children:n?"Stop Scan":"Start Scan"}),n&&Object(p.jsx)(d.a,{facingMode:"environment",delay:2e3,onError:function(e){console.error(e)},onScan:f,style:{width:"300px"}}),""!==j&&Object(p.jsx)("p",{children:j})]})},l=document.getElementById("root");o.a.render(Object(p.jsx)(c.StrictMode,{children:Object(p.jsx)(j,{})}),l)}},[[24,1,2]]]);
//# sourceMappingURL=main.92989232.chunk.js.map