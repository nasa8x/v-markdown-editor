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
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdownparser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdownparser */ "markdownparser");
/* harmony import */ var markdownparser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdownparser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror */ "codemirror");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_display_fullscreen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/display/fullscreen.js */ "codemirror/addon/display/fullscreen.js");
/* harmony import */ var codemirror_addon_display_fullscreen_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_fullscreen_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/markdown/markdown.js */ "codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_mode_gfm_gfm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/mode/gfm/gfm.js */ "codemirror/mode/gfm/gfm.js");
/* harmony import */ var codemirror_mode_gfm_gfm_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_gfm_gfm_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_display_placeholder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/display/placeholder.js */ "codemirror/addon/display/placeholder.js");
/* harmony import */ var codemirror_addon_display_placeholder_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_placeholder_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/selection/active-line.js */ "codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_9__);
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
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    css: {
      type: String
    },
    width: {
      type: String,
      "default": '100%'
    },
    height: {
      type: String,
      "default": '300px'
    },
    toolbar: {
      type: String,
      "default": 'clean redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen'
    },
    extend: {
      type: Object
    },
    buttons: {
      type: Object,
      "default": function _default() {
        return {
          'bold': {
            title: 'Bold',
            className: 'far fa-bold',
            cmd: 'bold',
            hotkey: 'Ctrl-B'
          },
          'italic': {
            title: 'Italic',
            className: "far fa-italic",
            cmd: 'italic',
            hotkey: 'Ctrl-I'
          },
          "strikethrough": {
            cmd: "strikethrough",
            className: "far fa-strikethrough",
            title: "Strikethrough"
          },
          'heading': {
            title: 'Heading',
            className: "far fa-heading",
            cmd: 'heading',
            hotkey: 'Ctrl-H'
          },
          'code': {
            title: 'Code',
            className: "far fa-code",
            cmd: 'code',
            hotkey: 'Ctrl-X'
          },
          'quote': {
            title: 'Quote',
            className: "far fa-quote-left",
            cmd: 'quote',
            hotkey: 'Ctrl-Q'
          },
          'link': {
            title: 'Link',
            className: "far fa-link",
            cmd: 'link',
            hotkey: 'Ctrl-K'
          },
          'image': {
            title: 'Image',
            className: "far fa-image",
            cmd: 'image',
            hotkey: 'Ctrl-P'
          },
          "fullscreen": {
            cmd: "fullscreen",
            className: "far fa-arrows-alt no-disable no-mobile",
            title: "Toggle Fullscreen",
            hotkey: 'F11',
            ready: true
          },
          "preview": {
            cmd: "preview",
            className: "far fa-eye no-disable",
            title: "Toggle Preview",
            hotkey: 'Ctrl-P',
            ready: true
          },
          "clipboard": {
            cmd: "clipboard",
            className: "far fa-clipboard",
            title: "Copy & Markdown Format",
            hotkey: 'Ctrl-V'
          },
          "clean": {
            cmd: "clean",
            className: "far fa-remove-format",
            title: "Html to markdown"
          },
          "undo": {
            cmd: "undo",
            className: "far fa-undo",
            title: "Undo",
            hotkey: 'Ctrl-Z'
          },
          "redo": {
            cmd: "redo",
            className: "far fa-repeat",
            title: "Redo",
            hotkey: 'Ctrl-Y'
          },
          "bullist": {
            cmd: "bullist",
            className: "far fa-list-ul",
            title: "Generic List"
          },
          "numlist": {
            cmd: "numlist",
            className: "far fa-list-ol",
            title: "Numbered List"
          }
        };
      }
    },
    name: {
      type: String,
      "default": 'html'
    },
    value: {
      type: String,
      "default": '',
      required: false
    },
    buttonClass: {
      type: String,
      "default": 'btn btn-outline-secondary'
    },
    options: {
      type: Object,
      "default": function _default() {
        return {
          mode: 'gfm',
          theme: "elegent",
          lineNumbers: false,
          styleActiveLine: false,
          styleSelectedText: true,
          lineWrapping: true,
          indentWithTabs: true,
          autoRefresh: true,
          tabSize: 2,
          indentUnit: 2
        };
      }
    }
  },
  data: function data() {
    return {
      id: 'v-md-editor-' + new Date().getTime(),
      editor: null,
      preview: false,
      html: '',
      toolbars: [],
      shortcuts: {}
    };
  },
  watch: {
    value: function value(val) {
      if (val != this.editor.getValue()) {
        this.editor.setValue(val);
      }
    }
  },
  computed: {
    styles: function styles() {
      return {
        width: isNaN(this.width) ? this.width : this.width + '%',
        height: isNaN(this.height) ? this.height : this.height + '%'
      };
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
    uid: function uid(name) {
      return this.format('%s-%s', this.id, name);
    },
    obj: function obj(name) {
      return jQuery('#' + this.uid(name));
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
      }

      ed.setSelection(startPoint, endPoint);
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
        // text = ed.getSelection();
        // ed.replaceSelection(start + text + end);
        ed.replaceSelection(start + end);
        startPoint.ch += start.length;

        if (startPoint !== endPoint) {
          endPoint.ch += start.length;
        }
      }

      ed.setSelection(startPoint, endPoint);
      ed.focus();
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
      var stat = this.state();
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

        case 'clipboard':
          this.obj('modal-clipboard').modal('show');
          break;

        case 'image':
          // this.obj('modal-image').modal('show');
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
          //this.obj('modal-link').modal('show');
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
          ///var md = new MarkdownIt({ typographer: true, breaks: true, quotes: '“”‘’' });
          this.html = marked__WEBPACK_IMPORTED_MODULE_3___default()(ed.getValue(), {
            breaks: true
          });
          this.preview ^= true;
          this.obj('toolbar').find('.btn:not(".ready")').prop('disabled', this.preview);
          break;

        case 'fullscreen':
          this.obj('container').toggleClass('v-md-fullscreen');
          this.obj('fullscreen').toggleClass('active');
          ed.setOption("fullScreen", !ed.getOption("fullScreen"));
          break;

        case 'clean':
          text = markdownparser__WEBPACK_IMPORTED_MODULE_2___default.a.parse(text);
          ed.replaceSelection(text);
          break;
      }

      ed.focus();
    },
    build: function build() {
      if (!jQuery) {
        console.error("Must required jQuery!");
        return;
      }

      if (this.isEmpty(this.toolbar)) {
        console.error("You must set toolbar!");
        return;
      }

      if (this.__rendered) return;

      var _t = this;

      this.buttons = Object.assign(this.buttons, this.extend);

      var btns = _t.toolbar.toLowerCase().split(/(\s)/).filter(function (w) {
        return !_t.isEmpty(w);
      });

      var group = [];

      for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        var obj = _t.buttons[btn];

        if (obj) {
          // obj.cmd = typeof obj.cmd ==='function'? obj.cmd: this.command(obj.cmd);
          obj.id = btn;
          group.push(obj);
        }

        if (btn === '|' || i == btns.length - 1) {
          this.toolbars.push(group);
          group = [];
        }
      }

      var o = Object.assign({}, {
        extraKeys: _t.shortcuts,
        initialValue: _t.value
      }, _t.options);
      var el = document.getElementById(_t.id + '-input');
      _t.editor = codemirror__WEBPACK_IMPORTED_MODULE_4___default.a.fromTextArea(el, o);

      _t.editor.on("change", function (ed) {
        //_t.editor.save();                    
        _t.$emit('input', ed.getValue()); //_t.value = ed.getValue();

      });

      _t.editor.on("cursorActivity", function () {
        var stat = _t.state();

        _t.obj('toolbar').find('.btn.active:not(.ready)').removeClass('active');

        Object.keys(stat).forEach(function (key) {
          _t.obj(key).addClass('active');
        });
      });

      _t.__rendered = true;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.build();
    });
  },
  destroyed: function destroyed() {
    this.editor = null;
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
        { "v-md-auto-resize": _vm.height == "auto" }
      ],
      attrs: { id: _vm.uid("container") }
    },
    [
      _c(
        "div",
        { staticClass: "v-md-toolbar", attrs: { id: _vm.uid("toolbar") } },
        _vm._l(_vm.toolbars, function(group) {
          return _c(
            "div",
            { staticClass: "btn-group mr-3", attrs: { role: "group" } },
            _vm._l(group, function(i) {
              return _c(
                "button",
                {
                  class: [_vm.buttonClass, { ready: i.ready }],
                  attrs: { type: "button", id: _vm.uid(i.id), title: i.title },
                  on: {
                    click: function($event) {
                      return _vm.command(i.cmd)
                    }
                  }
                },
                [
                  _c("i", {
                    class: i.className,
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            }),
            0
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "v-md-wrapper" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          style: _vm.styles,
          attrs: { id: _vm.uid("input"), name: _vm.name },
          domProps: { value: _vm.value },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.value = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.preview
          ? _c("div", {
              staticClass: "v-md-preview",
              attrs: { id: _vm.uid("html-preview") },
              domProps: { innerHTML: _vm._s(_vm.html) }
            })
          : _vm._e()
      ])
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
      // register for functioal component in vue file
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
/* harmony import */ var _editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.vue */ "./src/editor.vue");

var MarkdownEditor = {
  install: function install(Vue) {
    if (Vue.__md_editor_installed) {
      return;
    }

    Vue.__md_editor_installed = true;
    Vue.component('markdown-editor', _editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(MarkdownEditor);
}

/* harmony default export */ __webpack_exports__["default"] = (MarkdownEditor); // if (typeof exports == "object") {
//     module.exports = MarkdownEditor;
// } else if (typeof define == "function" && define.amd) {
//     define([], function () { return MarkdownEditor; })
// } else if (window.Vue) {
//     Vue.use(MarkdownEditor);
// }

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

/***/ "codemirror/addon/selection/active-line.js":
/*!************************************************************!*\
  !*** external "codemirror/addon/selection/active-line.js" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/addon/selection/active-line.js");

/***/ }),

/***/ "codemirror/lib/codemirror.css":
/*!************************************************!*\
  !*** external "codemirror/lib/codemirror.css" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/lib/codemirror.css");

/***/ }),

/***/ "codemirror/mode/gfm/gfm.js":
/*!*********************************************!*\
  !*** external "codemirror/mode/gfm/gfm.js" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/gfm/gfm.js");

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