exports.ids = [3];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Source.vue?vue&type=template&id=2358cda9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$fetchState.pending)?_c('p',[_vm._ssrNode("Fetching mountains...")],2):(_vm.$fetchState.error)?_c('p',[_vm._ssrNode("An error occurred :(")]):_c('div',[_vm._ssrNode("<h1>"+_vm._ssrEscape("Nuxt Mountains "+_vm._s(_vm.hello))+"</h1> <ul>"+(_vm._ssrList((_vm.mountains),function(mountain){return ("<li>"+_vm._ssrEscape(_vm._s(mountain.title))+"</li>")}))+"</ul> <button>Refresh</button> <button>Thêm</button> "),_c('nuxt')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Source.vue?vue&type=template&id=2358cda9&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Source.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Sourcevue_type_script_lang_js_ = ({
  data() {
    return {
      mountains: [],
      hello: 'HelloWorld'
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      counter: state => state.counter,
      mountainsState: state => state.mountains
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])(['increment', 'changeMoutains']),

    AddEvent() {
      this.increment();
    }

  },

  async fetch() {
    var vm = this;
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then(res => res.json());
    this.$store.state.mountains = this.mountains;
  }

});
// CONCATENATED MODULE: ./components/Source.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sourcevue_type_script_lang_js_ = (Sourcevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Source.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sourcevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c0481314"
  
)

/* harmony default export */ var Source = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=source.js.map