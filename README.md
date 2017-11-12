Markdown Editor component for Vue.js


## Demo

[Markdown Editor](https://nasa8x.github.io/v-markdown-editor/dist/demo)

## Install

```js
npm install v-markdown-editor
```

```js
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

