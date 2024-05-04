<script setup>
const tabStore = useMyToggleStore();



</script>
<template>
    <div class="flex bg-white  rounded-t-lg gap-2">
        <div class="flex flex-col  w-full cursor-pointer" @click="tabStore.setActiveTab('personal info')"
        :class="tabStore.activeEmployeeTab == 'personal info' ? 'text-teal-500' : 'text-gray-400'">
            <span class="mb-3"><i class="fa fa-user mr-2 px-2"></i> Personal Information</span>
            <div class="border-2  rounded" :class="tabStore.activeEmployeeTab == 'personal info' ? 'border-teal-500' : 'border-gray-400'"></div>
        </div>
        <div class="flex flex-col w-full cursor-pointer" @click="tabStore.setActiveTab('proffesional info')"
        :class="tabStore.activeEmployeeTab == 'proffesional info' ? 'text-teal-500' : 'text-gray-400'">
            <span class="mb-3"><i class="fa fa-briefcase mr-2 px-2"></i> Professional Information</span>
            <div class="border-2  rounded-full" :class="tabStore.activeEmployeeTab == 'proffesional info' ? 'border-teal-500' : 'border-gray-400'"></div>
        </div>
        <div class="flex flex-col  w-full cursor-pointer" @click="tabStore.setActiveTab('Documents')"
        :class="tabStore.activeEmployeeTab == 'Documents' ? 'text-teal-500' : 'text-gray-400'">
            <span class="mb-3"><i class="fa fa-file-text mr-2 px-2"></i> Documents</span>
            <div class="border-2 rounded" :class="tabStore.activeEmployeeTab == 'Documents' ? 'border-teal-500' : 'border-gray-400'"></div>
        </div>
        <div class="flex flex-col  w-full cursor-pointer" @click="tabStore.setActiveTab('Account Access')"
        :class="tabStore.activeEmployeeTab == 'Account Access' ? 'text-teal-500' : 'text-gray-400'">
            <span class="mb-3"><i class="fa fa-lock mr-2 px-2"></i> Account Access</span>
            <div class="border-2  rounded" :class="tabStore.activeEmployeeTab == 'Account Access' ? 'border-teal-500' : 'border-gray-400'"></div>
        </div>
        
    </div>

</template>