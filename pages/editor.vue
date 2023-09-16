<template>
  <div class="w-[60%] mx-auto">
    <form @submit.prevent="PostBlog" class="flex flex-col mt-5 gap-5">
      <input
        type="text"
        name="title"
        id="title"
        v-model="newBlog.title"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="Article Title"
      />
      <input
        type="text"
        v-model="newBlog.article"
        id="article"
        name="article"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2"
        placeholder="What's this article about?"
      />
      <textarea
        v-model="newBlog.body"
        id="article_body"
        name="article_body"
        class="border rounded focus:border-blue-200 outline-none flex-grow p-2 resize-none"
        placeholder="Write your article (in markdown)"
        rows="10"
      ></textarea>
      <input
        type="text"
        id="tag"
        name="tag"
        v-model="newBlog.tag"
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
const user = useSupabaseUser();
const client = useSupabaseClient();
const newBlog = reactive({
  title: "",
  article: "",
  body: "",
  tag: "",
});
const PostBlog = async () => {
  if (
    !newBlog.title.length ||
    !newBlog.article.length ||
    !newBlog.body.length ||
    !newBlog.tag.length
  ) {
    alert("fill out input fields");
    return;
  }
  try {
    const { data, status } = await client
      .from("blog")
      .insert([
        {
          title: newBlog.title,
          article: newBlog.article,
          body: newBlog.body,
          tag: newBlog.tag,
          like: 0,
          user_id: user.value.id,
          username: user.value?.user_metadata?.username,
        },
      ])
      .select("*");
  } catch (err) {
    console.log(err);
  }
};
</script>
