<template>
  <div class="w-[60%] mx-auto">
    <form class="flex flex-col mt-5 gap-5">
      <input
        type="text"
        v-model="title"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Article Title"
      />
      <input
        type="text"
        v-model="article"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="What's this article about?"
      />
      <textarea
        v-model="body"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Write your article (in markdown)"
        rows="10"
      ></textarea>
      <input
        type="text"
        v-model="tag"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Enter tags"
      />
      <button
        class="bg-green-500 text-white text-xl self-end p-2 px-4 rounded hover:bg-green-600 transition-all duration-300"
      >
        Publish Article
      </button>
    </form>
  </div>
</template>
<script setup>
const title = ref("");
const article = ref("");
const body = ref("");
const tag = ref("");
const PostBlog = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};
</script>
