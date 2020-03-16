(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/editor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var markdownparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdownparser */ "markdownparser");
/* harmony import */ var markdownparser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdownparser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror */ "codemirror");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_display_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/display/fullscreen.js */ "codemirror/addon/display/fullscreen.js");
/* harmony import */ var codemirror_addon_display_fullscreen_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/markdown/markdown.js */ "codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_display_placeholder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/display/placeholder.js */ "codemirror/addon/display/placeholder.js");
/* harmony import */ var codemirror_addon_display_placeholder_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_placeholder_js__WEBPACK_IMPORTED_MODULE_5__);
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
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      "default": function _default() {
        return 'v-md-editor-' + Math.random().toString(16).substr(2, 9);
      }
    },
    css: {
      type: String
    },
    width: {
      type: [String, Number],
      "default": '100%'
    },
    height: {
      type: [String, Number],
      "default": '300px'
    },
    toolbar: {
      type: String,
      "default": 'clean redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    extend: {
      type: Object
    },
    buttons: {
      type: Object,
      "default": function _default() {
        return {
          "clean": {
            cmd: "clean",
            ico: "fas fa-remove-format mdi mdi-format-clear",
            title: "Html to markdown",
            hotkey: 'Shift-Alt-F'
          },
          "undo": {
            cmd: "undo",
            ico: "fas fa-undo mdi mdi-undo-variant",
            title: "Undo",
            hotkey: 'Ctrl-Z'
          },
          "redo": {
            cmd: "redo",
            ico: "fas fa-redo mdi mdi-redo-variant",
            title: "Redo",
            hotkey: 'Ctrl-Y'
          },
          "bullist": {
            cmd: "bullist",
            ico: "fas fa-list-ul mdi mdi-format-list-bulleted",
            title: "Generic List"
          },
          "numlist": {
            cmd: "numlist",
            ico: "fas fa-list-ol mdi mdi-format-list-numbered",
            title: "Numbered List"
          },
          'bold': {
            title: 'Bold',
            ico: 'fas fa-bold mdi mdi-format-bold',
            cmd: 'bold',
            hotkey: 'Ctrl-B'
          },
          'italic': {
            title: 'Italic',
            ico: "fas fa-italic mdi mdi-format-italic",
            cmd: 'italic',
            hotkey: 'Ctrl-I'
          },
          "strikethrough": {
            cmd: "strikethrough",
            ico: "fas fa-strikethrough mdi mdi-format-strikethrough",
            title: "Strikethrough"
          },
          'heading': {
            title: 'Heading',
            ico: "fas fa-heading mdi mdi-format-header-3",
            cmd: 'heading',
            hotkey: 'Ctrl-H'
          },
          'code': {
            title: 'Code',
            ico: "fas fa-code mdi mdi-code-tags",
            cmd: 'code',
            hotkey: 'Ctrl-X'
          },
          'quote': {
            title: 'Quote',
            ico: "fas fa-quote-left mdi mdi-format-quote-open",
            cmd: 'quote',
            hotkey: 'Ctrl-Q'
          },
          'link': {
            title: 'Link',
            ico: "fas fa-link mdi mdi-link",
            cmd: 'link',
            hotkey: 'Ctrl-K'
          },
          'image': {
            title: 'Image',
            ico: "fas fa-image mdi mdi-image",
            cmd: 'image',
            hotkey: 'Ctrl-P'
          },
          "fullscreen": {
            cmd: "fullscreen",
            ico: "fas fa-expand mdi mdi-fullscreen",
            title: "Toggle Fullscreen",
            hotkey: 'F11',
            ready: true
          },
          "preview": {
            cmd: "preview",
            ico: "fas fa-eye mdi mdi-eye",
            title: "Toggle Preview",
            hotkey: 'Ctrl-P',
            ready: true
          }
        };
      }
    },
    theme: {
      type: String,
      "default": 'outline-secondary'
    },
    value: {
      type: String,
      "default": '',
      required: false
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      editor: null,
      preview: false,
      fullScreen: false,
      html: '',
      toolbars: []
    };
  },
  computed: {
    styles: function styles() {
      return {
        width: !/^\d+$/.test(this.width) ? this.width : "".concat(this.width, "px"),
        height: !/^\d+$/.test(this.height) ? this.height : "".concat(this.height, "px")
      };
    }
  },
  watch: {
    value: function value(val) {
      if (val != this.editor.getValue()) {
        this.editor.setValue(val);
      }
    }
  },
  methods: {
    isEmpty: function isEmpty(s) {
      return s === null || s === undefined ? true : /^[\s\xa0]*$/.test(s);
    },
    isUrl: function isUrl(s) {
      return this.isEmpty(s) ? false : s.match(/((http(s)?):\/\/[\w\.\/\-=?#]+)/gi);
    },
    format: function format() {
      var a = arguments[0];

      for (var i = 1; i <= arguments.length; i++) {
        a = a.replace(/%[a-z]/, arguments[i]);
      }

      return a; // Make chainable
    },
    _toggleBlock: function _toggleBlock(type, start, end) {
      end = this.isEmpty(end) ? start : end;
      var ed = this.editor;
      var startPoint = ed.getCursor("start");
      var endPoint = ed.getCursor("end");
      var text;
      var stat = this.state();

      if (stat[type]) {
        text = ed.getLine(startPoint.line);
        start = text.slice(0, startPoint.ch);
        end = text.slice(startPoint.ch);

        if (type == "bold") {
          start = start.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, "");
          end = end.replace(/(\*\*|__)/, "");
        } else if (type == "italic") {
          start = start.replace(/(\*|_)(?![\s\S]*(\*|_))/, "");
          end = end.replace(/(\*|_)/, "");
        } else if (type == "strikethrough") {
          start = start.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, "");
          end = end.replace(/(\*\*|~~)/, "");
        }

        ed.replaceRange(start + end, {
          line: startPoint.line,
          ch: 0
        }, {
          line: startPoint.line,
          ch: 99999999999999
        });

        if (type == "bold" || type == "strikethrough") {
          startPoint.ch -= 2;

          if (startPoint !== endPoint) {
            endPoint.ch -= 2;
          }
        } else if (type == "italic") {
          startPoint.ch -= 1;

          if (startPoint !== endPoint) {
            endPoint.ch -= 1;
          }
        }
      } else {
        text = ed.getSelection();

        if (type == "bold") {
          text = text.split("**").join("");
          text = text.split("__").join("");
        } else if (type == "italic") {
          text = text.split("*").join("");
          text = text.split("_").join("");
        } else if (type == "strikethrough") {
          text = text.split("~~").join("");
        }

        ed.replaceSelection(start + text + end);
        startPoint.ch += start.length;
        endPoint.ch = startPoint.ch + text.length;
      } // ed.setSelection(startPoint, endPoint);

    },
    _toggleLine: function _toggleLine(name) {
      var ed = this.editor;
      var stat = this.state();
      var startPoint = ed.getCursor("start");
      var endPoint = ed.getCursor("end");
      var repl = {
        "quote": /^(\s*)\>\s+/,
        "bullist": /^(\s*)(\*|\-|\+)\s+/,
        "numlist": /^(\s*)\d+\.\s+/
      };
      var map = {
        "quote": "> ",
        "bullist": "* ",
        "numlist": "1. "
      };

      for (var i = startPoint.line; i <= endPoint.line; i++) {
        (function (i) {
          var text = ed.getLine(i);

          if (stat[name]) {
            text = text.replace(repl[name], "$1");
          } else {
            text = map[name] + text;
          }

          ed.replaceRange(text, {
            line: i,
            ch: 0
          }, {
            line: i,
            ch: 99999999999999
          });
        })(i);
      }
    },
    state: function state(pos) {
      pos = pos || this.editor.getCursor("start");
      var stat = this.editor.getTokenAt(pos);
      if (!stat.type) return {};
      var types = stat.type.split(" "); // console.log(types);

      var ret = {},
          data,
          text;

      for (var i = 0; i < types.length; i++) {
        data = types[i];

        if (data === "strong") {
          ret.bold = true;
        } else if (data === "variable-2") {
          text = this.editor.getLine(pos.line);

          if (/^\s*\d+\.\s/.test(text)) {
            ret["numlist"] = true;
          } else {
            ret["bullist"] = true;
          }
        } else if (data === "atom") {
          ret.quote = true;
        } else if (data === "em") {
          ret.italic = true;
        } else if (data === "quote") {
          ret.quote = true;
        } else if (data === "strikethrough") {
          ret.strikethrough = true;
        } else if (data === "comment") {
          ret.code = true;
        } else if (data === "link" || data === "url") {
          ret.link = true;
        } else if (data === "image") {
          ret.image = true;
        } else if (data.match(/^header(\-[1-6])?$/)) {
          ret[data.replace("header", "heading")] = true;
        }
      }

      return ret;
    },
    _replaceSelection: function _replaceSelection(active, startEnd, val) {
      var ed = this.editor;
      var text;
      var start = startEnd[0];
      var end = startEnd[1];
      var startPoint = ed.getCursor("start");
      var endPoint = ed.getCursor("end");

      if (val) {
        Object.keys(val).forEach(function (key) {
          start = start.replace('#' + key + '#', val[key]);
          end = end.replace('#' + key + '#', val[key]);
        });
      }

      if (active) {
        text = ed.getLine(startPoint.line);
        start = text.slice(0, startPoint.ch);
        end = text.slice(startPoint.ch);
        ed.replaceRange(start + end, {
          line: startPoint.line,
          ch: 0
        });
      } else {
        ed.replaceSelection(start + end);
        startPoint.ch += start.length;

        if (startPoint !== endPoint) {
          endPoint.ch += start.length;
        }
      } //ed.setSelection(startPoint, endPoint);

    },
    drawImage: function drawImage(obj) {
      var stat = this.state();

      this._replaceSelection(stat.image, ["![#title#](", '#url# "#title#")'], obj);
    },
    drawLink: function drawLink(obj) {
      var stat = this.state();

      this._replaceSelection(stat.link, ['[#title#]', '(#url# "#title#")'], obj);
    },
    command: function command(key) {
      var ed = this.editor;
      var text = ed.getSelection();
      this.$root.$emit('markdown-editor:' + key, this);

      switch (key) {
        case 'undo':
          ed.undo();
          break;

        case 'redo':
          ed.redo();
          break;

        case 'bold':
          this._toggleBlock('bold', '**');

          break;

        case 'italic':
          this._toggleBlock('italic', '*');

          break;

        case 'strikethrough':
          this._toggleBlock('strikethrough', '~~');

          break;

        case 'code':
          this._toggleBlock('code', '```');

          break;

        case 'heading':
          ed.replaceSelection('\n### ' + text);
          break;

        case 'image':
          var url = prompt("Please enter image url", "https://");

          if (this.isUrl(url)) {
            var title = !this.isEmpty(text) ? text : "This is image title";
            this.drawImage({
              title: title,
              url: url
            });
          }

          break;

        case 'link':
          var url = prompt("Please enter link", "https://");

          if (this.isUrl(url)) {
            var title = !this.isEmpty(text) ? text : url;
            this.drawLink({
              title: title,
              url: url
            });
          }

          break;

        case 'quote':
          this._toggleLine('quote');

          break;

        case 'numlist':
          this._toggleLine('numlist');

          break;

        case 'bullist':
          this._toggleLine('bullist');

          break;

        case 'preview':
          this.html = marked__WEBPACK_IMPORTED_MODULE_1___default()(ed.getValue(), {
            breaks: true
          });
          this.preview = !this.preview;
          break;

        case 'fullscreen':
          this.fullScreen = !this.fullScreen;
          ed.setOption("fullScreen", !ed.getOption("fullScreen"));
          break;

        case 'clean':
          ed.replaceSelection(markdownparser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(text));
          break;
      }
    },
    build: function build() {
      var _this = this;

      if (this.__rendered) return;
      var buttons = Object.assign({}, this.buttons, this.extend);
      var shortcuts = {};
      this.toolbar.split('|').forEach(function (t, i) {
        var group = [];
        t.toLowerCase().split(/(\s)/).forEach(function (b) {
          if (!_this.isEmpty(b)) {
            var btn = buttons[b];

            if (!_this.isEmpty(btn.hotkey)) {
              shortcuts[btn.hotkey] = function () {
                return _this.command(btn.cmd);
              };
            }

            group.push(btn);
          }
        });
        if (group.length > 0) _this.toolbars.push(group);
      });
      var o = Object.assign({
        mode: 'markdown',
        extraKeys: shortcuts
      }, this.options);
      var ed = this.editor = codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.fromTextArea(document.getElementById(this.id), o);
      ed.setValue(this.value);
      ed.setSize(this.width, this.height);
      ed.on("change", function (ed) {
        _this.$emit('input', ed.getValue());
      });
      this.__rendered = true;
    }
  },
  mounted: function mounted() {
    this.build();
  },
  destroy: function destroy() {
    this.editor.toTextArea();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=template&id=7c83f806&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/editor.vue?vue&type=template&id=7c83f806& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "v-md-container",
        _vm.css,
        {
          "v-md-auto-resize": _vm.height == "auto",
          "v-md-fullscreen": _vm.fullScreen
        }
      ]
    },
    [
      _vm.toolbars.length > 0
        ? _c(
            "div",
            { staticClass: "v-md-toolbar" },
            _vm._l(_vm.toolbars, function(group) {
              return _c(
                "div",
                { staticClass: "btn-group mr-3", attrs: { role: "group" } },
                _vm._l(group, function(i) {
                  return _c(
                    "button",
                    {
                      class: "btn btn-" + _vm.theme,
                      attrs: {
                        type: "button",
                        title: i.title,
                        disabled: _vm.preview && !i.ready
                      },
                      on: {
                        click: function($event) {
                          return _vm.command(i.cmd)
                        }
                      }
                    },
                    [_c("i", { class: i.ico })]
                  )
                }),
                0
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "v-md-wrapper",
          on: {
            click: function($event) {
              return _vm.editor.focus()
            }
          }
        },
        [
          _c("textarea", {
            staticClass: "v-md-editor",
            style: _vm.styles,
            attrs: { id: _vm.id, placeholder: _vm.placeholder }
          }),
          _vm._v(" "),
          _vm.preview
            ? _c("div", {
                staticClass: "v-md-preview",
                domProps: { innerHTML: _vm._s(_vm.html) }
              })
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
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

/***/ "./src/editor.vue":
/*!************************!*\
  !*** ./src/editor.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.vue?vue&type=template&id=7c83f806& */ "./src/editor.vue?vue&type=template&id=7c83f806&");
/* harmony import */ var _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.vue?vue&type=script&lang=js& */ "./src/editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/editor.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./src/editor.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/editor.vue?vue&type=template&id=7c83f806&":
/*!*******************************************************!*\
  !*** ./src/editor.vue?vue&type=template&id=7c83f806& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./editor.vue?vue&type=template&id=7c83f806& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=template&id=7c83f806&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.vue */ "./src/editor.vue");



var MarkdownEditor = {
  install: function install(Vue) {
    if (Vue.__md_editor_installed) {
      return;
    }

    Vue.__md_editor_installed = true;
    Vue.component('markdown-editor', _editor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(MarkdownEditor);
}

/* harmony default export */ __webpack_exports__["default"] = (MarkdownEditor);

/***/ }),

/***/ "codemirror":
/*!*****************************!*\
  !*** external "codemirror" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror");

/***/ }),

/***/ "codemirror/addon/display/fullscreen.js":
/*!*********************************************************!*\
  !*** external "codemirror/addon/display/fullscreen.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/addon/display/fullscreen.js");

/***/ }),

/***/ "codemirror/addon/display/placeholder.js":
/*!**********************************************************!*\
  !*** external "codemirror/addon/display/placeholder.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/addon/display/placeholder.js");

/***/ }),

/***/ "codemirror/lib/codemirror.css":
/*!************************************************!*\
  !*** external "codemirror/lib/codemirror.css" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/lib/codemirror.css");

/***/ }),

/***/ "codemirror/mode/markdown/markdown.js":
/*!*******************************************************!*\
  !*** external "codemirror/mode/markdown/markdown.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/markdown/markdown.js");

/***/ }),

/***/ "markdownparser":
/*!*********************************!*\
  !*** external "markdownparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdownparser");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map