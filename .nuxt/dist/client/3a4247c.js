(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{376:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"e",(function(){return m}));var r="http://api.dongdinh.com",c=n(64).default;function o(t,e){return c.post(r+"/updateSequence/"+e,t).then((function(t){return t.data}))}function d(){return c.get(r+"/getAllBranches").then((function(t){return t.data}))}function l(t,e,n){var o;return"Product"==n?o=c.post(r+"/search"+n,{name:t,branch_id:e}):"Branch"==n&&(o=c.post(r+"/search"+n,{name:t})),o.then((function(t){return t.data}))}function h(t,e){var n;return("Product"==e||"Branch"==e)&&(n=c.post(r+"/delete"+e,{id:t})),n.then((function(t){return t.data}))}function m(t,e,n,o){var d;return"Product"==n&&(d=c.post(r+"/update"+n,{id:t,branch_id:e,name:o}),console.log(d)),d.then((function(t){return t.data}))}},430:function(t,e,n){},465:function(t,e,n){"use strict";n(430)},491:function(t,e,n){},492:function(t,e,n){},509:function(t,e,n){"use strict";n.r(e);var r=n(376),c={data:function(){return{productSearch:{},selectProduct:{}}},mounted:function(){this.productSearch=this.$store.state.productSearch,this.selectProduct=this.$store.state.selectProduct},methods:{saveDialog:function(){var t=this;Object(r.e)(this.selectProduct.idItem,this.selectProduct.selectBranch.id,this.selectProduct.instances,this.selectProduct.editedName).then((function(e){"update successfully"==e.message?t.$router.push("/ProductComponent"):t.errorMessage="ERROR: "+e.message})).catch((function(t){console.log(t)}))}}},o=(n(465),n(43)),d=n(131),l=n.n(d),h=n(371),m=n(431),v=n(458),f=n(434),S=n(373),_=n(472),y=n(516),C=n(517),P=(n(97),n(212),n(44),n(491),n(492),n(410)),z=n(129),x=Object(z.a)(P.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),$=n(30),w=x.extend({name:"v-img",props:{alt:String,contain:Boolean,gradient:String,lazySrc:String,position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object($.b)("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object($.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,c=img.naturalWidth;r||c?(t.naturalWidth=c,t.calculatedAspectRatio=c/r):null!=e&&setTimeout(n,e)};n()},genContent:function(){var content=x.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=x.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),k=n(493),N=n(506),R=n(455),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-row",{staticClass:"marginEdit",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8",sm:"10",md:"5",lg:"20"}},[n("v-card",{attrs:{color:"hsl(27deg 96% 68%)",dark:""}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"headline",attrs:{justify:"center"}},[n("p",{staticClass:"text-center title-edit"},[t._v(" Edit Product")])]),t._v(" "),n("v-card-subtitle",[n("p",[t._v("THÔNG TIN SẢN PHẨM BAN ĐẦU")]),t._v(" "),n("p",[t._m(0)]),t._v(" "),n("p",[t._m(1)])])],1),t._v(" "),n("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[n("v-img",{attrs:{src:"https://yt3.ggpht.com/ytc/AAUvwngY2rHWuQhwHqtH1NlnVfkog3yWCA8DP83gcdf5=s900-c-k-c0x00ffffff-no-rj"}})],1)],1)]),t._v(" "),n("v-card",{staticClass:"rounded-lg"},[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Name Product",color:"red darken-4"},model:{value:t.selectProduct.editedName,callback:function(e){t.$set(t.selectProduct,"editedName",e)},expression:"selectProduct.editedName"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-combobox",{attrs:{items:t.productSearch.branches,"item-text":"name","item-value":"id",label:"Branch",placeholder:"Select...",required:"",color:"red darken-4"},model:{value:t.selectProduct.selectBranch,callback:function(e){t.$set(t.selectProduct,"selectBranch",e)},expression:"selectProduct.selectBranch"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("nuxt-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/ProductComponent"}},[n("v-btn",{attrs:{color:"red accent-3",text:""}},[t._v("\n                            Cancel\n                        ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveDialog}},[t._v("\n                        Save\n                    ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(" Tên chi nhánh: "+t._s(t.selectProduct.selectBranch.name))])},function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(" Tên sản phẩm: "+t._s(t.selectProduct.editedName))])}],!1,null,"5bf9b678",null);e.default=component.exports;l()(component,{VApp:h.a,VAvatar:m.a,VBtn:v.a,VCard:f.a,VCardActions:S.a,VCardText:S.b,VCardTitle:S.c,VCol:_.a,VCombobox:y.a,VContainer:C.a,VImg:w,VRow:k.a,VSpacer:N.a,VTextField:R.a})}}]);