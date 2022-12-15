<template>
  <div class="card" @click="fetchMovieDatail(movie.imdbID)">
    <div class="card__title">
      <div>{{ movie.Title }}</div>
      <div class="year">({{ movie.Year }})</div>
    </div>
    <div
      class="card__movieImg"
      :style="{ backgroundImage: `url(${movieImg})` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  created() {
    //console.log(this.movie);
  },
  computed: {
    movieImg() {
      return this.movie.Poster === "N/A"
        ? "https://img.freepik.com/premium-vector/movie-clapper-board-vector-illustration-video-icon-film-making-industry_28461-2.jpg"
        : this.movie.Poster;
    },
  },
  methods: {
    fetchMovieDatail(id) {
      this.$store.dispatch("movie/getMovie", id);
    },
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  cursor: pointer;
  font-family: "Nanum Gothic", sans-serif;
  &__movieImg {
    width: 200px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%);

    &:hover {
      filter: blur(4px) brightness(0.5);
    }
  }

  &:hover &__title {
    transform: scaleY(1);
  }

  &__title {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    transform: scaleY(0);
    color: white;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    gap: 5px;

    .year {
      font-size: 15px;
    }
  }

  &__title:hover + &__movieImg {
    filter: blur(4px) brightness(0.5);
  }
}
</style>
