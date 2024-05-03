<script setup lang="ts">
const route = useRoute()

definePageMeta({
  middleware: ['auth'],
  layout: 'test',
})

</script>

<template>
  <div class=" flex flex-col m-2 bg-white p-2 rounded-lg shadow-lg">

    <Button label="Check" icon="pi pi-check" />

  </div>
</template>
