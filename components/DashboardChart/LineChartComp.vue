<template>
    <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
    </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
    components: {
        LineChart,
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
            this.datacollection = {
                datasets: [
                    {
                        backgroundColor: "#f87979",
                        fill: false,
                        tension: 0.1,
                        borderColor: "#4f46e5",
                        pointBackgroundColor: "#6366F1",
                        legende: false,
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
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
    max-width: 300px;
}
</style>
