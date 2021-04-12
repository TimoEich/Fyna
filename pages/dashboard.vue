<template>
    <div class="px-4">
        <div @click="sideBar" class="flex justify-end py-4">
            <HeaderCompsBurgerMenuComp />
        </div>
        <DashboardSidebarComp />
        <DashboardChart v-bind:content="chartContent" />
        <div class="flex flex-col mt-6 overflow-x-auto">
            <DashboardChartStockTable
                v-for="entry in stockEntries"
                v-bind:key="entry.stockInfo.ISIN"
                v-bind:content="entry"
            />
        </div>
        <button @click="writeData">Kappa</button>
    </div>
</template>

<script>
export default {
    mounted() {
        this.randomVuexAction();
    },

    methods: {
        async randomVuexAction() {
            const ref = this.$fire.firestore.collection("StockEntry");
            try {
                const collection = await ref.get();
                const c2 = collection.docs.map((doc) => doc.data());

                c2.forEach((element) => {
                    this.stockEntries.push(element);
                });
            } catch (e) {
                console.log(e);
            }
        },

        async writeData() {
            const ref = this.$fire.firestore
                .collection("StockEntry")
                .doc("US647392474");
            try {
                ref.set({
                    stockInfo: {
                        Name: "Visa4",
                        ISIN: "US647392474",
                        Type: "Aktie",
                    },
                    stockInvest: {
                        Combined: "1.307,56€",
                        Single: "103,45€",
                    },
                    stockShares: {
                        Quantity: "55",
                    },
                    stockWorth: {
                        Combined: "1.923,51€",
                        Single: "145,39€",
                    },
                    stockGain: {
                        Currency: "623,51€",
                        Percentage: "39,62%",
                    },
                    depotPercentage: "37%",
                }).then(function () {
                    console.log("blabla");
                    randomVuexAction();
                });
            } catch (e) {
                console.log(e);
            }
        },

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
            stockEntries: [],
        };
    },
};
</script>

<style>
</style>