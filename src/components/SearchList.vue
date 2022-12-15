<template>
  <div v-if="isLoading" class="loading">Loading...</div>
  <template v-else>
    <div v-if="movies" class="isNotLoading">
      <div class="list">
        <MovieCard
          v-for="movie in movies"
          :movie="movie"
          @click="isShow = true"
        />
      </div>
      <div class="buttons">
        <button @click="fetchMoreMovies(false)" :disabled="pages === 1">
          &lt;
        </button>
        {{ pages }}
        ...
        {{ maxPages }}
        <button @click="fetchMoreMovies(true)" :disabled="pages === maxPages">
          &gt;
        </button>
      </div>
    </div>
    <div v-else class="none">검색 결과가 없습니다.. 😢</div>
  </template>

  <DetailModal v-model="isShow" closeable> </DetailModal>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import DetailModal from "./DetailModal.vue";

export default {
  components: { MovieCard, DetailModal },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    title() {
      return this.$store.state.searchTitle.title;
    },
    pages() {
      return this.$store.state.movies.pages;
    },
    movies() {
      return this.$store.state.movies.movies;
    },
    maxPages() {
      return parseInt(this.$store.state.movies.totalResults / 10 + 1, 10);
    },
    isLoading() {
      return this.$store.state.movies.isLoading;
    },
  },
  methods: {
    fetchMoreMovies(next) {
      this.$store.dispatch("movies/getMovies", {
        title: this.title,
        page: next
          ? ++this.$store.state.movies.pages
          : --this.$store.state.movies.pages,
      });
    },
  },
};
</script>

<style lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  height: 620px;
}
.loading,
.none {
  display: flex;
  align-items: center;
  color: white;
  font-size: 50px;
  height: 659px;
  font-family: "Black Han Sans", sans-serif;
}

.buttons {
  display: flex;
  margin-top: 20px;
  gap: 5px;
  flex-grow: 1;
  justify-content: center;
  font-weight: bold;
  color: white;

  button {
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
