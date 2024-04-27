<script setup>

</script>
<template>
    <div class="p-1 bg-[#1ea896]">
        <div class="bg-[#1ea896] h-fit 2xl:h-screen container mx-auto p-1 md:p-20 rounded-xl">
            <div class="bg-white rounded-xl h-full flex flex-col md:flex-row justify-center items-center rounded-xl">
                <div class="hidden md:block h-full  w-full rounded-l-xl "
                    style="background-image: url('https://asanify.com/wp-content/uploads/2021/07/picxy_TF531665.jpg');background-size: cover; background-position: center;">
                    <div class="bg-black/80 h-full rounded-l-xl flex flex-col justify-center p-10">
                        <h1 class="text-xl md:text-3xl lg:text-5xl font-bold text-[#1ea896] ">Kato's HRMS</h1>
                        <h2 class="text-lg md:text-xl   text-white ">A system to manage all employees on a
                            single platform
                        </h2>
                        <p class="text-white mt-8">
                            This Sytem is being developed in Vue-Nuxt, Tailwindcss and Supabase
                        </p>
                    </div>
                </div>

                <div class="w-full h-full bg-gray-200 rounded-r-xl">
                    <div class="flex flex-col p-10">
                        <!-- logo -->
                        <img src="/images/logo.png" class="w-16" alt="">
                        <!-- login form -->
                        <slot />

                    </div>
                    
                </div>

            </div>
        </div>
    </div>

</template>