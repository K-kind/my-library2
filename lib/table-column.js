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
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getColumnById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getColumnByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getColumnByCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRowIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getKeysMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return parseWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseMinWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return parseHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toggleRowStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return walkTreeNode; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_k_k_Desktop_my_library2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
/* harmony import */ var element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_10__);











var getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }

    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && Object(_Users_k_k_Desktop_my_library2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(obj) === 'object';
};

var orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }

  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }

  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }

      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return Object(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_10__["getValueByPath"])(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }

    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }

    return [isObject(value) ? Object(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_10__["getValueByPath"])(value, sortKey) : value];
  };

  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }

    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }

      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }

    return 0;
  };

  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);

    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }

    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};
var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
var getColumnByKey = function getColumnByKey(table, columnKey) {
  var column = null;

  for (var i = 0; i < table.columns.length; i++) {
    var item = table.columns[i];

    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }

  return column;
};
var getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);

  if (matches) {
    return getColumnById(table, matches[0]);
  }

  return null;
};
var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');

  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }

    var key = rowKey.split('.');
    var current = row;

    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }

    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};
var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = {
      row: row,
      index: index
    };
  });
  return arrayMap;
};

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function mergeOptions(defaults, config) {
  var options = {};
  var key;

  for (key in defaults) {
    options[key] = defaults[key];
  }

  for (key in config) {
    if (hasOwn(config, key)) {
      var value = config[key];

      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }

  return options;
}
function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);

    if (isNaN(width)) {
      width = null;
    }
  }

  return width;
}
function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);

    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }

  return minWidth;
}
;
function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }

  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }

  return null;
} // https://github.com/reduxjs/redux/blob/master/src/compose.js

