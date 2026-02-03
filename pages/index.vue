<script setup lang="ts">
// 首頁使用預設 Layout
</script>

<template>
  <div class="dashboard">
    <h2>後端整合儀表板Hello 123 + 229</h2>
    <div class="card-grid">
      <div class="card">
        <h3>全端架構</h3>
        <p>此專案使用 Nuxt 3 實作前後端整合。</p>
      </div>
      <div class="card">
        <h3>Server Routes</h3>
        <p>API 位於 <code>server/api/</code> 目錄。</p>
      </div>
      <div class="card">
        <h3>State Management</h3>
        <p>使用 Pinia + useCookie 自動同步登入狀態。</p>
      </div>
    </div>
    
    <div class="info-box">
      <h3>開發資訊</h3>
      <p>目前登入的使用者資訊是透過後端 API 回傳並儲存在 Store 中。</p>
      <p>左側選單亦是透過 <code>server/api/menu.get.ts</code> 動態取得。</p>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px;
}
.card-grid {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}
.card {
  flex: 1;
  background: white;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}
.card h3 {
  margin-top: 0;
  color: #e67e22; /* 來點不一樣的顏色區分 */
}
.info-box {
  background-color: #f9f9f9;
  padding: 20px;
  border-left: 5px solid #1890ff;
}
</style>
