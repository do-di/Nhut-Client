exports.ids = [10];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "A"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "A"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "A"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/inspire.vue?vue&type=template&id=d8189a06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-row',[_c('v-col',{staticClass:"text-center"},[_c('img',{staticClass:"mb-5",attrs:{"src":"/v.png","alt":"Vuetify.js"}}),_vm._v(" "),_c('blockquote',{staticClass:"blockquote"},[_vm._v("\n      “First, solve the problem. Then, write the code.”\n      "),_c('footer',[_c('small',[_c('em',[_vm._v("—John Johnson")])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/inspire.vue?vue&type=template&id=d8189a06&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(118);

// CONCATENATED MODULE: ./pages/inspire.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f6b4b77"
  
)

/* harmony default export */ var inspire = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function mergeData() {
  const mergeTarget = {};
  let i = arguments.length;
  let prop;
  let event; // Allow for variadic argument length.

  while (i--) {
    // Iterate through the data properties and execute merge strategies
    // Object.keys eliminates need for hasOwnProperty call
    for (prop of Object.keys(arguments[i])) {
      switch (prop) {
        // Array merge strategy (array concatenation)
        case 'class':
        case 'style':
        case 'directives':
          if (!Array.isArray(mergeTarget[prop])) {
            mergeTarget[prop] = [];
          } // Repackaging in an array allows Vue runtime
          // to merge class/style bindings regardless of type.


          mergeTarget[prop] = mergeTarget[prop].concat(arguments[i][prop]);
          break;
        // Space delimited string concatenation strategy

        case 'staticClass':
          if (!arguments[i][prop]) {
            break;
          }

          if (mergeTarget[prop] === undefined) {
            mergeTarget[prop] = '';
          }

          if (mergeTarget[prop]) {
            // Not an empty string, so concatenate
            mergeTarget[prop] += ' ';
          }

          mergeTarget[prop] += arguments[i][prop].trim();
          break;
        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.

        case 'on':
        case 'nativeOn':
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          const listeners = mergeTarget[prop];

          for (event of Object.keys(arguments[i][prop] || {})) {
            // Concat function to array of functions if callback present.
            if (listeners[event]) {
              // Insert current iteration data in beginning of merged array.
              listeners[event] = Array().concat( // eslint-disable-line
              listeners[event], arguments[i][prop][event]);
            } else {
              // Straight assign.
              listeners[event] = arguments[i][prop][event];
            }
          }

          break;
        // Object merge strategy

        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          mergeTarget[prop] = { ...arguments[i][prop],
            ...mergeTarget[prop]
          };
          break;
        // Reassignment strategy (no merge)

        case 'slot':
        case 'key':
        case 'ref':
        case 'tag':
        case 'show':
        case 'keepAlive':
        default:
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = arguments[i][prop];
          }

      }
    }
  }

  return mergeTarget;
}

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "G7GmTjAxenDrDLYche-gJ",
	"container--fluid": "_1AC-kuiriCAYQH4iZ8sFae",
	"row": "_3vX0R_QpVOifGzrJgnpZKO",
	"row--dense": "_3D9JTc9rkXgZgo0OM6bkLG",
	"col": "a3YnjXpMvP2O6lz9I296h",
	"no-gutters": "_2_XrOB7fkSflWx9kQ4QLQQ",
	"col-1": "ebqapUifc4IVy-4fjGw9k",
	"col-2": "_2DKYesa7vAfib_Rk9WiRGA",
	"col-3": "_3c12K-Gn5oiMOn6R0vWfAr",
	"col-4": "Sf2PUTMLUQQ47ksSthAH",
	"col-5": "D4DACv7rsm_JQiKzRjctQ",
	"col-6": "_29TnFepp2wLOO2osGQPcg_",
	"col-7": "_3eDlIbwexbzZF911CI7ITr",
	"col-8": "_2soBwLA3qN_MLR7j-eicgp",
	"col-9": "rq3hq-Lm0Emh5yinnRIaP",
	"col-10": "_1WQUygYJpWndFUz2mZqZSL",
	"col-11": "_3v87N2BiwS21PEs0mtf8Py",
	"col-12": "_3HZ88ZGXmxyuSBSIphfrgX",
	"col-auto": "_1F10sTHJVKf5zA6M3rpFJb",
	"col-lg": "_1VRtsaFxNMRgxqXAF8Dqms",
	"col-lg-1": "_1fhOmzmvfyMS8UksHPrSyX",
	"col-lg-2": "Mu3CVHo_nnfxhNO7_EGb7",
	"col-lg-3": "_1eZ4NKdlwb7LGXsx6naMJb",
	"col-lg-4": "_1z4AaB5M7e-BRATmBR_QTN",
	"col-lg-5": "_2WCUzkWCA-Dh3bB9hUSrs1",
	"col-lg-6": "_1wdt6v1EZii7FvlqftNRI7",
	"col-lg-7": "_1Gju_d1NAIP-ASst8lwbb_",
	"col-lg-8": "_2zsee8MRWdNoGzVDqo-99I",
	"col-lg-9": "_2BC-9v_qvHlYIWMldSY4PG",
	"col-lg-10": "_1NLXteg02UdfP3YgQcHAq_",
	"col-lg-11": "tJhsKk633Dyko4K3Bc_e4",
	"col-lg-12": "_1svxusROvnRNEd_5a-WXfQ",
	"col-lg-auto": "_2B3bwpvCEz_TWtRUqVxFQV",
	"col-md": "_1_5mk8lppPt7_KDh4KI5vZ",
	"col-md-1": "_3os6d2bUjCYfNMMdrnn4H2",
	"col-md-2": "_1M-JCa8Kf8Vuh0cSHwCUR_",
	"col-md-3": "LeJ2IyVzxnJDo9mjEH4J4",
	"col-md-4": "_1iOYCQdrNzuRhlDYWJ4zfz",
	"col-md-5": "_31Dcoh1yekhlBw-htbuUv7",
	"col-md-6": "_3Dcn-ytdm8MIJHDLUPhqOa",
	"col-md-7": "UuTq9ReDyzRKtOZ5_YAoO",
	"col-md-8": "_3alQTRWZI70xntGCKP4mL0",
	"col-md-9": "_1rLNB2suD7j0lqdfwcqg7G",
	"col-md-10": "_3YRfzNLUxIwb9G9OBooS3Q",
	"col-md-11": "_1yVdLZzGAES4OtZQKLJYWa",
	"col-md-12": "_2FCzPN4orNy-SBAxcLNnn2",
	"col-md-auto": "_1nBR3__JPWW8wqLQhVOZsx",
	"col-sm": "_1EN5Vw6lwL0z5U9lZ2hjbU",
	"col-sm-1": "_2Ckmb9WRI1oPn24SlESlv4",
	"col-sm-2": "_36gwdCG_wG5ipKMre6ii1M",
	"col-sm-3": "H0BmA1JsSBF0k-RdKL1PK",
	"col-sm-4": "neD357YigWa8674IxUEjU",
	"col-sm-5": "_2KrADEdMEYAa_93533RF07",
	"col-sm-6": "_2nXZ_57MvhvseqPOV-DE9s",
	"col-sm-7": "_2mrO5tfCW63BrMBvVcLSoo",
	"col-sm-8": "_14ga1IthpxmY-chURUgAGi",
	"col-sm-9": "_1fENdUyCEm7m1wzXWqTeCS",
	"col-sm-10": "Arq_ZySr6jmKz5AcvPZ7r",
	"col-sm-11": "_8fQ4jyhgUazPl4Zo6lvTt",
	"col-sm-12": "_2xSIQT7WDECwllw6AE_Y6p",
	"col-sm-auto": "_2wGOMfljQliUgUDaak7Jr7",
	"col-xl": "_3ooWsf4LB1k95o-HaFmKhU",
	"col-xl-1": "_3Ny-dOec9i2dzggppfp0dC",
	"col-xl-2": "_19POBGXk_L2L_yt49gYbjq",
	"col-xl-3": "_2espLuQ_dpnaf41I5sxD-H",
	"col-xl-4": "_1e31m8RpMWd4UYnFZ5naym",
	"col-xl-5": "_1FVnh9snGpMJNyIyWpqhp5",
	"col-xl-6": "_20e9ZKMX7Z7Bt3HWHeAjYr",
	"col-xl-7": "_1jDLK-dUbdaohMncvlQnw9",
	"col-xl-8": "_1--k3_Vr_lbMYKPWvn_biu",
	"col-xl-9": "_3gsQi-1ShIq4j-ti3m0UB",
	"col-xl-10": "_1x2i9EdjDH39-S-P-6NFTx",
	"col-xl-11": "_29vBhp-tU_06I7hzhjXfuM",
	"col-xl-12": "yjHlWYSIVm-Ai1qH9jZVd",
	"col-xl-auto": "_3s3iab2JfyHUm2CpyVY-MP",
	"offset-1": "_16ntwtpkq-7zajEzoo6wLl",
	"offset-2": "l7wOKr8L5xeuaRsaYal1Q",
	"offset-3": "_3YBlzP9HI1vYSCgahvjdoa",
	"offset-4": "_3mS0cmKhu6lCmu-pKgr5g0",
	"offset-5": "FPBOnwGsShIDyu5NWppwf",
	"offset-6": "jzQujCqcBI949plrqPF1X",
	"offset-7": "wIJx2iq8_NKhIjnL4Xzan",
	"offset-8": "_3Kzl8b95ACXomZMleXX8ZE",
	"offset-9": "_3gfqhI1fKt1Z74f1DUqPdD",
	"offset-10": "cgm4GkSRBeD-H6LkTz1py",
	"offset-11": "_2zAmvuzLQWOQlvxZ4D7OFw",
	"offset-sm-0": "_39x5_j7yBtsBzJBwrGft2b",
	"offset-sm-1": "_1l_TZp3QyWfmu5MV96iLJu",
	"offset-sm-2": "Be88AZ7IC6Qe7Cu58G_cF",
	"offset-sm-3": "_12WUq3wPP6WsoMbBLz10hb",
	"offset-sm-4": "_2Fh9qHP0YNapfh8LF1fX8C",
	"offset-sm-5": "KQsIyJIiyxEcH_lbTcmFG",
	"offset-sm-6": "TWw1G12b7ALglernIK925",
	"offset-sm-7": "UO3z56UtUE4OpDZe_cOrz",
	"offset-sm-8": "afuzNBtNvXmz331HNImdF",
	"offset-sm-9": "_1NFk6YPpIj_0-GvYsOe4Nf",
	"offset-sm-10": "_1LoS0bK-CEhvjCbnGh5U64",
	"offset-sm-11": "_2Ti0sEnbO5QutBYWRg5clo",
	"offset-md-0": "_32t9YHHjn7wbo8G80_IBNG",
	"offset-md-1": "XOTjwcvGHZkjKrC2wB-yo",
	"offset-md-2": "_2kS_ytqz1rDNX37Nw_PFqE",
	"offset-md-3": "EaUKwr_93QaH-c0Lf4XfT",
	"offset-md-4": "_1_lWtN09bCN7sCVKp3eGgI",
	"offset-md-5": "_2ThbClvWPHnylu8DYJqFs_",
	"offset-md-6": "_1OFgG4DgtU8Zf46OWTioTr",
	"offset-md-7": "_1z5b7FmDCZx8dWqLf4NoYi",
	"offset-md-8": "MfDypmxDo0p9gP1YFHcBQ",
	"offset-md-9": "_1mbmc6EjaxenuCyA0UPvm3",
	"offset-md-10": "c7ajK72e08mXJOnH-Co9G",
	"offset-md-11": "_3heMRX5mt2tvP2jaxZykcP",
	"offset-lg-0": "bILkuIIpImka3d7MXQkMW",
	"offset-lg-1": "M8IX86zUEksfvwwdGCFv4",
	"offset-lg-2": "_3r0qeczJLjeEoJzUhy5ZCP",
	"offset-lg-3": "_1ICCl8toWIPYJseZu178y0",
	"offset-lg-4": "_1haHtaN2JSPID1CnVlP26_",
	"offset-lg-5": "uRfR7p_yop7k8jkQahjWI",
	"offset-lg-6": "agLh7IS4nmgUg2Dq-D_a8",
	"offset-lg-7": "_1_CDQIbq-PuDlBvZQ5JF-U",
	"offset-lg-8": "_17LctSiWx71dRC6lCrya3X",
	"offset-lg-9": "_1f-qLIqU13V3tGP1rbHl8X",
	"offset-lg-10": "_2qLFEGh8vFEaW88JHrlwFo",
	"offset-lg-11": "aZcRnFmq9-Y_9THQsvi7a",
	"offset-xl-0": "H-4YWgYP6dZDngQfXx75L",
	"offset-xl-1": "_3Y8wTXGfdSwLgS7C1lRu6u",
	"offset-xl-2": "_1h0LMQ7HfVRinMPgU8nNLX",
	"offset-xl-3": "_2i_H0lXewDB3cMafRhW-NB",
	"offset-xl-4": "_1cJ6JyH4BfPIyDgbzyKYTx",
	"offset-xl-5": "_1U3uHqjYFYOss5wqnU0UOt",
	"offset-xl-6": "_39rQfKe262NK2W2Kbpf1jU",
	"offset-xl-7": "_242vUioHoUp_ng8gw-q2Kc",
	"offset-xl-8": "_11TJiEkPsAnrQbpi6XwcUB",
	"offset-xl-9": "_3__vWePETyGNRebqPeUmq0",
	"offset-xl-10": "_2kn3RGAftYG1Jwcqk69HoD",
	"offset-xl-11": "_1CX6UjSYnbkbhcLy69Uv7V"
};


/***/ })

};;
//# sourceMappingURL=inspire.js.map