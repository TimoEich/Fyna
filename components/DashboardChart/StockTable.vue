<template>
    <div class="flex flex-row h-14">
        <div class="flex items-center flex-shrink-0 w-16">
            <img src="~static/img/visa.png" alt="LOGO" class="w-10 h-10" />
        </div>
        <div class="flex flex-col justify-center flex-shrink-0 w-32">
            <p class="text-base font-bold">
                {{ content.stockInfo.Name }}
            </p>
            <p class="text-xs font-semibold">
                {{ content.stockInfo.ISIN }} -
                {{ content.stockInfo.Type }}
            </p>
        </div>
        <div class="flex flex-col justify-center flex-shrink-0 w-28">
            <p class="text-base font-bold">
                {{ content.stockInvest.Combined }}
            </p>
            <p class="text-xs font-semibold">
                {{ content.stockInvest.Single }}
            </p>
        </div>
        <div class="flex flex-col justify-center flex-shrink-0 w-14">
            <p class="text-base font-normal">
                {{ content.stockShares.Quantity }}
            </p>
        </div>
        <div class="flex flex-col justify-center flex-shrink-0 w-28">
            <p class="text-base font-bold">
                {{ content.stockWorth.Combined }}
            </p>
            <p class="text-xs font-semibold">
                {{ content.stockWorth.Single }}
            </p>
        </div>
        <div class="flex flex-col justify-center flex-shrink-0 w-28">
            <p class="text-base font-bold text-green-500">
                {{ content.stockGain.Currency }}
            </p>
            <p class="text-xs font-semibold text-green-500">
                {{ content.stockGain.Percentage }}
            </p>
        </div>
        <div class="flex flex-col justify-center flex-shrink-0 w-10">
            <p class="text-base font-normal">
                {{ content.depotPercentage }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["content"],
};
</script>