<template>
  <nav>
    <ul v-if="user" class="flex gap-5">
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
    <ul v-else class="flex gap-5">
      <li>
        <NuxtLink class="text-gray-400" to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink class="text-gray-400" to="/auth/login"> Sign In </NuxtLink>
      </li>
      <li>
        <NuxtLink class="text-gray-400" to="/auth/register"> Sign Up </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const user = useSupabaseUser();
</script>
<style>
li .router-link-active {
  @apply text-gray-600;
}
</style>
