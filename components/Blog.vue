<template>
  <div v-if="blog" class="flex justify-between pt-5 items-start border-b pb-2">
    <div class="">
      <!-- User -->
      <div class="flex gap-1">
        <!-- User Image -->
        <Icon name="material-symbols:account-circle-outline" size="30" />
        <!-- <img src="" alt=""> -->
        <!-- UserName and date time-->
        <div class="">
          <h3 class="text-lg leading-none text-green-500">
            {{ blog?.username }}
          </h3>
          <p class="text-xs text-gray-400">Mon Dec 28 2020</p>
        </div>
      </div>
      <!-- Article -->
      <div class="my-2">
        <h3 class="text-2xl">{{ blog?.article }}</h3>
        <p class="text-sm text-gray-500">
          {{ blog?.body }}
        </p>
        <NuxtLink
          class="text-xs font-normal text-gray-400 mt-2 inline-block"
          :to="'/article/' + blog?.id"
          >Read more...</NuxtLink
        >
      </div>
    </div>
    <button
      class="flex border border-green-500 px-2 text-green-500 items-center p-1 rounded gap-1 hover:bg-green-500 hover:text-white transition-all duration-300"
    >
      <Icon name="icon-park-solid:like" size="12" />
      {{ blog?.like }}
    </button>
  </div>
</template>
<script setup>
defineProps({
  blog: {
    type: Object,
  },
});
</script>
