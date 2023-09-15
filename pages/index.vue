<template>
  <div class="container mx-auto mt-5 flex items-start gap-5">
    <div class="flex-grow">
      <div class="flex gap-5 border-b flex-grow">
        <button
          type="button"
          @click="viewBlogs = 'myBlog'"
          :class="viewBlogs === 'myBlog' && 'active_btn'"
          class="pb-2"
        >
          Your Feed
        </button>
        <button
          type="button"
          @click="viewBlogs = 'globalBlog'"
          :class="viewBlogs === 'globalBlog' && 'active_btn'"
          class="pb-2"
        >
          Global Feed
        </button>
      </div>
      <MyBlog v-if="viewBlogs === 'myBlog' && user" />
      <GlobalBlog v-else />
      <!-- Blogs -->
    </div>
    <aside class="p-1 px-2 rounded w-[200px] bg-[#f3f3f3]">
      <h2>Popular tags</h2>
      <div class="flex flex-wrap gap-1 mt-2">
        <p class="bg-gray-500 rounded-xl p-2 text-xs font-bold text-white">
          welcome
        </p>
      </div>
    </aside>
  </div>
</template>

<script setup>
const viewBlogs = ref("myBlog");
const user = useSupabaseUser();
</script>
<style scoped>
.active_btn {
  @apply border-b border-green-400 text-green-400;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