function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;

  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };

  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }

  return changed;
}
function walkTreeNode(root, cb) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var lazyKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hasChildren';

  var isNil = function isNil(array) {
    return !(Array.isArray(array) && array.length);
  };

  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(function (item) {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }

      var children = item[childrenKey];

      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach(function (item) {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }

    var children = item[childrenKey];

    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(11);

// EXTERNAL MODULE: external "core-js/modules/es.array.every"
var es_array_every_ = __webpack_require__(26);

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(8);

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of"
var es_array_index_of_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.array.reduce"
var es_array_reduce_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor"
var es_number_constructor_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(36);

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__(43);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/element-ui/packages/table/src/config.js


var cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'el-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
}; // 这些选项不应该被覆盖

var cellForced = {
  selection: {
    renderHeader: function renderHeader(h, _ref) {
      var store = _ref.store;
      return h("el-checkbox", {
        "attrs": {
          "disabled": store.states.data && store.states.data.length === 0,
          "indeterminate": store.states.selection.length > 0 && !this.isAllSelected,
          "value": this.isAllSelected
        },
        "nativeOn": {
          "click": this.toggleAllSelection
        }
      });
    },
    renderCell: function renderCell(h, _ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          store = _ref2.store,
          $index = _ref2.$index;
      return h("el-checkbox", {
        "nativeOn": {
          "click": function click(event) {
            return event.stopPropagation();
          }
        },
        "attrs": {
          "value": store.isSelected(row),
          "disabled": column.selectable ? !column.selectable.call(null, row, $index) : false
        },
        "on": {
          "input": function input() {
            store.commit('rowSelectedChanged', row);
          }
        }
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function renderHeader(h, _ref3) {
      var column = _ref3.column;
      return column.label || '#';
    },
    renderCell: function renderCell(h, _ref4) {
      var $index = _ref4.$index,
          column = _ref4.column;
      var i = $index + 1;
      var index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return h("div", [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader: function renderHeader(h, _ref5) {
      var column = _ref5.column;
      return column.label || '';
    },
    renderCell: function renderCell(h, _ref6) {
      var row = _ref6.row,
          store = _ref6.store;
      var classes = ['el-table__expand-icon'];

      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('el-table__expand-icon--expanded');
      }

      var callback = function callback(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };

      return h("div", {
        "class": classes,
        "on": {
          "click": callback
        }
      }, [h("i", {
        "class": 'el-icon el-icon-arrow-right'
      })]);
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
};
function defaultRenderCell(h, _ref7) {
  var row = _ref7.row,
      column = _ref7.column,
      $index = _ref7.$index;
  var property = column.property;
  var value = property && Object(util_["getPropByPath"])(row, property).v;

  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }

  return value;
}
function treeCellPrefix(h, _ref8) {
  var row = _ref8.row,
      treeNode = _ref8.treeNode,
      store = _ref8.store;
  if (!treeNode) return null;
  var ele = [];

  var callback = function callback(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };

  if (treeNode.indent) {
    ele.push(h("span", {
      "class": "el-table__indent",
      "style": {
        'padding-left': treeNode.indent + 'px'
      }
    }));
  }

  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    var expandClasses = ['el-table__expand-icon', treeNode.expanded ? 'el-table__expand-icon--expanded' : ''];
    var iconClasses = ['el-icon-arrow-right'];

    if (treeNode.loading) {
      iconClasses = ['el-icon-loading'];
    }

    ele.push(h("div", {
      "class": expandClasses,
      "on": {
        "click": callback
      }
    }, [h("i", {
      "class": iconClasses
    })]));
  } else {
    ele.push(h("span", {
      "class": "el-table__placeholder"
    }));
  }

  return ele;
}
// EXTERNAL MODULE: ./node_modules/element-ui/packages/table/src/util.js
var util = __webpack_require__(15);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(40);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// CONCATENATED MODULE: ./node_modules/element-ui/packages/table/src/table-column.js













var columnIdSeed = 1;
/* harmony default export */ var table_column = ({
  name: 'ElTableColumn',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default: function _default() {
        return ['ascending', 'descending', null];
      },
      validator: function validator(val) {
        return val.every(function (order) {
          return ['ascending', 'descending', null].indexOf(order) > -1;
        });
      }
    }
  },
  data: function data() {
    return {
      isSubColumn: false,
      columns: []
    };
  },
  computed: {
    owner: function owner() {
      var parent = this.$parent;

      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }

      return parent;
    },
    columnOrTableParent: function columnOrTableParent() {
      var parent = this.$parent;

      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent;
      }

      return parent;
    },
    realWidth: function realWidth() {
      return Object(util["l" /* parseWidth */])(this.width);
    },
    realMinWidth: function realMinWidth() {
      return Object(util["k" /* parseMinWidth */])(this.minWidth);
    },
    realAlign: function realAlign() {
      return this.align ? 'is-' + this.align : null;
    },
    realHeaderAlign: function realHeaderAlign() {
      return this.headerAlign ? 'is-' + this.headerAlign : this.realAlign;
    }
  },
  methods: {
    getPropsData: function getPropsData() {
      var _this = this;

      for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return props.reduce(function (prev, cur) {
        if (Array.isArray(cur)) {
          cur.forEach(function (key) {
            prev[key] = _this[key];
          });
        }

        return prev;
      }, {});
    },
    getColumnElIndex: function getColumnElIndex(children, child) {
      return [].indexOf.call(children, child);
    },
    setColumnWidth: function setColumnWidth(column) {
      if (this.realWidth) {
        column.width = this.realWidth;
      }

      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth;
      }

      if (!column.minWidth) {
        column.minWidth = 80;
      }

      column.realWidth = column.width === undefined ? column.minWidth : column.width;
      return column;
    },
    setColumnForcedProps: function setColumnForcedProps(column) {
      // 对于特定类型的 column，某些属性不允许设置
      var type = column.type;
      var source = cellForced[type] || {};
      Object.keys(source).forEach(function (prop) {
        var value = source[prop];

        if (value !== undefined) {
          column[prop] = prop === 'className' ? "".concat(column[prop], " ").concat(value) : value;
        }
      });
      return column;
    },
    setColumnRenders: function setColumnRenders(column) {
      var _this2 = this;

      var h = this.$createElement;

      // renderHeader 属性不推荐使用。
      if (this.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
      } else if (column.type !== 'selection') {
        column.renderHeader = function (h, scope) {
          var renderHeader = _this2.$scopedSlots.header;
          return renderHeader ? renderHeader(scope) : column.label;
        };
      }

      var originRenderCell = column.renderCell; // TODO: 这里的实现调整

      if (column.type === 'expand') {
        // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
        column.renderCell = function (h, data) {
          return h("div", {
            "class": "cell"
          }, [originRenderCell(h, data)]);
        };

        this.owner.renderExpanded = function (h, data) {
          return _this2.$scopedSlots.default ? _this2.$scopedSlots.default(data) : _this2.$slots.default;
        };
      } else {
        originRenderCell = originRenderCell || defaultRenderCell; // 对 renderCell 进行包装

        column.renderCell = function (h, data) {
          var children = null;

          if (_this2.$scopedSlots.default) {
            children = _this2.$scopedSlots.default(data);
          } else {
            children = originRenderCell(h, data);
          }

          var prefix = treeCellPrefix(h, data);
          var props = {
            class: 'cell',
            style: {}
          };

          if (column.showOverflowTooltip) {
            props.class += ' el-tooltip';
            props.style = {
              width: (data.column.realWidth || data.column.width) - 1 + 'px'
            };
          }

          return h("div", babel_helper_vue_jsx_merge_props_default()([{}, props]), [prefix, children]);
        };
      }

      return column;
    },
    registerNormalWatchers: function registerNormalWatchers() {
      var _this3 = this;

      var props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip']; // 一些属性具有别名

      var aliases = {
        prop: 'property',
        realAlign: 'align',
        realHeaderAlign: 'headerAlign',
        realWidth: 'width'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);
      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this3.$watch(key, function (newVal) {
          _this3.columnConfig[columnKey] = newVal;
        });
      });
    },
    registerComplexWatchers: function registerComplexWatchers() {
      var _this4 = this;

      var props = ['fixed'];
      var aliases = {
        realWidth: 'width',
        realMinWidth: 'minWidth'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);
      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this4.$watch(key, function (newVal) {
          _this4.columnConfig[columnKey] = newVal;
          var updateColumns = columnKey === 'fixed';

          _this4.owner.store.scheduleLayout(updateColumns);
        });
      });
    }
  },
  components: {
    ElCheckbox: checkbox_default.a
  },
  beforeCreate: function beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
    this.columnId = '';
  },
  created: function created() {
    var parent = this.columnOrTableParent;
    this.isSubColumn = this.owner !== parent;
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;
    var type = this.type || 'default';
    var sortable = this.sortable === '' ? true : this.sortable;

    var defaults = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, cellStarts[type]), {}, {
      id: this.columnId,
      type: type,
      property: this.prop || this.property,
      align: this.realAlign,
      headerAlign: this.realHeaderAlign,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      // filter 相关属性
      filterable: this.filters || this.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      isColumnGroup: false,
      filterOpened: false,
      // sort 相关属性
      sortable: sortable,
      // index 列
      index: this.index
    });

    var basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable'];
    var sortProps = ['sortMethod', 'sortBy', 'sortOrders'];
    var selectProps = ['selectable', 'reserveSelection'];
    var filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement'];
    var column = this.getPropsData(basicProps, sortProps, selectProps, filterProps);
    column = Object(util["h" /* mergeOptions */])(defaults, column); // 注意 compose 中函数执行的顺序是从右到左

    var chains = Object(util["a" /* compose */])(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
    column = chains(column);
    this.columnConfig = column; // 注册 watcher

    this.registerNormalWatchers();
    this.registerComplexWatchers();
  },
  mounted: function mounted() {
    var owner = this.owner;
    var parent = this.columnOrTableParent;
    var children = this.isSubColumn ? parent.$el.children : parent.$refs.hiddenColumns.children;
    var columnIndex = this.getColumnElIndex(children, this.$el);
    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
  },
  destroyed: function destroyed() {
    if (!this.$parent) return;
    var parent = this.$parent;
    this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
  },
  render: function render(h) {
    // slots 也要渲染，需要计算合并表头
    return h('div', this.$slots.default);
  }
});
// CONCATENATED MODULE: ./node_modules/element-ui/packages/table-column/index.js


/* istanbul ignore next */

table_column.install = function (Vue) {
  Vue.component(table_column.name, table_column);
};

/* harmony default export */ var packages_table_column = __webpack_exports__["default"] = (table_column);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.every");

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.reduce");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ })

/******/ });