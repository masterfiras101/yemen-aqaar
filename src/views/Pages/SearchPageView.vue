
<script setup>


import DefaultLayout from '../layouts/DefaultLayout.vue';
import SearchPage from '@/components/Search/SearchPage.vue';
import MapPage from '@/components/Map/MapPage.vue';

</script>


<template>
    <DefaultLayout>
        <div class="flex h-screen w-full justify-center">
            <MapPage/>
        </div>
    </DefaultLayout>
</template>