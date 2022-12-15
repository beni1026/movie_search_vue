<template>
  <teleport to="body">
    <template v-if="modelValue">
      <div class="modal" @click="offModal">
        <div class="modal__inner" @click.stop>
          <button class="close" @click="offModal" v-if="closeable">
            <img src="/close.png" alt="" />
          </button>
          <div v-if="isLoading" class="loading">
            <img src="/loading.gif" />
          </div>
          <div v-else class="detail">
            <div
              class="img"
              :style="{ backgroundImage: `url(${movie.Poster})` }"
            ></div>
            <div class="text">
              <div class="title">{{ movie.Title }}</div>
              <div class="sub">{{ movie.Genre }}</div>
              <div class="sub">{{ movie.Director }} ({{ movie.Year }})</div>
              <div class="plot">{{ movie.Plot }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
      } else {
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
  },
  methods: {
    keyupHandler(e) {
      if (e.key === "Escape") {
        this.offModal();
      }
    },
    onModal() {
      this.$emit("update:modelValue", true);
    },
    offModal() {
      this.$emit("update:modelValue", false);
      this.$store.commit("movie/init");
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
    movie() {
      return this.$store.state.movie.movie;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &__inner {
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 10px 10px rgba(black, 0.2);
    width: 600px;
    height: 350px;
    box-sizing: border-box;

    button.close {
      float: right;
      border: none;
      background: none;
      cursor: pointer;
      img {
        width: 15px;
      }
    }
    .loading {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      img {
        width: 50px;
      }
    }

    .detail {
      display: flex;

      .img {
        min-width: 200px;
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
      }
      .text {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        gap: 15px;

        .title {
          font-size: 20px;
          font-weight: bold;
          padding-right: 20px;
        }
        .sub {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
