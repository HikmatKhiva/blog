<template>
  <article v-if="article.data.length">
    <!-- Article Header -->
    <div class="bg-[#333] py-5">
      <div class="container mx-auto py-5">
        <!-- Article Title -->
        <h1 class="text-white text-3xl"></h1>
        <!-- User -->
        <User :article="article" />
      </div>
    </div>
    <!-- Article Body -->
    <div class="container mx-auto py-5">
      <!-- Article description -->
      <p class="leading-normal text-lg -tracking-tighter border-b py-5">
        {{ article.data[0].body }}
      </p>
      <div class="flex flex-col">
        <!-- User -->
        <User
          :article="article"
          :edit="edit"
          @deleteBlog="handleDelete"
          :likes="likes.data"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const { params } = useRoute();
const { data: article, error } = await useAsyncData("blog", async () =>
  client.from("blog").select("*").eq("id", params?.id)
);
const { data: likes } = await useAsyncData("likes", async () => {
  return client.from("blog_likes").select("*");
});
console.log(likes.value);
const edit = computed(() => user?.value?.id === article.value.data[0].user_id);
const handleDelete = async () => {
  try {
    await client.from("blog").delete().eq("id", params.id);
    useNuxtApp().$toast.success("Blog delete successfully");
    navigateTo("/");
  } catch (err) {
    useNuxtApp().$toast.error(err.message || "something went wrong");
  }
};
</script>
