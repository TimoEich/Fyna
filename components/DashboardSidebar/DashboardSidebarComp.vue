<template>
    <div>
        <aside
            id="sideBar"
            class="absolute top-0 left-0 z-50 hidden h-screen py-10 bg-indigo-600 shadow-fyna w-72 rounded-tr-3xl rounded-br-3xl"
        >
            <div class="pl-6">
                <div class="flex flex-row items-center pb-10">
                    <img src="~assets/LogoWhite.svg" alt="" class="h-12" />
                    <p class="ml-2 text-3xl font-bold uppercase">fyna.</p>
                </div>
                <div class="text-xl text-white">
                    <ul>
                        <DashboardNaviEntry
                            @dashboard-entry-click="activateEntry"
                            v-for="entry in naviEntries"
                            v-bind:key="entry.icon"
                            v-bind:content="entry"
                        />
                    </ul>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
import DashboardNaviEntry from "./DashboardNaviEntry.vue";
export default {
    components: { DashboardNaviEntry },
    methods: {
        sideBar: function () {
            $("#sideBar").animate({ width: "toggle" });
        },
        activateEntry: function (data, id) {
            /*let entry = this.naviEntries.filter((entry) => entry.id == id);
            console.log(entry);
            entry[0].active = true;*/
            this.naviEntries.forEach(
                (entry) => (entry.active = entry.id == id)
            );
        },
    },
    data() {
        return {
            naviEntries: [
                {
                    title: "Dashboard",
                    icon: "/img/Dashboard/Dashboard.svg",
                    active: true,
                    id: 1,
                },
                {
                    title: "Wertpapiere",
                    icon: "/img/Dashboard/Wertpapiere.svg",
                    active: false,
                    id: 2,
                },
                {
                    title: "Dividende",
                    icon: "/img/Dashboard/Dividende.svg",
                    active: false,
                    id: 3,
                },
                {
                    title: "Trades",
                    icon: "/img/Dashboard/Trades.svg",
                    active: false,
                    id: 4,
                },
            ],
        };
    },
};
</script>