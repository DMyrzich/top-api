(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{1914:function(e,r,t){"use strict";t.d(r,{V:function(){return n}});var n={topPage:{find:"https://courses-top.ru/api/top-page/find",byAlias:"https://courses-top.ru/api/top-page/byAlias/"},product:{find:"https://courses-top.ru/api/product/find"},review:{create:"https://courses-top.ru/api/review/create-demo"},search:{create:"https://courses-top.ru/api/top-page/textSearch/"}}},5831:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return x},default:function(){return Z}});var n=t(5893),c=t(7757),o=t.n(c),s=t(5861);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i,u=t(4033),p=t(1914),l=t(1983),h=t.n(l),f=t(7294),_=t(3391),d=t(2610),g=t(2117),j=t(1395);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var v=function(e){return f.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:34,height:34,fill:"none"},e),i||(i=f.createElement("path",{d:"M33.483 30.969l-8.381-8.417c2.154-2.473 3.335-5.585 3.335-8.825C28.437 6.158 22.06 0 14.22 0S0 6.158 0 13.727c0 7.57 6.379 13.728 14.219 13.728 2.943 0 5.748-.857 8.146-2.484l8.445 8.48c.353.354.828.549 1.337.549a1.88 1.88 0 001.285-.5 1.75 1.75 0 00.051-2.531zM14.22 3.58c5.795 0 10.51 4.552 10.51 10.146 0 5.595-4.715 10.147-10.51 10.147s-10.51-4.552-10.51-10.146C3.71 8.133 8.424 3.58 14.22 3.58z",fill:"#fff"})))},O=t(1163),y=t(8099),b=t(7808),w=function(e){var r=e.product,t=e.query,c=(0,O.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:h().searchTitle,children:[(0,n.jsx)("div",{className:h().ico,children:(0,n.jsx)(v,{})}),(0,n.jsx)(d.Z,{h:"h1",children:"\u041f\u043e\u0438\u0441\u043a"})]}),r&&t&&(0,n.jsxs)(y.Z,{children:["\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",t," \u043d\u0430\u0439\u0434\u0435\u043d\u043e ",r.length," ",(0,b.rQ)(r.length,["\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b","\u0441\u0442\u0440\u0430\u043d\u0438\u0446"])]}),r&&r.map((function(e){return(0,n.jsx)(g.Z,{color:"white",children:(0,n.jsxs)("div",{className:h().itemsProduct,children:[e.title,(0,n.jsx)(j.Z,{color:"ghost",children:e.secondCategory}),(0,n.jsx)(_.Z,{onClick:function(){return c.push("http://localhost:3000/courses/".concat(e.alias))},className:h().go,appearance:"primary",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})},e._id)}))]})},P=t(9008);var x=!0,Z=(0,u.Z)((function(e){a({},e);var r=(0,O.useRouter)(),t=(0,f.useState)([]),c=t[0],i=t[1],u=r.query.q;return(0,f.useEffect)((function(){(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,fetch(p.V.search.create+u);case 3:return e.next=5,e.sent.json();case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(P.default,{children:[(0,n.jsx)("title",{children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443"}),(0,n.jsx)("meta",{name:"description",content:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443"})]}),(0,n.jsx)(w,{product:c,query:u})]})}))},2117:function(e,r,t){"use strict";var n=t(5893),c=t(4942),o=t(2621),s=t(7294),a=t(5737),i=t.n(a),u=t(4184),p=t.n(u);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=(0,s.forwardRef)((function(e,r){var t=e.color,s=void 0===t?"white":t,a=e.children,u=e.className,l=(0,o.Z)(e,["color","children","className"]);return(0,n.jsx)("div",h(h({ref:r,className:p()(i().card,u,(0,c.Z)({},i().blue,"blue"==s))},l),{},{children:a}))}));r.Z=f},2610:function(e,r,t){"use strict";var n=t(5893),c=(t(7294),t(1191)),o=t.n(c);r.Z=function(e){var r=e.h,t=e.children;switch(r){case"h1":return(0,n.jsx)("h1",{className:o().h1,children:t});case"h2":return(0,n.jsx)("h2",{className:o().h2,children:t});case"h3":return(0,n.jsx)("h3",{className:o().h3,children:t});default:return(0,n.jsx)(n.Fragment,{})}}},8099:function(e,r,t){"use strict";var n=t(5893),c=t(4942),o=t(2621),s=(t(7294),t(4184)),a=t.n(s),i=t(9155),u=t.n(i);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r,t=e.children,s=e.className,i=e.size,p=void 0===i?"m":i,h=(0,o.Z)(e,["children","className","size"]);return(0,n.jsx)("p",l(l({className:a()(u().p,s,(r={},(0,c.Z)(r,u().m,"m"==p),(0,c.Z)(r,u().s,"s"==p),(0,c.Z)(r,u().l,"l"==p),r))},h),{},{children:t}))}},1395:function(e,r,t){"use strict";var n=t(5893),c=t(4942),o=t(2621),s=(t(7294),t(4184)),a=t.n(s),i=t(5103),u=t.n(i);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r,t=e.children,s=e.className,i=e.size,p=void 0===i?"m":i,h=e.color,f=void 0===h?"ghost":h,_=(0,o.Z)(e,["children","className","size","color"]);return(0,n.jsx)("div",l(l({className:a()(u().tag,s,(r={},(0,c.Z)(r,u().m,"m"==p),(0,c.Z)(r,u().s,"s"==p),(0,c.Z)(r,u().red,"red"==f),(0,c.Z)(r,u().green,"green"==f),(0,c.Z)(r,u().grey,"grey"==f),(0,c.Z)(r,u().primary,"primary"==f),(0,c.Z)(r,u().ghost,"ghost"==f),r))},_),{},{children:t}))}},881:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(5831)}])},1983:function(e){e.exports={searchTitle:"Search_component_searchTitle__G8cK2",ico:"Search_component_ico__1lqoo",itemsProduct:"Search_component_itemsProduct__1Pky_",go:"Search_component_go__3Q-6p"}},5737:function(e){e.exports={card:"Card_card__2dC16",blue:"Card_blue__1paCc"}},1191:function(e){e.exports={h1:"H_h1__3SGSt",h2:"H_h2__3JB8x",h3:"H_h3__ltn_v"}},9155:function(e){e.exports={p:"Paragraph_p__3J-FG",s:"Paragraph_s__1PexQ",m:"Paragraph_m__3UEWa",l:"Paragraph_l__2ji-G"}},5103:function(e){e.exports={tag:"Tag_tag__3NOV8",s:"Tag_s__12IUp",m:"Tag_m__1WBhK",primary:"Tag_primary__1FFgG",red:"Tag_red__QpR7Q",green:"Tag_green__1CgKv",grey:"Tag_grey__3j9av",ghost:"Tag_ghost__VK3gc"}},5861:function(e,r,t){"use strict";function n(e,r,t,n,c,o,s){try{var a=e[o](s),i=a.value}catch(u){return void t(u)}a.done?r(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(c,o){var s=e.apply(r,t);function a(e){n(s,c,o,a,i,"next",e)}function i(e){n(s,c,o,a,i,"throw",e)}a(void 0)}))}}t.d(r,{Z:function(){return c}})}},function(e){e.O(0,[941,33,774,888,179],(function(){return r=881,e(e.s=r);var r}));var r=e.O();_N_E=r}]);