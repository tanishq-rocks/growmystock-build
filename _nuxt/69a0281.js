(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{699:function(t,e,o){var content=o(716);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("2f7076bc",content,!0,{sourceMap:!1})},715:function(t,e,o){"use strict";o(699)},716:function(t,e,o){var n=o(16)((function(i){return i[1]}));n.push([t.i,".subheading-1[data-v-4ff9b114]{border-left:4px solid #000;margin:24px 24px 0 0;padding:0 8px}.subheading-2[data-v-4ff9b114]{margin:24px 0 0}",""]),n.locals={},t.exports=n},723:function(t,e,o){"use strict";o.r(e);var n=o(718),c=o(667),r=o(717),l=o(719),d=o(31),f=(o(99),o(29),o(37),o(153)),h={name:"IndexPage",head:function(){for(var t=[function(t,e,o){return"Our dynamic technical analysis strongly indicates that ".concat(t," is poised for a remarkable ascent to a target price of ").concat(e,", while implementing an essential stop loss at ").concat(o,".")},function(t,e,o){return"According to our robust technical analysis, ".concat(t," is primed for an explosive surge to a target price of ").concat(e,", strategically protected by a vital stop loss at ").concat(o,".")},function(t,e,o){return"Our cutting-edge technical analysis confidently predicts that ".concat(t," is on the verge of a substantial surge to a target price of ").concat(e,", safeguarded by a critical stop loss at ").concat(o,".")},function(t,e,o){return"With our expert technical analysis at the helm, ".concat(t," is forecasted to achieve an impressive target price of ").concat(e,", fortified by a crucial stop loss at ").concat(o,".")},function(t,e,o){return"Harnessing the insights from our advanced technical analysis, ".concat(t," is set to soar to a target price of ").concat(e,", while ensuring a safeguarding stop loss at ").concat(o,".")},function(t,e,o){return"Backed by our astute technical analysis, ".concat(t," is projected to skyrocket to a target price of ").concat(e,", with a protective stop loss at ").concat(o,".")},function(t,e,o){return"Our forward-looking technical analysis confidently anticipates ".concat(t,"'s ascent to a target price of ").concat(e,", backed by a pivotal stop loss at ").concat(o,".")},function(t,e,o){return"With unwavering conviction from our technical analysis, ".concat(t," is expected to surge to a target price of ").concat(e,", with a critical stop loss at ").concat(o,".")},function(t,e,o){return"Employing our strategic technical analysis, ".concat(t," is positioned for a compelling rise to a target price of ").concat(e,", safeguarded by a crucial stop loss at ").concat(o,".")},function(t,e,o){return"Utilizing the foresight of our technical analysis, ".concat(t," is on track to achieve an impressive target price of ").concat(e,", while maintaining a protective stop loss at ").concat(o,".")}],e=[],i=0;i<this.stocks.length;i++){var o=this.stocks[i];e.push({"@type":"ListItem",name:"".concat(o.name),position:i+1,url:"".concat(f.a.url,"/chart?symbol=BSE:").concat(o.symbol),description:t[i%10](o.name,o.target,o.stop_loss),"custom:targetPrice":{"@type":"MonetaryAmount",currency:"INR",value:"".concat(o.target)},"custom:stopLossPrice":{"@type":"MonetaryAmount",currency:"INR",value:"".concat(o.stop_loss)}})}var n={"@context":"http://schema.org","@type":"ItemList",name:"Best stocks to buy today | Target and Stoploss | Invest Guru India",description:"Best stocks to buy today india for short-term | Today top share",url:"".concat(f.a.url),image:"".concat(f.a.socialImage),numberOfItems:this.stocks.length,itemListElement:e};return{titleTemplate:"Best stocks to buy today india for short-term | %s",title:"".concat(f.a.company),meta:[{hid:"description",name:"description",content:"Invest guru | Best Stock to buy | target and stoploss | Today top share | Free"}],script:[{innerHTML:JSON.stringify(n),type:"application/ld+json"}],__dangerouslyDisableSanitizers:["script"]}},data:function(){return{stocks:[],loading:!0}},fetch:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.get("/get/stocks/latest");case 4:o=e.sent,data=o.data,t.stocks=data,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t.stocks=[],t.$nuxt.context.store.commit("ui/SET_MSGS",{title:"Internal Server Error (500)",description:"Server has encountered an unexpected condition or configuration problem ",color:"var(--v-error-base)",icon:"line-md:emoji-frown",position:"bottom-left"});case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},m=(o(715),o(50)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{fluid:""}},[e(r.a,[e(n.a,[e("h1",{staticClass:"text-h5 text-md-h4 text-center text-md-left"},[e("strong",{staticClass:"text-caption"},[t._v("Don't Miss Out:")]),e("br"),t._v("Short Term\n        Stocks to Buy Today\n      ")]),t._v(" "),e("h2",{staticClass:"text-subtitle-1 text-md-h6 text-center text-md-left",class:t.$vuetify.breakpoint.width>960?"subheading-1":"subheading-2"},[t._v("\n        List of best stocks to buy today for Short Term in Indian stock market\n      ")])])],1),t._v(" "),t.loading?e(r.a,{staticClass:"gap-1",attrs:{justify:"start"}},t._l(10,(function(i){return e(n.a,{key:i,attrs:{cols:"12",md:"4",sm:"6"}},[e(l.a,{attrs:{elevation:"2",type:"card-heading, actions"}})],1)})),1):e(r.a,{staticClass:"gap-1",attrs:{justify:"start"}},[t._l(t.stocks,(function(t,i){return[e(n.a,{key:"col-".concat(i),attrs:{cols:"12",md:"4",sm:"6"}},[e("StockCard",{attrs:{stock:t}})],1)]}))],2),t._v(" "),e(r.a,[e(n.a,{staticClass:"text-caption",staticStyle:{"text-align":"justify"},attrs:{cols:"12"}},[e("strong",[t._v("Warning!")]),t._v(" THESE ARE NOT RECOMMENDATIONS. The following\n      compilation represents a curated list of stocks identified through\n      advanced algorithmic analysis, showcasing attributes commonly favored by\n      traders when making stock trading decisions. If you decide to include\n      any of these stocks in your trading portfolio, it is important to\n      acknowledge that you assume full responsibility for any associated\n      risks.\n    ")])],1)],1)}),[],!1,null,"4ff9b114",null);e.default=component.exports;installComponents(component,{StockCard:o(683).default})}}]);
//# sourceMappingURL=69a0281.js.map