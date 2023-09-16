<template>
  <div class="">
    <button type="button" class="right-10 top-5 text-2xl">
      <Icon name="fluent-mdl2:align-justify" />
    </button>
    <div class="fixed flex w-full  z-50 h-screen top-0" :class="mobileMenu ? 'right-0' : '-right-full'">
      <div class="flex-grow bg-gray-50 opacity-70"></div>
      <nav
        class="bg-gray-200 w-1/2 flex flex-col transition-all duration-300 items-center  pt-10 text-center"
      >
        <button type="button" class="absolute right-10 top-5 text-2xl">
          <Icon name="ci:close-md" />
        </button>
        <ul v-if="user" class="flex flex-col gap-3 mt-5">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/editor">
              <Icon name="ion:compose" />
              New Post
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile/setting">
              <Icon name="material-symbols:settings-rounded" />
              Settings
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/profile/' + user?.user_metadata?.username">{{
              user?.user_metadata?.username
            }}</NuxtLink>
          </li>
        </ul>
        <ul v-else class="flex flex-col gap-5">
          <li>
            <NuxtLink class="text-gray-200" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-gray-200" to="/login"> Sign In </NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-gray-200" to="/register"> Sign Up </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
const user = useSupabaseUser();
defineProps({
  mobileMenu: {
    type: Boolean,
    default: false,
  },
});
</script>
