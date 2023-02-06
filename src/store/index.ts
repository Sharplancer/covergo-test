import Vue from "vue";
import Vuex from "vuex";

import packages from "./modules/package";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    packages: {
      ...packages,
      namespaced: true,
    },
  },
  strict: debug,
});

export default store;
