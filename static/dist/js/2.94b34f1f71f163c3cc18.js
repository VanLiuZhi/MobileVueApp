webpackJsonp([2],{"1r3O":function(t,e,a){a("xL5C"),a("9r66")},"4vvA":function(t,e,a){"use strict";e.__esModule=!0;var n=c(a("woOf")),i=c(a("Dd8w")),s=c(a("7+uW")),r=c(a("9AOT")),o=a("VxeN");function c(t){return t&&t.__esModule?t:{default:t}}var l={type:"text",mask:!1,message:"",visible:!0,duration:3e3,position:"middle",forbidClick:!1},u=function(t){return(0,o.isObj)(t)?t:{message:t}},d=[],f=!0,v=(0,i.default)({},l);function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(){if(!d.length||!f){var t=new(s.default.extend(r.default))({el:document.createElement("div")});document.body.appendChild(t.$el),d.push(t)}return d[d.length-1]}();return t=(0,i.default)({},v,u(t),{clear:function(){e.visible=!1}}),(0,n.default)(e,t),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout(function(){e.clear()},t.duration)),e}["loading","success","fail"].forEach(function(t){var e;p[t]=(e=t,function(t){return p((0,i.default)({type:e},u(t)))})}),p.clear=function(t){d.length&&(t?(d.forEach(function(t){t.clear()}),d=[]):f?d[0].clear():d.shift().clear())},p.setDefaultOptions=function(t){(0,n.default)(v,t)},p.resetDefaultOptions=function(){v=(0,i.default)({},l)},p.allowMultiple=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f=!t},p.install=function(){s.default.use(r.default)},s.default.prototype.$toast=p,e.default=p},"5ibX":function(t,e,a){"use strict";e.__esModule=!0;var n,i=a("w+oK"),s=(n=i)&&n.__esModule?n:{default:n},r=a("VxeN");e.default=(0,r.create)({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-submit-bar"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.tip||t.$slots.tip,expression:"tip || $slots.tip"}],staticClass:"van-submit-bar__tip"},[t._v("\n    "+t._s(t.tip)),t._t("tip")],2),a("div",{staticClass:"van-submit-bar__bar"},[t._t("default"),a("div",{staticClass:"van-submit-bar__price"},[t.hasPrice?[a("span",{staticClass:"van-submit-bar__price-text"},[t._v(t._s(t.label||t.$t("label")))]),a("span",{staticClass:"van-submit-bar__price-interger"},[t._v("¥"+t._s(t.priceInterger)+".")]),a("span",{staticClass:"van-submit-bar__price-decimal"},[t._v(t._s(t.priceDecimal))])]:t._e()],2),a("van-button",{attrs:{type:t.buttonType,disabled:t.disabled,loading:t.loading},on:{click:t.onSubmit}},[t._v("\n      "+t._s(t.loading?"":t.buttonText)+"\n    ")])],2)])},name:"submit-bar",components:{VanButton:s.default},props:{tip:String,type:Number,price:Number,label:String,loading:Boolean,disabled:Boolean,buttonText:String,buttonType:{type:String,default:"danger"}},computed:{hasPrice:function(){return"number"==typeof this.price},priceInterger:function(){return Math.floor(this.price/100)},priceDecimal:function(){var t=this.price%100;return(t<10?"0":"")+t}},methods:{onSubmit:function(){this.disabled||this.loading||this.$emit("submit")}}})},"9AOT":function(t,e,a){"use strict";e.__esModule=!0;var n=a("VxeN"),i=["success","fail","loading"];e.default=(0,n.create)({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"van-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"van-toast-wrapper"},[a("div",{staticClass:"van-toast",class:["van-toast--"+t.displayStyle,"van-toast--"+t.position]},["text"===t.displayStyle?a("div",[t._v(t._s(t.message))]):t._e(),"html"===t.displayStyle?a("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),"default"===t.displayStyle?["loading"===t.type?a("loading",{attrs:{color:"white"}}):a("icon",{staticClass:"van-toast__icon",attrs:{name:t.type}}),t.hasMessage?a("div",{staticClass:"van-toast__text"},[t._v(t._s(t.message))]):t._e()]:t._e()],2),t.forbidClick||t.mask?a("div",{staticClass:"van-toast__overlay",class:{"van-toast__overlay--mask":t.mask}}):t._e()])])},name:"toast",props:{mask:Boolean,message:[String,Number],forbidClick:Boolean,type:{type:String,default:"text"},position:{type:String,default:"middle"}},data:function(){return{visible:!1}},computed:{displayStyle:function(){return-1!==i.indexOf(this.type)?"default":this.type},hasMessage:function(){return this.message||0===this.message}}})},"9r66":function(t,e){},Dd8w:function(t,e,a){"use strict";e.__esModule=!0;var n,i=a("woOf"),s=(n=i)&&n.__esModule?n:{default:n};e.default=s.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}},GKy3:function(t,e,a){a("xL5C"),a("dCOM")},OeKT:function(t,e,a){a("xL5C")},PHeK:function(t,e){},YLFl:function(t,e){},aysW:function(t,e,a){"use strict";e.__esModule=!0;var n=a("VxeN");e.default=(0,n.create)({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"van-checkbox-group"},[this._t("default")],2)},name:"checkbox-group",props:{value:{},disabled:Boolean,max:{default:0,type:Number}},watch:{value:function(t){this.$emit("change",t)}}})},d9cu:function(t,e,a){a("xL5C"),a("YLFl")},dCOM:function(t,e){},dsWl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("GKy3");var n,i=a("4vvA"),s=a.n(i),r=a("bOdI"),o=a.n(r),c=(a("OeKT"),a("aysW")),l=a.n(c),u=(a("mTP8"),a("5ibX")),d=a.n(u),f=(a("d9cu"),a("vkhW")),v=a.n(f),p=(a("1r3O"),a("mKRw")),m=a.n(p),_={components:(n={},o()(n,m.a.name,m.a),o()(n,v.a.name,v.a),o()(n,d.a.name,d.a),o()(n,l.a.name,l.a),n),data:function(){return{checkedGoods:["1","2","3"],goods:[{id:"1",title:"进口香蕉",desc:"约250g，2根",price:200,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"},{id:"2",title:"陕西蜜梨",desc:"约600g",price:690,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"},{id:"3",title:"美国伽力果",desc:"约680g/3个",price:2680,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"}]}},computed:{submitBarText:function(){var t=this.checkedGoods.length;return"结算"+(t?"("+t+")":"")},totalPrice:function(){var t=this;return this.goods.reduce(function(e,a){return e+(-1!==t.checkedGoods.indexOf(a.id)?a.price:0)},0)}},methods:{formatPrice:function(t){return(t/100).toFixed(2)},onSubmit:function(){s()("点击结算")}}},b=a("XyMi");var h=function(t){a("sCif")},g=Object(b.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-checkbox-group",{staticClass:"card-goods",model:{value:t.checkedGoods,callback:function(e){t.checkedGoods=e},expression:"checkedGoods"}},t._l(t.goods,function(e){return a("van-checkbox",{key:e.id,staticClass:"card-goods__item",attrs:{name:e.id}},[a("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:t.formatPrice(e.price),thumb:e.thumb}})],1)})),t._v(" "),a("van-submit-bar",{attrs:{price:t.totalPrice,disabled:!t.checkedGoods.length,"button-text":t.submitBarText},on:{submit:t.onSubmit}})],1)},[],!1,h,null,null);e.default=g.exports},gVfS:function(t,e,a){"use strict";e.__esModule=!0,e.default={methods:{findParentByName:function(t){if(!this.parentGroup)for(var e=this.$parent;e;){if(e.$options.name===t){this.parentGroup=e;break}e=e.$parent}return this.parentGroup}}}},mKRw:function(t,e,a){"use strict";e.__esModule=!0;var n=a("VxeN");e.default=(0,n.create)({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-card",class:{"van-card--center":t.centered}},[a("div",{staticClass:"van-card__thumb"},[t._t("thumb",[a("img",{staticClass:"van-card__img",attrs:{src:t.thumb}})])],2),a("div",{staticClass:"van-card__content"},[t._t("title",[t.title||void 0!==t.price?a("div",{staticClass:"van-card__row"},[t.title?a("div",{staticClass:"van-card__title"},[t._v(t._s(t.title))]):t._e(),void 0!==t.price?a("div",{staticClass:"van-card__price"},[t._v("¥ "+t._s(t.price))]):t._e()]):t._e()]),t._t("desc",[t.desc||void 0!==t.num?a("div",{staticClass:"van-card__row"},[t.desc?a("div",{staticClass:"van-card__desc"},[t._v(t._s(t.desc))]):t._e(),void 0!==t.num?a("div",{staticClass:"van-card__num"},[t._v("x "+t._s(t.num))]):t._e()]):t._e()]),t._t("tags")],2),t.$slots.footer?a("div",{staticClass:"van-card__footer"},[t._t("footer")],2):t._e()])},name:"card",props:{thumb:String,title:String,desc:String,centered:Boolean,num:[Number,String],price:[Number,String]}})},mTP8:function(t,e,a){a("xL5C"),a("PHeK")},sCif:function(t,e){},vkhW:function(t,e,a){"use strict";e.__esModule=!0;var n,i=a("VxeN"),s=a("gVfS"),r=(n=s)&&n.__esModule?n:{default:n};e.default=(0,i.create)({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-checkbox"},[a("icon",{staticClass:"van-checkbox__icon",class:["van-checkbox--"+t.shape,{"van-checkbox--disabled":t.isDisabled},{"van-checkbox--checked":t.isChecked}],attrs:{name:"success"},on:{click:t.onClick}}),a("span",{staticClass:"van-checkbox__label",on:{click:function(e){t.onClick("label")}}},[t._t("default")],2)],1)},name:"checkbox",mixins:[r.default],props:{value:{},disabled:Boolean,labelDisabled:{type:Boolean,default:!1},name:[String,Number],shape:{type:String,default:"round"}},watch:{value:function(t){this.$emit("change",t)}},data:function(){return this.findParentByName("van-checkbox-group"),{}},computed:{currentValue:{get:function(){return this.parentGroup?-1!==this.parentGroup.value.indexOf(this.name):this.value},set:function(t){var e=this.parentGroup;if(e){var a=this.parentGroup.value.slice();if(t){if(e.max&&a.length>=e.max)return;-1===a.indexOf(this.name)&&(a.push(this.name),e.$emit("input",a))}else{var n=a.indexOf(this.name);-1!==n&&(a.splice(n,1),e.$emit("input",a))}}else this.$emit("input",t)}},isChecked:function(){var t=this.currentValue;return"[object Boolean]"==={}.toString.call(t)?t:(0,i.isDef)(t)?t===this.name:void 0},isDisabled:function(){return this.parentGroup&&this.parentGroup.disabled||this.disabled}},methods:{onClick:function(t){this.isDisabled||"label"===t&&this.labelDisabled||(this.currentValue=!this.currentValue)}}})},"w+oK":function(t,e,a){"use strict";e.__esModule=!0;var n=a("VxeN");e.default=(0,n.create)({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"van-button",class:["van-button--"+t.type,"van-button--"+t.size,{"van-button--disabled":t.disabled,"van-button--loading":t.loading,"van-button--block":t.block,"van-button--bottom-action":t.bottomAction}],attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.onClick}},[t.loading?a("loading",{attrs:{size:"20px",color:"default"===t.type?"black":"white"}}):t._e(),a("span",{staticClass:"van-button__text"},[t._t("default",[t._v(t._s(t.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}})}});