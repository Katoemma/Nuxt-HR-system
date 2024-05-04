<script setup>

const dOB = ref('');

</script>
<template>

    <div class="flex flex-col container mx-auto max-w-5xl rounded-lg border mt-3">
        <div class="flex items-center p-2 px-4 ">
            <EmployeesFormsProfilePic />
        </div>

        <div class="flex flex-col px-4 p-2 gap-2">
            <div class="grid grid-cols-2 gap-2 ">
                <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="First Name">
                <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="Last Name">
                <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="Mobile Number">
                <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="Email Address">               
                <Calendar v-model="dOB" showIcon iconDisplay="input" :placeholder="'Date of Birth'" />

                <select type="text" class="bg-gray-100 rounded border border-gray-200 p-2 text-gray-400"
                    placeholder="Email Address">
                    <option value="">Marital Status</option>
                    <option value="">Single</option>
                    <option value="">Married</option>
                    <option value="">Divorced</option>
                </select>
                <select type="text" class="bg-gray-100 rounded border border-gray-200 p-2 text-gray-400"
                    placeholder="Email Address">
                    <option value="">Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                </select>
                <select type="text" class="bg-gray-100 rounded border border-gray-200 p-2 text-gray-400"
                    placeholder="Email Address">
                    <option value="">Natioanlity</option>
                    <option value="">Ugandan</option>
                    <option value="">Foreign</option>
                    <option value="">Alien</option>
                </select>
            </div>

            <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="Address">
            <div class="grid grid-cols-3 gap-2 ">
                <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="District / City">
                <input type="text" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="State">
                <input type="number" class="bg-gray-100 rounded border border-gray-200 p-2" placeholder="Zip Code">
            </div>
            <div class="flex justify-end p-2 gap-2">
                <button class="bg-orange-600 p-2 px-6 rounded-lg text-white">Cancel</button>
                <button class="bg-teal-600 p-2 px-6 rounded-lg text-white">Continue</button>
            </div>
        </div>
    </div>
</template>