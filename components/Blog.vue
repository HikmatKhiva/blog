<template>
  <div v-if="blog" class="flex justify-between pt-5 items-start border-b pb-2">
    <div class="">
      <!-- User -->
      <div class="flex gap-1">
        <!-- User Image -->
        <Icon name="material-symbols:account-circle-outline" size="30" />
        <!-- <img src="" alt=""> -->
        <!-- UserName and date time-->
        <div>
          <h2 class="md:text-lg text-sm leading-none text-green-500">
            {{ blog?.username }}
          </h2>
          <p class="md:text-xs text-[10px] text-gray-400">
            {{
              new Date(blog.created_at).toLocaleString("en-Us", {
                weekday: "short",
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            }}
          </p>
        </div>
      </div>
      <!-- Article -->
      <div class="my-2">
        <h3 class="md:text-2xl text-xl">{{ blog?.article }}</h3>
        <p class="md:text-sm text-xs text-gray-500">
          {{ blog?.body }}
        </p>
        <NuxtLink
          class="text-xs font-normal text-gray-400 mt-2 inline-block"
          :to="'/article/' + blog?.id"
          >Read more...</NuxtLink
        >
      </div>
    </div>
    <!-- <button
      class="flex border border-green-500 px-2 text-green-500 items-center p-1 rounded gap-1 hover:bg-green-500 hover:text-white transition-all duration-300"
      :class="{ 'bg-green-500 text-white': isUserClickLike.length }"
      name="like_button"
      type="button"
      @click="handleLike(blog?.id)"
    >
      <Icon name="icon-park-solid:like" size="12" />
      {{ likes.data?.length }}
    </button> -->
  </div>
</template>
<script setup>
const props = defineProps({
  blog: {
    type: Object,
  },
});
</script>
