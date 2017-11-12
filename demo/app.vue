<template>
    <div class="container">

        <!-- <transition name="fade" mode="out-in">
            <router-view class="view" keep-alive></router-view>
        </transition> -->

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
            <markdown-editor toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen" buttonClass="btn btn-outline-success"></markdown-editor>
        </div>

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
            }
        }


    }

</script>