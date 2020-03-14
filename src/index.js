
import 'codemirror/lib/codemirror.css';
import './index.css';
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