import { createStore } from "vuex";
import axios from "axios";
import { API_URL } from "@/constant";
import router from "@/router/index";

export default createStore({
  state: {
    isAuthenticated: false,
  },

  getters: {},

  mutations: {
    isAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
  },

  actions: {
    async verifyLoginLink({ commit }, linkId) {
      try {
        const response = await axios.post(`${API_URL}/auth/verify-login-link`, {
          id: linkId,
        });
        const jwtToken = response.data.data;
        await this.dispatch("verifyToken", jwtToken);
      } catch (error) {
        commit("isAuthenticated", false);
        router.push('/signin');
      }
    },

    async verifyToken({ commit, dispatch }, jwtToken){
      try {
        const userData = await dispatch("getCurrentUser", jwtToken);
      
        if (userData) {
          commit('isAuthenticated', true);
          router.push('/forum');
        } else {
          commit('isAuthenticated', false);
        }
      } catch (error) {
        commit("isAuthenticated", false);
        console.log("VerifyTokenError", error);
      }
    },

    async getCurrentUser(context, jwtToken) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const response = await axios.get(
          `${API_URL}/auth/current-user`,
          config
        );
        return response.data;
      } catch (error) {
        throw error.response
      }
    },
  },
  modules: {},
});
