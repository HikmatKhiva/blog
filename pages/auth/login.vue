<template>
  <div class="flex flex-col md:w-[450px] w-[90%] mx-auto py-5">
    <h2 class="self-center md:text-4xl text-3xl leading-none">Sign In</h2>
    <NuxtLink
      class="self-center text-green-500 md:text-sm text-xs py-3 transition-all duration-300 hover:text-green-700 hover:decoration-1 hover:underline"
      to="/auth/register"
    >
      Need an account?
    </NuxtLink>
    <form @submit.prevent="login(user)" class="flex flex-col flex-grow gap-3">
      <input
        v-model="user.email"
        type="text"
        id="email"
        name="email"
        autocomplete="email"
        autofocus="true"
        placeholder="Email"
        class="p-3 md:text-base text-sm outline-none px-4 border-2 rounded focus:border-blue-200"
      />
      <label for="password" class="flex-grow relative">
        <input
          name="password"
          autocomplete="false"
          v-model="user.password"
          :type="passwordView ? 'text' : 'password'"
          id="password"
          placeholder="Password"
          class="p-3 md:text-base text-sm outline-none px-4 w-full border-2 rounded focus:border-blue-200"
        />
        <Icon
          @click="passwordView = !passwordView"
          name="ic:baseline-remove-red-eye"
          size="24"
          class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
          :class="{ 'opacity-50': passwordView }"
        />
      </label>
      <button
        class="bg-green-500 self-end p-2 px-5 text-white rounded md:text-lg text-sm transition-all hover:bg-green-600"
      >
        Sign in
      </button>
    </form>
  </div>
</template>
<script setup>
useHead({
  title: "Login Page",
});
import { useAuth } from "../../composables/auth";
const { login } = useAuth();
const passwordView = ref(false);
const user = reactive({
  email: "",
  password: "",
});
</script>
