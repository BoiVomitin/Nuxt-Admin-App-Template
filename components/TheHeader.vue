<script setup lang="ts">
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
}
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <h1>Nuxt 3 Admin</h1>
    </div>
    <div class="user-actions">
      <span v-if="authStore.user">
        Hi, {{ authStore.user.name }}
      </span>
      <button @click="handleLogout">登出</button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo h1 {
  margin: 0;
  font-size: 1.25rem;
}

.user-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

button {
  padding: 5px 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
