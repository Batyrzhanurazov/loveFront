<template>
  <transition name="fade">
    <p v-if="message" :class="['status', type]">{{ message }}</p>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  message: string
  type: 'success' | 'error'
}>()
</script>

<style scoped>
.status {
  margin: 0;
  font-size: 13px;
  text-align: center;
}

.success { color: #27ae60; }
.error   { color: #c0392b; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from,   .fade-leave-to     { opacity: 0; }
</style>