<template>
  <div class="min-h-[100vh] flex flex-col">
    <header class="py-5">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink class="text-2xl text-green-500 relative brand" to="/">
          NuxtBlog
          <hr class="animation__logo" />
        </NuxtLink>
        <Navigation />
      </div>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="py-5 bg-gray-200 mt-3">
      <div class="container flex items-center gap-3 mx-auto">
        <p class="flex items-center text-sm gap-2">
          <span class="text-green-500 brand inline-block relative">
            NuxtBlog
            <hr class="animation__logo" />
          </span>
          ©2023 Author
          <a class="brand text-green-500 mt-1" href="https://hikmatbek.uz">
            Hikmat
            <hr class="animation__logo" />
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup></script>
