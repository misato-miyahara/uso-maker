(function(t){function e(e){for(var r,c,s=e[0],a=e[1],l=e[2],b=0,p=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/uso-maker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11b6":function(t,e,n){"use strict";n("5650")},5650:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=Object(r["k"])("data-v-f6c86b20");Object(r["h"])("data-v-f6c86b20");var o={class:"ly_wrapper"},c=Object(r["e"])("div",{style:{"text-align":"center"}},[Object(r["e"])("h1",{class:"el_rainbow"},"超絶面白いうそメーカーを作りました！！")],-1),s={class:"bl_maker"},a=Object(r["e"])("p",{style:{"font-size":"1.2rem","font-weight":"bold"}}," じつは私... ",-1),l={class:"bl_maker_slots",style:{"margin-bottom":"30px"}},u=Object(r["e"])("p",{style:{"text-align":"right","font-size":"1.2rem","font-weight":"bold"}}," なんです！！ ",-1),b={class:"bl_share"};Object(r["g"])();var p=i((function(t,e,n,i,p,f){var d=Object(r["i"])("Slot");return Object(r["f"])(),Object(r["c"])("div",o,[c,Object(r["e"])("div",s,[a,Object(r["e"])("ul",l,[Object(r["e"])("li",null,[Object(r["e"])(d,{items:p.items[0]},null,8,["items"])]),Object(r["e"])("li",null,[Object(r["e"])(d,{items:p.items[1]},null,8,["items"])]),Object(r["e"])("li",null,[Object(r["e"])(d,{items:p.items[2]},null,8,["items"])])]),u]),Object(r["e"])("div",b,[Object(r["e"])("a",{class:"bl_share_link",onClick:e[1]||(e[1]=function(){return f.share&&f.share.apply(f,arguments)})},"皆にも知らしめよう！")])])})),f=Object(r["k"])("data-v-253965fb");Object(r["h"])("data-v-253965fb");var d={class:"bl_slot"},h={class:"el_slot_txt",style:{"text-align":"center"}},m=Object(r["d"])(" うんち！💩 ");Object(r["g"])();var O=f((function(t,e,n,i,o,c){return Object(r["f"])(),Object(r["c"])("div",d,[Object(r["e"])("p",h,[o.stopFlg?(Object(r["f"])(),Object(r["c"])(r["a"],{key:0},[m],64)):(Object(r["f"])(),Object(r["c"])(r["a"],{key:1},[Object(r["d"])(Object(r["j"])(n.items[o.itemIdx]),1)],64))]),Object(r["e"])("div",null,[Object(r["e"])("button",{onClick:e[1]||(e[1]=function(){return c.stopTimer&&c.stopTimer.apply(c,arguments)}),class:"el_slot_btn"}," STOP ")])])})),j={name:"Slot",props:{items:Array},data:function(){return{itemIdx:0,timer:null,stopFlg:!1}},mounted:function(){this.startTimer()},unmounted:function(){this.stopTimer},methods:{countUp:function(){++this.itemIdx>=this.items.length&&(this.itemIdx=0)},startTimer:function(){this.timer=setInterval(this.countUp,80)},stopTimer:function(){this.stopFlg=!0,clearInterval(this.timer)}}};n("b899");j.render=O,j.__scopeId="data-v-253965fb";var v=j,y={name:"App",components:{Slot:v},data:function(){return{twitter:"https://twitter.com/intent/tweet?url=https://yahoo.co.jp&text=ヤフーのサイト&hashtags=孫正義,ヤフー",items:[["超絶可愛い","ちょっと臭い","最強で","スキンヘッドで","モヒカンで","膝裏に興奮する"],["無人島住みの","健気な","頭のおかしな","厨二病な","パンツを被る","泣き虫な","厨二病な","生きて腸に届く"],["女の子","男の子","男の娘","サディスト","ド変態","エクソシスト","殺人鬼","長男","末っ子長男","童貞","凡人","ガキンチョ","社長令嬢ですの","主人公","ビフィズス菌","大腸菌"]]}},methods:{share:function(){location.href='https://twitter.com/intent/tweet?text=私は"うんち"です！！&url=https://misato-miyahara.github.io/uso-maker/'}},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;800&display=swap"}]}};n("ea31"),n("11b6");y.render=p,y.__scopeId="data-v-f6c86b20";var g=y;Object(r["b"])(g).mount("#app")},a3b8:function(t,e,n){},b899:function(t,e,n){"use strict";n("a3b8")},e4d2:function(t,e,n){},ea31:function(t,e,n){"use strict";n("e4d2")}});
//# sourceMappingURL=app.a43b83e3.js.map