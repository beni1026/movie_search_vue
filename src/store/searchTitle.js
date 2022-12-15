export default {
  namespaced: true,
  state() {
    return {
      title: null,
    };
  },
  getters: {},
  mutations: {
    setTitle(state, payload) {
      state.title = payload;
      console.log(state.title);
    },
  },
};
