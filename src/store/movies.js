import { request } from "../utils/api";

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      movies: [],
      pages: 1,
      totalResults: null,
    };
  },
  actions: {
    async getMovies({ state, commit }, payload) {
      state.isLoading = true;
      const { title } = payload;
      const movies = await request({
        method: "GET",
        url: `s=${title}&page=${state.pages}`,
      });
      if (movies.Response) {
        state.movies = movies.Search;
        state.totalResults = movies.totalResults;
      }
      state.isLoading = false;
    },
  },
  modules: {},
};
