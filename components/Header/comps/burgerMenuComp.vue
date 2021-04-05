<template>
    <div
        class="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer Burger-Menu-Shadow"
        v-on:click="burgerMenuRotate"
    >
        <div
            class="h-1 my-0.5 transition bg-gray-900 rounded-lg w-9"
            id="stroke1"
        ></div>
        <div
            class="h-1 my-0.5 transition bg-gray-900 rounded-lg w-9"
            id="stroke2"
        ></div>
        <div
            class="h-1 my-0.5 transition bg-gray-900 rounded-lg w-9"
            id="stroke3"
        ></div>
    </div>
</template>

<style>
.Burger-Menu-Shadow {
    --tw-shadow: 0 0px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 0px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.change1 {
    --tw-translate-y: 3px;
}

.change2 {
    --tw-translate-y: -5px;
}
</style>

<script>
export default {
    methods: {
        burgerMenuRotate: function () {
            $("#stroke1").toggleClass("transform -rotate-45 change1");
            $("#stroke2").toggleClass("hidden");
            $("#stroke3").toggleClass("transform rotate-45 change2");
        },
    },
};
</script>

