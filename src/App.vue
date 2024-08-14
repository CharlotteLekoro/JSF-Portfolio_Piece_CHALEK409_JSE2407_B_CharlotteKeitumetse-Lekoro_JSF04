<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <Header></Header> 
    <div class="flex justify-center py-4">
      <ThemeToggle />
    </div>
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>


<script>
import Header from "../src/components/Header.vue";
import ThemeToggle from './components/ThemeToggle.vue'; // Import the ThemeToggle component

export default {
  name: "App",
  components: {
    Header,
    ThemeToggle, // Register the ThemeToggle component here
  },
};
</script>
<style>
@import './assets/styles/global.css'; /* Optional: Import global styles if any */

body,
html {
  height: 100%;
  display: grid;
  background: linear-gradient(to bottom, #edb74c 0%, #d6733a 100%);
}

.night {
  background: linear-gradient(to bottom, #265078 0%, #01071c 100%);
}
</style>
