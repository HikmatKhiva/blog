<template>
  <div class="">
    <button
      @click="handleClickMobileMenu"
      type="button"
      class="right-10 top-5 text-2xl"
    >
      <Icon name="fluent-mdl2:align-justify" />
    </button>
    <div
      class="fixed flex w-full z-50 h-screen top-0"
      :class="mobileMenu ? 'right-0' : '-right-full'"
    >
      <div
        @click="handleCloseMobileMenu"
        class="flex-grow bg-gray-50 opacity-70"
      ></div>
      <nav
        class="bg-gray-200 md:w-1/2 w-[70%] flex flex-col transition-all duration-300 items-center pt-16 text-center"
      >
        <button
          @click="handleClickMobileMenu"
          type="button"
          class="absolute right-10 top-5 text-2xl"
        >
          <Icon name="ci:close-md" />
        </button>
        <ul v-if="user" class="flex flex-col gap-3 mt-5">
          <li @click="handleCloseMobileMenu">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li @click="handleCloseMobileMenu">
            <NuxtLink to="/editor">
              <Icon name="ion:compose" />
              New Post
            </NuxtLink>
          </li>
          <li @click="handleCloseMobileMenu">
            <NuxtLink to="/profile/setting">
              <Icon name="material-symbols:settings-rounded" />
              Settings
            </NuxtLink>
          </li>
          <li @click="handleCloseMobileMenu">
            <NuxtLink :to="'/profile/' + user?.user_metadata?.username">{{
              user?.user_metadata?.username
            }}</NuxtLink>
          </li>
        </ul>
        <ul v-else class="flex flex-col gap-5">
          <li @click="handleCloseMobileMenu">
            <NuxtLink class="text-gray-400" to="/">Home</NuxtLink>
          </li>
          <li @click="handleCloseMobileMenu">
            <NuxtLink class="text-gray-400" to="/auth/login">
              Sign In
            </NuxtLink>
          </li>
          <li @click="handleCloseMobileMenu">
            <NuxtLink class="text-gray-400" to="/auth/register">
              Sign Up
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
const user = useSupabaseUser();
const mobileMenu = ref(false);
const handleCloseMobileMenu = () => (mobileMenu.value = false);
const handleClickMobileMenu = () => (mobileMenu.value = !mobileMenu.value);
</script>
