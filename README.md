Vue Markdown Editor component for Vue.js

☞ [How to Create a Chrome Extension with Vue.js](https://morioh.com/p/0169fb660bae)

☞ [How To Build a Blog with Nest.js, MongoDB, and Vue.js](https://morioh.com/p/74ffc8a798bb)

![Markdown Editor Preview](https://i.imgur.com/Bcr3Xhk.png)


## Demo

[Markdown Editor](https://nasa8x.github.io/v-markdown-editor/dist/www)

## Install

```js
npm install v-markdown-editor
```

```js
import 'v-markdown-editor/dist/index.css';

import Vue from 'vue'
import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);

```

## Require

Bootstrap 4 & Fontawesome


## Example

```js

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


```js

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

## Toolbar


```js

// full toolbar: clipboard redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen

<template>
    <div class="container">
       <markdown-editor toolbar="bold italic heading | image link | numlist bullist code quote | preview fullscreen"></markdown-editor>
    </div>
</template>

```


## Custom submit form input name


```js

<template>
    <div class="container">
       <markdown-editor name="html"></markdown-editor>
    </div>
</template>

```

## Donate
[![](https://i.imgur.com/z0p6RvA.png)](http://vrl.to/ec5cfbae)[![](https://i.imgur.com/bEUNBGz.png)](http://vrl.to/ec5cfbae)