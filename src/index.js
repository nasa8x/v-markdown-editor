
import Editor from './editor.vue';

var MarkdownEditor = {
    install: function (Vue) {
        if (Vue.__md_editor_installed) {
            return;
        }

        Vue.__md_editor_installed = true;

        Vue.component('markdown-editor', Editor);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(MarkdownEditor);
}

export default MarkdownEditor;


// if (typeof exports == "object") {
//     module.exports = MarkdownEditor;
// } else if (typeof define == "function" && define.amd) {
//     define([], function () { return MarkdownEditor; })
// } else if (window.Vue) {
//     Vue.use(MarkdownEditor);
// }