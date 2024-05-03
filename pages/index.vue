<script setup lang="ts">
const route = useRoute()

definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard',
})

</script>

<template>
  <div class=" flex flex-col m-2  p-2 rounded-lg ">

    <!-- cards grid -->
    <Cardgroup />
    <!-- Requests card -->
    <div class="p-4 flex justify-between">
      <Requestscard />
      <Recruitmentcard />
      <CalendarWidget />
    </div>
    

  </div>
</template>
