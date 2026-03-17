<template>
  <PageLayout>
    <Card>
      <h2>Admin</h2>
      <AppTextarea v-model="message" placeholder="love message..." :maxlength="500" />
      <StatusMessage :message="status" :type="statusType" />
      <AppButton variant="primary" :disabled="!message.trim() || loading" @click="handleAdd">
        {{ loading ? '...' : 'add' }}
      </AppButton>
      <LogoutButton />
    </Card>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { addLoveMessage } from '@/api/love'
import PageLayout from '@/components/PageLayout.vue'
import Card from '@/components/Card.vue'
import AppButton from '@/components/AppButton.vue'
import AppTextarea from '@/components/AppTextarea.vue'
import StatusMessage from '@/components/StatusMessage.vue'
import LogoutButton from '@/components/LogoutButton.vue'

const message = ref('')
const loading = ref(false)
const status = ref('')
const statusType = ref<'success' | 'error'>('success')

const handleAdd = async () => {
  if (!message.value.trim()) return
  loading.value = true
  status.value = ''
  try {
    await addLoveMessage(message.value.trim())
    message.value = ''
    statusType.value = 'success'
    status.value = 'Сообщение добавлено ✓'
  } catch {
    statusType.value = 'error'
    status.value = 'Ошибка при добавлении'
  } finally {
    loading.value = false
    setTimeout(() => { status.value = '' }, 3000)
  }
}
</script>

<style scoped>
h2 { text-align: center; }
</style>