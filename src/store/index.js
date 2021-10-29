import Vue from 'vue'    //импортируем
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //инициализируем vuex
  state : {
    paymentsList: [],
  },
  
  mutations: {                  //все что надо сделать со state надо делать через mutations!!!!
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
  
  
  },
  actions: {
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

  },

})
