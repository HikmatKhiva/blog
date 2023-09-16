<template>
  <!-- User -->
  <div class="flex items-center self-center mt-5 gap-8">
    <!-- User -->
    <div class="flex gap-2 items-center text-white">
      <Icon name="subway:admin" size="20" />
      <div>
        <h3 class="leading-none text-base text-green-500">
          {{ article.data[0].username }}
        </h3>
        <p class="text-xs text-gray-300">Fri Dec 09 2022</p>
      </div>
    </div>
    <div class="flex gap-1">
      <button
        class="border text-xs flex items-center gap-2 p-1 rounded outline-none px-2 text-[#cccc] border-[#ccc] hover:bg-[#ccc] hover:text-white transition-all duration-300"
      >
        <Icon name="subway:add-1" size="16" />
        Follow
      </button>
      <button
        class="border text-xs flex items-center gap-2 p-1 rounded outline-none text-green-500 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
      >
        <Icon name="healthicons:heart" size="16" />
        {{ article.data[0].like }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
  },
});
</script>
