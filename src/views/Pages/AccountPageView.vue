

<script setup>

 import MapPage from '@/components/Map/MapPage.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
 import AccountPage from '@/components/Account/AccountPage.vue';
</script>


<template>

    <DefaultLayout>
        <AccountPage/>
        <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <!-- <MapPage/> -->
        </div>
    </DefaultLayout>
</template>