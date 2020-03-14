# Vue Markdown Editor component for Vue.js

☞ [What's new in Bootstrap 5)](https://morioh.com/p/46e9af3b9b04)

☞ [Vue.JS Tutorial: Learn Vue.js from Scratch](https://morioh.com/list/5dd27fc107964607af718993)

☞ [Javascript Tutorial for Absolute Beginners](https://morioh.com/list/5dcd0341203e265d661aa028)

![Markdown Editor Preview](https://i.imgur.com/jdhT2Yf.png)


### Demo

[Markdown Editor](https://nasa8x.github.io/v-markdown-editor/dist/www)

### Install

```js
npm install v-markdown-editor
```

```js
import 'v-markdown-editor/dist/v-markdown-editor.css';

import Vue from 'vue'
import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);

```


### Use CDN

```
<link href="https://cdn.jsdelivr.net/npm/v-markdown-editor/dist/v-markdown-editor.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/v-markdown-editor/dist/v-markdown-editor.min.js" type="text/javascript"></script>

```

```

<link href="https://unpkg.com/v-markdown-editor/dist/v-markdown-editor.css" rel="stylesheet">

<script src="https://unpkg.com/v-markdown-editor/dist/v-markdown-editor.min.js" type="text/javascript"></script>


```

## Change

```
1.2.0
- Support Fontawsome &  Material Design Icons 
- Remove jQuery

```


## Example

```html

<template>
    <div class="container">
        <markdown-editor :options="options"></markdown-editor>
    </div>
</template>


<script>
   
    export default {

        data() {
            return {
                // default options, see more options at: http://codemirror.net/doc/manual.html#config
                options: {                   
                    // lineNumbers: true,
                    // styleActiveLine: true,
                    // styleSelectedText: true,
                    // lineWrapping: true,
                    // indentWithTabs: true,
                    // tabSize: 2,
                    // indentUnit: 2
                }

            }

        }

    }

</script>
```

## v-model


```html

<template>
    <div class="container">
        <markdown-editor v-model="value"></markdown-editor>
    </div>
</template>


<script>
   
    export default {

        data() {
            return {
                value: 'Hello world!'
            }

        }

    }

</script>
```

### Toolbar


```html

// full toolbar: clipboard redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen

<template>
    <div class="container">
       <markdown-editor toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen"></markdown-editor>
    </div>
</template>

```

### add custom button


```html

<template>
    <div class="container">
       <markdown-editor toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen | upload" :extend="custom"></markdown-editor>
    </div>
</template>

<script>

    export default {
        data() {
            return {              

                custom: {
                    'upload': {
                        cmd: 'upload',
                        ico: 'fas fa-upload',
                        title: 'Upload File'
                    }
                }
            }
        },       


        created() {
            this.$root.$on('markdown-editor:upload', function (md) {
                md.drawImage({url:'https://i.imgur.com/CbCXhBe.png', title:'this image title'});
            });

        }


    }

</script>

```


### Handle editor


```html

<template>
    <div class="container">
       <markdown-editor ref="md"></markdown-editor>

         <button @click="replace" class="btn btn-primary">Handle</button>

    </div>
</template>


<script>

    export default {
       
        methods: {          

            replace(){

                // more info: https://codemirror.net/doc/manual.html#api

                this.$refs.md.editor.replaceSelection("Handle editor");
            }
        },  


    }

</script>

```

### Auto resize

```html

 <markdown-editor height="auto"></markdown-editor>
```


### Button Theme

```html

 <markdown-editor theme="primary"></markdown-editor>
```


