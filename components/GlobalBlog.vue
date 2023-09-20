<template>
  <section id="globalBlog">
    <TransitionGroup
      tag="div"
      name="fade"
      class="blogs"
      v-if="globalBlogs?.data?.length"
    >
      <Blog
        v-for="(blog, index) in globalBlogs.data"
        :key="index"
        :blog="blog"
      />
    </TransitionGroup>
    <p v-else-if="pending">Loading</p>
    <p v-else>Blog not upload</p>
  </section>
</template>
<script setup>
const supabase = useSupabaseClient();
const {
  data: globalBlogs,
  error,
  pending,
} = await useAsyncData(
  "globalBlogs",
  async () => await supabase.from("blog").select("*"));
</script>
