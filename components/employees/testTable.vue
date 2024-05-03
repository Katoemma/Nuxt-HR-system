<template>
    <div class="card">
        <DataView :value="users" paginator :rows="5">
            <template #list="slotProps">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Employee ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Department
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Designation
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Employment Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in slotProps.items" :key="user.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row"
                                class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img :src="user.avatar" :alt="user.name + ' image'" class="w-10 h-10 rounded-full" />
                                <div class="ps-3">
                                    <div class="text-base font-semibold">{{ user.name }}</div>
                                    <div class="font-normal text-gray-500">{{ user.email }}</div>
                                </div>
                            </td>
                            <td class="px-6 py-4">{{ user.id }}</td>
                            <td class="px-6 py-4">{{ user.department }}</td>
                            <td class="px-6 py-4">{{ user.position }}</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div v-if="user.status === 'Online'"
                                        class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                    <div v-else class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                    {{ user.status }}
                                </div>
                            </td>
                            <td class="px-4 py-2 flex items-center gap-5">
                                <!-- Modal toggle -->
                                <i class="fa fa-eye text-green-700 cursor-pointer text-lg"></i>
                                <i class="fa fa-edit text-orange-600 cursor-pointer text-lg"></i>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </DataView>
    </div>
</template>



<script setup>
const users = [
    {
        id: 1,
        name: 'Neil Sims',
        email: 'neil.sims@flowbite.com',
        position: 'React Developer',
        department: 'Engineering',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 2,
        name: 'Bonnie Green',
        email: 'bonnie@flowbite.com',
        position: 'Designer',
        department: 'Design',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 3,
        name: 'Jese Leos',
        email: 'jese@flowbite.com',
        position: 'Vue JS Developer',
        department: 'Engineering',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 4,
        name: 'Thomas Lean',
        email: 'thomes@flowbite.com',
        position: 'UI/UX Engineer',
        department: 'Engineering',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 5,
        name: 'Leslie Livingston',
        email: 'leslie@flowbite.com',
        position: 'SEO Specialist',
        department: 'Marketing',
        status: 'Offline',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 6,
        name: 'Jane Fisher',
        email: 'jane@flowbite.com',
        position: 'Web Developer',
        department: 'Engineering',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 7,
        name: 'Juan Peterson',
        email: 'juan@flowbite.com',
        position: 'Web Developer',
        department: 'Engineering',
        status: 'Offline',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 8,
        name: 'Nathan Adams',
        email: 'nathan@flowbite.com',
        position: 'Web Developer',
        department: 'Engineering',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 9,
        name: 'Anna Adame',
        email: 'anna@flowbite.com',
        position: 'Web Developer',
        department: 'Engineering',
        status: 'Online',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },
    {
        id: 10,
        name: 'Peter Richards',
        email: 'peter@flowbite.com',
        position: 'Web Developer',
        department: 'Engineering',
        status: 'Offline',
        avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
    },

];
</script>
