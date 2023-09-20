<template>
  <section id="myBlog">
    <div class="blogs" v-if="blogs?.data?.length">
      <Blog v-for="(blog, index) in blogs.data" :key="index" :blog="blog" />
    </div>
    <p v-else-if="pending">Loading</p>
    <p v-else>Blog not upload</p>
  </section>
</template>
<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const {
  data: blogs,
  error,
  pending,
} = await useAsyncData(
  "blogs",
  async () => await client.from("blog").select("*").eq("user_id", user.value.id)
);
</script>
