(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fuwuzhuangtai/add-or-update"],{"05bd":function(e,n,t){},"0db4":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,u,a,r,i){try{var o=e[r](i),c=o.value}catch(f){return void t(f)}o.done?n(c):Promise.resolve(c).then(u,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(u,a){var i=e.apply(n,t);function o(e){r(i,u,a,o,c,"next",e)}function c(e){r(i,u,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("4f56"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{zhanghao:"",xingming:"",fuwumingcheng:"",fuwuleixing:"",yuyueshijian:"",fuwuzhuangtai:"",tupian:"",userid:""},fuwuzhuangtaiOptions:[],fuwuzhuangtaiIndex:0,user:{},ro:{zhanghao:!1,xingming:!1,fuwumingcheng:!1,fuwuleixing:!1,yuyueshijian:!1,fuwuzhuangtai:!1,tupian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(u.default.mark((function a(){var r,i,o,c;return u.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.getStorageSync("nowTable"),a.next=3,t.$api.session(r);case 3:if(i=a.sent,t.user=i.data,t.fuwuzhuangtaiOptions="代办服务".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return t.ruleForm.id=n.id,a.next=12,t.$api.info("fuwuzhuangtai",t.ruleForm.id);case 12:i=a.sent,t.ruleForm=i.data;case 14:if(!n.cross){a.next=53;break}o=e.getStorageSync("crossObj"),a.t0=u.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=53;break}if(c=a.t1.value,"zhanghao"!=c){a.next=23;break}return t.ruleForm.zhanghao=o[c],t.ro.zhanghao=!0,a.abrupt("continue",17);case 23:if("xingming"!=c){a.next=27;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,a.abrupt("continue",17);case 27:if("fuwumingcheng"!=c){a.next=31;break}return t.ruleForm.fuwumingcheng=o[c],t.ro.fuwumingcheng=!0,a.abrupt("continue",17);case 31:if("fuwuleixing"!=c){a.next=35;break}return t.ruleForm.fuwuleixing=o[c],t.ro.fuwuleixing=!0,a.abrupt("continue",17);case 35:if("yuyueshijian"!=c){a.next=39;break}return t.ruleForm.yuyueshijian=o[c],t.ro.yuyueshijian=!0,a.abrupt("continue",17);case 39:if("fuwuzhuangtai"!=c){a.next=43;break}return t.ruleForm.fuwuzhuangtai=o[c],t.ro.fuwuzhuangtai=!0,a.abrupt("continue",17);case 43:if("tupian"!=c){a.next=47;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,a.abrupt("continue",17);case 47:if("userid"!=c){a.next=51;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,a.abrupt("continue",17);case 51:a.next=17;break;case 53:t.styleChange();case 54:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fuwuzhuangtaiChange:function(e){this.fuwuzhuangtaiIndex=e.target.value,this.ruleForm.fuwuzhuangtai=this.fuwuzhuangtaiOptions[this.fuwuzhuangtaiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.id){n.next=5;break}return n.next=3,e.$api.update("fuwuzhuangtai",e.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,e.$api.add("fuwuzhuangtai",e.ruleForm);case 7:e.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),u=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),u=u>9?u:"0"+u,a=a>9?a:"0"+a,"".concat(t,"-").concat(u,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},4070:function(e,n,t){"use strict";(function(e){t("5149");u(t("66fd"));var n=u(t("c2ca"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"4ce6":function(e,n,t){"use strict";t.r(n);var u=t("0db4"),a=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=a.a},"897c":function(e,n,t){"use strict";var u=t("05bd"),a=t.n(u);a.a},c2ca:function(e,n,t){"use strict";t.r(n);var u=t("d952"),a=t("4ce6");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("897c");var i,o=t("f0c5"),c=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"091770ed",null,!1,u["a"],i);n["default"]=c.exports},d952:function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var a=function(){var e=this,n=e.$createElement;e._self._c},r=[]}},[["4070","common/runtime","common/vendor"]]]);