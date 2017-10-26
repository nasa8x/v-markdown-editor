<template>
    <div :class="['v-md-container', css]" :id="uid('container')">
        <div :id="uid('toolbar')" class="v-md-toolbar"></div>
        <div class="v-md-wrapper">
            <textarea :id="uid('input')" v-model="value" :style="styles" :name="name"></textarea>
            <div class="v-md-preview" :id="uid('html-preview')">
            </div>
        </div>


        <!-- clipboard modal -->
        <slot name="clipboard">
            <div class="modal fade" :id="uid('modal-clipboard')" aria-hidden="true" role="dialog" tabindex="-1">
                <div class="modal-dialog modal-center">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h3 class="modal-title">Html to Markdown</h3>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <textarea class="form-control clipboard-text" :id="uid('clipboard-text')"></textarea>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" @click="toMarkdown" class="btn btn-primary">Convert</button>
                        </div>

                    </div>
                </div>
            </div>
        </slot>
        <!-- End Modal -->

        <!-- image modal -->
        <slot name="image">
            <div class="modal fade" :id="uid('modal-image')" aria-hidden="true" role="dialog" tabindex="-1">
                <div class="modal-dialog modal-center">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h3 class="modal-title">Image</h3>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Image title</label>
                                <input class="form-control" placeholder="Image title" :id="uid('img-title')" />
                            </div>

                            <div class="form-group">
                                <label>Source</label>
                                <input class="form-control" placeholder="http://" :id="uid('img-src')" />
                            </div>


                            <div class="alert alert-danger alert-dismissible" style="display:none" role="alert" :id="uid('image-alert')">
                                <span>Image source is invalid!</span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>


                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="drawImage"> Ok </button>
                        </div>

                    </div>
                </div>
            </div>
        </slot>
        <!-- End Modal -->


        <!-- link modal -->
        <slot name="image">
            <div class="modal fade" :id="uid('modal-link')" aria-hidden="true" role="dialog" tabindex="-1">
                <div class="modal-dialog modal-center">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h3 class="modal-title">Link</h3>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Link title</label>
                                <input class="form-control" placeholder="Link title" :id="uid('link-title')" />
                            </div>

                            <div class="form-group">
                                <label>Source</label>
                                <input class="form-control" placeholder="http://" :id="uid('link-src')" />
                            </div>


                            <div class="alert alert-danger alert-dismissible" style="display:none" role="alert" :id="uid('link-alert')">
                                <span>Link is invalid!</span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>


                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="drawLink"> Ok </button>
                        </div>

                    </div>
                </div>
            </div>
        </slot>
        <!-- End Modal -->
    </div>
</template>



