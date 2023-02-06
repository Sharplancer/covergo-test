import * as types from "./mutation-types";

interface State {
  packageInfo: PackageInfo;
}

interface PackageInfo {
  name: string;
  age: number;
  premium: string;
  package: string;
  country: string;
}
// initial state
const state = {
  packageInfo: {},
};

// getters
const getters = {
  packageInfo: (state: State) => state.packageInfo,
};

// mutations
const mutations = {
  [types.UPDATE_PACKAGE_VALUES](state: State, data: PackageInfo) {
    state.packageInfo = { ...state.packageInfo, ...data };
  },
};

export default {
  state,
  actions: {
    updatePackageValues: (store: any, data: PackageInfo) => {
      store.commit(types.UPDATE_PACKAGE_VALUES, data);
    },
  },
  getters,
  mutations,
};
