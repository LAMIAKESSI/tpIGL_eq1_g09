(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["mdbNavbarBrand"]=e():t["mdbNavbarBrand"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"7efe":function(t,e,n){},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.wrapperClass,on:{click:t.wave}},[t.to?n("router-link",t._b({staticClass:"navbar-brand",attrs:{to:t.to}},"router-link",t.$attrs,!1),[t._t("default")],2):n(t.tag,t._b({tag:"component",staticClass:"navbar-brand",on:{click:t.wave}},"component",t.$attrs,!1),[t._t("default")],2)],1)},s=[],a=(n("7efe"),{props:{waves:{type:Boolean,default:!0},darkWaves:{type:Boolean,default:!1}},methods:{wave:function(t){this.waves&&(this.target=t.target.classList.contains("ripple-parent")?t.currentTarget:t.target.parentElement,this.getOffsets(t),this.waveData={top:t.pageY-this.offsetTop,left:t.pageX-this.offsetLeft,height:this.$el.offsetHeight,width:this.$el.offsetWidth},(this.wavesFixed||this.isNavFixed)&&(this.waveData.top=t.clientY-this.offsetTop),this.createRipple(),this.rippleAnimate(),this.rippleRemove(this.target,this.rippleElement))},getOffsets:function(){if(this.target.offsetParent){this.offsetLeft=this.target.offsetLeft,this.offsetTop=this.target.offsetTop,this.parentOffset=this.target.offsetParent;while(this.parentOffset)this.offsetLeft+=this.parentOffset.offsetLeft,this.offsetTop+=this.parentOffset.offsetTop,this.parentOffset=this.parentOffset.offsetParent}},createRipple:function(){this.rippleElement=document.createElement("div"),this.rippleElement.classList.add("ripple"),this.rippleElement.style.top=this.waveData.top-this.waveData.width/2+"px",this.rippleElement.style.left=this.waveData.left-this.waveData.width/2+"px",this.rippleElement.style.height=this.waveData.width+"px",this.rippleElement.style.width=this.waveData.width+"px",this.darkWaves&&(this.rippleElement.style.background="rgba(0, 0, 0, 0.2)"),this.target.appendChild(this.rippleElement)},rippleAnimate:function(){this.rippleElement.classList.add("is-reppling")},rippleRemove:function(t,e){this.remove=setTimeout((function(){t.removeChild(e)}),600)}}}),o={props:{tag:{type:String,default:"div"},to:[String,Object],waves:{type:Boolean,default:!1}},computed:{wrapperClass:function(){return this.waves&&"ripple-parent"}},mixins:[a]},f=o,p=f;function l(t,e,n,r,i,s,a,o){var f,p="function"===typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),s&&(p._scopeId="data-v-"+s),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=f):i&&(f=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(p.functional){p._injectStyles=f;var l=p.render;p.render=function(t,e){return f.call(e),l(t,e)}}else{var c=p.beforeCreate;p.beforeCreate=c?[].concat(c,f):[f]}return{exports:t,options:p}}var c=l(p,i,s,!1,null,"39e892d4",null),d=c.exports;n.d(e,"mdbNavbarBrand",(function(){return o}));e["default"]=d}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map