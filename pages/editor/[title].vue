<template>
  <div class="md:w-[60%] w-[90%] mx-auto">
    <form @submit.prevent="EditBlog" class="flex flex-col mt-5 gap-5">
      <input
        type="text"
        name="title"
        id="title"
        v-model="blog.title"
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Article Title"
      />
      <input
        type="text"
        v-model="blog.article"
        id="article"
        name="article"
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="What's this article about?"
      />
      <textarea
        v-model="blog.body"
        id="article_body"
        name="article_body"
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Write your article (in markdown)"
        rows="10"
      ></textarea>
      <input
        type="text"
        id="tag"
        name="tag"
        v-model="blog.tag"
        class="border md:text-base text-sm rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Enter tags"
      />
      <button
        :disabled="pending"
        class="bg-green-500 text-white md:text-lg text-sm self-end p-2 px-4 rounded hover:bg-green-600 transition-all duration-300"
      >
        Edit Article
      </button>
    </form>
  </div>
</template>
<script setup>
useHead({
  title: "Edit Post",
});
definePageMeta({
  middleware: "auth",
});
const { params } = useRoute();
const client = useSupabaseClient();
const { data, pending } = useAsyncData(
  "blog",
  async () => await client.from("blog").select("*").eq("title", params.title)
);
const blog = reactive({
  title: data?.value?.data[0].title || "",
  article: data?.value?.data[0].article || "",
  body: data?.value?.data[0].body || "",
  tag: data?.value?.data[0].tag || "",
});
const EditBlog = async () => {
  try {
    if (
      !blog.title.length ||
      !blog.article.length ||
      !blog.body.length ||
      !blog.tag.length
    ) {
      useNuxtApp().$toast.info("fill out input fields", {
        transition: "flip",
      });
      return;
    }
    const { status } = await client
      .from("blog")
      .update({
        title: blog.title,
        article: blog.article,
        body: blog.body,
        tag: blog.tag,
      })
      .select("*")
      .eq("id", data?.value?.data[0].id);
    if (status === 200) {
      useNuxtApp().$toast.success("Blog update successfully", {
        transition: "flip",
      });
      navigateTo("/");
    }
  } catch (err) {
    useNuxtApp().$toast.error(err?.message || "something went wrong", {
      transition: "flip",
    });
  }
};
</script>