<script setup lang="ts">
import Sidebar from './components/sidebar/Sidebar.vue';
import Header from './components/header/Header.vue';
</script>

<template>
  <div class="app">
    <!-- Header -->
    <Header />
    
    <div class="app-body">
      <!-- Sidebar -->
      <Sidebar />
      <!-- Content -->
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(body-color);
  color: var(--text-color);
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

main {
  flex: 1;
  // padding: 2rem;
  overflow-y: auto;
  background-color: var(--content-bg);

  @media (max-width: 768px) {
    padding: 1rem;
  }
}
</style>
