<template>
  <div class="page">
    <main class="page__main">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
// Hello world!
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
}

.page__main {
  flex-grow: 1;
}
</style>
