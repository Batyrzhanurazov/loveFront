<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
  maxlength?: number
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>
.input {
  width: 100%;
  background-color: var(--bg-color);
  border: 1px solid var(--text-color);
  border-radius: 6px;
  font-family: "Pixelify Sans", sans-serif;
  padding: 12px 14px;
  font-size: 16px;
  box-sizing: border-box;
}

.input::placeholder {
  color: #888;
}
</style>