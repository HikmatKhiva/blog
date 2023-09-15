<template>
  <div class="text-center w-[50%] mx-auto">
    <h2 class="xl:text-4xl text-2xl leading-normal">Your Settings</h2>
    <form class="flex flex-col gap-3 mt-5">
      <input
        type="text"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="UserName"
        v-model="userData.username"
      />
      <textarea
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Short bio about you"
        rows="10"
        v-model="userData.bio"
      ></textarea>
      <input
        type="text"
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
          v-model="userData.password"
        />
        <button
          @click="passwordView = !passwordView"
          type="button"
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
  email: user?.value?.email || "",
  username: user.value?.user_metadata?.username || "",
  bio: user.value.user_metadata?.bio || "",
  password: "",
});
</script>
