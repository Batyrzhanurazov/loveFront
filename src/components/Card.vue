<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  max-width: 420px;
  width: 100%;
  justify-self: center;
  grid-column: 2;
  padding: 32px;
  border-radius: 12px;
  border: 2px solid var(--text-color);
  display: grid;
  gap: 16px;
  background: var(--bg-color);
}
</style>