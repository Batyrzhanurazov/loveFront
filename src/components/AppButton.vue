<template>
  <button
    :class="['btn', variant]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost'
  disabled?: boolean
}>()

defineEmits(['click'])
</script>

<style scoped>
.btn {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--text-color);
  font-family: "Pixelify Sans", sans-serif;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.primary {
  background: var(--text-color);
  color: var(--bg-color);
}

.primary:active:not(:disabled) {
  background: var(--bg-color);
  color: var(--text-color);
}

.ghost {
  background: transparent;
  color: var(--text-color);
  border-color: #aaa;
  font-size: 13px;
  padding: 8px;
}

.ghost:active:not(:disabled) {
  background: var(--text-color);
  color: var(--bg-color);
}
</style>