<template>
  <div class="md:w-[50%] w-[90%] mx-auto">
    <h2 class="text-center xl:text-4xl text-2xl leading-normal">
      Your Settings
    </h2>
    <form class="flex flex-col gap-3 mt-5">
      <input
        type="text"
        id="username"
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="UserName"
        v-model="userData.username"
        name="username"
        autocomplete="false"
      />
      <textarea
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Short bio about you"
        rows="10"
        id="bio"
        name="bio"
        v-model="userData.bio"
      ></textarea>
      <input
        type="text"
        id="email"
        name="email"
        autocomplete="true"
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Email"
        v-model="userData.email"
      />
      <label for="password" class="relative flex">
        <input
          :type="passwordView ? 'text' : 'password'"
          id="password"
          class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2"
          placeholder="Password"
          name="password"
          v-model="userData.password"
        />
        <button
          @click="passwordView = !passwordView"
          type="button"
          name="button"
          class="absolute top-1/2 -translate-y-1/2 right-3"
          :class="{ 'opacity-50': passwordView }"
        >
          <Icon name="ic:baseline-remove-red-eye" size="24" />
        </button>
      </label>
      <button
        class="self-end bg-green-500 p-2 px-5 text-white rounded md:text-lg text-sm transition-all hover:bg-green-600"
      >
        Update
      </button>
    </form>
    <hr class="mt-5 mb-2" />
    <button
      @click="logout"
      class="border border-red-500 md:text-lg text-sm p-2 px-5 rounded text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
    >
      Or click here to logout.
    </button>
  </div>
</template>
<script setup>
useHead({
  title: "Profile Settings",
});
definePageMeta({
  middleware: "auth",
});
import { useAuth } from "../../composables/auth";
const user = useSupabaseUser();
const { logout } = useAuth();
const passwordView = ref(false);
const userData = reactive({
  email: user?.value?.email || "",
  username: user.value?.user_metadata?.username || "",
  bio: user.value.user_metadata?.bio || "",
  username: user?.value.user_metadata?.username || "",
  email: user?.value.email || "",
  bio: user?.value.user_metadata?.bio || "",
  password: "",
});
</script>
