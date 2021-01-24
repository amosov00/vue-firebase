import Vue from 'vue'
import Vuex from 'vuex'
import authentication from "@/store/modules/authentication";
import error from "@/store/modules/error";
import registration from "@/store/modules/registration";
import user from "@/store/modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    error,
    registration,
    user
  }
})
