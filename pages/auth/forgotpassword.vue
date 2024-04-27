<script setup>
const supabase = useSupabaseClient()

definePageMeta({
    layout: 'auth',
})

const email = ref('')

// function to handle password reset
const handlePasswordReset = async () => {
    try {
        const { error } = await supabase.auth.resetPasswordForEmail(email.value, { redirectTo: 'http://localhost:3000/auth/resetpassword' })
        if (error) throw error
        alert('Password reset email sent')
    } catch (error) {
        alert(error.error_description || error.message)
    }
}

</script>
<template>
    <div>
        <!-- back link -->
        <div class="mt-10 ">
            <NuxtLink to="/login">
                << Back </NuxtLink>
        </div>
        <div class="mt-10 bg-white p-5 rounded-lg shadow-md mx-auto w-full max-w-md">
            <h3 class="text-xl font-bold">Forgot Password</h3>
            <p class="text-gray-500 text-sm mt-5">Enter your registered email address. we’ll send you a code to reset your
                password.</p>

            <input v-model="email" type="email" name="email" id="email"
                class="border-2 border-[#1ea896] rounded-md p-2 mt-2 w-full" placeholder="Enter your email">
                <button @click="handlePasswordReset"
                    class="bg-[#1ea896] text-white rounded-md p-2 hover:bg-[#1ea896]/80 mt-5 w-full"
                    >Send Code</button>

            <p class="mt-5 text-gray-500">Didn’t receive a code? <span class="text-green-700">Resend Code</span></p>

        </div>


    </div>

</template>