<template>
  <div class="page-layout">
    <slot />
  </div>
</template>

<style scoped>
.page-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  padding: 0 16px;
  box-sizing: border-box;
}

@media (min-width: 900px) {
  .page-layout {
    grid-template-columns: 5fr 2fr 5fr;
  }
}
</style>