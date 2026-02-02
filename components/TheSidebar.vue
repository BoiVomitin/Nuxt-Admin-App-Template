<script setup lang="ts">
// 使用 useFetch 直接呼叫後端 API
const { data: menuItems } = await useFetch('/api/menu')
</script>

<template>
  <aside class="app-sidebar">
    <nav>
      <ul class="menu-list">
        <li v-for="item in menuItems" :key="item.id" class="menu-group">
          <div class="group-title">{{ item.label }}</div>
          <ul v-if="item.children" class="submenu-list">
            <li v-for="sub in item.children" :key="sub.id">
              <NuxtLink :to="sub.path">{{ sub.label }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.app-sidebar {
  width: 250px;
  background-color: #f8f9fa;
  height: calc(100vh - 60px);
  border-right: 1px solid #dee2e6;
  overflow-y: auto;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.group-title {
  padding: 10px 15px;
  font-weight: bold;
  color: #6c757d;
  background-color: #e9ecef;
}

.submenu-list {
  list-style: none;
  padding: 5px 0;
  margin: 0;
}

.submenu-list li a {
  display: block;
  padding: 8px 15px 8px 25px;
  color: #333;
  text-decoration: none;
  transition: background 0.2s;
}

.submenu-list li a:hover {
  background-color: #e2e6ea;
}

.router-link-active {
  background-color: #007bff !important;
  color: white !important;
}
</style>
