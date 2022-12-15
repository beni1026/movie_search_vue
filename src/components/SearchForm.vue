<template>
  <form class="form">
    <input
      v-model="title"
      class="form__title"
      type="text"
      placeholder="영화 제목을 입력해주세요"
      aria-label="default input example"
    />
    <button @click.prevent="onsubmit">
      <img src="/search.svg" alt="" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      init: true,
      title: "" || this.$store.state.searchTitle.title,
      year: null,
    };
  },
  methods: {
    async onsubmit() {
      if (this.init) this.$router.push("/search");

      this.$store.commit("searchTitle/setTitle", this.title);
      this.$store.dispatch("movies/getMovies", {
        title: this.title,
        page: 1,
      });
      this.init = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  width: 800px;
  height: 60px;
  padding: 5px 30px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
  margin: 20px 0;

  &__title {
    flex-grow: 1;
    border: none;
    font-size: 20px;
    outline: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
}
</style>
