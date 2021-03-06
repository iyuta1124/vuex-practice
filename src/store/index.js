import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: '',
  },
  getters: {
    doubleCount: state => state.count * 2,
    message: state => state.message
  },
  mutations: {
    increment(state, number) {
      state.count += number
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  actions: {
    increment(ctx,number) {
      ctx.commit('increment', number)
      console.log(ctx)
    },
    updateMessage({commit}, newMessage) {
      commit('updateMessage', newMessage)
    }
  }
})
