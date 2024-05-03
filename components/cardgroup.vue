<script setup>

const cards = [
    {
        icon: 'fa fa-users',
        title: 'Total Employees',
        total: '560',
        percentage: '12 %',
        updateDate: 'June 16, 2024'
    },
    {
        icon: 'fa fa-shopping-bag',
        title: 'Total Applicants',
        total: '100',
        percentage: '5 %',
        updateDate: 'June 17, 2024'
    },
    {
        icon: 'fa fa-check-square-o',
        title: 'Todays Attendance',
        total: '230',
        percentage: '8 %',
        updateDate: 'June 18, 2024'
    },
    {
        icon: 'fa fa-tasks',
        title: 'Todays Tasks',
        total: '10',
        percentage: '20 %',
        updateDate: 'June 19, 2024'
    }
];

</script>
<template>
    <div class="flex gap-6 px-4 py-2">
        <singlecard v-for="(card, index) in cards" :key="index" :icon="card.icon" :title="card.title" :total="card.total" :percentage="card.percentage" :updateDate="card.updateDate" />
    </div>
</template>