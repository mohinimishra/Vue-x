import Vue from 'vue';
import Vuex from'vuex';
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products : [
        {name:'Banana', price:20},
        {name:'Apple', price:30},
        {name:'Mango', price:60},
        {name:'Grapes', price:40},
        {name:'papaya', price:210},
        {name:'orange', price:120}
      ],
    },
    getters:{
        saleProduct : function(state){
            let product = state.products.map((ele)=>{
                return{
                    name : '**' + ele.name +'**',
                    price : ele.price / 2
                }
            })
            return product
        }
    },
    mutations:{
        reducePrice : function(state,payload){
            state.products.forEach((ele)=>{
                ele.price -= payload
            })
        }
    },
    actions :{
        reducePrice : function(context,payload){
            setTimeout(function(){
                context.commit('reducePrice',payload)
            },2000)
        }
    }
})