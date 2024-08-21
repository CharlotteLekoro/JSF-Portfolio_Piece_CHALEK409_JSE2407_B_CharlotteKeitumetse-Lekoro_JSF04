/**
 * @file main.js
 * @description This is the entry point of the Vue.js application. It sets up and mounts the application to the DOM.
 */

import "./style.css";
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router.js';
import './assets/styles/global.css'; // Import global styles

/**
 * Creates and configures the Vue.js application instance.
 * @returns {void}
 */
const app = createApp(App); // Create the app instance

/**
 * Initializes the Pinia store for state management.
 * @returns {void}
 */
const pinia = createPinia();
app.use(pinia); // Use Pinia for state management

/**
 * Configures the Vue Router for navigation.
 * @returns {void}
 */
app.use(router); // Use Vue Router

/**
 * Mounts the application to the DOM element with the ID 'app'.
 * @returns {void}
 */
app.mount('#app');
