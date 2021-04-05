<template>
    <div class="flex items-center justify-between h-20 px-4 mx-auto">
        <div class="flex items-center">
            <img src="~assets/Logo.svg" alt="Fyna Logo" />
            <p class="ml-2 text-3xl font-bold uppercase">fyna.</p>
        </div>
        <div class="hidden md:flex">
            <ul class="flex font-semibold text-gray-600">
                <li class="mx-4">Preise</li>
                <li class="mx-4">Blog</li>
                <li class="mx-4">Community</li>
            </ul>
        </div>
        <div class="hidden md:block">
            <button
                class="w-32 text-base text-white bg-indigo-600 rounded-full h-9"
            >
                Registrieren
            </button>
            <button
                class="w-32 text-base text-indigo-500 border-2 border-indigo-500 rounded-full h-9"
            >
                <nuxt-link to="/dashboard">Login</nuxt-link>
            </button>
        </div>
        <div id="burgerMenuIcon" class="md:hidden" v-on:click="burgerMenu">
            <HeaderCompsBurgerMenuComp />
        </div>
        <div
            id="burgerMenu"
            class="absolute left-0 right-0 hidden w-11/12 ml-auto mr-auto bg-gray-900 shadow-2xl rounded-xl top-20"
        >
            <ul class="flex flex-col items-center">
                <li class="my-4 font-bold text-white uppercase">
                    <a href="#">Price</a>
                </li>
                <li class="my-4 font-bold text-white uppercase">
                    <a href="#">Blog</a>
                </li>
                <li class="my-4 font-bold text-white uppercase">
                    <a href="#">Community</a>
                </li>
            </ul>
            <div class="flex flex-col items-center">
                <button
                    class="w-3/4 mt-10 font-semibold text-white uppercase bg-indigo-600 rounded-full h-11"
                >
                    Registrieren
                </button>
                <button
                    class="w-3/4 my-4 font-semibold text-white uppercase border-2 border-indigo-600 rounded-full h-11"
                >
                    <nuxt-link to="/dashboard">Login</nuxt-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        burgerMenu: function () {
            $("#burgerMenu").slideToggle();
        },
    },
};
</script>
