<script setup>
const supabase = useSupabaseClient();

//function to logout
const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
    }else{
        navigateTo('/login');
    }
};

</script>
<template>
    <div class="flex h-screen w-full bg-gray-100">
        <!-- side bar -->
        <div class="flex flex-col bg-white w-1/5 h-full border-r">
            <!-- logo -->
            <div class="flex items-center justify-center h-16 ">
                <img src="/images/logo.png" class="w-10 h-10" width="50" height="50" alt="logo">
                <h1 class="text-teal-600 px-4 font-bold text-xl">Kato HRMS</h1>
            </div>

            <!-- menu -->
            <div class="flex flex-col px-4 py-4">
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-th-large pr-2"></i>Dashboard
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-users pr-2"></i>All Employees
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-th-large pr-2"></i>All Departments
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class=" fa fa-list-alt pr-2"></i>Attendance
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-credit-card pr-2"></i>Payroll
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-briefcase pr-2"></i>Jobs
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-clipboard pr-2"></i>Leaves
                </NuxtLink>
                <NuxtLink to="/" :active-class="bg - red - 500"
                    class="flex items-center p-2.5 text-gray-700 hover:bg-teal-100 border border-l-4 border-white  hover:border-teal-500  rounded-r-lg mb-4">
                    <i class="fa fa-gears pr-2"></i>Settings
                </NuxtLink>

            </div>

        </div>

        <!-- header and main content -->
        <div class="flex flex-col w-full h-16 bg-white border-b border-gray-200">
            <!-- header -->
            <div class="flex justify-between itms-center p-4 w-full h-full bg-white">
                <!-- greetings -->
                <div class="flex ">
                    <p class="text-lg">Good Morning, <span class="text-teal-600 font-bold">Kato Emmanuel</span></p>
                </div>

                <div class="flex gap-6 items-center">
                    <!-- search input -->

                    <input type="text" class="rounded-lg p-2 border" placeholder="Search">
                    <!-- notification -->
                    <button type="button"
                        class="relative inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-gray-200 rounded-xl hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    
                        <span class="sr-only">Notifications</span>
                        <i class="fa fa-bell text-gray-500 text-md"></i>
                        <div
                            class="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 ">
                            8</div>
                    </button>
                    <!-- profile -->
                    <div class="flex flex-col group">

                        <img src="https://www.hollywoodreporter.com/wp-content/uploads/2024/02/Avatar__The_Last_Airbender_n_S1_00_13_15_10RC.jpgAvatar__The_Last_Airbender_n_S1_00_13_15_10RC-H-2024.jpg" class="w-10 h-10 rounded-full" alt="profile">
                        
                        <!-- links -->
                        
                            <div class="hidden  absolute right-2 -top-4  group-hover:flex flex-col w-48 py-2 mt-16 bg-white divide-y divide-gray-100 rounded-lg shadow-xl border">
                                <NuxtLink to="/" class="px-4 py-2 hover:bg-gray-100"><i class="fa fa-user pr-2" ></i>Profile</NuxtLink>
                                <NuxtLink to="/" class="px-4 py-2 hover:bg-gray-100"><i class="fa fa-gears pr-2" ></i>Settings</NuxtLink>
                                <span @click="logout()" class="px-4 py-2 hover:bg-gray-100 text-red-400"><i class="fa fa-sign-out pr-2" ></i>Logout</span>
                            </div>
                        
                    </div>
                </div>


            </div>
            <slot />
        </div>
        <!-- main content -->


    </div>

</template>