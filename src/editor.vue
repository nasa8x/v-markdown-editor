<template>
    <div :class="['v-md-container', css]" :id="uid('container')">
        <div :id="uid('toolbar')" class="v-md-toolbar">
            <div class="btn-group mr-3" role="group" v-for="group in toolbars">
                <button type="button" :id="uid(i.id)" :title="i.title" :class="[buttonClass, {'ready': i.ready}]"
                    v-on:click="command(i.cmd)" v-for="i in group"><i :class="i.className"
                        aria-hidden="true"></i></button>
            </div>
        </div>
        <div class="v-md-wrapper">
            <textarea :id="uid('input')" v-model="value" :style="styles" :name="name"></textarea>
            <div class="v-md-preview" :id="uid('html-preview')" v-if="preview" v-html="html">
            </div>
        </div>

    </div>
</template>



<script>

    import 'codemirror/lib/codemirror.css';
    import './index.css';



    import Markdown from 'markdownparser';
    import Marked from 'marked';
    import CodeMirror from 'codemirror';
    import 'codemirror/addon/display/fullscreen.js';
    import 'codemirror/mode/markdown/markdown.js';
    import 'codemirror/mode/gfm/gfm.js';
    import 'codemirror/addon/display/placeholder.js';
    import 'codemirror/addon/selection/active-line.js';


    export default {
        props: {

            css: {
                type: String
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '280px'
            },
            toolbar: {
                type: String,
                default: 'clean redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen'
            },
            extend: {
                type: Object

            },
            buttons: {
                type: Object,
                default: function () {

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
                            title: "Generic List",

                        },
                        "numlist": {
                            cmd: "numlist",
                            className: "far fa-list-ol",
                            title: "Numbered List"
                        }
                    }

                }
            },
            name: {
                type: String,
                default: 'html'
            },
            value: {
                type: String,
                default: '',
                required: false
            },

            buttonClass: {
                type: String,
                default: 'btn btn-outline-secondary'
            },



            options: {
                type: Object,
                default: function () {
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
                        indentUnit: 2,
                    }
                }
            },
        },

        data() {
            return {
                id: 'v-md-editor-' + new Date().getTime(),
                editor: null,
                preview: false,
                html: '',
                toolbars: [],
                shortcuts: {},

            }
        },

        watch: {
            value(val) {
                if (val != this.editor.getValue()) {
                    this.editor.setValue(val);
                }

            },
        },

        computed: {
            styles() {
                return {
                    width: isNaN(this.width) ? this.width : this.width + '%',
                    height: isNaN(this.height) ? this.height : this.height + '%'
                }
            },

        },

        methods: {
            isEmpty: function (s) {
                return s === null || s === undefined ? true : /^[\s\xa0]*$/.test(s);
            },
            isUrl: function (s) {
                return this.isEmpty(s) ? false : s.match(/((http(s)?):\/\/[\w\.\/\-=?#]+)/gi);
            },
            format() {
                var a = arguments[0];
                for (var i = 1; i <= arguments.length; i++) {
                    a = a.replace(/%[a-z]/, arguments[i]);
                }
                return a; // Make chainable

            },
            uid(name) {
                return this.format('%s-%s', this.id, name);
            },
            obj(name) {
                return jQuery('#' + this.uid(name));
            },

            _toggleBlock(type, start, end) {

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

            _toggleLine(name) {
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
                            line: i, ch: 0
                        }, {
                            line: i, ch: 99999999999999
                        });
                    })(i);
                }

            },

            state(pos) {
                pos = pos || this.editor.getCursor("start");
                var stat = this.editor.getTokenAt(pos);
                if (!stat.type) return {};

                var types = stat.type.split(" ");

                // console.log(types);

                var ret = {},
                    data, text;
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

            _replaceSelection(active, startEnd, val) {
                var ed = this.editor;

                var text;
                var start = startEnd[0];
                var end = startEnd[1];
                var startPoint = ed.getCursor("start");
                var endPoint = ed.getCursor("end");
                if (val) {
                    Object.keys(val).forEach(key => {
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

            drawImage(obj) {
                var stat = this.state();
                this._replaceSelection(stat.image, ["![#title#](", '#url# "#title#")'], obj);
            },

            drawLink(obj) {
                var stat = this.state();
                this._replaceSelection(stat.link, ['[#title#]', '(#url# "#title#")'], obj);
            },

            command(key) {

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
                            this.drawImage({ title: title, url: url });
                        }
                        break;

                    case 'link':
                        //this.obj('modal-link').modal('show');

                        var url = prompt("Please enter link", "https://");
                        if (this.isUrl(url)) {
                            var title = !this.isEmpty(text) ? text : url;
                            this.drawLink({ title: title, url: url });

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

                        this.html = Marked(ed.getValue());
                        this.preview ^= true;

                        this.obj('toolbar').find('.btn:not(".ready")').prop('disabled', this.preview);

                        break;

                    case 'fullscreen':

                        this.obj('container').toggleClass('v-md-fullscreen');
                        this.obj('fullscreen').toggleClass('active');
                        ed.setOption("fullScreen", !ed.getOption("fullScreen"));

                        break;

                    case 'clean':
                        text = Markdown.parse(text);
                        ed.replaceSelection(text);

                        break;

                }

                ed.focus();

            },





            build() {

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


                var o = Object.assign({}, { extraKeys: _t.shortcuts, initialValue: _t.value }, _t.options);
                var el = document.getElementById(_t.id + '-input');
                _t.editor = CodeMirror.fromTextArea(el, o);
                _t.editor.on("change", function (ed) {
                    //_t.editor.save();                    
                    _t.$emit('input', ed.getValue());
                    //_t.value = ed.getValue();
                });

                _t.editor.on("cursorActivity", function () {
                    var stat = _t.state();

                    _t.obj('toolbar').find('.btn.active:not(.ready)').removeClass('active');
                    Object.keys(stat).forEach(key => {
                        _t.obj(key).addClass('active');

                    });
                });

                _t.__rendered = true;


            }
        },
        mounted() {
            
            this.$nextTick(() => { this.build(); });

        },
        destroyed() {
            this.editor = null;
        }

    }

</script>