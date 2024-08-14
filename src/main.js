/*import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import './assets/styles/global.css'; // Import global styles

createApp(App).mount('#app');
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");*/


import "./style.css";
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router.js';
import './assets/styles/global.css'; // Import global styles

const app = createApp(App); // Create the app instance

const pinia = createPinia();
app.use(pinia); // Use Pinia for state management
app.use(router); // Use Vue Router

app.mount('#app'); // Mount the app to the DOM
