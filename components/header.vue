<script setup>
const toggleStore = useMyToggleStore();


</script>
<template>
    <div class="flex justify-between bg-white rounded-lg p-2 px-6 m-2 items-center">
        <button class="bg-teal-500 h-10 w-10 rounded-full" @click="toggleStore.toggleSidebar()"><i
                class="fa fa-bars text-xl text-white"></i>
        </button>
        <div class="flex flex-col">
            <h3 class="text-sm text-teal-600">Good morning! 🌅</h3>
            <h2 class="font-bold">Kato Emmanuel</h2>
        </div>
        <!-- company logo -->
        <div class="flex items-center gap-2 px-4">
            <img src="/images/logo.png" alt="logo" class="w-12 h-12">
            <h1 class="text-2xl font-bold text-teal-600">HRMS System</h1>
        </div>

        <div class="flex justify-between items-center gap-8">
            <!-- search -->
            <IconField iconPosition="left">
                <InputIcon class="fa fa-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>
            <!-- user info -->
            <div class="flex gap-8">
                <!-- notification -->
                <div class="group">
                    <button type="button" @click="toggleStore.toggleNotification()"
                        class="relative inline-flex items-center text-sm font-medium text-center text-gray-700 rounded-lg  bg-gray-100 px-2">
                        <i class="fa fa-bell text-2xl"></i>
                        <div
                            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -end-3 ">
                            20
                        </div>
                    </button>
                    <NotificationCard "/>
                </div>


                <!-- messages -->
                <button type="button"
                    class="relative inline-flex items-center text-sm font-medium text-center text-gray-500 rounded-lg  bg-gray-100 px-2">
                    <i class="fa fa-envelope text-2xl"></i>
                    <div
                        class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-3 ">
                        10
                    </div>
                </button>
                <!-- user avatar -->
                <div class="flex bg-gray-100 p-1 px-2 rounded items-center">
                    <Avatar
                        image="https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg"
                        class="mr-2" shape="circle" />
                    <div class="flex flex-col">
                        <h3 class="text-sm">Kato emmanuel</h3>
                        <h4 class="text-sm text-gray-500">Systems Coordinator</h4>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>