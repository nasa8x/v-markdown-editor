<template>
    <div :class="['v-md-container', css,{'v-md-auto-resize': height=='auto', 'v-md-fullscreen': fullScreen }]">
        <div class="v-md-toolbar" v-if="toolbars.length>0">
            <div class="btn-group mr-3" role="group" v-for="group in toolbars">
                <button type="button" :title="i.title" :class="'btn btn-'+theme" v-on:click="command(i.cmd)"
                    :disabled="preview && !i.ready" v-for="i in group"><i :class="i.ico"></i></button>
            </div>
        </div>
        <div class="v-md-wrapper" v-on:click="editor.focus()">
            <textarea class="v-md-editor" :style="styles" :id="id" :placeholder="placeholder"></textarea>
            <div class="v-md-preview" v-if="preview" v-html="html"></div>
        </div>

    </div>
</template>



<script>



    import Markdown from 'markdownparser';
    import Marked from 'marked';

    import CodeMirror from 'codemirror';
    import 'codemirror/addon/display/fullscreen.js';
    import 'codemirror/mode/markdown/markdown.js';
    import 'codemirror/addon/display/placeholder.js';


    export default {
        props: {

            id: {
                type: String,
                default: () => {
                    return 'v-md-editor-' + Math.random().toString(16).substr(2, 9);
                }
            },

            css: { type: String },


            width: { type: [String, Number], default: '100%' },
            height: { type: [String, Number], default: '300px' },

            toolbar: {
                type: String,
                default: 'clean redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen'
            },

            placeholder: {
                type: String,
                default: ''
            },

            extend: {
                type: Object

            },
            buttons: {
                type: Object,
                default: function () {

                    return {

                        "clean": {
                            cmd: "clean",
                            ico: "fas far fa-remove-format mdi mdi-format-clear",
                            title: "Html to markdown",
                            hotkey: 'Shift-Alt-F'
                        },

                        "undo": {
                            cmd: "undo",
                            ico: "fas far fa-undo mdi mdi-undo-variant",
                            title: "Undo",
                            hotkey: 'Ctrl-Z'
                        },

                        "redo": {
                            cmd: "redo",
                            ico: "fas far fa-redo mdi mdi-redo-variant",
                            title: "Redo",
                            hotkey: 'Ctrl-Y'
                        },

                        "bullist": {
                            cmd: "bullist",
                            ico: "fas far fa-list-ul mdi mdi-format-list-bulleted",
                            title: "Generic List",

                        },
                        "numlist": {
                            cmd: "numlist",
                            ico: "fas far fa-list-ol mdi mdi-format-list-numbered",
                            title: "Numbered List"
                        },

                        'bold': {
                            title: 'Bold',
                            ico: 'fas far fa-bold mdi mdi-format-bold',
                            cmd: 'bold',
                            hotkey: 'Ctrl-B'
                        },

                        'italic': {
                            title: 'Italic',
                            ico: "fas far fa-italic mdi mdi-format-italic",
                            cmd: 'italic',
                            hotkey: 'Ctrl-I'
                        },

                        "strikethrough": {
                            cmd: "strikethrough",
                            ico: "fas far fa-strikethrough mdi mdi-format-strikethrough",
                            title: "Strikethrough"
                        },

                        'heading': {
                            title: 'Heading',
                            ico: "fas far fa-heading mdi mdi-format-header-3",
                            cmd: 'heading',
                            hotkey: 'Ctrl-H'
                        },

                        'code': {
                            title: 'Code',
                            ico: "fas far fa-code mdi mdi-code-tags",
                            cmd: 'code',
                            hotkey: 'Ctrl-X'
                        },
                        'quote': {
                            title: 'Quote',
                            ico: "fas far fa-quote-left mdi mdi-format-quote-open",
                            cmd: 'quote',
                            hotkey: 'Ctrl-Q'
                        },
                        'link': {
                            title: 'Link',
                            ico: "fas far fa-link mdi mdi-link",
                            cmd: 'link',
                            hotkey: 'Ctrl-K'
                        },
                        'image': {
                            title: 'Image',
                            ico: "fas far fa-image mdi mdi-image",
                            cmd: 'image',
                            hotkey: 'Ctrl-P'
                        },
                        "fullscreen": {
                            cmd: "fullscreen",
                            ico: "fas far fa-expand mdi mdi-fullscreen",
                            title: "Toggle Fullscreen",
                            hotkey: 'F11',
                            ready: true
                        },
                        "preview": {
                            cmd: "preview",
                            ico: "fas far fa-eye mdi mdi-eye",
                            title: "Toggle Preview",
                            hotkey: 'Ctrl-P',
                            ready: true
                        }


                    }

                }
            },


            theme: {
                type: String,
                default: 'outline-secondary'
            },

            value: {
                type: String,
                default: '',
                required: false
            },

            options: {
                type: Object,
                default: function () {
                    return {
                        lineWrapping: true
                    }
                }
            },
        },

        data() {
            return {

                editor: null,
                preview: false,
                fullScreen: false,
                html: '',
                toolbars: [],

            }
        },

        computed: {
            styles() {
                return {
                    width: !/^\d+$/.test(this.width) ? this.width : `${this.width}px`,
                    height: !/^\d+$/.test(this.height) ? this.height : `${this.height}px`
                }
            },

        },

        watch: {
            value(val) {
                if (val != this.editor.getValue()) {
                    this.editor.setValue(val);
                    // this.editor.focus();
                }
            }
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
                    ed.replaceRange(start + end, { line: startPoint.line, ch: 0 });
                } else {

                    ed.replaceSelection(start + end);
                    startPoint.ch += start.length;
                    if (startPoint !== endPoint) {
                        endPoint.ch += start.length;
                    }
                }
                ed.setSelection(startPoint, endPoint);


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

                // this.$root.$emit('markdown-editor:' + key, this);

                this.$emit('command:' + key, this);

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
                            this.drawImage({ title: title, url: url });
                        }
                        break;

                    case 'link':

                        var url = prompt("Please enter link", "https://");
                        if (this.isUrl(url)) {
                            var title = !this.isEmpty(text) ? text : url;
                            this.drawLink({ title: title, url: url });

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

                        this.html = Marked(ed.getValue(), { breaks: true });
                        this.preview = !this.preview;

                        break;

                    case 'fullscreen':
                        this.fullScreen = !this.fullScreen;
                        ed.setOption("fullScreen", !ed.getOption("fullScreen"));
                        break;

                    case 'clean':
                        ed.replaceSelection(Markdown.parse(text));
                        break;

                }

                ed.focus();

            },

            build() {

                if (this.__rendered) return;

                var buttons = Object.assign({}, this.buttons, this.extend);

                var shortcuts = {};

                this.toolbar.split('|').forEach((t, i) => {
                    var group = [];
                    t.toLowerCase().split(/(\s)/).forEach((b) => {

                        if (!this.isEmpty(b)) {

                            var btn = buttons[b];
                            if (!this.isEmpty(btn.hotkey)) {
                                shortcuts[btn.hotkey] = () => this.command(btn.cmd);
                            }
                            group.push(btn);
                        }
                    });

                    if (group.length > 0)
                        this.toolbars.push(group);

                });


                var o = Object.assign({ mode: 'markdown', extraKeys: shortcuts }, this.options);

                var ed = this.editor = CodeMirror.fromTextArea(document.getElementById(this.id), o);
                ed.setValue(this.value);
                ed.setSize(this.width, this.height);
                ed.on("change", (ed) => {
                    var val = ed.getValue();
                    this.$emit('change', val);
                    this.$emit('input', val);
                });

                this.__rendered = true;

            }
        },
        mounted() {
            this.build();
        },

        destroy() {
            this.editor.toTextArea();
        }

    }

</script>