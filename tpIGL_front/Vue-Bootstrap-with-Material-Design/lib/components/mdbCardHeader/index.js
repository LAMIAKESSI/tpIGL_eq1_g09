(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbCardHeader"]=t():e["mdbCardHeader"]=t()})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({f6fd:function(e,t){(function(e){var t="currentScript",r=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(n){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack)||[!1])[1];for(e in r)if(r[e].src==t||"interactive"==r[e].readyState)return r[e];return null}}})})(document)},fb15:function(e,t,r){"use strict";var n;(r.r(t),"undefined"!==typeof window)&&(r("f6fd"),(n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(r.p=n[1]));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.tag,{tag:"component",class:e.className},[e._t("default")],2)},i=[],a={props:{tag:{type:String,default:"div"},color:{type:String},textColor:{type:String},border:{type:String},transparent:{type:Boolean,default:!1}},computed:{className:function(){return["card-header",this.color&&!this.textColor?this.color+" white-text":!!this.textColor&&this.color+" "+this.textColor+"-text",this.border&&"border-"+this.border,this.transparent&&"transparent"]}}},c=a,u=c;function d(e,t,r,n,o,i,a,c){var u,d="function"===typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(d.functional){d._injectStyles=u;var f=d.render;d.render=function(e,t){return u.call(t),f(e,t)}}else{var s=d.beforeCreate;d.beforeCreate=s?[].concat(s,u):[u]}return{exports:e,options:d}}var f=d(u,o,i,!1,null,"6d5255d9",null),s=f.exports;r.d(t,"mdbCardHeader",(function(){return a}));t["default"]=s}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map