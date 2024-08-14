<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
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
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");
    const passwordVisible = ref(false);
    const router = useRouter();

    const handleSubmit = () => {
      console.log("Login submitted", {
        email: email.value,
        password: password.value,
      });
    };

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    const goBackHome = () => {
      router.push("/");
    };

    return {
      email,
      password,
      passwordVisible,
      handleSubmit,
      togglePasswordVisibility,
      goBackHome,
    };
  },
};
</script>
