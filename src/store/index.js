import { createStore } from "vuex";
import axios from "axios";
import { API_URL } from "@/constant";
import router from "@/router/index";

export default createStore({
  state: {
    isAuthenticated: false,
    currentUser: null
  },

  getters: {},

  mutations: {
    isAuthenticated(state, value) {
      state.isAuthenticated = value;
    },

    currentUser(state, value) {
      state.currentUser = value
    }
  },

  actions: {
    async verifyLoginLink({ commit }, linkId) {
      try {
        const response = await axios.post(`${API_URL}/accounts/verify-login-link`, {
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
          localStorage.setItem("token", jwtToken)
          commit('isAuthenticated', true);
          commit('currentUser', userData.data)
          localStorage.setItem("currentUser", JSON.stringify(userData.data))

          if(userData.data.role === "super-admin"){
            router.push('/admin');
          } else {
            router.push('/forum');
          }
          
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
          `${API_URL}/accounts/current-user`,
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
