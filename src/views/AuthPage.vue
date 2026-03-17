<template>
  <PageLayout>
    <Card>
      <h2>Secret site</h2>
      <AppInput v-model="loginValue" placeholder="login" :maxlength="20" />
      <AppInput v-model="password" type="password" placeholder="password" :maxlength="20" />
      <StatusMessage :message="error" type="error" />
      <AppButton variant="primary" @click="handleLogin">enter</AppButton>
    </Card>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Routes } from '@/router/routes.enum'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import PageLayout from '@/components/PageLayout.vue'
import Card from '@/components/Card.vue'
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import StatusMessage from '@/components/StatusMessage.vue'

const loginValue = ref('')
const password = ref('')
const error = ref('')
const userStore = useUserStore()

const handleLogin = async () => {
  error.value = ''
  try {
    await userStore.login(loginValue.value, password.value)
    router.push({ name: userStore.role === 'Admin' ? Routes.AdminPage : Routes.LovePage })
  } catch {
    error.value = 'Неверный логин или пароль'
  }
}
</script>

<style scoped>
h2 { text-align: center; }
</style>