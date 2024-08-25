
<script setup>


import DefaultLayout from '../layouts/DefaultLayout.vue';
import SearchPage from '@/components/Search/SearchPage.vue';
import MapPage from '@/components/Map/MapPage.vue';

</script>


<template>

    <DefaultLayout>
        <div class="flex justify-center">
            <SearchPage/>
        </div>
        <MapPage/>
    </DefaultLayout>
</template>