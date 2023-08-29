<template>
    <div class="container mx-auto mt-5 flex items-start gap-5">
        <div class="flex-grow">
           
            <div class="flex gap-5 border-b  flex-grow">
                <NuxtLink to="/" class="border-b pb-2 border-green-400">Your Feed</NuxtLink>
                <NuxtLink to="/" class="">Global Feed</NuxtLink>
            </div>
            <!-- Blogs -->
            <div class="blogs">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>

        </div>
        <aside class="p-1 px-2 rounded w-[200px]  bg-[#f3f3f3]">
            <h2>Popular tags</h2>
            <div class="flex flex-wrap gap-1 mt-2">
                <p class="bg-gray-500 rounded-xl p-2 text-xs font-bold text-white">welcome</p>
            </div>
        </aside>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* .home  */
</style>