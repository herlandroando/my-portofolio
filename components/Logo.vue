<template>
    <NuxtLink to="/" @click="handleClickLogo">
        <h1 class="font-extrabold md:text-3xl text-2xl text-primary">HT<span class="animate-underscore">_</span></h1>
    </NuxtLink>
</template>

<script setup lang="ts">

function handleClickLogo(){
    window.scrollTo(0, 0);
}
</script>

<style>
.animate-underscore {
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {

    0% {
        opacity: 0;
        transform: scale(1);
    }

    10% {
        opacity: 1;
        transform: scale(2);
    }

    30% {
        opacity: 0.5;
        transform: scale(2);
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}
</style>