<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="username" class="block mb-1">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          class="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <div class="relative">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="password"
            required
            class="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute right-2 top-2"
          >
            {{ passwordVisible ? 'Hide' : 'Show' }}
          </button>
        </div>
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-300 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Login
      </button>
      <button
        type="button"
        @click="goBackHome"
        class="w-full bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-500 mt-4"
      >
        Back to Home
      </button>
      <div v-if="loading" class="text-center mt-4">Logging in...</div>
      <div v-if="errorMessage" class="text-center mt-4 text-red-500">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    const passwordVisible = ref(false);
    const loading = ref(false);
    const errorMessage = ref("");
    const router = useRouter();

    const handleSubmit = async () => {
      if (!username.value || !password.value) {
        errorMessage.value = "Username and password cannot be empty";
        return;
      }

      loading.value = true;
      errorMessage.value = "";

      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        const redirectUrl = localStorage.getItem("redirectUrl") || "/";
        router.push(redirectUrl);
      } catch (error) {
        errorMessage.value = "Login failed. Please try again.";
      } finally {
        loading.value = false;
      }
    };

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    const goBackHome = () => {
      router.push("/");
    };

    return {
      username,
      password,
      passwordVisible,
      loading,
      errorMessage,
      handleSubmit,
      togglePasswordVisibility,
      goBackHome,
    };
  },
};
</script>
