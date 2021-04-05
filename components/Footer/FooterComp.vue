<template>
    <div class="bg-indigo-600">
        <div
            class="flex flex-col items-center justify-center py-10 lg:w-1024 lg:mx-auto lg:flex-row lg:justify-between"
        >
            <div class="flex flex-col items-center">
                <div class="flex flex-row items-center pb-4">
                    <img src="~assets/LogoWhite.svg" alt="" class="h-14" />
                    <p class="ml-2 text-4xl font-bold uppercase">fyna.</p>
                </div>
                <div class="w-80">
                    <p class="text-xl text-center text-white">
                        Bleib auf dem neusten Stand wenn wir neue Informationen,
                        Anleitungen oder Blog Post publizieren.
                    </p>
                </div>
                <div class="flex flex-col">
                    <input
                        type="email"
                        name=""
                        id=""
                        class="w-64 mt-10 mb-4 text-center rounded-full sm:w-72"
                        placeholder="E-Mail"
                    />
                    <button
                        class="w-64 mb-10 font-semibold text-white bg-gray-900 rounded-full h-11 sm:w-72"
                    >
                        Anmelden
                    </button>
                </div>
            </div>
            <div
                class="flex flex-row justify-between w-64 text-xl font-semibold"
            >
                <div>
                    <p class="pb-4">Kontakt</p>
                    <p class="pb-4">Impressum</p>
                    <p class="pb-4">Datenschutz</p>
                </div>
                <div>
                    <p class="pb-4">Registrieren</p>
                    <p class="pb-4">Live Demo</p>
                    <p class="pb-4">Blog</p>
                </div>
            </div>
            <div class="flex flex-row">
                <img src="~assets/IconGithub.svg" alt="" class="p-4" />
                <img src="~assets/IconTwitter.svg" alt="" class="p-4" />
            </div>
        </div>
    </div>
</template>