module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@vue/composition-api");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CollapseTransition", function() { return /* reexport */ external_element_ui_["CollapseTransition"]; });
__webpack_require__.d(__webpack_exports__, "Loading", function() { return /* reexport */ external_element_ui_["Loading"]; });
__webpack_require__.d(__webpack_exports__, "Pagination", function() { return /* reexport */ external_element_ui_["Pagination"]; });
__webpack_require__.d(__webpack_exports__, "Dialog", function() { return /* reexport */ external_element_ui_["Dialog"]; });
__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return /* reexport */ external_element_ui_["Autocomplete"]; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ external_element_ui_["Dropdown"]; });
__webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return /* reexport */ external_element_ui_["DropdownMenu"]; });
__webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return /* reexport */ external_element_ui_["DropdownItem"]; });
__webpack_require__.d(__webpack_exports__, "Menu", function() { return /* reexport */ external_element_ui_["Menu"]; });
__webpack_require__.d(__webpack_exports__, "Submenu", function() { return /* reexport */ external_element_ui_["Submenu"]; });
__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return /* reexport */ external_element_ui_["MenuItem"]; });
__webpack_require__.d(__webpack_exports__, "MenuItemGroup", function() { return /* reexport */ external_element_ui_["MenuItemGroup"]; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ external_element_ui_["Input"]; });
__webpack_require__.d(__webpack_exports__, "InputNumber", function() { return /* reexport */ external_element_ui_["InputNumber"]; });
__webpack_require__.d(__webpack_exports__, "Radio", function() { return /* reexport */ external_element_ui_["Radio"]; });
__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return /* reexport */ external_element_ui_["RadioGroup"]; });
__webpack_require__.d(__webpack_exports__, "RadioButton", function() { return /* reexport */ external_element_ui_["RadioButton"]; });
__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return /* reexport */ external_element_ui_["Checkbox"]; });
__webpack_require__.d(__webpack_exports__, "CheckboxButton", function() { return /* reexport */ external_element_ui_["CheckboxButton"]; });
__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return /* reexport */ external_element_ui_["CheckboxGroup"]; });
__webpack_require__.d(__webpack_exports__, "Switch", function() { return /* reexport */ external_element_ui_["Switch"]; });
__webpack_require__.d(__webpack_exports__, "Select", function() { return /* reexport */ external_element_ui_["Select"]; });
__webpack_require__.d(__webpack_exports__, "Option", function() { return /* reexport */ external_element_ui_["Option"]; });
__webpack_require__.d(__webpack_exports__, "OptionGroup", function() { return /* reexport */ external_element_ui_["OptionGroup"]; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return /* reexport */ external_element_ui_["ButtonGroup"]; });
__webpack_require__.d(__webpack_exports__, "Table", function() { return /* reexport */ external_element_ui_["Table"]; });
__webpack_require__.d(__webpack_exports__, "TableColumn", function() { return /* reexport */ external_element_ui_["TableColumn"]; });
__webpack_require__.d(__webpack_exports__, "DatePicker", function() { return /* reexport */ external_element_ui_["DatePicker"]; });
__webpack_require__.d(__webpack_exports__, "TimeSelect", function() { return /* reexport */ external_element_ui_["TimeSelect"]; });
__webpack_require__.d(__webpack_exports__, "TimePicker", function() { return /* reexport */ external_element_ui_["TimePicker"]; });
__webpack_require__.d(__webpack_exports__, "Popover", function() { return /* reexport */ external_element_ui_["Popover"]; });
__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return /* reexport */ external_element_ui_["Tooltip"]; });
__webpack_require__.d(__webpack_exports__, "MessageBox", function() { return /* reexport */ external_element_ui_["MessageBox"]; });
__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return /* reexport */ external_element_ui_["Breadcrumb"]; });
__webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return /* reexport */ external_element_ui_["BreadcrumbItem"]; });
__webpack_require__.d(__webpack_exports__, "Form", function() { return /* reexport */ external_element_ui_["Form"]; });
__webpack_require__.d(__webpack_exports__, "FormItem", function() { return /* reexport */ external_element_ui_["FormItem"]; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ external_element_ui_["Tabs"]; });
__webpack_require__.d(__webpack_exports__, "TabPane", function() { return /* reexport */ external_element_ui_["TabPane"]; });
__webpack_require__.d(__webpack_exports__, "Tag", function() { return /* reexport */ external_element_ui_["Tag"]; });
__webpack_require__.d(__webpack_exports__, "Tree", function() { return /* reexport */ external_element_ui_["Tree"]; });
__webpack_require__.d(__webpack_exports__, "Alert", function() { return /* reexport */ external_element_ui_["Alert"]; });
__webpack_require__.d(__webpack_exports__, "Notification", function() { return /* reexport */ external_element_ui_["Notification"]; });
__webpack_require__.d(__webpack_exports__, "Slider", function() { return /* reexport */ external_element_ui_["Slider"]; });
__webpack_require__.d(__webpack_exports__, "Icon", function() { return /* reexport */ external_element_ui_["Icon"]; });
__webpack_require__.d(__webpack_exports__, "Row", function() { return /* reexport */ external_element_ui_["Row"]; });
__webpack_require__.d(__webpack_exports__, "Col", function() { return /* reexport */ external_element_ui_["Col"]; });
__webpack_require__.d(__webpack_exports__, "Upload", function() { return /* reexport */ external_element_ui_["Upload"]; });
__webpack_require__.d(__webpack_exports__, "Progress", function() { return /* reexport */ external_element_ui_["Progress"]; });
__webpack_require__.d(__webpack_exports__, "Spinner", function() { return /* reexport */ external_element_ui_["Spinner"]; });
__webpack_require__.d(__webpack_exports__, "Message", function() { return /* reexport */ external_element_ui_["Message"]; });
__webpack_require__.d(__webpack_exports__, "Badge", function() { return /* reexport */ external_element_ui_["Badge"]; });
__webpack_require__.d(__webpack_exports__, "Card", function() { return /* reexport */ external_element_ui_["Card"]; });
__webpack_require__.d(__webpack_exports__, "Rate", function() { return /* reexport */ external_element_ui_["Rate"]; });
__webpack_require__.d(__webpack_exports__, "Steps", function() { return /* reexport */ external_element_ui_["Steps"]; });
__webpack_require__.d(__webpack_exports__, "Step", function() { return /* reexport */ external_element_ui_["Step"]; });
__webpack_require__.d(__webpack_exports__, "Carousel", function() { return /* reexport */ external_element_ui_["Carousel"]; });
__webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return /* reexport */ external_element_ui_["Scrollbar"]; });
__webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return /* reexport */ external_element_ui_["CarouselItem"]; });
__webpack_require__.d(__webpack_exports__, "Collapse", function() { return /* reexport */ external_element_ui_["Collapse"]; });
__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return /* reexport */ external_element_ui_["CollapseItem"]; });
__webpack_require__.d(__webpack_exports__, "Cascader", function() { return /* reexport */ external_element_ui_["Cascader"]; });
__webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return /* reexport */ external_element_ui_["ColorPicker"]; });
__webpack_require__.d(__webpack_exports__, "Transfer", function() { return /* reexport */ external_element_ui_["Transfer"]; });
__webpack_require__.d(__webpack_exports__, "Container", function() { return /* reexport */ external_element_ui_["Container"]; });
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ external_element_ui_["Header"]; });
__webpack_require__.d(__webpack_exports__, "Aside", function() { return /* reexport */ external_element_ui_["Aside"]; });
__webpack_require__.d(__webpack_exports__, "Main", function() { return /* reexport */ external_element_ui_["Main"]; });
__webpack_require__.d(__webpack_exports__, "Footer", function() { return /* reexport */ external_element_ui_["Footer"]; });
__webpack_require__.d(__webpack_exports__, "Timeline", function() { return /* reexport */ external_element_ui_["Timeline"]; });
__webpack_require__.d(__webpack_exports__, "TimelineItem", function() { return /* reexport */ external_element_ui_["TimelineItem"]; });
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* reexport */ external_element_ui_["Link"]; });
__webpack_require__.d(__webpack_exports__, "Divider", function() { return /* reexport */ external_element_ui_["Divider"]; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ external_element_ui_["Image"]; });
__webpack_require__.d(__webpack_exports__, "Calendar", function() { return /* reexport */ external_element_ui_["Calendar"]; });
__webpack_require__.d(__webpack_exports__, "Backtop", function() { return /* reexport */ external_element_ui_["Backtop"]; });
__webpack_require__.d(__webpack_exports__, "InfiniteScroll", function() { return /* reexport */ external_element_ui_["InfiniteScroll"]; });
__webpack_require__.d(__webpack_exports__, "PageHeader", function() { return /* reexport */ external_element_ui_["PageHeader"]; });
__webpack_require__.d(__webpack_exports__, "CascaderPanel", function() { return /* reexport */ external_element_ui_["CascaderPanel"]; });
__webpack_require__.d(__webpack_exports__, "Avatar", function() { return /* reexport */ external_element_ui_["Avatar"]; });
__webpack_require__.d(__webpack_exports__, "Drawer", function() { return /* reexport */ external_element_ui_["Drawer"]; });
__webpack_require__.d(__webpack_exports__, "Popconfirm", function() { return /* reexport */ external_element_ui_["Popconfirm"]; });

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(4);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace"
var es_string_replace_ = __webpack_require__(7);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(8);

