import { request } from "../utils/api";

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      movie: {},
    };
  },
  mutations: {
    init(state) {
      state.movie = {};
    },
  },
  actions: {
    async getMovie({ state }, imdbID) {
      state.isLoading = true;
      const movie = await request({
        method: "GET",
        url: `i=${imdbID}`,
      });
      if (movie.Response) {
        for (const [k, v] of Object.entries(movie)) {
          if (v !== "N/A") {
            state.movie[k] = v;
          } else {
            state.movie[k] = "";
          }
        }
      }

      state.isLoading = false;
    },
  },
  modules: {},
};
