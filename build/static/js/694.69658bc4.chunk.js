"use strict";(self.webpackChunkmilma_dosa_batter_website=self.webpackChunkmilma_dosa_batter_website||[]).push([[694],{344:(e,t,r)=>{r.d(t,{Ay:()=>s});const n={_origin:"https://api.emailjs.com"},i=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}const a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((i,a)=>{const s=new XMLHttpRequest;s.addEventListener("load",(e=>{let{target:t}=e;const r=new o(t);200===r.status||"OK"===r.text?i(r):a(r)})),s.addEventListener("error",(e=>{let{target:t}=e;a(new o(t))})),s.open("POST",n._origin+e,!0),Object.keys(r).forEach((e=>{s.setRequestHeader(e,r[e])})),s.send(t)}))},s={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";n._userID=e,n._origin=t},send:(e,t,r,o)=>{const s=o||n._userID;i(s,e,t);const c={lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:r};return a("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:(e,t,r,o)=>{const s=o||n._userID,c=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(r);i(s,e,t);const l=new FormData(c);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s),a("/api/v1.0/email/send-form",l)}}},394:(e,t,r)=>{r.d(t,{o9J:()=>i});var n=r(441);function i(e){return(0,n.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"},child:[]},{tag:"circle",attr:{cx:"256",cy:"192",r:"48",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"},child:[]}]})(e)}},441:(e,t,r)=>{r.d(t,{k5:()=>f});var n=r(43),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=["attr","size","title"];function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),p(e.child))))}function f(e){return t=>n.createElement(m,c({attr:u({},e.attr)},t),p(e.child))}function m(e){var t=t=>{var r,{attr:i,size:o,title:l}=e,d=s(e,a),p=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(i)}},698:(e,t,r)=>{r.d(t,{h2r:()=>i});var n=r(441);function i(e){return(0,n.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"16",x:"2",y:"4",rx:"2"},child:[]},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]}]})(e)}},397:(e,t,r)=>{r.d(t,{HZC:()=>i});var n=r(441);function i(e){return(0,n.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"},child:[]}]})(e)}}}]);
//# sourceMappingURL=694.69658bc4.chunk.js.map