// EXTERNAL MODULE: external "element-ui/lib/locale"
var locale_ = __webpack_require__(1);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=template&id=015de462&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-button",
    _vm._g(
      _vm._b({ attrs: { type: _vm.type } }, "el-button", _vm.$attrs, false),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=template&id=015de462&

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=script&lang=ts&











/* harmony default export */ var Buttonvue_type_script_lang_ts_ = (Object(composition_api_["defineComponent"])({
  name: 'OButton',
  components: {
    ElButton: external_element_ui_["Button"]
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}));

// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Buttonvue_type_script_lang_ts_ = (Buttonvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Button.vue





/* normalize component */

var component = normalizeComponent(
  components_Buttonvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Button.vue"
/* harmony default export */ var Button = (component.exports);
// CONCATENATED MODULE: ./src/lib-main.js







/* ラップされたコンポーネント */


var components = [external_element_ui_["Pagination"], external_element_ui_["Dialog"], external_element_ui_["Autocomplete"], external_element_ui_["Dropdown"], external_element_ui_["DropdownMenu"], external_element_ui_["DropdownItem"], external_element_ui_["Menu"], external_element_ui_["Submenu"], external_element_ui_["MenuItem"], external_element_ui_["MenuItemGroup"], external_element_ui_["Input"], external_element_ui_["InputNumber"], external_element_ui_["Radio"], external_element_ui_["RadioGroup"], external_element_ui_["RadioButton"], external_element_ui_["Checkbox"], external_element_ui_["CheckboxButton"], external_element_ui_["CheckboxGroup"], external_element_ui_["Switch"], external_element_ui_["Select"], external_element_ui_["Option"], external_element_ui_["OptionGroup"], Button, external_element_ui_["ButtonGroup"], external_element_ui_["Table"], external_element_ui_["TableColumn"], external_element_ui_["DatePicker"], external_element_ui_["TimeSelect"], external_element_ui_["TimePicker"], external_element_ui_["Popover"], external_element_ui_["Tooltip"], external_element_ui_["Breadcrumb"], external_element_ui_["BreadcrumbItem"], external_element_ui_["Form"], external_element_ui_["FormItem"], external_element_ui_["Tabs"], external_element_ui_["TabPane"], external_element_ui_["Tag"], external_element_ui_["Tree"], external_element_ui_["Alert"], external_element_ui_["Slider"], external_element_ui_["Icon"], external_element_ui_["Row"], external_element_ui_["Col"], external_element_ui_["Upload"], external_element_ui_["Progress"], external_element_ui_["Spinner"], external_element_ui_["Badge"], external_element_ui_["Card"], external_element_ui_["Rate"], external_element_ui_["Steps"], external_element_ui_["Step"], external_element_ui_["Carousel"], external_element_ui_["Scrollbar"], external_element_ui_["CarouselItem"], external_element_ui_["Collapse"], external_element_ui_["CollapseItem"], external_element_ui_["Cascader"], external_element_ui_["ColorPicker"], external_element_ui_["Transfer"], external_element_ui_["Container"], external_element_ui_["Header"], external_element_ui_["Aside"], external_element_ui_["Main"], external_element_ui_["Footer"], external_element_ui_["Timeline"], external_element_ui_["TimelineItem"], external_element_ui_["Link"], external_element_ui_["Divider"], external_element_ui_["Image"], external_element_ui_["Calendar"], external_element_ui_["Backtop"], external_element_ui_["PageHeader"], external_element_ui_["CascaderPanel"], external_element_ui_["Avatar"], external_element_ui_["Drawer"], external_element_ui_["Popconfirm"], external_element_ui_["CollapseTransition"]];
components.forEach(function (component) {
  component.name = component.name.replace(/^El/, 'O');
});

var lib_main_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  locale_default.a.use(opts.locale);
  locale_default.a.i18n(opts.i18n);
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
  Vue.use(external_element_ui_["InfiniteScroll"]);
  Vue.use(external_element_ui_["Loading"].directive);
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  Vue.prototype.$loading = external_element_ui_["Loading"].service;
  Vue.prototype.$msgbox = external_element_ui_["MessageBox"];
  Vue.prototype.$alert = external_element_ui_["MessageBox"].alert;
  Vue.prototype.$confirm = external_element_ui_["MessageBox"].confirm;
  Vue.prototype.$prompt = external_element_ui_["MessageBox"].prompt;
  Vue.prototype.$notify = external_element_ui_["Notification"];
  Vue.prototype.$message = external_element_ui_["Message"];
};

/* harmony default export */ var lib_main = __webpack_exports__["default"] = ({
  version: '1.0.0',
  locale: locale_default.a.use,
  i18n: locale_default.a.i18n,
  install: lib_main_install
});


/***/ })
/******/ ])["default"];