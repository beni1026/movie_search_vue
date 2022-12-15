<template>
  <div class="app__container">
    <RouterView />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2397f9;
  min-height: 100vh;
}
</style>
