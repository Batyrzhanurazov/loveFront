<template>
  <div class="textarea-wrap">
    <textarea
      class="textarea"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <span class="counter">{{ modelValue.length }}/{{ maxlength }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
  maxlength?: number
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>
.textarea {
  width: 100%;
  min-height: 160px;
  background-color: var(--bg-color);
  border: 1px solid var(--text-color);
  border-radius: 6px;
  font-family: "Pixelify Sans", sans-serif;
  padding: 12px 14px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;
}

.textarea::placeholder {
  color: #888;
}

.counter {
  display: block;
  text-align: right;
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}
</style>