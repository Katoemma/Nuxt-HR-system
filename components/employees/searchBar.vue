<script setup>

</script>
<template>
    <div class="flex justify-between py-4">
        <!-- search -->
        <IconField iconPosition="left">
            <InputIcon class="fa fa-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
        </IconField>

        <div class="flex">
            <!-- add button -->
            <NuxtLink to="/employees/new" class="bg-teal-600 text-white p-2 px-4 rounded-md mr-2 ">
                <i class="fa fa-plus-circle mr-2"></i>
                Add Employee
            </NuxtLink>
            <!-- export button -->
            <Button label="Export" icon="pi pi-upload" class="p-button-help" />
        </div>

    </div>

</template>