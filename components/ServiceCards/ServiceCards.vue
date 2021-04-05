<template>
    <div
        class="flex flex-col items-center mx-10 my-20 lg:my-48 lg:flex-row lg:justify-between justify-items-center"
    >
        <ServiceCardsSingleServiceCard :content="ServiceCard1" />
        <ServiceCardsSingleServiceCard :content="ServiceCard2" />
        <ServiceCardsSingleServiceCard :content="ServiceCard3" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            ServiceCard1: {
                title: "Übersichtlich und Verständlich",
                paragraph:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
                logo: "/img/brain.svg",
            },

            ServiceCard2: {
                title: "Gestalte dein Depot Effektiver",
                paragraph:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
                logo: "/img/chart.svg",
            },

            ServiceCard3: {
                title: "Woher kommt und wohin geht dein Geld",
                paragraph:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
                logo: "/img/cash.svg",
            },
        };
    },
};
</script>