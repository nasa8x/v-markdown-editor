
import editor from './editor.vue';

const MarkdownEditor = {
    install: function (Vue) {
        if (Vue.__md_editor_installed) {
            return;
        }

        Vue.__md_editor_installed = true;

        Vue.component('markdown-editor', editor);    
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(MarkdownEditor);
}

export default MarkdownEditor;