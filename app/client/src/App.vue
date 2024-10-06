<template>
  <div class="app">
    
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Content -->
    <router-view />

  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>


<style scoped lang='scss'>

.app {
  
  display: flex;
  background-color: var(--body-bg);
  color: var(--text-color);
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (msax-width: 768px) {
      padding: 6rem;
    }
  }
}

</style>

