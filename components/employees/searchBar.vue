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
            <Button label="Add" icon="fa fa-plus-circle" class="p-button-success mr-2" />
            <!-- export button -->
            <Button label="Export" icon="pi pi-upload" class="p-button-help" />
        </div>

    </div>

</template>