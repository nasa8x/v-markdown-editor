<template>
    <div class="wrapper">
        <div class="container">

            <div class="card">
                <div class="card-body">
                    <div class="text-center my-40">
                        <h1>v-markdown-editor</h1>
                        <h4>Markdown Editor component for Vue.js</h4>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="form-group">

                                <markdown-editor ref="md" placeholder="Enter markdown content..."
                                    v-model="value">
                                </markdown-editor>

                            </div>


                            <div class="form-group">
                                <button @click="val" class="btn btn-primary">Change</button>
                                <button @click="replace" class="btn btn-primary">Handle</button>

                            </div>


                            <div class="form-group">
                                <pre><code>{{value}}</code></pre>
                            </div>


                            <pre><code>&lt;markdown-editor toolbar=&quot;bold italic upload&quot; @command:upload=&quot;upload&quot; :extend=&quot;custom&quot;&gt; &lt;/markdown-editor&gt;</code></pre>

                            <div class="form-group">
                                <markdown-editor toolbar="bold italic upload" @command:upload="upload" :extend="custom">
                                </markdown-editor>
                            </div>



                            <pre><code>&#x3C;markdown-editor theme=&#x22;success&#x22;&#x3E;&#x3C;/markdown-editor&#x3E;</code></pre>

                            <div class="form-group">
                                <markdown-editor theme="success"></markdown-editor>
                            </div>


                            <pre><code>&#x3C;markdown-editor height="auto" toolbar=&#x27;&#x27;&#x3E;&#x3C;/markdown-editor&#x3E;</code></pre>
                            <div class="form-group">
                                <markdown-editor height="auto" toolbar=''></markdown-editor>
                            </div>

                        </div>

                        <div class="col-12 col-lg-4">
                            <div class="viralroll" data-id="5e8d2bb73364491e2a946eec"></div>
                        </div>
                    </div>




                </div>
            </div>
        </div>


        <footer class="text-center">

            <p>
                <a class="social-icon" href="https://github.com/nasa8x/v-markdown-editor" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </p>

            <p>Themed by <a href="http://on.morioh.net/96d5d36367" target="_blank">Morioh Theme</a><br>
                Made Love by <a href="https://morioh.com/@5c22e47440738156a7078a19">Nasa8x</a>

            </p>


        </footer>

    </div>
</template>


<script>

    export default {
        data() {
            return {
                value: '',

                custom: {
                    'upload': {
                        cmd: 'upload',
                        ico: 'fas fa-cloud',
                        title: 'Upload File'
                    }
                }
            }
        },

        methods: {
            val() {
                this.value = "This's new value";
            },           

            onChange(val) {

                console.log(val);
            },

            replace() {
                this.$refs.md.editor.replaceSelection("Handle editor");
            },

            upload(md) {
                md.drawImage({ url: 'https://i.imgur.com/CbCXhBe.png', title: 'this image title' });
            }
        },

    }

</script>