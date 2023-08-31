<template>
  <header class="py-5">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink class="text-2xl text-green-500" to="/"> Logo </NuxtLink>
      <Navigation />
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
