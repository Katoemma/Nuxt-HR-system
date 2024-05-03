<script setup>
const toggleStore = useMyToggleStore();
const ishidden = computed(() => toggleStore.isNotificationHidden);

// Notification data


const notifications = [
    { icon: 'fa-envelope', iconColor: 'text-blue-500', color: 'blue', title: 'New message received', content: 'You have a new message from John Doe.', timeAgo: 'Just now' },
    { icon: 'fa-bell', iconColor: 'text-yellow-500', color: 'yellow', title: 'Reminder', content: 'Your appointment is tomorrow.', timeAgo: 'Yesterday' },
    { icon: 'fa-comment', iconColor: 'text-green-500', color: 'green', title: 'Comment', content: 'You received a comment on your post.', timeAgo: 'Last week' },
    { icon: 'fa-calendar-alt', iconColor: 'text-pink-500', color: 'pink', title: 'Event reminder', content: 'Your event is coming up next month.', timeAgo: 'Last month' },
    { icon: 'fa-star', iconColor: 'text-purple-500', color: 'purple', title: 'New achievement unlocked', content: 'Congratulations! New achievement unlocked.', timeAgo: '2 days ago' },
    { icon: 'fa-users', iconColor: 'text-indigo-500', color: 'indigo', title: 'New follower', content: 'You have a new follower on social media.', timeAgo: '3 days ago' }
]

</script>
<template>
    <div class="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden absolute z-50 right-4 border" :class="ishidden ? 'hidden' : 'block'">
        <div class="px-4 py-2 ">
            <div class="flex justify-between">
                <h2 class="text-xl font-semibold text-gray-800 mb-2 ">Notifications</h2>
                <button class="bg-red-500 w-9 rounded-full text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    @click="toggleStore.toggleNotification()"><i class="fa fa-times"></i></button>
            </div>

            <!-- Notification List -->
            <ul>
                <li v-for="(notification, index) in notifications" :key="index" class="border-t border-gray-200"
                    :class="{ 'first:border-t-0': index === 0 }">
                    <div class="flex items-center justify-between px-4 py-2 " :class="notification.color">
                        <div class="flex items-center">
                            <span class="text-xl" :class="notification.iconColor"><i
                                    :class="`fa ${notification.icon}`"></i></span>
                            <div>
                                <h3 class=" text-gray-800" v-text="notification.title"></h3>
                                <p class="text-gray-600 text-sm" v-text="notification.content"></p>
                            </div>
                        </div>
                        <span class="text-xs font-semibold" :class="notification.colorClass"
                            v-text="notification.timeAgo"></span>
                    </div>
                </li>
            </ul>

            <!-- Footer with "Read All Notifications" button -->
            <div class=" py-2 mt-4">
                <button class="bg-green-600 text-white w-full px-4 py-2 rounded-md">Read All Notifications</button>
            </div>

        </div>
    </div>

</template>