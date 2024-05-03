<script setup ">
import avatar from '~/presets/lara/avatar';

const visible = ref(false)
const value1 = ref('')

const user = {
    fullname: 'Kato emmanuel',
    avatar: 'https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-09T18:09:39.677658.jpg'
}

</script>

<template>
    <div class=" flex flex-col bg-gray-100 h-screen">
        <Sidebar v-model:visible="visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-col h-full bg-white">
                    <div class="flex items-center justify-between px-4 pt-3 flex-shrink-0 mb-4">
                        <span class="inline-flex items-center gap-2">
                            <img src="/images/logo.png" class="w-12" alt="Company Logo">
                            <span class="font-semibold text-2xl text-teal-600">HRMS System</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined
                                class="p-4"><i class="fa fa-times"></i></Button>
                        </span>
                    </div>

                    <div class="overflow-y-auto text-gray-600">
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div v-ripple v-styleclass="{
                                    selector: '@next',
                                    enterClass: 'hidden',
                                    enterActiveClass: 'slidedown',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'slideup'
                                }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple">
                                    <span class="font-medium">FAVORITES</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <div class="list-none p-0 m-0 overflow-hidden">
                                    <NuxtLink to="/" class="bg-teal-100 rounded">
                                        <span v-ripple
                                            class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="fa fa-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                        </span>
                                    </NuxtLink>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-users mr-2"></i>
                                    <span class="font-medium">All Employees</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-users mr-2"></i>
                                    <span class="font-medium">All Departments</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-comments mr-2"></i>
                                    <span class="font-medium">Attendance</span>
                                    <span
                                        class="inline-flex items-center justify-center ml-auto bg-teal-500 rounded-full w-8 h-8 text-white">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-calendar mr-2"></i>
                                    <span class="font-medium">Payroll</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-cog mr-2"></i>
                                    <span class="font-medium">Jobs</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-cog mr-2"></i>
                                    <span class="font-medium">Leaves</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple
                                    class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="fa fa-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                    </div>
                    </li>
                    </ul>

                </div>
                <div class="mt-auto text-gray-700">
                    <hr class="mb-3 mx-3 border-top-1  surface-border border-gray-400" />
                    <a v-ripple
                        class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <Avatar :image="user.avatar" shape="circle" />
                        <span class="font-bold">{{ user.fullname }}</span>
                    </a>
                </div>

    </div>
</template>
</Sidebar>
<div class="flex justify-between bg-white rounded-lg p-2 px-6 m-2 items-center">
    <button class="bg-teal-500 h-10 w-10 rounded-full" @click="visible = true"><i
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
            <button type="button"
                class="relative inline-flex items-center text-sm font-medium text-center text-gray-700 rounded-lg  bg-gray-100 px-2">
                <i class="fa fa-bell text-2xl"></i>
                <div
                    class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -end-3 ">
                    20
                </div>
            </button>

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
<slot />

</div>
</template>
<style>
.router-link-active {
    background-color: #e6fffa;
    border-radius: 0.25rem;
}

.router-link-exact-active {
    background-color: #7319c7;
    border-radius: 0.25rem;
}
</style>
