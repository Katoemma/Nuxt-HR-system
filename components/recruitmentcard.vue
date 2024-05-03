<template>
    <div class="flex flex-col bg-white rounded-lg p-4 shadow-md">
        <div class="flex justify-between items-center gap-5">
            <h3 class="font-bold text-2xl text-gray-600">Recruitment progress</h3>
            <span class="text-blue-700">View all <i class="fa fa-arrow-right ml-1 text"></i></span>
        </div>

        <!-- table -->
        <table class="min-w-full border-collapse">
            <thead>
                <tr>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Full Name</th>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Position</th>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Department</th>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Type</th>
                    <th
                        class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Status</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                <tr v-for="(employee, index) in limitedEmployees" :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <td scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" :src="employee.avatar">
                        <div class="ps-3">
                            <div class="text-base font-semibold">{{ employee.fullName }}</div>
                            <div class="font-normal text-gray-500">{{ employee.email }}</div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.position }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.department }}
                    </td>
                    <td class="px-6 py-4">
                        {{ employee.type }}
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="h-2.5 w-2.5 rounded-full  me-2" :class="statusColor(employee.status)"></div>
                            {{ employee.status }}
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script setup>
const employees = [
    {
        fullName: "John Doe",
        position: "Software Engineer",
        department: "Engineering",
        type: "Full-time",
        avatar: "https://robohash.org/Terry.png?set=set4",
        status: 'Tech interview',
        email: "john.doe@example.com"
    },
    {
        fullName: "Jane Smith",
        position: "Marketing Manager",
        department: "Marketing",
        type: "Part-time",
        avatar: "https://robohash.org/Alison.png?set=set4",
        status: 'Final interview',
        email: "jane.smith@example.com"
    },
    {
        fullName: "Emily Johnson",
        position: "HR Manager",
        department: "HR",
        type: "Full-time",
        avatar: "https://robohash.org/Jerry.png?set=set4",
        status: 'Resume review',
        email: "emily.johnson@example.com"
    },
    {
        fullName: "Michael Brown",
        position: "Sales Manager",
        department: "Sales",
        type: "Full-time",
        avatar: "https://robohash.org/Jerry.png?set=set4",
        status: 'Offer letter',
        email: "michael.brown@example.com"
    },
    {
        fullName: "Emily Johnson",
        position: "HR Manager",
        department: "HR",
        type: "Full-time",
        avatar: "https://robohash.org/Jerry.png?set=set4",
        status: 'Offer letter',
        email: "emily.johnson@example.com"
    },
    {
        fullName: "Michael Brown",
        position: "Sales Manager",
        department: "Sales",
        type: "Full-time",
        avatar: "https://robohash.org/Jerry.png?set=set4",
        status: 'Offer letter',
        email: "michael.brown@example.com"
    },
    // Add more employees as needed
];

const limitedEmployees = employees.slice(0, 4);

function statusColor(status) {
    switch (status) {
        case 'Tech interview':
            return 'bg-yellow-500';
        case 'Final interview':
            return 'bg-blue-500';
        case 'Resume review':
            return 'bg-purple-500';
        case 'Offer letter':
            return 'bg-green-500';
        default:
            return 'bg-gray-500';
    }
}
</script>