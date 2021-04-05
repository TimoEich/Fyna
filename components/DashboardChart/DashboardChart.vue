<template>
    <div class="p-4 bg-white rounded-3xl shadow-fyna">
        <div class="flex flex-col">
            <div class="flex items-center justify-center">
                <p class="text-3xl font-black">CHART</p>
            </div>
            <div class="flex flex-row justify-between">
                <div class="text-left">
                    <p class="font-bold text-indigo-600 uppercase">
                        {{ content.investment.title }}
                    </p>
                    <p class="text-xl font-semibold">
                        {{ content.investment.value }}
                    </p>
                </div>
                <div class="text-center">
                    <p class="font-bold text-indigo-600 uppercase">
                        {{ content.profit.title }}
                    </p>
                    <p class="text-xl font-semibold text-green-500">
                        {{ content.profit.value }}
                    </p>
                </div>
                <div class="text-right">
                    <p class="font-bold text-indigo-600 uppercase">
                        {{ content.dividend.title }}
                    </p>
                    <p class="text-xl font-semibold text-green-500">
                        {{ content.dividend.value }}
                    </p>
                </div>
            </div>
            <div @click="dropdown" class="flex justify-center my-4 md:hidden">
                <img src="/img/dropdown-arrow-down.svg" alt="" />
            </div>
            <div
                id="lineChart"
                class="items-center justify-center hidden md:flex"
            >
                <div class="flex items-center justify-center">
                    <p class="text-3xl font-black">LINE CHART</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["content"],
    methods: {
        dropdown: function () {
            $("#lineChart").slideToggle({
                start: function () {
                    $(this).css("display", "flex");
                },
            });
        },
    },
};
</script>

<style>
.test {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>