<script setup>
const supabase = useSupabaseClient();

const user = useSupabaseUser();

definePageMeta({
    layout: 'auth'
});

const email = ref('');
const password = ref('');
const isError = ref('');

//function to validateData
const validateData = async() =>{
    if (!email.value || !password.value) {
        isError.value = 'Please fill in all fields.';
        return false;
    }

   else if (!email.value.includes('@')) {
        isError.value = 'Please enter a valid email address.';
        return false;
    }

    else if (password.value.length < 6) {
        isError.value = 'Password must be at least 6 characters long.';
        return false;
    }else{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });

        if (error) {
            console.error('Error logging in:', error.message);
            isError.value = error.message;
        } else {
            console.log('User logged in:', data.user);
            //navigate to home page
            navigateTo('/');
        }
    }

    
};


const togglePassword = ref(true);

//function to toggle password
const togglePasswordVisibility = () => {
    togglePassword.value = !togglePassword.value;
}

</script>
<template>
    <div class="mt-10 bg-white p-5 rounded-lg shadow-md mx-auto w-full max-w-md">
        <h1 class="text-2xl font-bold text-center">Login</h1>
        <p class="text-sm text-center mt-4">Welcome back! Please enter your credentials to login.</p>
        <!-- error message -->
        <div v-if="isError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5"
            role="alert">
            <span class="block sm:inline">{{ isError }}</span>
        </div>
        <div class="mt-10" >
            <div class="flex flex-col mt-10">
                <label for="email" class="text-sm font-semibold">Email</label>
                <input v-model="email" type="email" name="email" id="email" class="border-2 border-[#1ea896] rounded-md p-2 mt-2"
                    placeholder="Enter your email">
            </div>

            <!-- passowrd field with show toggle -->
            <div class="flex flex-col mt-10 relative">
                <label for="password" class="text-sm font-semibold">Password</label>
                <input v-model="password" :type="togglePassword ? 'password' : 'text'" name="password" id="password"
                    class="border-2 border-[#1ea896] rounded-md p-2 mt-2 pr-10" placeholder="Enter your password">
                <button v-if="togglePassword" type="button" @click="togglePasswordVisibility"
                    class="absolute inset-y-0 top-6 right-0 flex items-center py-2 px-3 focus:outline-none">
                    <i class="fa fa-eye text-teal-600 text-xl"></i>
                </button>
                <button v-else type="button" @click="togglePasswordVisibility"
                    class="absolute inset-y-0 top-6 right-0 flex items-center py-2 px-3 focus:outline-none">
                    <i class="fa fa-eye-slash text-teal-600 text-xl"></i>
                </button>
            </div>

            <div class="flex justify-between items-center mt-4">
                <div class="flex gap-2 items-center">
                    <label for="password" class="text-sm font-semibold">Remember Me</label>
                    <input type="checkbox" name="remember" id="remember"
                        class="border-2 border-[#1ea896] rounded-md bg-teal-600">
                </div>

                <NuxtLink to="/auth/forgotpassword" class="text-sm text-[#1ea896] hover:underline">Forgot Password?</NuxtLink>

            </div>
            <div class="flex flex-col mt-5">
                <button @click="validateData()"
                    class="bg-[#1ea896] text-white rounded-md p-2 hover:bg-[#1ea896]/80">Login</button>
            </div>
        </div>
    </div>
</template>