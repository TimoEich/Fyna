<template>
    <div class="p-4 bg-white rounded-3xl shadow-fyna">
        <div class="flex flex-col">
            <div class="flex items-center justify-center">
                <DoughnutChartComp />
            </div>
            <div class="flex flex-row justify-between">
                <div class="text-left">
                    <p class="font-black text-indigo-600 uppercase">
                        {{ content.investment.title }}
                    </p>
                    <p class="text-xl font-semibold sm:text-2xl">
                        {{ content.investment.value }}
                    </p>
                </div>
                <div class="text-center">
                    <p class="font-black text-indigo-600 uppercase">
                        {{ content.profit.title }}
                    </p>
                    <p class="text-xl font-semibold text-green-500 sm:text-2xl">
                        {{ content.profit.value }}
                    </p>
                </div>
                <div class="text-right">
                    <p class="font-black text-indigo-600 uppercase">
                        {{ content.dividend.title }}
                    </p>
                    <p class="text-xl font-semibold text-green-500 sm:text-2xl">
                        {{ content.dividend.value }}
                    </p>
                </div>
            </div>
            <div @click="dropdown" class="flex justify-center my-4 md:hidden">
                <img
                    id="dropdownArrow"
                    src="/img/dropdown-arrow-down.svg"
                    alt=""
                    class="transition duration-500"
                />
            </div>
            <div
                id="lineChart"
                class="items-center justify-center hidden md:flex"
            >
                <div class="flex items-center justify-center">
                    <line-chart-comp />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DoughnutChartComp from "./DoughnutChartComp";
import LineChartComp from "./LineChartComp.vue";

export default {
    components: {
        DoughnutChartComp,
        LineChartComp,
    },
    props: ["content"],
    methods: {
        dropdown: function () {
            $("#lineChart").slideToggle({
                start: function () {
                    $(this).css("display", "flex");
                },
            });
            $("#dropdownArrow").toggleClass("rotate");
        },
    },
};
</script>

<style>
.rotate {
    transform: rotate(180deg);
}
</style>