<script>

    import 'codemirror/lib/codemirror.css';
    import './index.css';


    import $ from 'jquery';
    import Markdown from 'markdownparser';
    import MarkdownIt from 'markdown-it';
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
                default: 'clipboard redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen'
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

            options: {
                type: Object,
                default: function () {
                    return {

                    };
                }
            },
        },

        data() {
            return {
                id: 'v-md-editor-' + new Date().getTime(),
                editor: null,
                preview: false,

                buttons: {

                    'bold': {
                        title: 'Bold',
                        className: 'fa fa-bold',
                        cmd: 'bold',
                        hotkey: 'Ctrl-B'
                    },

                    'italic': {
                        title: 'Italic',
                        className: "fa fa-italic",
                        cmd: 'italic',
                        hotkey: 'Ctrl-I'
                    },

                    "strikethrough": {
                        cmd: "strikethrough",
                        className: "fa fa-strikethrough",
                        title: "Strikethrough"
                    },

                    'heading': {
                        title: 'Heading',
                        className: "fa fa-header",
                        cmd: 'heading',
                        hotkey: 'Ctrl-H'
                    },

                    'code': {
                        title: 'Code',
                        className: "fa fa-code",
                        cmd: 'code',
                        hotkey: 'Ctrl-X'
                    },
                    'quote': {
                        title: 'Quote',
                        className: "fa fa-quote-left",
                        cmd: 'quote',
                        hotkey: 'Ctrl-Q'
                    },
                    'link': {
                        title: 'Link',
                        className: "fa fa-link",
                        cmd: 'link',
                        hotkey: 'Ctrl-K'
                    },
                    'image': {
                        title: 'Image',
                        className: "fa fa-picture-o",
                        cmd: 'image',
                        hotkey: 'Ctrl-P'
                    },
                    "fullscreen": {
                        cmd: "fullscreen",
                        className: "fa fa-arrows-alt no-disable no-mobile",
                        title: "Toggle Fullscreen",
                        hotkey: 'F11',
                        ready: true
                    },
                    "preview": {
                        cmd: "preview",
                        className: "fa fa-eye no-disable",
                        title: "Toggle Preview",
                        hotkey: 'Ctrl-P',
                        ready: true
                    },

                    "clipboard": {
                        cmd: "clipboard",
                        className: "fa fa-clipboard",
                        title: "Copy & Markdown Format",
                        hotkey: 'Ctrl-V'
                    },

                    "undo": {
                        cmd: "undo",
                        className: "fa fa-undo",
                        title: "Undo",
                        hotkey: 'Ctrl-Z'
                    },

                    "redo": {
                        cmd: "redo",
                        className: "fa fa-repeat",
                        title: "Redo",
                        hotkey: 'Ctrl-Y'
                    },

                    "bullist": {
                        cmd: "bullist",
                        className: "fa fa-list-ul",
                        title: "Generic List",

                    },
                    "numlist": {
                        cmd: "numlist",
                        className: "fa fa-list-ol",
                        title: "Numbered List"
                    },


                },
                defaults: {
                    mode: 'gfm',
                    theme: "elegent",
                    lineNumbers: true,
                    styleActiveLine: true,
                    styleSelectedText: true,
                    lineWrapping: true,
                    indentWithTabs: true,
                    tabSize: 2,
                    indentUnit: 2
                },
                shortcuts: {},

            }
        },

        watch: {
            value(val) {
                if (val === this.editor.getValue()) return;
                this.editor.setValue(val);
            },
        },

        computed: {
            styles() {
                return {
                    width: isNaN(this.width) ? this.width : this.width + '%',
                    height: isNaN(this.height) ? this.height : this.height + '%'
                }
            }
        },

        methods: {
            isEmpty: function (s) {
                return s === null || s === undefined ? true : /^[\s\xa0]*$/.test(s);
            },
            isUrl: function (s) {
                return this.isEmpty(s) ? false : s.match(/((http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi);
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
                return $('#' + this.uid(name));
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
                    } else if (data === "link") {
                        ret.link = true;
                    } else if (data === "tag") {
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
                    text = ed.getSelection();
                    ed.replaceSelection(start + text + end);

                    startPoint.ch += start.length;
                    if (startPoint !== endPoint) {
                        endPoint.ch += start.length;
                    }
                }
                ed.setSelection(startPoint, endPoint);
                ed.focus();

            },
            command(key) {

                var ed = this.editor;
                var start, end;

                var startPoint = ed.getCursor("start");
                var endPoint = ed.getCursor("end");
                var text = ed.getSelection();
                var stat = this.state();

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
                        this.obj('modal-image').modal('show');
                        break;

                    case 'link':
                        this.obj('modal-link').modal('show');
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

                        var md = new MarkdownIt({
                            html: true,
                            linkify: true,
                            typographer: true,
                            breaks: true,
                            quotes: '“”‘’',
                            langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be useful for external highlighters. 
                            highlight: function (str, lang) {
                                return '<pre class="hljs" data-lang="' + lang + '"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
                            }
                        });
                        var txt = md.render(ed.getValue());

                        this.obj('html-preview').html(txt).toggle();
                        this.obj('preview').toggleClass('active');
                        this.preview ^= true;

                        this.obj('toolbar').find('.btn:not(".ready")').prop('disabled', this.preview);

                        break;

                    case 'fullscreen':

                        this.obj('container').toggleClass('v-md-fullscreen');
                        this.obj('fullscreen').toggleClass('active');
                        ed.setOption("fullScreen", !ed.getOption("fullScreen"));

                        break;

                }

                ed.focus();

            },

            drawImage() {
                var url = this.obj('img-src').val();
                var title = this.obj('img-title').val();
                if (this.isUrl(url)) {
                    var stat = this.state();
                    this._replaceSelection(stat.image, ["![#title#](", '#url# "#title#")'], {
                        title: title,
                        url: url
                    });
                    this.obj('modal-image').modal('hide');

                } else {
                    this.obj('image-alert').fadeIn();
                }

            },

            drawLink() {
                var url = this.obj('link-src').val();
                var title = this.obj('link-title').val();
                if (this.isUrl(url)) {
                    var stat = this.state();
                    this._replaceSelection(stat.link, ['[#title#]', '(#url# "#title#")'], {
                        title: title,
                        url: url
                    });
                    this.obj('modal-link').modal('hide');

                } else {
                    this.obj('link-alert').fadeIn();
                }

            },

            toMarkdown() {
                var html = this.obj('clipboard-text').val();

                var text = Markdown.parse(html);

                this.editor.replaceSelection(text);
                this.editor.focus();

                this.obj('modal-clipboard').modal('hide');
            },

            build() {
                if (this.isEmpty(this.toolbar)) {
                    console.error("You must set toolbar!");
                    return;
                }

                if (this.__rendered) return;

                var _t = this;

                var btns = _t.toolbar.toLowerCase().split(/(\s)/).filter(function (w) {
                    return !_t.isEmpty(w);
                });

                var group = $('<div class="btn-group mr-5" role="group"></div>');
                var toolbar = _t.obj('toolbar');
                for (var i = 0; i < btns.length; i++) {
                    var btn = btns[i];
                    var obj = _t.buttons[btn];
                    if (obj) {
                        btn = $(_t.format('<button type="button" id="%s-%s" data-cmd="%s" title="%s" class="btn btn-outline btn-secondary %s"><i class="%s" aria-hidden="true"></i></button>', _t.id, btn, obj.cmd, obj.title, obj.ready ? 'ready' : '', obj.className)).on('click', function () {
                            _t.command($(this).attr('data-cmd'));
                        });

                        // if (obj.hotkey) {
                        //     _t.shortcuts[obj.hotkey] = function () {
                        //         //_t.command(obj.cmd);
                        //         btn.trigger('click');
                        //         // _t.obj(obj.cmd).trigger('click');
                        //     }
                        // }

                        group.append(btn);

                    }

                    if (btn === '|' || i == btns.length - 1) {
                        toolbar.append(group);
                        group = $('<div class="btn-group mr-5" role="group"></div>');
                    }

                }
                //console.log( _t.shortcuts);
                var o = Object.assign({}, { extraKeys: _t.shortcuts, initialValue: _t.value }, _t.defaults, _t.options);
                var el = document.getElementById(_t.id + '-input');
                _t.editor = CodeMirror.fromTextArea(el, o);
                _t.editor.on("change", function (ed) {
                    //_t.editor.save();                    
                    _t.$emit('input', ed.getValue());
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
            this.build();
        },
        destroyed() {
            this.editor = null;
        }

    }

</script>