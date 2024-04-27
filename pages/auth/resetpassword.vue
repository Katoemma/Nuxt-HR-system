<script setup>
const route = useRoute();

const supabase = useSupabaseClient()

definePageMeta({
    layout: 'auth',
})


console.log(route.query.code)

const password = ref('');
const cPassword = ref('');

//function to reset password
const resetPassword = async () => {
    //authenticate passwords
    if (password.value !== cPassword.value) {
        console.log('passwords do not match')
    } else if (password.value.length < 6) {
        console.log('password must be at least 6 characters')
    } else {
        const { data, error } = await supabase.auth.updateUser({ password : password.value})
        if (error) {
            console.log(error)
        } else {
            console.log('password reset successful')
            //redirect to login page
            navigateTo('/login')
        }
    }
    //authenticate email


}

//call the function to reset password
resetPassword()

</script>
<template>
    <div>
        <div class="mt-10 bg-white p-5 rounded-lg shadow-md mx-auto w-full max-w-md">
            <h3 class="text-xl font-bold">Reset Password</h3>

            <input v-model="password" type="password" name="email" id="email"
                class="border-2 border-[#1ea896] rounded-md p-2 mt-4 w-full" placeholder="Enter new password">
            <input v-model="cPassword" type="password" name="email" id="email"
                class="border-2 border-[#1ea896] rounded-md p-2 mt-4 w-full" placeholder="Confirm new password">
            <button class="bg-[#1ea896] text-white rounded-md p-2 hover:bg-[#1ea896]/80 mt-5 w-full">Reset
                password</button>

        </div>


    </div>

</template>