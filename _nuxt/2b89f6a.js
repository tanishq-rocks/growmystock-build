(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{698:function(t,e,n){var content=n(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5bbb7cdb",content,!0,{sourceMap:!1})},707:function(t,e,n){"use strict";n(698)},708:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".container-old[data-v-7fd7e13d]{height:85vh;width:100vw}.container-old__title[data-v-7fd7e13d]{font-size:1.6em}",""]),r.locals={},t.exports=r},721:function(t,e,n){"use strict";n.r(e);var r=n(718),o=n(667),c=n(717),l=n(719),d=n(177),f=(n(29),n(11),n(10),n(12),n(5),n(18),n(13),n(19),n(107)),v=n(31),h=n(3),m=(n(99),n(147)),x=function(){var t=Object(v.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$nuxt.$axios.get("get/stocks/old?page=".concat(e.page,"&pageSize=").concat(e.pageSize));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",{error:(null===(n=t.t0.response)||void 0===n?void 0:n.data)||t.t0});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),y=n(153);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={name:"InspirePage",head:function(){return{titleTemplate:"%s: The secret to high returns with short-term investing",title:"".concat(y.a.company),meta:[{hid:"description",name:"description",content:"Position yourself for financial success and achieve a lucrative 7% gain in your investment portfolio in less than a week"}]}},data:function(){return{items:[],page:1,pageSize:4,loading:!1,reachedEnd:!1}},mounted:function(){this.fetchData()},methods:_(_({},Object(m.b)({SET_MSGS:"ui/SET_MSGS"})),{},{fetchData:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading&&!t.reachedEnd){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,x({page:t.page,pageSize:t.pageSize});case 5:n=e.sent,r=n.error,data=n.data,r?(t.loading=!1,t.SET_MSGS({title:"Internal Server Error (500)",description:"Server has encountered an unexpected condition or configuration problem ",color:"var(--v-error-base)",icon:"line-md:emoji-frown",position:"bottom-left"})):(0===data.data.length?t.reachedEnd=!0:(t.items=[].concat(Object(f.a)(t.items),Object(f.a)(data.data)),t.page++),t.loading=!1);case 9:case"end":return e.stop()}}),e)})))()},handleIntersection:function(t){t[0].isIntersecting&&this.fetchData()}})},j=(n(707),n(50)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return 0===t.items.length?e(c.a,{staticClass:"container-old"},[t.loading?e(r.a,{staticClass:"d-flex align-center justify-center"},[e("icon",{attrs:{icon:"eos-icons:bubble-loading",size:"32px"}})],1):e(r.a,{staticClass:"d-flex flex-column align-center justify-center"},[e("div",{staticClass:"container-old__title"},[t._v("No history found")]),t._v(" "),t.$vuetify.theme.dark?e("icon",{attrs:{icon:"fluent-emoji:sleeping-face",size:"28px"}}):e("icon",{attrs:{icon:"fluent-emoji:yawning-face",size:"28px"}})],1)],1):e(o.a,{attrs:{fluid:""}},[e(c.a,[e(r.a,[e("h1",{staticClass:"text-h5 text-md-h4 text-center text-md-left"},[e("strong",{staticClass:"text-caption"},[t._v("History")]),e("br"),t._v("\n        Promising Short-Term Stocks\n      ")])])],1),t._v(" "),t._l(t.items,(function(n,i){return[e(c.a,{key:"r1-".concat(i)},[e(r.a,{staticClass:"col-12 pb-0 pb-md-3"},[t._v("\n        Trading Signals for "+t._s(n.date)+"\n      ")])],1),t._v(" "),e(c.a,{key:"r2-".concat(i),staticClass:"flex-nowrap overflow-auto pb-md-5 scroll-snap-x"},[t._l(n.stocks,(function(t,n){return[e(r.a,{key:"stock-".concat(i,"-").concat(n),staticClass:"col-md-4 col-11 snap-align-center"},[e("StockCard",{attrs:{stock:t}})],1)]}))],2)]})),t._v(" "),t.reachedEnd?t._e():e("div",{directives:[{def:d.a,name:"intersect",rawName:"v-intersect",value:t.handleIntersection,expression:"handleIntersection"}],ref:"intersectionTarget",staticClass:"mt-5"},[e(c.a,[e(r.a,{attrs:{cols:"4",md:"2"}},[e(l.a,{attrs:{elevation:"2",type:"text"}})],1)],1),t._v(" "),e(c.a,{staticClass:"flex-nowrap overflow-auto pb-md-5 scroll-snap-x"},t._l(10,(function(i){return e(r.a,{key:"skeleton-".concat(i),staticClass:"snap-align-center",attrs:{cols:"11",md:"4"}},[e(l.a,{attrs:{elevation:"2",type:"card-heading, actions"}})],1)})),1)],1)],2)}),[],!1,null,"7fd7e13d",null);e.default=component.exports;installComponents(component,{Icon:n(193).default,StockCard:n(683).default})}}]);
//# sourceMappingURL=2b89f6a.js.map