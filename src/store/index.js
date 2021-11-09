import Vue from 'vue'    //импортируем
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //инициализируем vuex
  state : {
    paymentsList: [],
    categoryList: [],
  },
  
  mutations: {                  //все что надо сделать со state надо делать через mutations!!!!
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    editPaymentsListFirstElement (state, payload) {
      Vue.set(state.paymentsList, 0, payload)
    },
    setCategories (state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },
   
  
  
  
  },
  actions: {
    fetchData ( { commit } ) {
      return new Promise((resolve) => {
         // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
         setTimeout(() => {
          const items = []
          for (let i=1; i<=100; i++){
          items.push({
            number: i,
            date: "28.03.2020",
            category: "Food",
            value: i,
          });
          }
          resolve(items)
           /*resolve([
             {
               date: '28.03.2020',
               category: 'Food',
               value: 169,
             },
             {
               date: '24.03.2020',
               category: 'Transport',
               value: 360,
             },
             {
               date: '24.03.2020',
               category: 'Food',
               value: 532,
             },
           ])*/
         }, 1000)
       })
         .then(res => {
           // запускаем изменение состояния через commit
           commit('setPaymentsListData', res);
         });
         
    },
    loadCategories ({ commit }) {
      return new Promise((resolve) => {
        // имитируем работу с сетью
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment'])
        }, 1000)
      })
        .then(res => {
          // запускаем изменение состояния через commit
          commit('setCategories', res)
        })
    },
   
  
  },
  modules: {
  },
  getters: {
     // получаем список paymentsList
  getPaymentsList: state => state.paymentsList,
 
  // получаем суммарную стоимость всех платежей
  getFullPaymentValue: state => {
    return state.paymentsList
      .reduce((res, cur) => res + cur.value, 0)
  },
  getCategoryList: state => state.categoryList,

  },

})
