(()=>{var e={111:(e,t,i)=>{"use strict";i.d(t,{Z:()=>v});var n=i(81),r=i.n(n),a=i(645),p=i.n(a),o=i(667),l=i.n(o),_=new URL(i(783),i.b),s=new URL(i(666),i.b),d=new URL(i(830),i.b),c=new URL(i(549),i.b),m=new URL(i(793),i.b),u=new URL(i(614),i.b),g=p()(r()),f=l()(_),h=l()(s),x=l()(d),w=l()(c),y=l()(m),b=l()(u);g.push([e.id,`@font-face{font-family:"Graphik-Medium";src:url(${f})}@font-face{font-family:"Graphik-Black";src:url(${h})}@font-face{font-family:"Graphik-Black";src:url(${x})}@font-face{font-family:"Graphik-Regular";src:url(${w})}@font-face{font-family:"Graphik-Regular";src:url(${y})}.App__header{position:fixed;top:0;background:#f2f2f2;z-index:99;height:72px;width:100%;grid-column:1/12}.App__header__inner{padding:0 64px;min-height:72px;display:flex;align-items:center;box-sizing:border-box}.App__header__logo{width:100%;display:flex;align-items:center}.App__header__logo__img{display:block;margin-top:7px;max-width:56px;min-width:56px;max-height:56px;min-height:56px}.App__header__logo__img__item{display:block;max-width:56px;min-width:56px;max-height:56px;min-height:56px;object-fit:cover}.App__header__logo__title{display:block;margin-left:32px;text-align:left;line-height:20px;font-size:14px;font-family:"Graphik-Regular",sans-serif}.App__header__logo__title__bold{color:#1b1b1b;font-weight:700}.App__header__logo__title__small{font-weight:400;color:#7d7d7d}.App__header__menu{cursor:pointer;margin-left:auto;display:flex;align-items:center;max-width:32px;min-width:32px;max-height:10px;min-height:10px}.App__header__menu__item{max-width:32px;min-width:32px;max-height:10px;min-height:10px;object-fit:cover}.show-enter{z-index:9999;opacity:0;width:60%;transform:translate3d(70vw, 0, 0)}.show-enter-active{opacity:1;transform:translateX(0);transform:translate3d(0);width:0%;-webkit-transition:all .3s linear;-moz-transition:all .3s linear;transition:all .3s linear}.show-exit{opacity:1}.show-exit-active{opacity:0;transform:translate3d(70vw, 0, 0);width:60%;-webkit-transition:all .3s linear;-moz-transition:all .3s linear;transition:all .3s linear}@media screen and (max-width: 992px){.show-exit-active .App__header__inner{padding:0 16px}.show-exit-active .App__isOpen{position:absolute;overflow:auto}.show-exit-active .App__isOpen__left{width:auto;display:block}.show-exit-active .App__isOpen__img{margin-left:22px}.show-exit-active .App__isOpen__inner{margin-left:26px}.show-exit-active .App__isOpen__close:before,.show-exit-active .App__isOpen__close:after{background:#272727}}@media screen and (max-height: 800px){.show-exit-active .App__isOpen__left{height:auto}.show-exit-active .App__isOpen__left__link{position:relative;margin:auto;margin-top:100px}}@media screen and (max-width: 600px){.show-exit-active .App__header__logo__title{margin-left:12px;display:block;word-break:break-all}}@media screen and (max-width: 328px){.show-exit-active .App__isOpen__close{margin-right:7px}.show-exit-active .layout__image__item{max-width:280px}}.App__isOpen{background:url(${b});background-position:center top;background-size:cover;background-repeat:no-repeat;position:fixed;top:0;left:0;right:0;height:100vh;z-index:100;padding:8px;transform:translateX(100%);box-sizing:border-box}.App__isOpen__close{z-index:9999;cursor:pointer;margin-left:auto;width:27px;height:27px;padding:0;padding:1px;justify-content:center;align-items:center;position:relative}.App__isOpen__close:before,.App__isOpen__close:after{position:absolute;content:"";height:35px;width:3px;border-radius:3px;transform:translate(-50%, -50%);background:#fff}.App__isOpen__close:before{transform:rotate(45deg);margin-left:2.2px}.App__isOpen__close:after{transform:rotate(-45deg);margin-left:2.2px}.App__isOpen__left{margin-right:auto;background:rgba(255,255,255,.8274509804);width:60%;height:100%;display:flex;font-family:"GraphikLCG",sans-serif}.App__isOpen__left__img{padding-top:24px;margin-left:50px;display:block;max-width:56px;min-width:56px;max-height:56px;min-height:56px}.App__isOpen__left__img__item{display:block;max-width:56px;min-width:56px;max-height:56px;min-height:56px;object-fit:cover}.App__isOpen__left__inner{padding-top:43px;text-align:left;margin:0 auto;margin-left:64px;padding-right:50px;color:#1b1b1b}.App__isOpen__left__title{font-family:"Graphik-Regular";font-weight:500;color:#7d7d7d;font-size:14px;margin-bottom:60px}.App__isOpen__left__main{font-family:"Graphik-Black",sans-serif;font-size:32px;font-weight:800;line-height:40px}.App__isOpen__left__descr{font-family:"Graphik-Regular";max-width:600px;margin:24px 0;font-weight:500;font-size:16px;color:#1b1b1b;line-height:24px}.App__isOpen__left__phone{font-family:"Graphik-Medium";font-size:18px;text-decoration:none;color:#1b1b1b;font-weight:400;margin-top:18px}.App__isOpen__left__link{text-decoration:none;position:absolute;bottom:51px;display:flex;align-items:center;margin-top:auto;color:#3e29e3;word-break:break-word}.App__isOpen__left__link__img{display:flex;align-items:center;justify-content:center;border-radius:50%;max-width:48px;min-width:48px;max-height:48px;min-height:48px;background:#fff;box-shadow:0px 4px 8px rgba(0,0,0,.08)}.App__isOpen__left__link__img__item{display:flex;align-items:center;justify-content:center}.App__isOpen__left__link__text{margin-left:24px;font-family:"Graphik-Regular";font-weight:600;display:block;hyphens:auto;word-break:break-word;font-size:16px}@keyframes slide{0%{transform:translateX(-100%)}100%{transform:translateX(0%)}}@media screen and (max-width: 992px){.App__isOpen{position:absolute;overflow:auto}.App__isOpen__left{width:auto;display:block}.App__isOpen__left__link{left:0;right:0;margin:auto;justify-content:center}.App__isOpen__img{margin-left:22px}.App__isOpen__inner{margin-left:26px}.App__isOpen__close{margin-top:24px;margin-right:26px}.App__isOpen__close:before,.App__isOpen__close:after{background:#272727}}@media screen and (max-width: 420px){.App__isOpen__left__link{margin:auto;align-items:center;left:0;right:0;margin-top:20px;bottom:14%}.App__isOpen__left__link__text{width:160px}}@media screen and (max-width: 380px){.App__isOpen__left{padding-bottom:20px}}@media screen and (max-height: 800px){.App__isOpen__left{height:auto}.App__isOpen__left__link{position:relative;margin:auto;margin-top:90px}}@media screen and (max-width: 375px){.App__isOpen__left__link{margin-top:24px}}@media screen and (max-width: 360px){.App__isOpen__left__link{margin-top:33px}}@media screen and (max-width: 328px){.App__isOpen__close{margin-right:7px}}.sideMenu__list{position:fixed;top:216px;left:64px;list-style:none;grid-column:1/span 3}.sideMenu__list__item{cursor:pointer;font-family:"Graphik-Medium",sans-serif;font-weight:400;list-style:none;font-size:14px;margin-bottom:16px}.sideMenu__list__item:last-child{margin-bottom:0}.sideMenu__list__item__link{white-space:nowrap;color:#7d7d7d;transition:.1s color ease;text-decoration:none;border:none;cursor:pointer;padding:0}.sideMenu__list__item__link:hover{color:#1b1b1b}.active__item .sideMenu__list__item__link{color:#3e29e3}.active__item .sideMenu__list__item__link:hover{color:#3e29e3}@media screen and (max-width: 992px){.sideMenu__list{display:none}}*{padding:0;margin:0}ul,li,h1,h2,h3,h4,p{padding:0;margin:0}a{text-decoration:none}body{overflow:hidden;height:100vh;background-color:#f2f2f2}.App{font-family:"GraphikLCG",sans-serif;display:grid;grid-template-columns:repeat(12, 72px);grid-column-gap:32px;padding-left:64px;margin-top:72px;overflow-y:scroll;height:100vh}.wrapper{display:grid;margin-top:52px;z-index:4;color:#1b1b1b;text-align:left;grid-column:4/span 9;padding-right:64px}.wrapper__title{font-family:"Graphik-Black",sans-serif;font-size:48px;font-weight:800;white-space:nowrap}.wrapper__subtitle{margin-top:16px;font-family:"Graphik-Regular",sans-serif;font-size:24px;font-weight:500;line-height:24px;white-space:nowrap}.wrapper__descr{line-height:24px;font-family:"Graphik-Regular",sans-serif;font-size:16px;grid-column:1/span 6}.harangue{grid-template-columns:repeat(9, 1fr);display:grid}.harangue .wrapper__title{grid-column:1/span 5}.harangue .wrapper__subtitle{margin-top:64px;grid-column:1/span 2}.harangue .wrapper__descr{margin-top:64px;grid-column:1/span 6}.grid{margin-top:80px;display:grid}.grid .wrapper__title{grid-column:1/span 2;font-size:32px}.grid .wrapper__descr{margin-top:24px}.layout{margin-top:48px;display:grid;grid-column:1/span 9}.layout__title{margin-top:36px;max-width:190px;margin-bottom:32px;font-family:"Graphik-Regular",sans-serif;font-size:24px;color:#1b1b1b;font-weight:600;line-height:32px}.layout__descr{display:flex;justify-content:start;align-items:center}.layout__descr__item{font-size:14px;color:#7d7d7d;text-align:left;font-family:"Graphik-Regular",sans-serif;font-weight:400;margin-right:95px;white-space:nowrap}.layout__descr__item:nth-child(2){margin-right:152px}.layout__descr__item:last-child{margin-right:0}.layout__descr__item__count{text-align:left;margin-top:8px;white-space:nowrap;font-family:"Graphik-Regular",sans-serif;font-size:24px;font-weight:500;line-height:32px;color:#1b1b1b}.layout__image{margin-top:48px;margin-bottom:22px;width:100%;height:auto;display:block}.layout__image__item{height:auto;display:block}.typography{grid-template-columns:repeat(9, 1fr);display:grid}.typography .wrapper__title{grid-column:1/span 3;font-size:32px;margin-top:80px}.typography .wrapper__descr{margin-top:24px}.ui .wrapper__title{grid-column:1/span 2;font-size:32px;text-transform:uppercase}.ui .wrapper__descr{margin-top:24px;margin-bottom:48px}.ui{grid-template-columns:repeat(9, 1fr);display:grid;margin-top:80px}.ui__title{font-family:"Graphik-Regular",sans-serif;font-size:24px;color:#1b1b1b;font-weight:600;line-height:32px;margin-top:64px;margin-bottom:32px;grid-column:1/span 3}.ui__buttonWrap{display:grid;flex-direction:row;margin-bottom:64px;grid-column:1/span 7}.ui__buttonWrap__wrap{display:flex;flex-direction:column;justify-content:flex-start;grid-column:1/2}.ui__buttonWrap__wrap:last-child{grid-column:4/3}.ui__title__field{grid-column:1/span 2;margin-top:24px;margin-bottom:92px}.ui__title__list{margin-top:90px;margin-bottom:24px}.ui__title__btn{grid-column:1/span 1;margin-top:232px;margin-bottom:76px}@media screen and (max-width: 1440px){.ui__title .App{grid-template-columns:repeat(12, 72px)}}@media screen and (max-width: 1300px){.ui__title .App{grid-column-gap:25px;padding-left:40px}.ui__title .layout__image__item{max-width:700px}.ui__title .harangue .wrapper__title{grid-column:1/span 6}.ui__title .harangue .wrapper__subtitle{grid-column:1/span 3}}@media screen and (max-width: 1200px){.ui__title .App{grid-template-columns:repeat(12, 60px)}}.ui__title .App{padding-left:0}.ui__title .layout__descr__item{margin-right:45px}.ui__title .layout__descr__item:nth-child(2){margin-right:102px}@media screen and (max-width: 1016px){.ui__title .App{grid-column-gap:22px}}@media screen and (max-width: 992px){.ui__title .App{padding:0;grid-template-columns:none}.ui__title .wrapper{padding:0 64px;grid-template-columns:repeat(12, 1fr);grid-column:1/span 12}.ui__title .harangue{grid-template-columns:none;grid-column:4/span 8}.ui__title .harangue__title{font-size:38px}.ui__title .harangue__descr{max-width:400px}.ui__title .harangue .wrapper__title{grid-column:1/span 8}.ui__title .harangue .wrapper__descr{text-align:left}.ui__title .grid{grid-column:4/span 7}.ui__title .grid .wrapper__descr{text-align:left}.ui__title .layout__title{text-align:center}.ui__title .layout__image{margin:auto;margin-top:14px;max-width:350px}.ui__title .layout__image__item{max-width:350px}.ui__title .layout__descr{display:flex;flex-direction:column;align-items:start;gap:30px;margin:auto}.ui__title .layout__descr__item{margin-right:0}.ui__title .layout__descr__item:nth-child(2){margin-right:0}.ui__title .typography{grid-template-columns:none;grid-column:4/span 8}.ui__title .ui{display:flex;flex-direction:column;align-items:center;grid-column:4/span 8}.ui__title .ui__buttonWrap{display:flex;flex-direction:column;margin-bottom:44px}.ui__title .ui__buttonWrap__wrap:not(:last-child){margin-bottom:24px}.ui__title .ui__btn{margin-left:0}.ui__title .ui__form{flex-direction:column}}@media screen and (max-width: 768px){.ui__title .harangue{grid-column:3/span 9}.ui__title .grid{grid-column:3/span 9}.ui__title .typography{grid-column:3/span 9}.ui__title .ui{grid-column:3/span 9}.ui__title .harangue .wrapper__title{font-size:35px}.ui__title .wrapper{padding:0 64px;grid-column:1/span 8}}@media screen and (max-width: 600px){.ui__title .harangue .wrapper__title{white-space:normal}.ui__title .wrapper{padding:0 24px}.ui__title .wrapper__title{font-size:28px}.ui__title .harangue__descr{display:block;box-sizing:border-box;max-width:300px}.ui__title .layout__image{margin:auto;max-width:300px}.ui__title .layout__image__item{max-width:300px}.ui__title .harangue{grid-column:1/span 12}.ui__title .grid{grid-column:1/span 12}.ui__title .typography{grid-column:1/span 12}.ui__title .ui{grid-column:1/span 12}}@media screen and (max-width: 370px){.ui__title .wrapper{padding:0 16px}}@media screen and (max-width: 340px){.ui__title .layout__image{max-width:280px}.ui__title .layout__image__item{max-width:280px}}`,""]);const v=g},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var p={};if(n)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(p[l]=!0)}for(var _=0;_<e.length;_++){var s=[].concat(e[_]);n&&p[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),i&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=i):s[2]=i),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var a={},p=[],o=0;o<e.length;o++){var l=e[o],_=n.base?l[0]+n.base:l[0],s=a[_]||0,d="".concat(_," ").concat(s);a[_]=s+1;var c=i(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==c)t[c].references++,t[c].updater(m);else{var u=r(m,n);n.byIndex=o,t.splice(o,0,{identifier:d,updater:u,references:1})}p.push(d)}return p}function r(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var p=0;p<a.length;p++){var o=i(a[p]);t[o].references--}for(var l=n(e,r),_=0;_<a.length;_++){var s=i(a[_]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var a=i.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},241:()=>{},286:(e,t,i)=>{document.getElementById("layout"),i(241),i(52),i(21)},920:()=>{},655:(e,t,i)=>{"use strict";i.r(t);var n=i(574);const r=i.p+"menu.svg",a=document.getElementById("logoHeader"),p=document.getElementById("menuHeader");a.src=n,p.src=r;const o=document.getElementById("App__header__menu"),l=document.getElementById("App__isOpen__close"),_=document.getElementById("App__isOpen");o.addEventListener("click",(function(){_.style.transform="translateX(0%)",_.style.transition="transform .3s ease-out",o.style.display="none"})),l.addEventListener("click",(function(){_.style.transform="translateX(100%)",_.style.transition="transform .3s ease-out",o.style.display="flex"}))},398:(e,t,i)=>{"use strict";i.r(t);var n=i(574);const r=i.p+"shape.svg",a=document.getElementById("logoMenu"),p=document.getElementById("linkMenu");a.src=n,p.src=r},21:()=>{},664:()=>{const e=document.querySelectorAll(".sideMenu__list__item"),t=(document.querySelectorAll(".section"),document.getElementById("App"));t.onscroll=()=>{if(!t)return;const i=t.getBoundingClientRect(),n=document.elementFromPoint(i.width/2,i.height/3);if(!n||"SECTION"!==n.tagName)return;e.forEach((e=>{e.classList.remove("active__item")}));const r=n.getAttribute("id");document.querySelector(`[href="#${r}"]`).parentElement.classList.add("active__item")},e.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const i=this.querySelector("a").getAttribute("href").substring(1),n=document.getElementById(i);t.scrollTo({top:n.offsetTop-170,left:0,behavior:"smooth"})}))}))},52:()=>{},586:()=>{},914:()=>{},614:(e,t,i)=>{"use strict";e.exports=i.p+"bg.jpg"},574:(e,t,i)=>{"use strict";e.exports=i.p+"logo.svg"},666:(e,t,i)=>{"use strict";e.exports=i.p+"Graphik-Black-Web.woff"},830:(e,t,i)=>{"use strict";e.exports=i.p+"Graphik-Black-Web.woff2"},783:(e,t,i)=>{"use strict";e.exports=i.p+"Graphik-Medium-Web.ttf"},549:(e,t,i)=>{"use strict";e.exports=i.p+"Graphik-Regular-Web.woff"},793:(e,t,i)=>{"use strict";e.exports=i.p+"Graphik-Regular-Web.woff2"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,i.nc=void 0,(()=>{"use strict";var e=i(379),t=i.n(e),n=i(795),r=i.n(n),a=i(569),p=i.n(a),o=i(565),l=i.n(o),_=i(216),s=i.n(_),d=i(589),c=i.n(d),m=i(111),u={};u.styleTagTransform=c(),u.setAttributes=l(),u.insert=p().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=s(),t()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals,i(655),i(286),i(920),i(914),i(586),i(398),i(664)})()})();