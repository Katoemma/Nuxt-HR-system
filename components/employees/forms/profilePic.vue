<script setup>
import { ref } from 'vue';

const imageUrl = ref(null);

const previewImage = (event) => {
    const file = event.target.files[0];
    imageUrl.value = URL.createObjectURL(file);
};
</script>
<template>
    <label for="photo" class="relative cursor-pointer border rounded-lg bg-gray-100">
        <input id="photo" type="file" class="hidden" @change="previewImage" />
        <div v-if="imageUrl" class="flex flex-col items-center">
            <img :src="imageUrl" alt="Uploaded Image" class="w-32 h-32 object-cover border-2 border-gray-500 rounded-lg">
        </div>
        <div v-else class="flex flex-col items-center p-4">
            <i class="fa fa-camera text-gray-500 text-2xl"></i>
            <span class="text-gray-500">Profile pic</span>
        </div>
    </label>
</template>