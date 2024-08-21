<template>
  <!-- Root element of the application -->
  <div id="app" class="min-h-screen bg-gray-100">
    <!-- Header component -->
    <Header></Header>
    <!-- ThemeToggle component centered on the page -->
    <div class="flex justify-center py-4">
      <ThemeToggle />
    </div>
    <!-- Main content area -->
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
      <!-- ProductList component to display products -->
      <ProductList />
    </main>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import ThemeToggle from './components/ThemeToggle.vue'; // Import the ThemeToggle component
import ProductList from './components/ProductList.vue'; // Import the ProductList component

export default {
  name: "App",
  components: {
    Header,
    ThemeToggle, // Register the ThemeToggle component here
    ProductList, // Register the ProductList component here
  },
};
</script>

<style>
@import './assets/styles/global.css'; /* Optional: Import global styles if any */

/**
 * Apply full height to body and html, set a linear gradient background.
 */
body,
html {
  height: 100%;
  display: grid;
  background: linear-gradient(to bottom, #edb74c 0%, #d6733a 100%);
}

/**
 * Night mode background style.
 */
.night {
  background: linear-gradient(to bottom, #265078 0%, #01071c 100%);
}
</style>
