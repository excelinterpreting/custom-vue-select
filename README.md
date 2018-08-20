# custom-vue-select 

> This is a custom vue-select frok of https://sagalbot.github.io/vue-select/

## Development

First, clone the repository to your local environment.

### Getting Started

* Run `$ npm install` to install dependencies
* Run `$ npm run dev` to launch the development server (http://localhost:3333/)

### Production

In order to use it in your project, you'll need to compile the files. But first, you'll need to update the version in package.json.

For example: change `"version": "2.4.10"` to `"version": "2.4.11"`

Then...

* Run `$npm run build`

Then...

* Push to repository

## Installation

###### Vue Compatibility
-  `vue ~2.0` use `custom-vue-select ~2.0`

#### NPM

Include the file in your project's `package.json`

`"custom-vue-select": "git+ssh://git@github.com/ksaetern03/custom-vue-select.git"`


Register the component

```js
import Vue from 'vue'
import customVueSelect from 'custom-vue-select'
Vue.component('custom-v-select', customVueSelect)
```

You may now use the component in your markup

```html
<custom-v-select  v-model="selected" :options="['foo','bar']"></custom-v-select >
```

## Usage

Below are common usage.

#### Select on Tab

Set `:select-on-tab` to true to allow selection using tab key

```html
<v-select placeholder="select on tab" :select-on-tab="true" :options="options"></v-select>
```

#### Allow Custom Search Value Not Matching Drop Down

Use `taggable`

```html
<v-select placeholder="taggable" taggable :options="options"></v-select>
```

#### Filter Using Remote Data

```html
<v-select placeholder="filterable=true, @search=searchPeople" label="first_name" :filterable="true" @search="searchPeople" :options="people"></v-select>
```

```js
new Vue({
  el: '#app',
  data: {
    people: []
  },
  methods: {
    searchPeople(search, loading) {
      loading(true)
      this.getPeople(loading, this)
    },
    getPeople: debounce((loading, vm) => {
      vm.$http.get(`https://reqres.in/api/users?per_page=10`).then(res => {
        vm.people = res.data.data
        loading(false)
      })
    }, 250),
  }
```
