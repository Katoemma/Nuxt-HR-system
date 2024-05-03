<script setup>
</script>
<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #title>Requests</template>
        <template #content>
            <ul class="list-non border border-gray-100 rounded-lg">
                <li>
                    <div class="flex gap-2 item-center justify-between mr-4 p-2">
                        <i class="fa fa-user-md bg-pink-300 rounded text-white p-1 w-5"></i>
                        <div class="flex gap-2 item-center justify-between w-2/3">
                            <span class="text-gray-500">Profile updates</span>
                            <span class="bg-teal-600  w-6 text-center rounded-full text-white">12</span>
                        </div>

                    </div>
                    <hr class="border-gray-100">
                </li>
                <li>
                    <div class="flex gap-2 item-center justify-between mr-4 p-2">
                        <i class="fa fa-briefcase bg-green-200 rounded text-white p-1 "></i>
                        <div class="flex gap-2 item-center justify-between w-2/3">
                            <span class="text-gray-500">Business Trip</span>
                            <span class="bg-teal-600  w-6 text-center rounded-full text-white">2</span>
                        </div>

                    </div>
                    <hr class="border-gray-100">
                </li>
                <li>
                    <div class="flex gap-2 item-center justify-between mr-4 p-2">
                        <i class="fa fa-user-md bg-pink-300 rounded text-white p-1 "></i>
                        <div class="flex gap-2 item-center justify-between w-2/3">
                            <span class="text-gray-500">Annual Leave</span>
                            <span class="bg-teal-600  w-6 text-center rounded-full text-white">39</span>
                        </div>

                    </div>
                    <hr class="border-gray-100">
                </li>
                <li>
                    <div class="flex gap-2 item-center justify-between mr-4 p-2">
                        <i class="fa fa-plus-square bg-pink-300 rounded text-white p-1 "></i>
                        <div class="flex gap-2 item-center justify-between w-2/3">
                            <span class="text-gray-500">Sick Leave</span>
                            <span class="bg-teal-600  w-6 text-center rounded-full text-white">4</span>
                        </div>

                    </div>
                    <hr class="border-gray-100">
                </li>

            </ul>
        </template>
    </Card>
</template>
