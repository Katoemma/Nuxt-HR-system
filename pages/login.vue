<script setup>

definePageMeta({
    layout: 'auth'
})

</script>
<template>
    <div class="mt-10 bg-white p-5 rounded-lg shadow-md mx-auto w-full max-w-md">
        <h1 class="text-2xl font-bold">Login</h1>
        <form action="" class="mt-10">
            <div class="flex flex-col mt-10">
                <label for="email" class="text-sm font-semibold">Email</label>
                <input type="email" name="email" id="email" class="border-2 border-[#1ea896] rounded-md p-2 mt-2"
                    placeholder="Enter your email">
            </div>
            <div class="flex flex-col mt-10">
                <label for="password" class="text-sm font-semibold">Password</label>
                <input type="password" name="password" id="password"
                    class="border-2 border-[#1ea896] rounded-md p-2 mt-2" placeholder="Enter your password">
            </div>
            <div class="flex flex-col mt-10">
                <label for="password" class="text-sm font-semibold">Remember Me</label>
                <input type="checkbox" name="remember" id="remember"
                    class="border-2 border-[#1ea896] rounded-md p-2 mt-2">
            </div>
            <div class="flex flex-col mt-10">
                <button type="submit"
                    class="bg-[#1ea896] text-white rounded-md p-2 hover:bg-[#1ea896]/80">Login</button>
            </div>
        </form>
    </div>
</template>