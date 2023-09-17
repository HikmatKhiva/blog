<template>
  <div class="container mx-auto mt-5 flex items-start gap-5">
    <div class="flex-grow">
      <div class="flex gap-5 border-b flex-grow">
        <button
          v-if="user"
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
      <!-- Blogs -->
      <MyBlog v-if="viewBlogs === 'myBlog' && user" />
      <GlobalBlog v-else />
    </div>
  </div>
</template>
<script setup>
const user = useSupabaseUser();
const viewBlogs = ref(user.value ? "myBlog" : "globalBlog");
useHead({
  title: "Home Page",
});
</script>
<style scoped>
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