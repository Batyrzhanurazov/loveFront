<template>
  <PageLayout>
    <Card>
      <h2>💌</h2>
      <transition name="fade">
        <p v-if="message" class="love-message">{{ message }}</p>
      </transition>
      <StatusMessage :message="error" type="error" />
      <AppButton variant="primary" :disabled="loading" @click="fetchMessage">
        {{ loading ? '...' : message ? 'next? ❤️' : 'get some love ❤️' }}
      </AppButton>
      <LogoutButton />
    </Card>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getLoveMessage } from '@/api/love'
import PageLayout from '@/components/PageLayout.vue'
import Card from '@/components/Card.vue'
import AppButton from '@/components/AppButton.vue'
import StatusMessage from '@/components/StatusMessage.vue'
import LogoutButton from '@/components/LogoutButton.vue'

const message = ref('')
const error = ref('')
const loading = ref(false)

const fetchMessage = async () => {
  error.value = ''
  loading.value = true
  try {
    const res = await getLoveMessage()
    message.value = res.data.message ?? res.data
  } catch {
    error.value = 'Что-то пошло не так 😢'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
h2 { text-align: center; font-size: 48px; margin: 0; }

.love-message {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  border: 1px dashed var(--text-color);
  min-height: 60px;
  font-family: system-ui, -apple-system, sans-serif;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from,   .fade-leave-to     { opacity: 0; }
</style>