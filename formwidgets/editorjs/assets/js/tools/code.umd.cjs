(function(E,O){typeof exports=="object"&&typeof module<"u"?module.exports=O():typeof define=="function"&&define.amd?define(O):(E=typeof globalThis<"u"?globalThis:E||self,E.CodeTool=O())})(this,function(){"use strict";function E(C){return C&&C.__esModule&&Object.prototype.hasOwnProperty.call(C,"default")?C.default:C}var O={exports:{}};(function(C,R){(function(m,y){C.exports=y()})(window,function(){return function(m){var y={};function c(e){if(y[e])return y[e].exports;var n=y[e]={i:e,l:!1,exports:{}};return m[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}return c.m=m,c.c=y,c.d=function(e,n,d){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:d})},c.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n||4&n&&typeof e=="object"&&e&&e.__esModule)return e;var d=Object.create(null);if(c.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&n&&typeof e!="string")for(var u in e)c.d(d,u,function(o){return e[o]}.bind(null,u));return d},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c(c.s=4)}([function(m,y,c){var e=c(1),n=c(2);typeof(n=n.__esModule?n.default:n)=="string"&&(n=[[m.i,n,""]]);var d={insert:"head",singleton:!1};e(n,d),m.exports=n.locals||{}},function(m,y,c){var e,n=function(){return e===void 0&&(e=!!(window&&document&&document.all&&!window.atob)),e},d=function(){var t={};return function(a){if(t[a]===void 0){var r=document.querySelector(a);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch{r=null}t[a]=r}return t[a]}}(),u=[];function o(t){for(var a=-1,r=0;r<u.length;r++)if(u[r].identifier===t){a=r;break}return a}function s(t,a){for(var r={},l=[],p=0;p<t.length;p++){var v=t[p],h=a.base?v[0]+a.base:v[0],L=r[h]||0,j="".concat(h," ").concat(L);r[h]=L+1;var M=o(j),_={css:v[1],media:v[2],sourceMap:v[3]};M!==-1?(u[M].references++,u[M].updater(_)):u.push({identifier:j,updater:k(_,a),references:1}),l.push(j)}return l}function i(t){var a=document.createElement("style"),r=t.attributes||{};if(r.nonce===void 0){var l=c.nc;l&&(r.nonce=l)}if(Object.keys(r).forEach(function(v){a.setAttribute(v,r[v])}),typeof t.insert=="function")t.insert(a);else{var p=d(t.insert||"head");if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(a)}return a}var b,g=(b=[],function(t,a){return b[t]=a,b.filter(Boolean).join(`
`)});function f(t,a,r,l){var p=r?"":l.media?"@media ".concat(l.media," {").concat(l.css,"}"):l.css;if(t.styleSheet)t.styleSheet.cssText=g(a,p);else{var v=document.createTextNode(p),h=t.childNodes;h[a]&&t.removeChild(h[a]),h.length?t.insertBefore(v,h[a]):t.appendChild(v)}}function w(t,a,r){var l=r.css,p=r.media,v=r.sourceMap;if(p?t.setAttribute("media",p):t.removeAttribute("media"),v&&btoa&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),t.styleSheet)t.styleSheet.cssText=l;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(l))}}var S=null,x=0;function k(t,a){var r,l,p;if(a.singleton){var v=x++;r=S||(S=i(a)),l=f.bind(null,r,v,!1),p=f.bind(null,r,v,!0)}else r=i(a),l=w.bind(null,r,a),p=function(){(function(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)})(r)};return l(t),function(h){if(h){if(h.css===t.css&&h.media===t.media&&h.sourceMap===t.sourceMap)return;l(t=h)}else p()}}m.exports=function(t,a){(a=a||{}).singleton||typeof a.singleton=="boolean"||(a.singleton=n());var r=s(t=t||[],a);return function(l){if(l=l||[],Object.prototype.toString.call(l)==="[object Array]"){for(var p=0;p<r.length;p++){var v=o(r[p]);u[v].references--}for(var h=s(l,a),L=0;L<r.length;L++){var j=o(r[L]);u[j].references===0&&(u[j].updater(),u.splice(j,1))}r=h}}}},function(m,y,c){(y=c(3)(!1)).push([m.i,`.ce-code__textarea {
    min-height: 200px;
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    color: #41314e;
    line-height: 1.6em;
    font-size: 12px;
    background: #f8f7fa;
    border: 1px solid #f1f1f4;
    box-shadow: none;
    white-space: pre;
    word-wrap: normal;
    overflow-x: auto;
    resize: vertical;
}
`,""]),m.exports=y},function(m,y,c){m.exports=function(e){var n=[];return n.toString=function(){return this.map(function(d){var u=function(o,s){var i=o[1]||"",b=o[3];if(!b)return i;if(s&&typeof btoa=="function"){var g=(w=b,S=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),"/*# ".concat(x," */")),f=b.sources.map(function(k){return"/*# sourceURL=".concat(b.sourceRoot||"").concat(k," */")});return[i].concat(f).concat([g]).join(`
`)}var w,S,x;return[i].join(`
`)}(d,e);return d[2]?"@media ".concat(d[2]," {").concat(u,"}"):u}).join("")},n.i=function(d,u,o){typeof d=="string"&&(d=[[null,d,""]]);var s={};if(o)for(var i=0;i<this.length;i++){var b=this[i][0];b!=null&&(s[b]=!0)}for(var g=0;g<d.length;g++){var f=[].concat(d[g]);o&&s[f[0]]||(u&&(f[2]?f[2]="".concat(u," and ").concat(f[2]):f[2]=u),n.push(f))}},n}},function(m,y,c){c.r(y),c.d(y,"default",function(){return d}),c(0);function e(u,o){for(var s=0;s<o.length;s++){var i=o[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(u,i.key,i)}}function n(u,o,s){return o&&e(u.prototype,o),s&&e(u,s),u}/**
 * CodeTool for Editor.js
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */var d=function(){function u(o){var s=o.data,i=o.config,b=o.api,g=o.readOnly;(function(f,w){if(!(f instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.api=b,this.readOnly=g,this.placeholder=this.api.i18n.t(i.placeholder||u.DEFAULT_PLACEHOLDER),this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.nodes={holder:null,textarea:null},this.data={code:s.code||""},this.nodes.holder=this.drawView()}return n(u,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}}]),n(u,[{key:"drawView",value:function(){var o=this,s=document.createElement("div"),i=document.createElement("textarea");return s.classList.add(this.CSS.baseClass,this.CSS.wrapper),i.classList.add(this.CSS.textarea,this.CSS.input),i.textContent=this.data.code,i.placeholder=this.placeholder,this.readOnly&&(i.disabled=!0),s.appendChild(i),i.addEventListener("keydown",function(b){switch(b.code){case"Tab":o.tabHandler(b)}}),this.nodes.textarea=i,s}},{key:"render",value:function(){return this.nodes.holder}},{key:"save",value:function(o){return{code:o.querySelector("textarea").value}}},{key:"onPaste",value:function(o){var s=o.detail.data;this.data={code:s.textContent}}},{key:"tabHandler",value:function(o){o.stopPropagation(),o.preventDefault();var s,i=o.target,b=o.shiftKey,g=i.selectionStart,f=i.value;if(b){var w=function(S,x){for(var k="";k!==`
`&&x>0;)x-=1,k=S.substr(x,1);return k===`
`&&(x+=1),x}(f,g);if(f.substr(w,2)!=="  ")return;i.value=f.substring(0,w)+f.substring(w+2),s=g-2}else s=g+2,i.value=f.substring(0,g)+"  "+f.substring(g);i.setSelectionRange(s,s)}},{key:"data",get:function(){return this._data},set:function(o){this._data=o,this.nodes.textarea&&(this.nodes.textarea.textContent=o.code)}}],[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>',title:"Code"}}},{key:"DEFAULT_PLACEHOLDER",get:function(){return"Enter a code"}},{key:"pasteConfig",get:function(){return{tags:["pre"]}}},{key:"sanitize",get:function(){return{code:!0}}}]),u}()}]).default})})(O);var T=O.exports;return E(T)});