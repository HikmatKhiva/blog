<template>
    <section>
        <div class="bg-[#f3f3f3] py-5">
            <div class="w-[992px] mx-auto">
                <!-- Profile Header -->
                <div class="flex flex-col">
                    <Icon name="uiw:smile" class="self-center" size="50" />
                    <h3 class="self-center my-2 ">{{ params.name }}</h3>
                    <NuxtLink to="/profile/setting"
                        class="flex items-center gap-1 self-end border text-xs px-2 text-[#999] p-1 rounded hover:bg-gray-300 hover:text-gray-100 transition-all duration-300">
                        <Icon name="material-symbols:settings-rounded" size="16" />
                        Edit Profile Settings
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="w-[992px] mx-auto">
            <!-- Profile Body -->
            <div class="py-5">
                <div class="flex gap-5 border-b  flex-grow">
                    <NuxtLink to="/" class="border-b pb-2 border-green-400">My Post</NuxtLink>
                    <NuxtLink to="/" class="">Favorite Posts</NuxtLink>
                </div>
                <!-- Blogs -->
                <div class="blogs">
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const { params } = useRoute();
</script>