!function(){var n,e={906:function(n,e,r){"use strict";var t=window.wp.blocks;function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},o.apply(this,arguments)}var i=window.wp.element,a=r(184),u=r.n(a),l=window.wp.i18n,c=window.wp.blockEditor,s=window.wp.components;(0,t.registerBlockType)("wazframe/box",{edit:function(n){let{attributes:e,setAttributes:r}=n;const t=(0,c.useBlockProps)(),{invert:a}=e,f=u()({invert:a});return(0,i.createElement)("div",o({},t,{className:u()(f,t.className)}),(0,i.createElement)(c.BlockControls,null,(0,i.createElement)(s.Toolbar,null,(0,i.createElement)(s.ToolbarButton,{icon:"admin-customizer",label:(0,l.__)("Invert Colors"),onClick:()=>r({invert:!a})}))),(0,i.createElement)(c.InnerBlocks,null))},save:function(n){let{attributes:e}=n;const r=e.padding,t=e.invert,a=u()({invert:t});return(0,i.createElement)("wf-box",o({},c.useBlockProps.save({className:a}),{padding:r}),(0,i.createElement)(c.InnerBlocks.Content,null))}})},184:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&n.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)t.call(r,u)&&r[u]&&n.push(u);else n.push(r.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,n=[],t.O=function(e,r,o,i){if(!r){var a=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={826:0,431:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(l)var s=l(t)}for(e&&e(r);c<a.length;c++)i=a[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self.webpackChunkwf_box=self.webpackChunkwf_box||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=t.O(void 0,[431],(function(){return t(906)}));o=t.O(o)}();