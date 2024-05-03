<script setup>

//define props
const props = defineProps({
    icon: String,
    title: String,
    total: String,
    percentage: String,
    updateDate: String,
})




</script>
<template>
    <div class="flex flex-col bg-white border border-gray-100 rounded-lg w-full shadow">
        <div class="flex gap-2 items-center p-4">
            <div class="bg-teal-100 p-2 rounded-lg text-teal-600">
                <i :class="props.icon"></i>
            </div>
            <span class="text-lg text-gray-500 font-semibold">{{ props.title }}</span>
        </div>
        <div class="flex justify-between pt-2 p-4">
            <h2 class="text-3xl text-gray-700 font-bold ">{{ props.total }}</h2>
            <div class="bg-green-200 p-2 rounded-lg text-green-600 gap-2 flex items-center text-sm">
                <i class="fa fa-arrow-up "></i>
                <span>{{ props.percentage }}</span>
            </div>
        </div>
        <hr>
        <div class="p-4 py-2 text-gray-400">
            <span class="text-sm">Update: {{ props.updateDate }}</span>
        </div>

    </div>

</template>