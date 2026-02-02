<template>
  <div class="layout-container">
    <TheHeader />
    <div class="layout-body">
      <TheSidebar />
      <main class="content-area">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.layout-body {
  display: flex;
  flex: 1; /* 佔滿剩餘高度 */
  overflow: hidden;
}

.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #fff;
}
</style>
