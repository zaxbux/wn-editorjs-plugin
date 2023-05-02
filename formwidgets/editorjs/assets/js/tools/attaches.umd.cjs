(function(U,R){typeof exports=="object"&&typeof module<"u"?module.exports=R():typeof define=="function"&&define.amd?define(R):(U=typeof globalThis<"u"?globalThis:U||self,U.AttachesTool=R())})(this,function(){"use strict";function U(I){return I&&I.__esModule&&Object.prototype.hasOwnProperty.call(I,"default")?I.default:I}var R={exports:{}};(function(I,N){(function(M,L){I.exports=L()})(window,function(){return function(M){var L={};function C(m){if(L[m])return L[m].exports;var g=L[m]={i:m,l:!1,exports:{}};return M[m].call(g.exports,g,g.exports,C),g.l=!0,g.exports}return C.m=M,C.c=L,C.d=function(m,g,c){C.o(m,g)||Object.defineProperty(m,g,{enumerable:!0,get:c})},C.r=function(m){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})},C.t=function(m,g){if(1&g&&(m=C(m)),8&g||4&g&&typeof m=="object"&&m&&m.__esModule)return m;var c=Object.create(null);if(C.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:m}),2&g&&typeof m!="string")for(var a in m)C.d(c,a,function(o){return m[o]}.bind(null,a));return c},C.n=function(m){var g=m&&m.__esModule?function(){return m.default}:function(){return m};return C.d(g,"a",g),g},C.o=function(m,g){return Object.prototype.hasOwnProperty.call(m,g)},C.p="/",C(C.s=6)}([function(M,L,C){M.exports=function(m){var g={};function c(a){if(g[a])return g[a].exports;var o=g[a]={i:a,l:!1,exports:{}};return m[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}return c.m=m,c.c=g,c.d=function(a,o,v){c.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:v})},c.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,o){if(1&o&&(a=c(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var v=Object.create(null);if(c.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var b in a)c.d(v,b,function(l){return a[l]}.bind(null,b));return v},c.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return c.d(o,"a",o),o},c.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},c.p="",c(c.s=3)}([function(m,g){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch{typeof window=="object"&&(c=window)}m.exports=c},function(m,g,c){(function(a){var o=c(2),v=setTimeout;function b(){}function l(e){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if(typeof e!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],t(e,this)}function i(e,n){for(;e._state===3;)e=e._value;e._state!==0?(e._handled=!0,l._immediateFn(function(){var r=e._state===1?n.onFulfilled:n.onRejected;if(r!==null){var u;try{u=r(e._value)}catch(f){return void _(n.promise,f)}x(n.promise,u)}else(e._state===1?x:_)(n.promise,e._value)})):e._deferreds.push(n)}function x(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&(typeof n=="object"||typeof n=="function")){var r=n.then;if(n instanceof l)return e._state=3,e._value=n,void h(e);if(typeof r=="function")return void t((u=r,f=n,function(){u.apply(f,arguments)}),e)}e._state=1,e._value=n,h(e)}catch(p){_(e,p)}var u,f}function _(e,n){e._state=2,e._value=n,h(e)}function h(e){e._state===2&&e._deferreds.length===0&&l._immediateFn(function(){e._handled||l._unhandledRejectionFn(e._value)});for(var n=0,r=e._deferreds.length;n<r;n++)i(e,e._deferreds[n]);e._deferreds=null}function y(e,n,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof n=="function"?n:null,this.promise=r}function t(e,n){var r=!1;try{e(function(u){r||(r=!0,x(n,u))},function(u){r||(r=!0,_(n,u))})}catch(u){if(r)return;r=!0,_(n,u)}}l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,n){var r=new this.constructor(b);return i(this,new y(e,n,r)),r},l.prototype.finally=o.a,l.all=function(e){return new l(function(n,r){if(!e||e.length===void 0)throw new TypeError("Promise.all accepts an array");var u=Array.prototype.slice.call(e);if(u.length===0)return n([]);var f=u.length;function p(j,s){try{if(s&&(typeof s=="object"||typeof s=="function")){var d=s.then;if(typeof d=="function")return void d.call(s,function(w){p(j,w)},r)}u[j]=s,--f==0&&n(u)}catch(w){r(w)}}for(var S=0;S<u.length;S++)p(S,u[S])})},l.resolve=function(e){return e&&typeof e=="object"&&e.constructor===l?e:new l(function(n){n(e)})},l.reject=function(e){return new l(function(n,r){r(e)})},l.race=function(e){return new l(function(n,r){for(var u=0,f=e.length;u<f;u++)e[u].then(n,r)})},l._immediateFn=typeof a=="function"&&function(e){a(e)}||function(e){v(e,0)},l._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},g.a=l}).call(this,c(5).setImmediate)},function(m,g,c){g.a=function(a){var o=this.constructor;return this.then(function(v){return o.resolve(a()).then(function(){return v})},function(v){return o.resolve(a()).then(function(){return o.reject(v)})})}},function(m,g,c){function a(t){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}c(4);var o,v,b,l,i,x,_,h=c(8),y=(v=function(t){return new Promise(function(e,n){t=l(t),(t=i(t)).beforeSend&&t.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(t.method,t.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t.headers).forEach(function(f){var p=t.headers[f];r.setRequestHeader(f,p)});var u=t.ratio;r.upload.addEventListener("progress",function(f){var p=Math.round(f.loaded/f.total*100),S=Math.ceil(p*u/100);t.progress(Math.min(S,100))},!1),r.addEventListener("progress",function(f){var p=Math.round(f.loaded/f.total*100),S=Math.ceil(p*(100-u)/100)+u;t.progress(Math.min(S,100))},!1),r.onreadystatechange=function(){if(r.readyState===4){var f=r.response;try{f=JSON.parse(f)}catch{}var p=h.parseHeaders(r.getAllResponseHeaders()),S={body:f,code:r.status,headers:p};_(r.status)?e(S):n(S)}},r.send(t.data)})},b=function(t){return t.method="POST",v(t)},l=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(t.url&&typeof t.url!="string")throw new Error("Url must be a string");if(t.url=t.url||"",t.method&&typeof t.method!="string")throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&a(t.headers)!=="object")throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&(typeof t.type!="string"||!Object.values(o).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&typeof t.progress!="function")throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(e){},t.beforeSend=t.beforeSend||function(e){},t.ratio&&typeof t.ratio!="number")throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&typeof t.accept!="string")throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&typeof t.multiple!="boolean")throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&typeof t.fieldName!="string")throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},i=function(t){switch(t.method){case"GET":var e=x(t.data,o.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+e:t.url+"?"+e;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).type||o.JSON}(t);(h.isFormData(t.data)||h.isFormElement(t.data))&&(n=o.FORM),t.data=x(t.data,n),n!==y.contentType.FORM&&(t.headers["content-type"]=n)}return t},x=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return h.urlEncode(t);case o.JSON:return h.jsonEncode(t);case o.FORM:return h.formEncode(t);default:return t}},_=function(t){return t>=200&&t<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:v,get:function(t){return t.method="GET",v(t)},post:b,transport:function(t){return t=l(t),h.selectFiles(t).then(function(e){for(var n=new FormData,r=0;r<e.length;r++)n.append(t.fieldName,e[r],e[r].name);h.isObject(t.data)&&Object.keys(t.data).forEach(function(f){var p=t.data[f];n.append(f,p)});var u=t.beforeSend;return t.beforeSend=function(){return u(e)},t.data=n,b(t)})},selectFiles:function(t){return delete(t=l(t)).beforeSend,h.selectFiles(t)}});m.exports=y},function(m,g,c){c.r(g);var a=c(1);window.Promise=window.Promise||a.a},function(m,g,c){(function(a){var o=a!==void 0&&a||typeof self<"u"&&self||window,v=Function.prototype.apply;function b(l,i){this._id=l,this._clearFn=i}g.setTimeout=function(){return new b(v.call(setTimeout,o,arguments),clearTimeout)},g.setInterval=function(){return new b(v.call(setInterval,o,arguments),clearInterval)},g.clearTimeout=g.clearInterval=function(l){l&&l.close()},b.prototype.unref=b.prototype.ref=function(){},b.prototype.close=function(){this._clearFn.call(o,this._id)},g.enroll=function(l,i){clearTimeout(l._idleTimeoutId),l._idleTimeout=i},g.unenroll=function(l){clearTimeout(l._idleTimeoutId),l._idleTimeout=-1},g._unrefActive=g.active=function(l){clearTimeout(l._idleTimeoutId);var i=l._idleTimeout;i>=0&&(l._idleTimeoutId=setTimeout(function(){l._onTimeout&&l._onTimeout()},i))},c(6),g.setImmediate=typeof self<"u"&&self.setImmediate||a!==void 0&&a.setImmediate||this&&this.setImmediate,g.clearImmediate=typeof self<"u"&&self.clearImmediate||a!==void 0&&a.clearImmediate||this&&this.clearImmediate}).call(this,c(0))},function(m,g,c){(function(a,o){(function(v,b){if(!v.setImmediate){var l,i,x,_,h,y=1,t={},e=!1,n=v.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(v);r=r&&r.setTimeout?r:v,{}.toString.call(v.process)==="[object process]"?l=function(p){o.nextTick(function(){f(p)})}:function(){if(v.postMessage&&!v.importScripts){var p=!0,S=v.onmessage;return v.onmessage=function(){p=!1},v.postMessage("","*"),v.onmessage=S,p}}()?(_="setImmediate$"+Math.random()+"$",h=function(p){p.source===v&&typeof p.data=="string"&&p.data.indexOf(_)===0&&f(+p.data.slice(_.length))},v.addEventListener?v.addEventListener("message",h,!1):v.attachEvent("onmessage",h),l=function(p){v.postMessage(_+p,"*")}):v.MessageChannel?((x=new MessageChannel).port1.onmessage=function(p){f(p.data)},l=function(p){x.port2.postMessage(p)}):n&&"onreadystatechange"in n.createElement("script")?(i=n.documentElement,l=function(p){var S=n.createElement("script");S.onreadystatechange=function(){f(p),S.onreadystatechange=null,i.removeChild(S),S=null},i.appendChild(S)}):l=function(p){setTimeout(f,0,p)},r.setImmediate=function(p){typeof p!="function"&&(p=new Function(""+p));for(var S=new Array(arguments.length-1),j=0;j<S.length;j++)S[j]=arguments[j+1];var s={callback:p,args:S};return t[y]=s,l(y),y++},r.clearImmediate=u}function u(p){delete t[p]}function f(p){if(e)setTimeout(f,0,p);else{var S=t[p];if(S){e=!0;try{(function(j){var s=j.callback,d=j.args;switch(d.length){case 0:s();break;case 1:s(d[0]);break;case 2:s(d[0],d[1]);break;case 3:s(d[0],d[1],d[2]);break;default:s.apply(void 0,d)}})(S)}finally{u(p),e=!1}}}}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,c(0),c(7))},function(m,g){var c,a,o=m.exports={};function v(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}function l(r){if(c===setTimeout)return setTimeout(r,0);if((c===v||!c)&&setTimeout)return c=setTimeout,setTimeout(r,0);try{return c(r,0)}catch{try{return c.call(null,r,0)}catch{return c.call(this,r,0)}}}(function(){try{c=typeof setTimeout=="function"?setTimeout:v}catch{c=v}try{a=typeof clearTimeout=="function"?clearTimeout:b}catch{a=b}})();var i,x=[],_=!1,h=-1;function y(){_&&i&&(_=!1,i.length?x=i.concat(x):h=-1,x.length&&t())}function t(){if(!_){var r=l(y);_=!0;for(var u=x.length;u;){for(i=x,x=[];++h<u;)i&&i[h].run();h=-1,u=x.length}i=null,_=!1,function(f){if(a===clearTimeout)return clearTimeout(f);if((a===b||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(f);try{a(f)}catch{try{return a.call(null,f)}catch{return a.call(this,f)}}}(r)}}function e(r,u){this.fun=r,this.array=u}function n(){}o.nextTick=function(r){var u=new Array(arguments.length-1);if(arguments.length>1)for(var f=1;f<arguments.length;f++)u[f-1]=arguments[f];x.push(new e(r,u)),x.length!==1||_||l(t)},e.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=n,o.addListener=n,o.once=n,o.off=n,o.removeListener=n,o.removeAllListeners=n,o.emit=n,o.prependListener=n,o.prependOnceListener=n,o.listeners=function(r){return[]},o.binding=function(r){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(r){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(m,g,c){function a(v,b){for(var l=0;l<b.length;l++){var i=b[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(v,i.key,i)}}var o=c(9);m.exports=function(){function v(){(function(i,x){if(!(i instanceof x))throw new TypeError("Cannot call a class as a function")})(this,v)}var b,l;return b=v,(l=[{key:"urlEncode",value:function(i){return o(i)}},{key:"jsonEncode",value:function(i){return JSON.stringify(i)}},{key:"formEncode",value:function(i){if(this.isFormData(i))return i;if(this.isFormElement(i))return new FormData(i);if(this.isObject(i)){var x=new FormData;return Object.keys(i).forEach(function(_){var h=i[_];x.append(_,h)}),x}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(i){return Object.prototype.toString.call(i)==="[object Object]"}},{key:"isFormData",value:function(i){return i instanceof FormData}},{key:"isFormElement",value:function(i){return i instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(x,_){var h=document.createElement("INPUT");h.type="file",i.multiple&&h.setAttribute("multiple","multiple"),i.accept&&h.setAttribute("accept",i.accept),h.style.display="none",document.body.appendChild(h),h.addEventListener("change",function(y){var t=y.target.files;x(t),document.body.removeChild(h)},!1),h.click()})}},{key:"parseHeaders",value:function(i){var x=i.trim().split(/[\r\n]+/),_={};return x.forEach(function(h){var y=h.split(": "),t=y.shift(),e=y.join(": ");t&&(_[t]=e)}),_}}])&&a(b,l),v}()},function(m,g){var c=function(o){return encodeURIComponent(o).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},a=function(o,v,b,l){return v=v||null,b=b||"&",l=l||null,o?function(i){for(var x=new Array,_=0;_<i.length;_++)i[_]&&x.push(i[_]);return x}(Object.keys(o).map(function(i){var x,_,h=i;if(l&&(h=l+"["+h+"]"),typeof o[i]=="object"&&o[i]!==null)x=a(o[i],null,b,h);else{v&&(_=h,h=!isNaN(parseFloat(_))&&isFinite(_)?v+Number(h):h);var y=o[i];y=(y=(y=(y=y===!0?"1":y)===!1?"0":y)===0?"0":y)||"",x=c(h)+"="+c(y)}return x})).join(b).replace(/[!'()*]/g,""):""};m.exports=a}])},function(M,L,C){var m=C(2);typeof m=="string"&&(m=[[M.i,m,""]]);var g={hmr:!0,transform:void 0,insertInto:void 0};C(4)(m,g),m.locals&&(M.exports=m.locals)},function(M,L,C){(M.exports=C(3)(!1)).push([M.i,`.cdx-attaches {
  --color-line: #EFF0F1;
  --color-bg: #fff;
  --color-bg-secondary: #F8F8F8;
  --color-bg-secondary--hover: #f2f2f2;
  --color-text-secondary: #707684;
}

  .cdx-attaches--with-file {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    border: 1px solid var(--color-line);
    border-radius: 7px;
    background: var(--color-bg);
  }

  .cdx-attaches--with-file .cdx-attaches__file-info {
      display: grid;
      grid-gap: 4px;
      max-width: calc(100% - 80px);
      margin: auto 0;
      flex-grow: 2;
    }

  .cdx-attaches--with-file .cdx-attaches__download-button {
      display: flex;
      align-items: center;
      background: var(--color-bg-secondary);
      padding: 6px;
      border-radius: 6px;
      margin: auto 0 auto auto;
    }

  .cdx-attaches--with-file .cdx-attaches__download-button:hover {
        background: var(--color-bg-secondary--hover);
      }

  .cdx-attaches--with-file .cdx-attaches__download-button svg {
        width: 20px;
        height: 20px;
        fill: none;
      }

  .cdx-attaches--with-file .cdx-attaches__file-icon {
      position: relative;
    }

  .cdx-attaches--with-file .cdx-attaches__file-icon-background {
        background-color: #333;

        width: 27px;
        height: 30px;
        margin-right: 12px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

  @supports(-webkit-mask-box-image: url('')){

  .cdx-attaches--with-file .cdx-attaches__file-icon-background {
          border-radius: 0;
          -webkit-mask-box-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10.3872C0 1.83334 1.83334 0 10.3872 0H13.6128C22.1667 0 24 1.83334 24 10.3872V13.6128C24 22.1667 22.1667 24 13.6128 24H10.3872C1.83334 24 0 22.1667 0 13.6128V10.3872Z' fill='black'/%3E%3C/svg%3E%0A") 48% 41% 37.9% 53.3%
      };
        }

  .cdx-attaches--with-file .cdx-attaches__file-icon-label {
        position: absolute;
        left: 3px;
        top: 11px;
        background: inherit;
        text-transform: uppercase;
        line-height: 1em;
        color: #fff;
        padding: 1px 2px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: bold;
        /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.22); */
        font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
        letter-spacing: 0.02em;
      }

  .cdx-attaches--with-file .cdx-attaches__file-icon svg {
        width: 20px;
        height: 20px;
      }

  .cdx-attaches--with-file .cdx-attaches__file-icon path {
        stroke: #fff;
      }

  .cdx-attaches--with-file .cdx-attaches__size {
      color: var(--color-text-secondary);
      font-size: 12px;
      line-height: 1em;
    }

  .cdx-attaches--with-file .cdx-attaches__size::after {
        content: attr(data-size);
        margin-left: 0.2em;
      }

  .cdx-attaches--with-file .cdx-attaches__title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      outline: none;
      max-width: 90%;
      font-size: 14px;
      font-weight: 500;
      line-height: 1em;
    }

  .cdx-attaches--with-file .cdx-attaches__title:empty::before {
      content: attr(data-placeholder);
      color: #7b7e89;
    }

  .cdx-attaches--loading .cdx-attaches__title,
    .cdx-attaches--loading .cdx-attaches__file-icon,
    .cdx-attaches--loading .cdx-attaches__size,
    .cdx-attaches--loading .cdx-attaches__download-button,
    .cdx-attaches--loading .cdx-attaches__button {
      opacity: 0;
      font-size: 0;
    }

  .cdx-attaches__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    border-radius: 7px;
    font-weight: 500;
  }

  .cdx-attaches__button svg {
      margin-top: 0;
    }
`,""])},function(M,L){M.exports=function(C){var m=[];return m.toString=function(){return this.map(function(g){var c=function(a,o){var v=a[1]||"",b=a[3];if(!b)return v;if(o&&typeof btoa=="function"){var l=(x=b,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(x))))+" */"),i=b.sources.map(function(_){return"/*# sourceURL="+b.sourceRoot+_+" */"});return[v].concat(i).concat([l]).join(`
`)}var x;return[v].join(`
`)}(g,C);return g[2]?"@media "+g[2]+"{"+c+"}":c}).join("")},m.i=function(g,c){typeof g=="string"&&(g=[[null,g,""]]);for(var a={},o=0;o<this.length;o++){var v=this[o][0];typeof v=="number"&&(a[v]=!0)}for(o=0;o<g.length;o++){var b=g[o];typeof b[0]=="number"&&a[b[0]]||(c&&!b[2]?b[2]=c:c&&(b[2]="("+b[2]+") and ("+c+")"),m.push(b))}},m}},function(M,L,C){var m,g,c={},a=(m=function(){return window&&document&&document.all&&!window.atob},function(){return g===void 0&&(g=m.apply(this,arguments)),g}),o=function(s){return document.querySelector(s)},v=function(s){var d={};return function(w){if(typeof w=="function")return w();if(d[w]===void 0){var E=o.call(this,w);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch{E=null}d[w]=E}return d[w]}}(),b=null,l=0,i=[],x=C(5);function _(s,d){for(var w=0;w<s.length;w++){var E=s[w],k=c[E.id];if(k){k.refs++;for(var T=0;T<k.parts.length;T++)k.parts[T](E.parts[T]);for(;T<E.parts.length;T++)k.parts.push(r(E.parts[T],d))}else{var O=[];for(T=0;T<E.parts.length;T++)O.push(r(E.parts[T],d));c[E.id]={id:E.id,refs:1,parts:O}}}}function h(s,d){for(var w=[],E={},k=0;k<s.length;k++){var T=s[k],O=d.base?T[0]+d.base:T[0],F={css:T[1],media:T[2],sourceMap:T[3]};E[O]?E[O].parts.push(F):w.push(E[O]={id:O,parts:[F]})}return w}function y(s,d){var w=v(s.insertInto);if(!w)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var E=i[i.length-1];if(s.insertAt==="top")E?E.nextSibling?w.insertBefore(d,E.nextSibling):w.appendChild(d):w.insertBefore(d,w.firstChild),i.push(d);else if(s.insertAt==="bottom")w.appendChild(d);else{if(typeof s.insertAt!="object"||!s.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var k=v(s.insertInto+" "+s.insertAt.before);w.insertBefore(d,k)}}function t(s){if(s.parentNode===null)return!1;s.parentNode.removeChild(s);var d=i.indexOf(s);d>=0&&i.splice(d,1)}function e(s){var d=document.createElement("style");return s.attrs.type===void 0&&(s.attrs.type="text/css"),n(d,s.attrs),y(s,d),d}function n(s,d){Object.keys(d).forEach(function(w){s.setAttribute(w,d[w])})}function r(s,d){var w,E,k,T;if(d.transform&&s.css){if(!(T=d.transform(s.css)))return function(){};s.css=T}if(d.singleton){var O=l++;w=b||(b=e(d)),E=p.bind(null,w,O,!1),k=p.bind(null,w,O,!0)}else s.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(w=function(F){var A=document.createElement("link");return F.attrs.type===void 0&&(F.attrs.type="text/css"),F.attrs.rel="stylesheet",n(A,F.attrs),y(F,A),A}(d),E=j.bind(null,w,d),k=function(){t(w),w.href&&URL.revokeObjectURL(w.href)}):(w=e(d),E=S.bind(null,w),k=function(){t(w)});return E(s),function(F){if(F){if(F.css===s.css&&F.media===s.media&&F.sourceMap===s.sourceMap)return;E(s=F)}else k()}}M.exports=function(s,d){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(d=d||{}).attrs=typeof d.attrs=="object"?d.attrs:{},d.singleton||typeof d.singleton=="boolean"||(d.singleton=a()),d.insertInto||(d.insertInto="head"),d.insertAt||(d.insertAt="bottom");var w=h(s,d);return _(w,d),function(E){for(var k=[],T=0;T<w.length;T++){var O=w[T];(F=c[O.id]).refs--,k.push(F)}for(E&&_(h(E,d),d),T=0;T<k.length;T++){var F;if((F=k[T]).refs===0){for(var A=0;A<F.parts.length;A++)F.parts[A]();delete c[F.id]}}}};var u,f=(u=[],function(s,d){return u[s]=d,u.filter(Boolean).join(`
`)});function p(s,d,w,E){var k=w?"":E.css;if(s.styleSheet)s.styleSheet.cssText=f(d,k);else{var T=document.createTextNode(k),O=s.childNodes;O[d]&&s.removeChild(O[d]),O.length?s.insertBefore(T,O[d]):s.appendChild(T)}}function S(s,d){var w=d.css,E=d.media;if(E&&s.setAttribute("media",E),s.styleSheet)s.styleSheet.cssText=w;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(w))}}function j(s,d,w){var E=w.css,k=w.sourceMap,T=d.convertToAbsoluteUrls===void 0&&k;(d.convertToAbsoluteUrls||T)&&(E=x(E)),k&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(k))))+" */");var O=new Blob([E],{type:"text/css"}),F=s.href;s.href=URL.createObjectURL(O),F&&URL.revokeObjectURL(F)}},function(M,L){M.exports=function(C){var m=typeof window<"u"&&window.location;if(!m)throw new Error("fixUrls requires window.location");if(!C||typeof C!="string")return C;var g=m.protocol+"//"+m.host,c=g+m.pathname.replace(/\/[^\/]*$/,"/");return C.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,o){var v,b=o.trim().replace(/^"(.*)"$/,function(l,i){return i}).replace(/^'(.*)'$/,function(l,i){return i});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(b)?a:(v=b.indexOf("//")===0?b:b.indexOf("/")===0?g+b:c+b.replace(/^\.\//,""),"url("+JSON.stringify(v)+")")})}},function(M,L,C){C.r(L),C.d(L,"default",function(){return _}),C(1);var m=C(0),g=C.n(m);function c(h,y){for(var t=0;t<y.length;t++){var e=y[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(h,e.key,e)}}var a=function(){function h(e){var n=e.config,r=e.onUpload,u=e.onError;(function(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")})(this,h),this.config=n,this.onUpload=r,this.onError=u}var y,t;return y=h,(t=[{key:"uploadSelectedFile",value:function(e){var n=this,r=e.onPreview;(this.config.uploader&&typeof this.config.uploader.uploadByFile=="function"?g.a.selectFiles({accept:this.config.types}).then(function(u){r();var f,p=n.config.uploader.uploadByFile(u[0]);return(f=p)&&typeof f.then=="function"||console.warn("Custom uploader method uploadByFile should return a Promise"),p}):g.a.transport({url:this.config.endpoint,accept:this.config.types,beforeSend:function(){return r()},fieldName:this.config.field,headers:this.config.additionalRequestHeaders||{}}).then(function(u){return u.body})).then(function(u){n.onUpload(u)}).catch(function(u){var f=u.body,p=f&&f.message?f.message:n.config.errorMessage;n.onError(p)})}}])&&c(y.prototype,t),h}();function o(h){return function(y){if(Array.isArray(y))return v(y)}(h)||function(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)}(h)||function(y,t){if(y){if(typeof y=="string")return v(y,t);var e=Object.prototype.toString.call(y).slice(8,-1);if(e==="Object"&&y.constructor&&(e=y.constructor.name),e==="Map"||e==="Set")return Array.from(y);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(y,t)}}(h)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function v(h,y){(y==null||y>h.length)&&(y=h.length);for(var t=0,e=new Array(y);t<y;t++)e[t]=h[t];return e}function b(h){var y,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=document.createElement(h);Array.isArray(t)?(y=n.classList).add.apply(y,o(t)):t&&n.classList.add(t);for(var r in e)n[r]=e[r];return n}function l(h){return Object.keys(h).length===0}const i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>';function x(h,y){for(var t=0;t<y.length;t++){var e=y[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(h,e.key,e)}}var _=function(){function h(n){var r=this,u=n.data,f=n.config,p=n.api,S=n.readOnly;(function(j,s){if(!(j instanceof s))throw new TypeError("Cannot call a class as a function")})(this,h),this.api=p,this.readOnly=S,this.nodes={wrapper:null,button:null,title:null},this._data={file:{},title:""},this.config={endpoint:f.endpoint||"",field:f.field||"file",types:f.types||"*",buttonText:f.buttonText||"Select file to upload",errorMessage:f.errorMessage||"File upload failed",uploader:f.uploader||void 0,additionalRequestHeaders:f.additionalRequestHeaders||{}},u===void 0||l(u)||(this.data=u),this.uploader=new a({config:this.config,onUpload:function(j){return r.onUpload(j)},onError:function(j){return r.uploadingFailed(j)}}),this.enableFileUpload=this.enableFileUpload.bind(this)}var y,t,e;return y=h,e=[{key:"toolbox",get:function(){return{icon:i,title:"Attachment"}}},{key:"isReadOnlySupported",get:function(){return!0}}],(t=[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,apiButton:this.api.styles.button,loader:this.api.styles.loader,wrapper:"cdx-attaches",wrapperWithFile:"cdx-attaches--with-file",wrapperLoading:"cdx-attaches--loading",button:"cdx-attaches__button",title:"cdx-attaches__title",size:"cdx-attaches__size",downloadButton:"cdx-attaches__download-button",fileInfo:"cdx-attaches__file-info",fileIcon:"cdx-attaches__file-icon",fileIconBackground:"cdx-attaches__file-icon-background",fileIconLabel:"cdx-attaches__file-icon-label"}}},{key:"EXTENSIONS",get:function(){return{doc:"#1483E9",docx:"#1483E9",odt:"#1483E9",pdf:"#DB2F2F",rtf:"#744FDC",tex:"#5a5a5b",txt:"#5a5a5b",pptx:"#E35200",ppt:"#E35200",mp3:"#eab456",mp4:"#f676a6",xls:"#11AE3D",html:"#2988f0",htm:"#2988f0",png:"#AA2284",jpg:"#D13359",jpeg:"#D13359",gif:"#f6af76",zip:"#4f566f",rar:"#4f566f",exe:"#e26f6f",svg:"#bf5252",key:"#00B2FF",sketch:"#FFC700",ai:"#FB601D",psd:"#388ae5",dmg:"#e26f6f",json:"#2988f0",csv:"#11AE3D"}}},{key:"validate",value:function(n){return!l(n.file)}},{key:"save",value:function(n){if(this.pluginHasData()){var r=n.querySelector(".".concat(this.CSS.title));r&&Object.assign(this.data,{title:r.innerHTML})}return this.data}},{key:"render",value:function(){var n=b("div",this.CSS.baseClass);return this.nodes.wrapper=b("div",this.CSS.wrapper),this.pluginHasData()?this.showFileData():this.prepareUploadButton(),n.appendChild(this.nodes.wrapper),n}},{key:"prepareUploadButton",value:function(){this.nodes.button=b("div",[this.CSS.apiButton,this.CSS.button]),this.nodes.button.innerHTML="".concat(i," ").concat(this.config.buttonText),this.readOnly||this.nodes.button.addEventListener("click",this.enableFileUpload),this.nodes.wrapper.appendChild(this.nodes.button)}},{key:"appendCallback",value:function(){this.nodes.button.click()}},{key:"pluginHasData",value:function(){return this.data.title!==""||Object.values(this.data.file).some(function(n){return n!==void 0})}},{key:"enableFileUpload",value:function(){var n=this;this.uploader.uploadSelectedFile({onPreview:function(){n.nodes.wrapper.classList.add(n.CSS.wrapperLoading,n.CSS.loader)}})}},{key:"onUpload",value:function(n){var r,u,f,p=n;try{p.success&&p.file!==void 0&&!l(p.file)?(this.data={file:p.file,title:p.file.title||""},this.nodes.button.remove(),this.showFileData(),r=this.nodes.title,u=document.createRange(),f=window.getSelection(),u.selectNodeContents(r),u.collapse(!1),f.removeAllRanges(),f.addRange(u),this.removeLoader()):this.uploadingFailed(this.config.errorMessage)}catch(S){console.error("Attaches tool error:",S),this.uploadingFailed(this.config.errorMessage)}this.api.blocks.getBlockByIndex(this.api.blocks.getCurrentBlockIndex()).dispatchChange()}},{key:"appendFileIcon",value:function(n){var r,u=n.extension||((r=n.name)===void 0?"":r.split(".").pop()),f=this.EXTENSIONS[u],p=b("div",this.CSS.fileIcon),S=b("div",this.CSS.fileIconBackground);if(f&&(S.style.backgroundColor=f),p.appendChild(S),u){var j=u;u.length>4&&(j=u.substring(0,4)+"…");var s=b("div",this.CSS.fileIconLabel,{textContent:j,title:u});f&&(s.style.backgroundColor=f),p.appendChild(s)}else S.innerHTML=i;this.nodes.wrapper.appendChild(p)}},{key:"removeLoader",value:function(){var n=this;setTimeout(function(){return n.nodes.wrapper.classList.remove(n.CSS.wrapperLoading,n.CSS.loader)},500)}},{key:"showFileData",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile);var n=this.data,r=n.file,u=n.title;this.appendFileIcon(r);var f=b("div",this.CSS.fileInfo);if(this.nodes.title=b("div",this.CSS.title,{contentEditable:this.readOnly===!1}),this.nodes.title.dataset.placeholder=this.api.i18n.t("File title"),this.nodes.title.textContent=u||"",f.appendChild(this.nodes.title),r.size){var p,S,j=b("div",this.CSS.size);Math.log10(+r.size)>=6?(p="MiB",S=r.size/Math.pow(2,20)):(p="KiB",S=r.size/Math.pow(2,10)),j.textContent=S.toFixed(1),j.setAttribute("data-size",p),f.appendChild(j)}if(this.nodes.wrapper.appendChild(f),r.url!==void 0){var s=b("a",this.CSS.downloadButton,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',href:r.url,target:"_blank",rel:"nofollow noindex noreferrer"});this.nodes.wrapper.appendChild(s)}}},{key:"uploadingFailed",value:function(n){this.api.notifier.show({message:n,style:"error"}),this.removeLoader()}},{key:"data",get:function(){return this._data},set:function(n){var r=n.file,u=n.title;this._data={file:r,title:u}}}])&&x(y.prototype,t),e&&x(y,e),h}()}]).default})})(R);var D=R.exports;return U(D)});