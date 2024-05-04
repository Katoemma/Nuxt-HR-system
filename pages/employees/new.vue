<script setup>
const tabstore = useMyToggleStore();

definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})

</script>
<template>

    <h1 class="text-3xl font-bold m-2 text-teal-600">Employees</h1>

    <div class=" flex flex-col m-2  p-4  items-center">
        <div class="flex flex-col container max-auto max-w-7xl border p-4 rounded-lg bg-white shadow-lg m-2">
            <EmployeesTabBar />

            <EmployeesFormsPersonal v-if="tabstore.activeEmployeeTab == 'personal info'" />
        </div>

    </div>

</template>