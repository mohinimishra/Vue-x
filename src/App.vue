<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>

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
      
  }
}
}
</script>

<style>

</style>
