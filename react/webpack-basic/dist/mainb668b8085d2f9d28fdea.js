(()=>{"use strict";var r={144:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"body{background-color:#ccc;padding:48px;font-size:16px}.card-image{background-color:#fff;position:relative;max-width:400px}.card-image .image{line-height:0;margin-top:-34px;position:relative;z-index:1}.card-image .image img{max-width:100%}.card-image .wrap{padding:0 1em 1.5em 1em;text-align:center}.card-image .title{font-family:sans-serif;font-size:1.5em;margin:8px 0 16px;line-height:1.3}.card-image .title a{color:rgba(0,0,0,.9);text-decoration:none}.card-image .title a:hover{color:rgba(51,51,51,.9);transition:all .6s ease}.card-image .btn{background-color:#fa625d;color:rgba(51,51,51,.9);border:0;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:14px 40px;font-size:16px;cursor:pointer}.card-image .btn:active{transform:scale(0.98)}.card-image .btn:focus{outline:0}","",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AACA,KACE,qBAAA,CACA,YAAA,CACA,cAAA,CAuBF,YACE,qBAjBY,CAkBZ,iBAAA,CACA,eAAA,CACA,mBACE,aAAA,CACA,gBAAA,CACA,iBAAA,CACA,SAAA,CACA,uBACE,cAAA,CAIJ,kBACE,uBAAA,CACA,iBAAA,CAGF,mBACE,sBAvCW,CAwCX,eAAA,CACA,iBAAA,CACA,eAAA,CAEA,qBACE,oBA3CQ,CA4CR,oBAAA,CACA,2BACE,uBAzCS,CA0CT,uBAAA,CAIN,iBACE,wBArDY,CAsDZ,uBAhDa,CAiDb,QAAA,CACA,kBAAA,CACA,6DAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CAEA,wBACE,qBAAA,CAGF,uBACE,SAAA",sourcesContent:["//this is not needed in our css\r\nbody {\r\n  background-color: #ccc;\r\n  padding: 48px;\r\n  font-size: 16px;\r\n}\r\n\r\n//this is set in our base css no need to copy\r\n$font-primary: sans-serif;\r\n$color-primary: #fa625d;\r\n$color-black: rgba(0, 0, 0, 0.9);\r\n$color-white: #ffffff;\r\n//lighter and darker version for hover\r\n$color-primary-30: lighten($color-primary, 20%);\r\n$color-primary-70: darken($color-primary, 10%);\r\n$color-black-30: lighten($color-black, 20%);\r\n\r\n//for the card\r\n$background-card: $color-white;\r\n//for the tag\r\n$font-tag-label: $font-primary;\r\n$color-tag-label: $color-primary;\r\n\r\n//for the title\r\n$font-title: $font-primary;\r\n$color-title: $color-black;\r\n// this is the card sass\r\n.card-image {\r\n  background-color: $background-card;\r\n  position: relative;\r\n  max-width: 400px;\r\n  .image {\r\n    line-height: 0;\r\n    margin-top: -34px;\r\n    position: relative;\r\n    z-index: 1;\r\n    img {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n  .wrap {\r\n    padding: 0 1em 1.5em 1em;\r\n    text-align: center;\r\n  }\r\n\r\n  .title {\r\n    font-family: $font-title;\r\n    font-size: 1.5em;\r\n    margin: 8px 0 16px;\r\n    line-height: 1.3;\r\n\r\n    a {\r\n      color: $color-title;\r\n      text-decoration: none;\r\n      &:hover {\r\n        color: $color-black-30;\r\n        transition: all 0.6s ease;\r\n      }\r\n    }\r\n  }\r\n  .btn {\r\n    background-color: $color-primary;\r\n    color: $color-black-30;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n    padding: 14px 40px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n\r\n    &:active {\r\n      transform: scale(0.98);\r\n    }\r\n\r\n    &:focus {\r\n      outline: 0;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],p=a[l]||0,A="".concat(l," ").concat(p);a[l]=p+1;var u=e(A),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(d);else{var f=o(d,t);t.byIndex=c,n.splice(c,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),l=0;l<a.length;l++){var p=e(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!r;)r=t[o--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),l=e(216),p=e.n(l),A=e(589),u=e.n(A),d=e(144),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;const m=e.p+"image.jpg";console.log(((r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce(((r,n)=>r+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")),""))()),console.log("서울"()),document.getElementById("mainImage").src=m})()})();
//# sourceMappingURL=mainb668b8085d2f9d28fdea.js.map