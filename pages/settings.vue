<template>
  <div class="text-center w-[50%] mx-auto">
    <h2 class="xl:text-4xl text-2xl  leading-normal">Your Settings</h2>
    <form class="flex flex-col gap-5">
      <input type="text" placeholder="" />
      <input
        type="text"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="UserName"
      />
      <textarea
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Short bio about you"
        rows="10"
      ></textarea>
      <input
        type="text"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Email"
      />
      <label for="password" class="relative flex">
        <input
          :type="passwordView ? 'text' : 'password'"
          id="password"
          class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
          placeholder="Password"
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
    </form>
  </div>
</template>

<script setup>
const passwordView = ref(false);
</script>
