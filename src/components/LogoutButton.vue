<template>
  <AppButton variant="ghost" @click="handleLogout">exit</AppButton>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import api from '@/api'

const userStore = useUserStore()
const router = useRouter()

const handleLogout = async () => {
  try { await api.post('/logout') } catch {}
  userStore.logout()
  router.push('/auth')
}
</script>