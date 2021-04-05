<template>
    <div
        v-bind:class="[content.active ? 'bg-indigo-900 rounded-full' : '']"
        class="mr-5"
        @click="$emit('dashboard-entry-click', $event, content.id)"
    >
        <li class="flex flex-row items-center p-2 font-semibold">
            <img v-bind:src="content.icon" alt="" class="w-8 h-6 ml-4 mr-4" />
            <nuxt-link to=""> {{ content.title }} </nuxt-link>
        </li>
    </div>
</template>

<script>
export default {
    props: ["content"],
};
</script>