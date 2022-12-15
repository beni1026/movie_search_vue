import { createStore } from "vuex";
import movies from "./movies";
import movie from "./movie";
import searchTitle from "./searchTitle";

export default createStore({
  state() {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    movie,
    searchTitle,
  },
});
