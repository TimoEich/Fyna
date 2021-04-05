<template>
    <div
        class="flex flex-col items-center justify-center bg-white shadow-fyna my-7 w-60 h-80 rounded-3xl"
    >
        <img v-bind:src="content.logo" alt="" />
        <p class="my-5 text-xl font-semibold text-center">
            {{ content.title }}
        </p>
        <p class="text-center">
            {{ content.paragraph }}
        </p>
    </div>
</template>

<script>
export default {
    props: ["content"],
};
</script>