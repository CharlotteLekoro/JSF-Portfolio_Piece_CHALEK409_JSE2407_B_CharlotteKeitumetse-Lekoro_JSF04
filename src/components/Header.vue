<template>
  <header class="sticky z-50 top-0">
    <nav class="bg-violet-400">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <!-- Logo and brand name -->
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../assets/android-chrome-192x192.png"
            class="h-8"
            alt="Tredy Treasures Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >
            Trendy Treasures
          </span>
        </router-link>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
          :aria-expanded="isOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <!-- Navigation menu -->
        <div
          class="w-full md:block md:w-auto"
          :class="{ hidden: !isOpen }"
          id="navbar-dropdown"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-violet-500 md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <!-- Wishlist link -->
            <li>
              <router-link
                :to="{ name: 'Wishlist' }"
                class="text-white hover:bg-violet-500 hover:text-white block px-3 py-1 rounded-md text-base font-medium md:m-0"
              >
                WishList
              </router-link>
            </li>
            <!-- Cart icon (visible on larger screens) -->
            <li>
              <router-link
                :to="{ name: 'Cart' }"
                class="hidden lg:block md:block relative text-white px-2 py-1 hover:bg-violet-500 rounded-md"
              >
                <div class="absolute -top-2 -right-2">
                  <p
                    class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                  >
                    2
                  </p>
                </div>
                <span class="sr-only">View cart</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </router-link>
            </li>
            <!-- Cart text link (visible on smaller screens) -->
            <li>
              <router-link
                :to="{ name: 'Cart' }"
                class="lg:hidden md:hidden block py-2 px-3 text-white rounded-md hover:bg-violet-500 md:hover:bg-transparent md:border-0 md:hover:text-violet-400 md:p-0"
              >
                Cart
              </router-link>
            </li>
            <!-- Login icon -->
            <li>
              <router-link
                :to="{ name: 'Login' }"
                class="block py-2 px-1 text-white hover:bg-violet-600 rounded-md md:border-0 md:p-1.5"
              >
                <span class="sr-only">Login</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Header",
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    /**
     * Toggles the visibility of the mobile menu.
     * @method
     */
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
