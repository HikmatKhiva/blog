<template>
  <div class="h-screen flex flex-col">
    <main class="flex-grow flex flex-col justify-center items-center">
      <Icon name="tabler:alert-circle-filled" size="70" />
      <h2>This page could not be found</h2>
      <NuxtLink class="text-gray-500 hover:underline" to="/"
        >Back to the home page</NuxtLink
      >
    </main>
    <footer class="py-5 bg-gray-200 mt-3">
      <div class="container flex items-center gap-3 mx-auto">
        <p class="flex items-center md:text-sm text-xs gap-2">
          <span class="md:text-sm text-xs">©2023 Author</span>
          <a
            class="brand text-green-500 mt-1 md:text-sm text-xs"
            href="https://hikmatbek.uz"
          >
            Hikmat
            <hr class="animation__logo" />
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
useHead({
  title: "404 Page",
  description: "This is 404 page",
});
</script>
