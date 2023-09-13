<template>
  <div class="flex flex-col w-[450px] mx-auto py-5">
    <h2 class="self-center text-4xl leading-none">Sign Up</h2>
    <NuxtLink
      class="self-center text-green-500 text-sm py-3 transition-all duration-300 hover:text-green-700 hover:decoration-1 hover:underline"
      to="/login"
    >
      Have an account?
    </NuxtLink>
    <form @submit.prevent="handleSignUp" class="flex flex-col flex-grow gap-3">
      <input
        type="text"
        placeholder="UserName"
        v-model="userName"
        class="p-3 outline-none px-4 border-2 rounded focus:border-blue-200"
      />
      <input
        type="text"
        v-model="email"
        placeholder="Email"
        class="p-3 outline-none px-4 border-2 rounded focus:border-blue-200"
      />
      <label for="password" class="flex-grow relative">
        <input
          v-model="password"
          :type="passwordView ? 'text' : 'password'"
          id="password"
          placeholder="Password"
          class="p-3 outline-none px-4 w-full border-2 rounded focus:border-blue-200"
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
        class="bg-green-500 self-end p-2 px-5 text-white rounded text-lg transition-all hover:bg-green-600"
      >
        Sign up
      </button>
    </form>
  </div>
</template>
<script setup>
import { useStorage } from "../storage";
const state = useStorage();
const client = useSupabaseClient();
const passwordView = ref(false);
const userName = ref("");
const email = ref("");
const password = ref("");

const handleSignUp = async () => {
  try {
    if (
      !userName.value.length ||
      !email.value.length ||
      !password.value.length
    ) {
      return;
    }
    const { data } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          userName: userName.value,
        },
      },
    });
    console.log(data.user);
    await client
      .from("users")
      .insert([
        { id: data.user.id },
        { username: userName.value },
        { email: email.value },
      ])
      .select("*");
    if (data) {
      state.login(data);
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
