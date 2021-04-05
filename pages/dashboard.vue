<template>
    <div class="px-4">
        <div @click="sideBar" class="flex justify-end py-4">
            <HeaderCompsBurgerMenuComp />
        </div>
        <DashboardSidebarComp />
        <DashboardChart :content="chartContent" />
    </div>
</template>

<script>
export default {
    methods: {
        sideBar: function () {
            $("#sideBar").animate({ width: "toggle" });
        },
    },
    data() {
        return {
            chartContent: {
                investment: {
                    title: "Investiert",
                    value: "10472,38€",
                },
                profit: {
                    title: "Gewinn",
                    value: "1472,38€",
                },
                dividend: {
                    title: "Dividende",
                    value: "472,38€",
                },
            },
        };
    },
};
</script>