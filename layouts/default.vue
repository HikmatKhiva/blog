<template>
  <div class="min-h-[100vh] flex flex-col">
    <NuxtLoadingIndicator :height="5" />
    <header class="py-5">
      <div class="container mx-auto flex justify-between items-center">
        <h1>
          <NuxtLink
            class="md:text-2xl text-xl text-green-500 relative brand"
            to="/"
          >
            NuxtBlog
            <hr class="animation__logo" />
          </NuxtLink>
        </h1>
        <Navigation class="md:block hidden" />
        <MobileNavigation class="md:hidden" />
      </div>
    </header>
    <main class="flex-grow flex flex-col">
      <slot />
    </main>
    <footer class="py-5 bg-gray-200 mt-3">
      <div class="container flex items-center gap-3 mx-auto">
        <p class="flex items-center md:text-sm text-xs gap-2">
          <span class="text-green-500 brand inline-block relative">
            NuxtBlog
            <hr class="animation__logo" />
          </span>
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
