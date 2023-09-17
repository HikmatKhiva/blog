<template>
  <article>
    <!-- Article Header -->
    <div class="bg-[#333]">
      <div class="container mx-auto py-5">
        <!-- Article Title -->
        <h1 class="text-white text-3xl">
          {{ article.data[0].title }}
        </h1>
        <!-- User -->
        <User :article="article" />
      </div>
    </div>
    <!-- Article Body -->
    <div class="container mx-auto py-5">
      <!-- Article description -->
      <p class="leading-normal text-lg -tracking-tighter border-b pb-5">
        {{ article.data[0].body }}
      </p>
      <div class="flex flex-col">
        <!-- User -->
        <User :article="article" />
        <p class="text-sm mt-5">
          <NuxtLink class="text-green-500" to="/">Sign in</NuxtLink> or
          <NuxtLink class="text-green-500" to="/">sign up</NuxtLink>
          to add comments on this article.
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
const client = useSupabaseClient();
const { params } = useRoute();
const { data: article, error } = await useAsyncData("blog", async () =>
  client.from("blog").select("*").eq("id", params.id)
);
</script>
