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
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.array.every"
var es_array_every_ = __webpack_require__(26);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(41);

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__(43);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(11);

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of"
var es_array_index_of_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace"
var es_string_replace_ = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/tabs/src/tab-bar.vue?vue&type=template&id=8daafe04&
var tab_barvue_type_template_id_8daafe04_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "el-tabs__active-bar",
    class: "is-" + _vm.rootTabs.tabPosition,
    style: _vm.barStyle
  })
}
var staticRenderFns = []
tab_barvue_type_template_id_8daafe04_render._withStripped = true


// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tab-bar.vue?vue&type=template&id=8daafe04&

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/tabs/src/tab-bar.vue?vue&type=script&lang=js&





//
//
//

/* harmony default export */ var tab_barvue_type_script_lang_js_ = ({
  name: 'TabBar',
  props: {
    tabs: Array
  },
  inject: ['rootTabs'],
  computed: {
    barStyle: {
      get: function get() {
        var _this = this;

        var style = {};
        var offset = 0;
        var tabSize = 0;
        var sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
        var sizeDir = sizeName === 'width' ? 'x' : 'y';

        var firstUpperCase = function firstUpperCase(str) {
          return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
            return L.toUpperCase();
          });
        };

        this.tabs.every(function (tab, index) {
          var $el = Object(util_["arrayFind"])(_this.$parent.$refs.tabs || [], function (t) {
            return t.id.replace('tab-', '') === tab.paneName;
          });

          if (!$el) {
            return false;
          }

          if (!tab.active) {
            offset += $el["client".concat(firstUpperCase(sizeName))];
            return true;
          } else {
            tabSize = $el["client".concat(firstUpperCase(sizeName))];
            var tabStyles = window.getComputedStyle($el);

            if (sizeName === 'width' && _this.tabs.length > 1) {
              tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
            }

            if (sizeName === 'width') {
              offset += parseFloat(tabStyles.paddingLeft);
            }

            return false;
          }
        });
        var transform = "translate".concat(firstUpperCase(sizeDir), "(").concat(offset, "px)");
        style[sizeName] = tabSize + 'px';
        style.transform = transform;
        style.msTransform = transform;
        style.webkitTransform = transform;
        return style;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tab-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_barvue_type_script_lang_js_ = (tab_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tab-bar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_tab_barvue_type_script_lang_js_,
  tab_barvue_type_template_id_8daafe04_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/element-ui/packages/tabs/src/tab-bar.vue"
/* harmony default export */ var tab_bar = (component.exports);
// EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/tabs/src/tab-nav.vue?vue&type=script&lang=js&









function noop() {}

var tab_navvue_type_script_lang_js_firstUpperCase = function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
};

/* harmony default export */ var tab_navvue_type_script_lang_js_ = ({
  name: 'TabNav',
  components: {
    TabBar: tab_bar
  },
  inject: ['rootTabs'],
  props: {
    panes: Array,
    currentName: String,
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: noop
    },
    onTabRemove: {
      type: Function,
      default: noop
    },
    type: String,
    stretch: Boolean
  },
  data: function data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false,
      focusable: true
    };
  },
  computed: {
    navStyle: function navStyle() {
      var dir = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y';
      return {
        transform: "translate".concat(dir, "(-").concat(this.navOffset, "px)")
      };
    },
    sizeName: function sizeName() {
      return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
    }
  },
  methods: {
    scrollPrev: function scrollPrev() {
      var containerSize = this.$refs.navScroll["offset".concat(tab_navvue_type_script_lang_js_firstUpperCase(this.sizeName))];
      var currentOffset = this.navOffset;
      if (!currentOffset) return;
      var newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      this.navOffset = newOffset;
    },
    scrollNext: function scrollNext() {
      var navSize = this.$refs.nav["offset".concat(tab_navvue_type_script_lang_js_firstUpperCase(this.sizeName))];
      var containerSize = this.$refs.navScroll["offset".concat(tab_navvue_type_script_lang_js_firstUpperCase(this.sizeName))];
      var currentOffset = this.navOffset;
      if (navSize - currentOffset <= containerSize) return;
      var newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      this.navOffset = newOffset;
    },
    scrollToActiveTab: function scrollToActiveTab() {
      if (!this.scrollable) return;
      var nav = this.$refs.nav;
      var activeTab = this.$el.querySelector('.is-active');
      if (!activeTab) return;
      var navScroll = this.$refs.navScroll;
      var isHorizontal = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1;
      var activeTabBounding = activeTab.getBoundingClientRect();
      var navScrollBounding = navScroll.getBoundingClientRect();
      var maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      var currentOffset = this.navOffset;
      var newOffset = currentOffset;

      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }

        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }

        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }

      newOffset = Math.max(newOffset, 0);
      this.navOffset = Math.min(newOffset, maxOffset);
    },
    update: function update() {
      if (!this.$refs.nav) return;
      var sizeName = this.sizeName;
      var navSize = this.$refs.nav["offset".concat(tab_navvue_type_script_lang_js_firstUpperCase(sizeName))];
      var containerSize = this.$refs.navScroll["offset".concat(tab_navvue_type_script_lang_js_firstUpperCase(sizeName))];
      var currentOffset = this.navOffset;

      if (containerSize < navSize) {
        var _currentOffset = this.navOffset;
        this.scrollable = this.scrollable || {};
        this.scrollable.prev = _currentOffset;
        this.scrollable.next = _currentOffset + containerSize < navSize;

        if (navSize - _currentOffset < containerSize) {
          this.navOffset = navSize - containerSize;
        }
      } else {
        this.scrollable = false;

        if (currentOffset > 0) {
          this.navOffset = 0;
        }
      }
    },
    changeTab: function changeTab(e) {
      var keyCode = e.keyCode;
      var nextIndex;
      var currentIndex, tabList;

      if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
        // 左右上下键更换tab
        tabList = e.currentTarget.querySelectorAll('[role=tab]');
        currentIndex = Array.prototype.indexOf.call(tabList, e.target);
      } else {
        return;
      }

      if (keyCode === 37 || keyCode === 38) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        // right
        if (currentIndex < tabList.length - 1) {
          // not last
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }

      tabList[nextIndex].focus(); // 改变焦点元素

      tabList[nextIndex].click(); // 选中下一个tab

      this.setFocus();
    },
    setFocus: function setFocus() {
      if (this.focusable) {
        this.isFocus = true;
      }
    },
    removeFocus: function removeFocus() {
      this.isFocus = false;
    },
    visibilityChangeHandler: function visibilityChangeHandler() {
      var _this = this;

      var visibility = document.visibilityState;

      if (visibility === 'hidden') {
        this.focusable = false;
      } else if (visibility === 'visible') {
        setTimeout(function () {
          _this.focusable = true;
        }, 50);
      }
    },
    windowBlurHandler: function windowBlurHandler() {
      this.focusable = false;
    },
    windowFocusHandler: function windowFocusHandler() {
      var _this2 = this;

      setTimeout(function () {
        _this2.focusable = true;
      }, 50);
    }
  },
  updated: function updated() {
    this.update();
  },
  render: function render(h) {
    var _this3 = this;

    var type = this.type,
        panes = this.panes,
        editable = this.editable,
        stretch = this.stretch,
        onTabClick = this.onTabClick,
        onTabRemove = this.onTabRemove,
        navStyle = this.navStyle,
        scrollable = this.scrollable,
        scrollNext = this.scrollNext,
        scrollPrev = this.scrollPrev,
        changeTab = this.changeTab,
        setFocus = this.setFocus,
        removeFocus = this.removeFocus;
    var scrollBtn = scrollable ? [h("span", {
      "class": ['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled'],
      "on": {
        "click": scrollPrev
      }
    }, [h("i", {
      "class": "el-icon-arrow-left"
    })]), h("span", {
      "class": ['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled'],
      "on": {
        "click": scrollNext
      }
    }, [h("i", {
      "class": "el-icon-arrow-right"
    })])] : null;

    var tabs = this._l(panes, function (pane, index) {
      var _ref;

      var tabName = pane.name || pane.index || index;
      var closable = pane.isClosable || editable;
      pane.index = "".concat(index);
      var btnClose = closable ? h("span", {
        "class": "el-icon-close",
        "on": {
          "click": function click(ev) {
            onTabRemove(pane, ev);
          }
        }
      }) : null;
      var tabLabelContent = pane.$slots.label || pane.label;
      var tabindex = pane.active ? 0 : -1;
      return h("div", {
        "class": (_ref = {
          'el-tabs__item': true
        }, Object(defineProperty["a" /* default */])(_ref, "is-".concat(_this3.rootTabs.tabPosition), true), Object(defineProperty["a" /* default */])(_ref, 'is-active', pane.active), Object(defineProperty["a" /* default */])(_ref, 'is-disabled', pane.disabled), Object(defineProperty["a" /* default */])(_ref, 'is-closable', closable), Object(defineProperty["a" /* default */])(_ref, 'is-focus', _this3.isFocus), _ref),
        "attrs": {
          "id": "tab-".concat(tabName),
          "aria-controls": "pane-".concat(tabName),
          "role": "tab",
          "aria-selected": pane.active,
          "tabindex": tabindex
        },
        "key": "tab-".concat(tabName),
        "ref": "tabs",
        "refInFor": true,
        "on": {
          "focus": function focus() {
            setFocus();
          },
          "blur": function blur() {
            removeFocus();
          },
          "click": function click(ev) {
            removeFocus();
            onTabClick(pane, tabName, ev);
          },
          "keydown": function keydown(ev) {
            if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) {
              onTabRemove(pane, ev);
            }
          }
        }
      }, [tabLabelContent, btnClose]);
    });

    return h("div", {
      "class": ['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : '', "is-".concat(this.rootTabs.tabPosition)]
    }, [scrollBtn, h("div", {
      "class": ['el-tabs__nav-scroll'],
      "ref": "navScroll"
    }, [h("div", {
      "class": ['el-tabs__nav', "is-".concat(this.rootTabs.tabPosition), stretch && ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'is-stretch' : ''],
      "ref": "nav",
      "style": navStyle,
      "attrs": {
        "role": "tablist"
      },
      "on": {
        "keydown": changeTab
      }
    }, [!type ? h("tab-bar", {
      "attrs": {
        "tabs": panes
      }
    }) : null, tabs])])]);
  },
  mounted: function mounted() {
    var _this4 = this;

    Object(resize_event_["addResizeListener"])(this.$el, this.update);
    document.addEventListener('visibilitychange', this.visibilityChangeHandler);
    window.addEventListener('blur', this.windowBlurHandler);
    window.addEventListener('focus', this.windowFocusHandler);
    setTimeout(function () {
      _this4.scrollToActiveTab();
    }, 0);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.update) Object(resize_event_["removeResizeListener"])(this.$el, this.update);
    document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
    window.removeEventListener('blur', this.windowBlurHandler);
    window.removeEventListener('focus', this.windowFocusHandler);
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tab-nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_navvue_type_script_lang_js_ = (tab_navvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tab-nav.vue
var tab_nav_render, tab_nav_staticRenderFns




/* normalize component */

var tab_nav_component = Object(componentNormalizer["a" /* default */])(
  src_tab_navvue_type_script_lang_js_,
  tab_nav_render,
  tab_nav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_nav_api; }
tab_nav_component.options.__file = "node_modules/element-ui/packages/tabs/src/tab-nav.vue"
/* harmony default export */ var tab_nav = (tab_nav_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/element-ui/packages/tabs/src/tabs.vue?vue&type=script&lang=js&







/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  name: 'ElTabs',
  components: {
    TabNav: tab_nav
  },
  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean
  },
  provide: function provide() {
    return {
      rootTabs: this
    };
  },
  data: function data() {
    return {
      currentName: this.value || this.activeName,
      panes: []
    };
  },
  watch: {
    activeName: function activeName(value) {
      this.setCurrentName(value);
    },
    value: function value(_value) {
      this.setCurrentName(_value);
    },
    currentName: function currentName(value) {
      var _this = this;

      if (this.$refs.nav) {
        this.$nextTick(function () {
          _this.$refs.nav.$nextTick(function (_) {
            _this.$refs.nav.scrollToActiveTab();
          });
        });
      }
    }
  },
  methods: {
    calcPaneInstances: function calcPaneInstances() {
      var _this2 = this;

      var isForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.$slots.default) {
        var paneSlots = this.$slots.default.filter(function (vnode) {
          return vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'ElTabPane';
        }); // update indeed

        var panes = paneSlots.map(function (_ref) {
          var componentInstance = _ref.componentInstance;
          return componentInstance;
        });
        var panesChanged = !(panes.length === this.panes.length && panes.every(function (pane, index) {
          return pane === _this2.panes[index];
        }));

        if (isForceUpdate || panesChanged) {
          this.panes = panes;
        }
      } else if (this.panes.length !== 0) {
        this.panes = [];
      }
    },
    handleTabClick: function handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit('tab-click', tab, event);
    },
    handleTabRemove: function handleTabRemove(pane, ev) {
      if (pane.disabled) return;
      ev.stopPropagation();
      this.$emit('edit', pane.name, 'remove');
      this.$emit('tab-remove', pane.name);
    },
    handleTabAdd: function handleTabAdd() {
      this.$emit('edit', null, 'add');
      this.$emit('tab-add');
    },
    setCurrentName: function setCurrentName(value) {
      var _this3 = this;

      var changeCurrentName = function changeCurrentName() {
        _this3.currentName = value;

        _this3.$emit('input', value);
      };

      if (this.currentName !== value && this.beforeLeave) {
        var before = this.beforeLeave(value, this.currentName);

        if (before && before.then) {
          before.then(function () {
            changeCurrentName();
            _this3.$refs.nav && _this3.$refs.nav.removeFocus();
          }, function () {// https://github.com/ElemeFE/element/pull/14816
            // ignore promise rejection in `before-leave` hook
          });
        } else if (before !== false) {
          changeCurrentName();
        }
      } else {
        changeCurrentName();
      }
    }
  },
  render: function render(h) {
    var _ref2;

    var type = this.type,
        handleTabClick = this.handleTabClick,
        handleTabRemove = this.handleTabRemove,
        handleTabAdd = this.handleTabAdd,
        currentName = this.currentName,
        panes = this.panes,
        editable = this.editable,
        addable = this.addable,
        tabPosition = this.tabPosition,
        stretch = this.stretch;
    var newButton = editable || addable ? h("span", {
      "class": "el-tabs__new-tab",
      "on": {
        "click": handleTabAdd,
        "keydown": function keydown(ev) {
          if (ev.keyCode === 13) {
            handleTabAdd();
          }
        }
      },
      "attrs": {
        "tabindex": "0"
      }
    }, [h("i", {
      "class": "el-icon-plus"
    })]) : null;
    var navData = {
      props: {
        currentName: currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable: editable,
        type: type,
        panes: panes,
        stretch: stretch
      },
      ref: 'nav'
    };
    var header = h("div", {
      "class": ['el-tabs__header', "is-".concat(tabPosition)]
    }, [newButton, h("tab-nav", babel_helper_vue_jsx_merge_props_default()([{}, navData]))]);
    var panels = h("div", {
      "class": "el-tabs__content"
    }, [this.$slots.default]);
    return h("div", {
      "class": (_ref2 = {
        'el-tabs': true,
        'el-tabs--card': type === 'card'
      }, Object(defineProperty["a" /* default */])(_ref2, "el-tabs--".concat(tabPosition), true), Object(defineProperty["a" /* default */])(_ref2, 'el-tabs--border-card', type === 'border-card'), _ref2)
    }, [tabPosition !== 'bottom' ? [header, panels] : [panels, header]]);
  },
  created: function created() {
    if (!this.currentName) {
      this.setCurrentName('0');
    }

    this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true));
  },
  mounted: function mounted() {
    this.calcPaneInstances();
  },
  updated: function updated() {
    this.calcPaneInstances();
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/src/tabs.vue
var tabs_render, tabs_staticRenderFns




/* normalize component */

var tabs_component = Object(componentNormalizer["a" /* default */])(
  src_tabsvue_type_script_lang_js_,
  tabs_render,
  tabs_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tabs_api; }
tabs_component.options.__file = "node_modules/element-ui/packages/tabs/src/tabs.vue"
/* harmony default export */ var src_tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/element-ui/packages/tabs/index.js


/* istanbul ignore next */

src_tabs.install = function (Vue) {
  Vue.component(src_tabs.name, src_tabs);
};

/* harmony default export */ var packages_tabs = __webpack_exports__["default"] = (src_tabs);

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.every");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ })

/******/ });