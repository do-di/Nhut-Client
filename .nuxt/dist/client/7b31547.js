(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{376:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return m}));var r="http://api.dongdinh.com",c=n(64).default;function d(e,t){return c.post(r+"/updateSequence/"+t,e).then((function(e){return e.data}))}function o(){return c.get(r+"/getAllBranches").then((function(e){return e.data}))}function l(e,t,n){var d;return"Product"==n?d=c.post(r+"/search"+n,{name:e,branch_id:t}):"Branch"==n&&(d=c.post(r+"/search"+n,{name:e})),d.then((function(e){return e.data}))}function h(e,t){var n;return("Product"==t||"Branch"==t)&&(n=c.post(r+"/delete"+t,{id:e})),n.then((function(e){return e.data}))}function m(e,t,n,d){var o;return"Product"==n&&(o=c.post(r+"/update"+n,{id:e,branch_id:t,name:d}),console.log(o)),o.then((function(e){return e.data}))}},401:function(e,t,n){},424:function(e,t,n){"use strict";n(401)},426:function(e,t,n){"use strict";n.r(t);n(378),n(36),n(212),n(451),n(67);var r=n(376),c={props:["disableData","arr","arrClone","callSearch","header","instances","notFoundData","branches"],data:function(){return{dialog:!1,dialogDelete:!1,disableButton:!0,errorMessage:"",formHasErrors:!1,updateProducts:[],idError:0,editedIndex:-1,editedItem:{id:0,sequence:"",name:0,branch_name:0,created_at:0},defaultItem:{id:0,sequence:"",name:0,branch_name:0,created_at:0},selectBranch:{}}},computed:{rules:function(){var e=[];return e.push((function(e){return 1==Number.isInteger(Number(e))||"Integer"})),e.push((function(e){return!!e||"Required"})),e},formTitle:function(){return-1===this.editedIndex?"New ":"Edit "}},mounted:function(){},methods:{resetTable:function(){this.errorMessage="",this.idError=0},editItem:function(e){this.editedIndex=this.arr.indexOf(e),this.editedItem=Object.assign({},e),this.selectBranch={name:this.editedItem.branch_name,id:this.editedItem.branch_id},this.dialog=!0},getName:function(e){this.editedIndex=this.arr.indexOf(e),this.editedItem=Object.assign({},e);this.$store.state.productSearch.branch;this.selectBranch={name:this.editedItem.branch_name,id:this.editedItem.branch_id},this.$store.state.selectProduct={idItem:this.editedItem.id,selectBranch:this.selectBranch,instances:this.instances,editedName:this.editedItem.name},this.$store.state.productSearch.branches=this.branches},deleteItem:function(e){this.editedIndex=this.arr.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},customColor:function(e){return"color-background"},closeDialog:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editIndex=-1}))},deleteItemConfirm:function(){console.log(this.editedItem.id),Object(r.a)(this.editedItem.id,this.instances),this.arr.splice(this.editedIndex,1),this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({}.this.defaultItem),e.editIndex=-1}))},saveDialog:function(){if(this.editedIndex>-1){var e=this;Object(r.e)(e.editedItem.id,e.selectBranch.id,e.instances,e.editedItem.name).then((function(t){"update successfully"==t.message?e.callSearch():e.errorMessage="ERROR: "+t.message})).catch((function(e){console.log(e)}))}else this.arr.push(this.editedItem);this.closeDialog()},updateBranch:function(){this.updateProducts=[],this.idError=0;var e=this;e.arr.forEach((function(t,n,r){e.arr[n].sequence!=e.arrClone[n].sequence&&e.arr[n].id==e.arrClone[n].id&&e.updateProducts.push({id:e.arr[n].id,Sequence:e.arr[n].sequence})}));var t=JSON.stringify(e.updateProducts);Object(r.d)(t,this.instances).then((function(t){"update successfully"==t.message?e.callSearch():e.errorMessage="ERROR: "+t.message,t.id&&(e.idError=t.id)})).catch((function(e){console.log(e)}))}}},d=(n(424),n(43)),o=n(131),l=n.n(o),h=n(458),m=n(434),f=n(373),v=n(472),x=n(516),I=n(517),_=n(508),k=n(512),C=n(507),B=n(440),D=n(493),y=n(506),O=n(455),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.disableData?n("v-form",{attrs:{cols:"12",sm:"10",md:"12",lg:"30","lazy-validation":""},model:{value:e.disableButton,callback:function(t){e.disableButton=t},expression:"disableButton"}},[n("div",{staticClass:"text-right"},[n("v-btn",{attrs:{depressed:"",color:"success",disabled:!e.disableButton,id:"btn"},on:{click:function(t){return e.updateBranch()}}},[e._v("\n                  Update sequence\n        ")])],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1 paddingForm my-border",attrs:{headers:e.header,items:e.arr,"items-per-page":5,mobileBreakpoint:0},scopedSlots:e._u([{key:"item.sequence",fn:function(t){var r=t.item;return[r.id==e.idError?n("td",{attrs:{width:"125"}},[n("v-text-field",{ref:"item",attrs:{type:"number",min:"0","error-messages":e.errorMessage,rules:e.rules},on:{change:function(t){return e.resetTable()}},model:{value:r.sequence,callback:function(t){e.$set(r,"sequence",t)},expression:"item.sequence"}})],1):n("td",{attrs:{width:"125"}},[n("v-text-field",{ref:"item",attrs:{type:"number",min:"0",rules:e.rules},model:{value:r.sequence,callback:function(t){e.$set(r,"sequence",t)},expression:"item.sequence"}})],1)]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("nuxt-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{name:"EditItemComponent"}}},[n("v-btn",{attrs:{color:"light-blue accent-3",fab:"",small:"",dark:""},on:{click:function(t){return e.getName(r)}}},[n("v-icon",[e._v("mdi-pencil")])],1)],1),e._v(" "),n("v-btn",{attrs:{color:"primary",fab:"",small:"",dark:""},on:{click:function(t){return e.editItem(r)}}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{attrs:{color:"error",fab:"",small:"",dark:""},on:{click:function(t){return e.deleteItem(r)}}},[n("v-icon",[e._v("mdi-trash-can-outline")])],1)]}}],null,!1,309758652)})],1):e._e(),e._v(" "),e.notFoundData?n("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"30"}},[n("h3",[e._v("Không tìm thấy data!")])]):e._e(),e._v(" "),n("v-dialog",{staticClass:"rounded-xl",attrs:{"max-width":"750px",justify:"center"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{staticClass:"rounded-lg"},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle+e.instances))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Name Product"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-combobox",{attrs:{items:e.branches,"item-text":"name","item-value":"id",label:"Branch",placeholder:"Select...",required:""},model:{value:e.selectBranch,callback:function(t){e.selectBranch=t},expression:"selectBranch"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red accent-3",text:""},on:{click:e.closeDialog}},[e._v("\n                    Cancel\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveDialog}},[e._v("\n                    Save\n                ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"620px",jutify:""},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",{staticClass:"rounded-lg"},[n("v-card-title",{staticClass:"headline",attrs:{color:"red accent-3 "}},[e._v("\n                Are you sure you want to delete this "+e._s(e.instances)+" ?\n            ")]),e._v(" "),n("v-card-actions",{staticClass:"pa-2"},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red accent-3",text:""},on:{click:e.closeDelete}},[e._v("\n                    Cancel\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("\n                    Confirm\n                ")])],1)],1)],1),e._v(" "),n("nuxt")],1)}),[],!1,null,"4ddc2f88",null);t.default=component.exports;l()(component,{VBtn:h.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VCombobox:x.a,VContainer:I.a,VDataTable:_.a,VDialog:k.a,VForm:C.a,VIcon:B.a,VRow:D.a,VSpacer:y.a,VTextField:O.a})}}]);