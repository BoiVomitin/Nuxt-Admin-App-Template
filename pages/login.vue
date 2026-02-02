<script setup lang="ts">
// 登入頁不需要預設 Layout (因為預設 Layout 有 Header/Sidebar)
definePageMeta({
  layout: false
})

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const authStore = useAuthStore()

async function handleLogin() {
  if (!username.value || !password.value) {
    errorMsg.value = '請輸入帳號密碼'
    return
  }
  
  loading.value = true
  errorMsg.value = ''
  
  const success = await authStore.login(username.value, password.value)
  
  if (success) {
    navigateTo('/')
  } else {
    errorMsg.value = '登入失敗，請檢查帳號密碼'
  }
  
  loading.value = false
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h2>Vue / Nuxt 3 Admin</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>帳號 (admin)</label>
          <input v-model="username" type="text" placeholder="admin" />
        </div>
        <div class="form-group">
          <label>密碼 (admin)</label>
          <input v-model="password" type="password" placeholder="admin" />
        </div>
        <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
        <button type="submit" :disabled="loading">
          {{ loading ? '登入中...' : '登入' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #096dd9;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}
</style>
