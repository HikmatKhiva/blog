<template>
  <section>
    <div class="bg-[#f3f3f3] py-5">
      <div class="md:w-[992px] md:px-0 px-5 mx-auto">
        <!-- Profile Header -->
        <div class="flex flex-col">
          <Icon name="uiw:smile" class="self-center" size="50" />
          <h3 class="self-center my-2">{{ params.name || "" }}</h3>
          <NuxtLink
            to="/profile/setting"
            class="flex items-center gap-1 self-end border md:text-xs text-[11px] px-2 text-[#999] p-1 rounded hover:bg-gray-300 hover:text-gray-100 transition-all duration-300"
          >
            <Icon name="material-symbols:settings-rounded" size="16" />
            Edit Profile Settings
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="md:w-[992px] md:px-0 px-5 mx-auto">
      <!-- Profile Body -->
      <div class="py-5">
        <div class="flex gap-5 border-b flex-grow">
          <button
            type="button"
            @click="viewBlogs = 'myBlog'"
            :class="viewBlogs === 'myBlog' && 'active_btn'"
            class="pb-2 md:text-base text-sm"
          >
            Your Feed
          </button>
          <button
            type="button"
            @click="viewBlogs = 'globalBlog'"
            :class="viewBlogs === 'globalBlog' && 'active_btn'"
            class="pb-2 md:text-base text-sm"
          >
            Global Feed
          </button>
        </div>
        <div class="container">
          <!-- Blogs -->
          <MyBlog v-if="viewBlogs === 'myBlog' && user" />
          <GlobalBlog v-else />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});
const { params } = useRoute();
const viewBlogs = ref("myBlog");
const user = useSupabaseUser();
useHead({
  title: `Profile ${params.name}`,
});
</script>
