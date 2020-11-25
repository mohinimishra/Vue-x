<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>

  </div>
    
</template>

<script>
import ProductOne from './components/product-list-one'
import ProductTwo from './components/product-list-two'

export default {
  components :{
    'product-list-one': ProductOne,
    'product-list-two': ProductTwo
  },
  name: "app",
  data(){
    return{
      products : [
        {name:'Banana', price:20},
        {name:'Apple', price:30},
        {name:'Mango', price:60},
        {name:'Grapes', price:40},
        {name:'papaya', price:210},
        {name:'orange', price:120}
      ],
  }
}
}
</script>

<style>

</style>
