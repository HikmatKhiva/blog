<template>
  <div class="text-center w-[50%] mx-auto">
    <h2 class="xl:text-4xl text-2xl leading-normal">Your Settings</h2>
    <form class="flex flex-col gap-3 mt-5">
      <input
        type="text"
        id="username"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="UserName"
        v-model="userData.username"
<<<<<<< HEAD:pages/profile/setting.vue
=======
        name="username"
        autocomplete="false"
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142:pages/settings.vue
      />
      <textarea
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Short bio about you"
        rows="10"
<<<<<<< HEAD:pages/profile/setting.vue
=======
        id="bio"
        name="bio"
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142:pages/settings.vue
        v-model="userData.bio"
      ></textarea>
      <input
        type="text"
        id="email"
        name="email"
        autocomplete="true"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Email"
        v-model="userData.email"
      />
      <label for="password" class="relative flex">
        <input
          :type="passwordView ? 'text' : 'password'"
          id="password"
          class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
          placeholder="Password"
<<<<<<< HEAD:pages/profile/setting.vue
=======
          name="password"
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142:pages/settings.vue
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
        class="self-end bg-green-500 p-2 px-5 text-white rounded text-lg transition-all hover:bg-green-600"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const passwordView = ref(false);
const userData = reactive({
<<<<<<< HEAD:pages/profile/setting.vue
  email: user?.value?.email || "",
  username: user.value?.user_metadata?.username || "",
  bio: user.value.user_metadata?.bio || "",
=======
  username: user?.value.user_metadata?.username || "",
  email: user?.value.email || "",
  bio: user?.value.user_metadata?.bio || "",
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142:pages/settings.vue
  password: "",
});
</script>
