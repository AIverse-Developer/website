webpackJsonp([2],{0:function(t,e){},1:function(t,e){},2:function(t,e){},"5OHe":function(t,e){},H87E:function(t,e){},IVaU:function(t,e){},JylC:function(t,e){},LOkV:function(t,e){t.exports={GetQueryString:function(t){var e=window.location.href;return new RegExp(".*\\b"+t+"\\b(\\s*=([^&]+)).*","gi").test(e)?RegExp.$2:null},setLanguage:function(t){t._i18n.locale=localStorage.getItem("lang")||"en",t.$t("web")}}},N2Sr:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Bldn"),a=n.n(i),o=n("yf3K"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.isRouterAlive?e("router-view"):this._e()],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},created:function(){},computed:{},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}},s,!1,function(t){n("JylC")},null,null).exports,l=n("mB6C");o.default.use(l.a);var u=[{path:"/Home",name:"Home",component:function(){return n.e(0).then(n.bind(null,"vW6Y"))},alias:"/"}],c=new l.a({mode:"history",routes:u});c.beforeEach(function(t,e,n){n()});var d=c,h=n("bSIt"),p=n("SWgy"),m=(n("rVsN"),n("I29D")),f=n.n(m);n("KjI9"),n("6L+D");o.default.use(h.a);var g=new h.a.Store({state:{},getters:{},mutations:{},actions:{}}),w=n("GqPK");o.default.use(w.a);new o.default;f.a.defaults.timeout=6e4,f.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",f.a.defaults.headers.post["Access-Control-Allow-Headers"]="X-Requested-With",f.a.defaults.headers.put["Content-Type"]="application/json;charset=UTF-8;",f.a.defaults.headers.delete["Content-Type"]="application/json;charset=UTF-8",f.a.defaults.baseURL=Object({NODE_ENV:"production"}).API_ROOT;var v={},_=n("RTwF"),x=(_.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[_.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}},[n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)])],1)},staticRenderFns:[]};var S=n("C7Lr")(x,y,!1,function(t){n("N2Sr")},null,null).exports,C=(Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:S},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var n=t.msg,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.msg=n.concat([null])):o>-1&&(t.msg=n.slice(0,o).concat(n.slice(o+1)))}else t.msg=a}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",function(){return[n("div",{domProps:{innerHTML:t._s(t.content)}})]})],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var I=n("C7Lr")(C,b,!1,function(t){n("H87E")},null,null).exports,B=n("NcOJ"),k=(n("h9yL"),n("5OHe"),n("wSez"));o.default.component(k.Swipe.name,k.Swipe),o.default.component(k.SwipeItem.name,k.SwipeItem),o.default.use(h.a),o.default.use(w.a),o.default.use(B.a),o.default.use(a.a),o.default.component("confirm",I),o.default.config.productionTip=!1,o.default.prototype._i18n=p.a,o.default.prototype.$api=v,o.default.prototype.$eventHub=new o.default,new o.default({el:"#app",i18n:p.a,router:d,components:{App:r},template:"<App/>",store:g})},S83K:function(t,e){},SWgy:function(t,e,n){"use strict";var i=n("yf3K"),a=n("Vq9g"),o=n.n(a),s=n("q1sq"),r=n("4YfN"),l=n.n(r),u=n("xjrd"),c=n.n(u),d=l()({web:{header:{header_0:""}}},c.a),h=n("pNbX"),p=n.n(h),m=l()({web:{header:{header_0:"Home"}}},p.a),f=n("LOkV");n.d(e,"b",function(){return g}),i.default.use(s.a);var g=[{lang:"en",flag:!1,name:"English",title:"EN"},{lang:"tc",flag:!1,name:"繁體中文",title:"TC"},{lang:"cn",flag:!1,name:"简体中文",title:"CN"}],w=(decodeURIComponent(window.location.href),Object(f.GetQueryString)("lang")),v=localStorage.getItem("lang"),_=(navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage).toLowerCase();-1!==g.findIndex(function(t){return t.lang===w})?localStorage.setItem("lang",w):-1!==g.findIndex(function(t){return t.lang===v})?localStorage.setItem("lang",v):-1!==g.findIndex(function(t){return t.lang===_})?localStorage.setItem("lang",_):localStorage.setItem("lang","cn");var x=new s.a({locale:localStorage.getItem("lang")||"cn",messages:{cn:d,en:m}});o.a.i18n(function(t,e){return x.t(t,e)});e.a=x},WcbG:function(t,e,n){"use strict";Boolean,String,String,String;var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var o=n("C7Lr")(i,a,!1,function(t){n("IVaU")},null,null);e.a=o.exports},h9yL:function(t,e){},uyVq:function(t,e,n){"use strict";var i=n("vHxh"),a=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var s=n("C7Lr")(a,o,!1,function(t){n("S83K")},null,null);e.a=s.exports}},["NHnr"]);