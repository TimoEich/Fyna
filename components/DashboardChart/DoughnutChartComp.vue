<template>
    <div class="relative z-0 small">
        <Doughnut-chart :chart-data="datacollection"></Doughnut-chart>
    </div>
</template>

<script>
import DoughnutChart from "./DoughnutChart.js";

export default {
    components: {
        DoughnutChart,
    },
    data() {
        return {
            datacollection: null,
        };
    },
    mounted() {
        this.fillData();
    },
    methods: {
        fillData() {
            this.options = {
                maintainAspectRatio: false,
            };
            this.datacollection = {
                datasets: [
                    {
                        /* percentageInnerCutout: 70,
                        percentageCutout: 70,
                        Cutout: 70, */
                        backgroundColor: [
                            "#6D28D9",
                            "#EF4444",
                            "#FBBF24",
                            "#10b981",
                        ],
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                        ],
                    },
                ],
            };
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        },
    },
};
</script>

<style>
.small {
    width: 18rem;
    height: 18rem;
}
</style>
