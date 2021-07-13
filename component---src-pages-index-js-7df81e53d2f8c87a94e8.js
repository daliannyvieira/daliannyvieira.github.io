/*! For license information please see component---src-pages-index-js-7df81e53d2f8c87a94e8.js.LICENSE.txt */
(self.webpackChunkdaliannyvieira=self.webpackChunkdaliannyvieira||[]).push([[678],{9026:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return lt}});var r=e(2385),i=e(7294),a=e(6809),o=e(3751);function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){l(n,t,e[t])}))}return n}function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){},d={},p={},h={mark:m,measure:m};try{"undefined"!=typeof window&&(d=window),"undefined"!=typeof document&&(p=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(h=performance)}catch(ft){}var g=(d.navigator||{}).userAgent,y=void 0===g?"":g,b=d,v=p,w=h,x=(b.document,!!v.documentElement&&!!v.head&&"function"==typeof v.addEventListener&&"function"==typeof v.createElement),k=(~y.indexOf("MSIE")||y.indexOf("Trident/"),"svg-inline--fa"),_="data-fa-i2svg",O=(function(){try{}catch(ft){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),E=O.concat([11,12,13,14,15,16,17,18,19,20]),z={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",z.GROUP,z.SWAP_OPACITY,z.PRIMARY,z.SECONDARY].concat(O.map((function(n){return"".concat(n,"x")}))).concat(E.map((function(n){return"w-".concat(n)}))),b.FontAwesomeConfig||{});if(v&&"function"==typeof v.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=u(n,2),e=t[0],r=t[1],i=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=v.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=i&&(j[r]=i)}))}var P=f({},{familyPrefix:"fa",replacementClass:k,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},j);P.autoReplaceSvg||(P.observeMutations=!1);var A=f({},P);b.FontAwesomeConfig=A;var M=b||{};M.___FONT_AWESOME___||(M.___FONT_AWESOME___={}),M.___FONT_AWESOME___.styles||(M.___FONT_AWESOME___.styles={}),M.___FONT_AWESOME___.hooks||(M.___FONT_AWESOME___.hooks={}),M.___FONT_AWESOME___.shims||(M.___FONT_AWESOME___.shims=[]);var C=M.___FONT_AWESOME___,S=[];x&&((v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState)||v.addEventListener("DOMContentLoaded",(function n(){v.removeEventListener("DOMContentLoaded",n),1,S.map((function(n){return n()}))})));var I,N="pending",T="settled",L="fulfilled",D="rejected",W=function(){},R=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,Y="undefined"==typeof setImmediate?setTimeout:setImmediate,F=[];function X(){for(var n=0;n<F.length;n++)F[n][0](F[n][1]);F=[],I=!1}function B(n,t){F.push([n,t]),I||(I=!0,Y(X,0))}function H(n){var t=n.owner,e=t._state,r=t._data,i=n[e],a=n.then;if("function"==typeof i){e=L;try{r=i(r)}catch(ft){q(a,ft)}}U(a,r)||(e===L&&Z(a,r),e===D&&q(a,r))}function U(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===s(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?G(n,r):Z(n,r))}),(function(t){e||(e=!0,q(n,t))})),!0}}catch(ft){return e||q(n,ft),!0}return!1}function Z(n,t){n!==t&&U(n,t)||G(n,t)}function G(n,t){n._state===N&&(n._state=T,n._data=t,B(K,n))}function q(n,t){n._state===N&&(n._state=T,n._data=t,B(J,n))}function V(n){n._then=n._then.forEach(H)}function K(n){n._state=L,V(n)}function J(n){n._state=D,V(n),!n._handled&&R&&e.g.process.emit("unhandledRejection",n._data,n)}function Q(n){e.g.process.emit("rejectionHandled",n)}function $(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof $==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){q(t,n)}try{n((function(n){Z(t,n)}),e)}catch(ft){e(ft)}}(n,this)}$.prototype={constructor:$,_state:N,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(W),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===D&&R&&B(Q,this)),this._state===L||this._state===D?B(H,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},$.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new $((function(t,e){var r=[],i=0;function a(n){return i++,function(e){r[n]=e,--i||t(r)}}for(var o,s=0;s<n.length;s++)(o=n[s])&&"function"==typeof o.then?o.then(a(s),e):r[s]=o;i||t(r)}))},$.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new $((function(t,e){for(var r,i=0;i<n.length;i++)(r=n[i])&&"function"==typeof r.then?r.then(t,e):t(r)}))},$.resolve=function(n){return n&&"object"===s(n)&&n.constructor===$?n:new $((function(t){t(n)}))},$.reject=function(n){return new $((function(t,e){e(n)}))};var nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tn(n){if(n&&x){var t=v.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=v.head.childNodes,r=null,i=e.length-1;i>-1;i--){var a=e[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return v.head.insertBefore(t,r),n}}function en(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function rn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function an(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function on(n){return n.size!==nn.size||n.x!==nn.x||n.y!==nn.y||n.rotate!==nn.rotate||n.flipX||n.flipY}function sn(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,i={transform:"translate(".concat(e/2," 256)")},a="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(a," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var cn={x:0,y:0,width:"100%",height:"100%"};function ln(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function fn(n){var t=n.icons,e=t.main,r=t.mask,i=n.prefix,a=n.iconName,o=n.transform,s=n.symbol,c=n.title,l=n.maskId,u=n.titleId,m=n.extra,d=n.watchable,p=void 0!==d&&d,h=r.found?r:e,g=h.width,y=h.height,b="fak"===i,v=b?"":"fa-w-".concat(Math.ceil(g/y*16)),w=[A.replacementClass,a?"".concat(A.familyPrefix,"-").concat(a):"",v].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),x={children:[],attributes:f({},m.attributes,{"data-prefix":i,"data-icon":a,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},k=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};p&&(x.attributes[_]=""),c&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||en())},children:[c]});var O=f({},x,{prefix:i,iconName:a,main:e,mask:r,maskId:l,transform:o,symbol:s,styles:f({},k,m.styles)}),E=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,i=n.main,a=n.mask,o=n.maskId,s=n.transform,c=i.width,l=i.icon,u=a.width,m=a.icon,d=sn({transform:s,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:f({},cn,{fill:"white"})},h=l.children?{children:l.children.map(ln)}:{},g={tag:"g",attributes:f({},d.inner),children:[ln(f({tag:l.tag,attributes:f({},l.attributes,d.path)},h))]},y={tag:"g",attributes:f({},d.outer),children:[g]},b="mask-".concat(o||en()),v="clip-".concat(o||en()),w={tag:"mask",attributes:f({},cn,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(x,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},cn)}),{children:e,attributes:r}}(O):function(n){var t=n.children,e=n.attributes,r=n.main,i=n.transform,a=an(n.styles);if(a.length>0&&(e.style=a),on(i)){var o=sn({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:f({},o.outer),children:[{tag:"g",attributes:f({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(O),z=E.children,j=E.attributes;return O.children=z,O.attributes=j,s?function(n){var t=n.prefix,e=n.iconName,r=n.children,i=n.attributes,a=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f({},i,{id:!0===a?"".concat(t,"-").concat(A.familyPrefix,"-").concat(e):a}),children:r}]}]}(O):function(n){var t=n.children,e=n.main,r=n.mask,i=n.attributes,a=n.styles,o=n.transform;if(on(o)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};i.style=an(f({},a,{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(O)}var un=function(){},mn=(A.measurePerformance&&w&&w.mark&&w.measure,function(n,t,e,r){var i,a,o,s=Object.keys(n),c=s.length,l=void 0!==r?function(n,t){return function(e,r,i,a){return n.call(t,e,r,i,a)}}(t,r):t;for(void 0===e?(i=1,o=n[s[0]]):(i=0,o=e);i<c;i++)o=l(o,n[a=s[i]],a,n);return o});function dn(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,i=void 0!==r&&r,a=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof C.hooks.addPack||i?C.styles[n]=f({},C.styles[n]||{},a):C.hooks.addPack(n,a),"fas"===n&&dn("fa",t)}var pn=C.styles,hn=C.shims,gn=function(){var n=function(n){return mn(pn,(function(t,e,r){return t[r]=mn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in pn;mn(hn,(function(n,e){var r=e[0],i=e[1],a=e[2];return"far"!==i||t||(i="fas"),n[r]={prefix:i,iconName:a},n}),{})};gn();C.styles;function yn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function bn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,i=n.children,a=void 0===i?[]:i;return"string"==typeof n?rn(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(rn(n[e]),'" ')}),"").trim()}(r),">").concat(a.map(bn).join(""),"</").concat(t,">")}var vn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],i=e.slice(1).join("-");if(r&&"h"===i)return n.flipX=!0,n;if(r&&"v"===i)return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(r){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i}return n}),t):t};function wn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}wn.prototype=Object.create(Error.prototype),wn.prototype.constructor=wn;var xn={fill:"currentColor"},kn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},_n={tag:"path",attributes:f({},xn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},On=f({},kn,{attributeName:"opacity"});f({},xn,{cx:"256",cy:"364",r:"28"}),f({},kn,{attributeName:"r",values:"28;14;28;28;14;28;"}),f({},On,{values:"1;0;1;1;0;1;"}),f({},xn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),f({},On,{values:"1;0;0;0;0;1;"}),f({},xn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),f({},On,{values:"0;0;1;1;0;0;"}),C.styles;function En(n){var t=n[0],e=n[1],r=u(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(A.familyPrefix,"-").concat(z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(z.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat(z.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}C.styles;function zn(){var n="fa",t=k,e=A.familyPrefix,r=A.replacementClass,i='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||r!==t){var a=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(r))}return i}function jn(){A.autoAddCss&&!Sn&&(tn(zn()),Sn=!0)}function Pn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return bn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(x){var t=v.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function An(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return yn(Cn.definitions,e,r)||yn(C.styles,e,r)}var Mn,Cn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=e.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(t){n.definitions[t]=f({},n.definitions[t]||{},i[t]),dn(t,i[t]),gn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],i=r.prefix,a=r.iconName,o=r.icon;n[i]||(n[i]={}),n[i][a]=o})),n}}])&&c(t.prototype,e),r&&c(t,r),n}()),Sn=!1,In={transform:function(n){return vn(n)}},Nn=(Mn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?nn:e,i=t.symbol,a=void 0!==i&&i,o=t.mask,s=void 0===o?null:o,c=t.maskId,l=void 0===c?null:c,u=t.title,m=void 0===u?null:u,d=t.titleId,p=void 0===d?null:d,h=t.classes,g=void 0===h?[]:h,y=t.attributes,b=void 0===y?{}:y,v=t.styles,w=void 0===v?{}:v;if(n){var x=n.prefix,k=n.iconName,_=n.icon;return Pn(f({type:"icon"},n),(function(){return jn(),A.autoA11y&&(m?b["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(p||en()):(b["aria-hidden"]="true",b.focusable="false")),fn({icons:{main:En(_),mask:s?En(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:f({},nn,r),symbol:a,title:m,maskId:l,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:An(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:An(r||{})),Mn(e,f({},t,{mask:r}))}),Tn=e(5697),Ln=e.n(Tn);function Dn(n){return(Dn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Wn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Rn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Yn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Rn(Object(e),!0).forEach((function(t){Wn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Rn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Fn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function Xn(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Bn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function Hn(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),i=Bn(t.slice(0,r)),a=t.slice(r+1).trim();return i.startsWith("webkit")?n[(e=i,e.charAt(0).toUpperCase()+e.slice(1))]=a:n[i]=a,n}),{})}var Un=!1;try{Un=!0}catch(ft){}function Zn(n){return In.icon?In.icon(n):null===n?null:"object"===Dn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Gn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Wn({},n,t):{}}function qn(n){var t=n.forwardedRef,e=Fn(n,["forwardedRef"]),r=e.icon,i=e.mask,a=e.symbol,o=e.className,s=e.title,c=e.titleId,l=Zn(r),f=Gn("classes",[].concat(Xn(function(n){var t,e=n.spin,r=n.pulse,i=n.fixedWidth,a=n.inverse,o=n.border,s=n.listItem,c=n.flip,l=n.size,f=n.rotation,u=n.pull,m=(Wn(t={"fa-spin":e,"fa-pulse":r,"fa-fw":i,"fa-inverse":a,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),Wn(t,"fa-rotate-".concat(f),null!=f&&0!==f),Wn(t,"fa-pull-".concat(u),null!=u),Wn(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),Xn(o.split(" ")))),u=Gn("transform","string"==typeof e.transform?In.transform(e.transform):e.transform),m=Gn("mask",Zn(i)),d=Nn(l,Yn({},f,{},u,{},m,{symbol:a,title:s,titleId:c}));if(!d)return function(){var n;!Un&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",l),null;var p=d.abstract,h={ref:t};return Object.keys(e).forEach((function(n){qn.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),Vn(p[0],h)}qn.displayName="FontAwesomeIcon",qn.propTypes={border:Ln().bool,className:Ln().string,mask:Ln().oneOfType([Ln().object,Ln().array,Ln().string]),fixedWidth:Ln().bool,inverse:Ln().bool,flip:Ln().oneOf(["horizontal","vertical","both"]),icon:Ln().oneOfType([Ln().object,Ln().array,Ln().string]),listItem:Ln().bool,pull:Ln().oneOf(["right","left"]),pulse:Ln().bool,rotation:Ln().oneOf([0,90,180,270]),size:Ln().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ln().bool,symbol:Ln().oneOfType([Ln().bool,Ln().string]),title:Ln().string,transform:Ln().oneOfType([Ln().string,Ln().object]),swapOpacity:Ln().bool},qn.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Vn=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var i=(e.children||[]).map((function(e){return n(t,e)})),a=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=Hn(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Bn(t)]=r}return n}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=Fn(r,["style"]);return a.attrs.style=Yn({},a.attrs.style,{},s),t.apply(void 0,[e.tag,Yn({},a.attrs,{},c)].concat(Xn(i)))}.bind(null,i.createElement),Kn=e(9),Jn=e(7190),Qn=[{kind:"GitHub",icon:Jn.zhw,size:"lg",url:"https://github.com/daliannyvieira"},{kind:"Twitter",icon:Jn.mdU,size:"lg",url:"https://twitter.com/daliannyvieira"},{kind:"LinkedIn",icon:Jn.D9H,size:"lg",url:"https://www.linkedin.com/in/daliannyvieira/"},{kind:"Codepen",icon:Jn.N8x,size:"lg",url:"https://codepen.io/daliannyvieira"},{kind:"Instagram",icon:Jn.Zzi,size:"lg",url:"https://instagram.com/daliannyvieira/"}],$n=e.p+"static/me-f337b8cc4ef43c1110eefd3b08a3ecda.jpg",nt=Kn.ZP.div.withConfig({displayName:"main-bio__Wrap",componentId:"sc-wy3ggy-0"})(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;@media (min-width:992px){flex-direction:row;}"]),tt=Kn.ZP.div.withConfig({displayName:"main-bio__Avatar",componentId:"sc-wy3ggy-1"})(["width:275px;height:275px;border-radius:50%;overflow:hidden;position:relative;@media (min-width:992px){width:350px;height:350px;}img{position:absolute;top:0px;left:0px;width:100%;height:100%;object-fit:cover;object-position:center center;opacity:1;transition:opacity 500ms ease 0s;}"]),et=Kn.ZP.div.withConfig({displayName:"main-bio__Sidebar",componentId:"sc-wy3ggy-2"})(["width:100%;z-index:1;@media (min-width:992px){width:55%;padding-right:2rem;}"]),rt=Kn.ZP.h1.withConfig({displayName:"main-bio__Title",componentId:"sc-wy3ggy-3"})(["margin:2rem 0;"]),it=(0,Kn.F4)(["0%{filter:hue-rotate(0deg);}100%{filter:hue-rotate(-1turn);}"]),at=Kn.ZP.ul.withConfig({displayName:"main-bio__Links",componentId:"sc-wy3ggy-4"})(["list-style:none;display:flex;margin:1rem 0 2rem;padding:0;li{list-style:none;display:flex;margin-right:1rem;}li a{padding:0.45rem;}li{background-image:-webkit-linear-gradient(92deg,#ff7a60,#ffb8d1);-webkit-background-clip:text;background-clip:text;&:nth-child(1) svg{color:#F583BA;}&:nth-child(2) svg{color:#6DDAF2;}&:nth-child(3) svg{color:#92E085;}&:nth-child(4) svg{color:#F5BD69;}&:nth-child(5) svg{color:#F2856D;}&:hover{transform:scale(1.25);animation:"," 3s linear infinite;}}"],it);function ot(){return i.createElement(nt,null,i.createElement(et,null,i.createElement(rt,null,"Olá, eu sou a Dali!"),i.createElement("p",null,"Atualmente sou desenvolvedora de tecnologia senior, na 1STi."),i.createElement("p",null,"Me interesso em compreender sobre as diversas áreas envolvidas no desenvolvimento de produtos digitais afim de simplificar um mundo que parece cada vez mais complexo."),i.createElement("p",null,"Com amor e entusiasmo, tenho feito isso a maior parte da minha carreira através de redes de tecnologia profunda e de suporte a diversidade."),i.createElement("footer",null,i.createElement(at,null,Qn.map((function(n){return i.createElement("li",{key:n.kind},i.createElement("a",{href:n.url},i.createElement(qn,{size:n.size,icon:n.icon,title:"Link to my "+n.kind})))}))),i.createElement("small",null,"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," by @daliannyvieira."))),i.createElement(tt,null,i.createElement("img",{src:$n,alt:"That's a picture with me using glasses and smiling"})))}var st=Kn.ZP.div.attrs((function(n){return{style:{background:n.color?n.color:"#ffd670",width:n.size?n.size:"3rem",height:n.size?n.size:"3rem",left:n.x,top:n.y}}})).withConfig({displayName:"pages__Shape",componentId:"sc-bc7bmj-0"})(["position:absolute;z-index:1;border-radius:100%;opacity:0.5;}"]),ct=Kn.ZP.section.withConfig({displayName:"pages__Section",componentId:"sc-bc7bmj-1"})(["width:100vw;min-height:100vh;margin:0;padding:0;display:flex;justify-content:center;align-items:center;"]),lt=function(n){var t,e,s=n.data.site.siteMetadata.author,c=(0,i.useState)({x:0,y:0}),l=c[0],f=c[1],u=(0,i.useState)([]),m=u[0],d=u[1];"undefined"!=typeof document&&(t=document.documentElement.clientHeight,e=document.documentElement.clientWidth);var p=function(n){return n>75&&n+75<t},h=function(n){return n>75&&n+75<e};return i.createElement(ct,{onClick:function(n){if(p(n.pageY)&&h(n.pageX)){var t=["#70d5fc","#f16da5","#f7966f","#ffd670","#e6f06e"],e=Math.floor(Math.random()*t.length),i={x:n.pageX,y:n.pageY,size:[3,4.5,6,7.5,9][e],color:t[e]};d([].concat((0,r.Z)(m),[i]))}},onMouseMove:function(n){if(p(n.pageY)&&h(n.pageX)){var t={x:n.pageX,y:n.pageY};f(t)}else f({x:0,y:0})}},0!==l.x&&i.createElement(st,{x:"calc("+l.x+"px - 1.5rem)",y:"calc("+l.y+"px - 1.5rem)"}),m&&m.map((function(n,t){return i.createElement(st,{key:t,color:n.color,size:n.size+"rem",x:"calc("+n.x+"px - "+n.size/2+"rem)",y:"calc("+n.y+"px - "+n.size/2+"rem)"})})),i.createElement(a.Z,null,i.createElement(o.Z,{title:"Home",keywords:["blog","gatsby","javascript","vuejs","vue","nodejs","node","reactjs","react","python","vainaweb","dalianny vieira","teaching","leadership"]}),i.createElement(ot,{author:s})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7df81e53d2f8c87a94e8.js.map