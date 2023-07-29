import { createStore } from "vuex";
import axios from "axios";
import { API_URL } from "@/constant";
import router from "@/router/index";

export default createStore({
  state: {
    isAuthenticated: false,
    confirmedEmail: false,
  },

  getters: {},

  mutations: {
    isAuthenticated(state, value) {
      state.isAuthenticated = value;
    },

    confirmedEmail(state, value) {
      state.confirmedEmail = value;
    },
  },

  actions: {
    async verifyLoginLink({ commit }, linkId) {
      try {
        commit("confirmedEmail", true);
        const response = await axios.post(`${API_URL}/auth/verify-login-link`, {
          id: linkId,
        });
        const jwtToken = response.data.data;
        await this.dispatch("getCurrentUser", jwtToken);
        commit("isAuthenticated", true);
        router.push("/forum");
      } catch (error) {
        commit("isAuthenticated", false);
        console.log(error);
      }
    },

    async getCurrentUser(jwtToken) {
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
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  modules: {},
});
