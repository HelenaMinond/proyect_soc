import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartas: [],
  },
  mutations: {
    llenarConDataAPI(state, payload) {
      state.cartas = payload;
    },
  },
  actions: {
    async obtenerDataAPI({ commit }) {
      const url = "https://api.magicthegathering.io/v1/cards";
      try {
        const req = await axios(url);
        const arr = req.data.cards;
        console.log(arr)
        commit("llenarConDataAPI", arr);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
