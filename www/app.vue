<template>
    <div>
        <div class="container">

            <header>
                <h1>v-markdown-editor</h1>
                <h4>Markdown Editor component for Vue.js</h4>
            </header>

            <div class="form-group">
                <h2 class="text-center"><a href="https://morioh.com">Social Network for Developers</a></h2>
            </div>


            <div class="form-group">
                <markdown-editor ref="md" v-model="value"></markdown-editor>
            </div>

            <div class="form-group">
                <button @click="val" class="btn btn-primary">Change</button>
                <button @click="replace" class="btn btn-primary">Handle</button>
            </div>


            <div class="form-group">
                <pre>{{value}}</pre>
            </div>

            <div class="form-group">
                <markdown-editor
                    toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen upload"
                    buttonClass="btn btn-default" :extend="custom"></markdown-editor>
            </div>


            <div class="form-group">
                <markdown-editor buttonClass="btn btn-sm btn-success"></markdown-editor>
            </div>


        </div>


        <footer>

            <p>
                <a class="social-icon" href="https://github.com/nasa8x/v-markdown-editor" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </p>

            <p>Developed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a><br>
                Made Love by Nasa8x<br>
                <strong>Donate</strong><br>
                <a href="http://vrl.to/ec5cfbae" target="_blank">
                    <img src="https://i.imgur.com/z0p6RvA.png"></a><a href="http://vrl.to/ec5cfbae" target="_blank"><img
                        src="https://i.imgur.com/bEUNBGz.png"></a>
            </p>


        </footer>

    </div>
</template>


<script>

    export default {
        data() {
            return {
                value: 'Hello world',

                custom: {
                    'upload': {
                        cmd: 'upload',
                        className: 'fas fa-upload',
                        title: 'Upload File'
                    }
                }
            }
        },

        methods: {
            val() {
                this.value = "jjkjlkjljlkjlkjlkjlkj"
            },



            showModal() {

                $('#modal').modal('show');

            },

            replace() {
                this.$refs.md.editor.replaceSelection("Handle editor");
            }
        },


        created() {
            this.$root.$on('markdown-editor:upload', function (md) {
                md.drawImage({ url: 'https://i.imgur.com/CbCXhBe.png', title: 'this image title' });
            });

        }


    }

</script>