
<template>
    <div class="card flex justify-content-center 1/3">
        <Calendar v-model="date" inline showWeek yearTitle/>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
</script>
