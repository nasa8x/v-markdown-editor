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
                <markdown-editor v-model="value"></markdown-editor>
            </div>

            <div class="form-group">
                <button @click="val" class="btn btn-primary">Change</button>
            </div>


            <div class="form-group">
                <pre>{{value}}</pre>
            </div>

            <div class="form-group">
                <markdown-editor
                    toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen"
                    buttonClass="btn btn-outline-success"></markdown-editor>
            </div>


            <div class="form-group">
                <button @click="showModal()" class="btn btn-primary">Show Modal</button>
            </div>

        </div>


        <div class="modal" id="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                 
                    <markdown-editor></markdown-editor>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  
                </div>
              </div>
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
                value: 'Hello world'
            }
        },

        methods: {
            val() {
                this.value = "jjkjlkjljlkjlkjlkjlkj"
            },

            showModal() {

                $('#modal').modal('show');

            }
        }


    }

</script>