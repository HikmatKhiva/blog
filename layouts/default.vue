<template>
  <header class="py-2">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink class="text-2xl text-green-500" to="/"> Logo </NuxtLink>
      <nav>
        <ul class="flex gap-5">
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
            <NuxtLink to="/settings">
              <Icon name="material-symbols:settings-rounded" />
              Settings
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Profile</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>
<script setup>
import { useSettings } from "../storage";
const settings = useSettings();
console.log(settings.user);
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
* {
  font-family: 'Poppins', sans-serif;
}
</style>
