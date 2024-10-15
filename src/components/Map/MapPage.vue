<script setup>
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet"
import {ref} from "vue";

import arcades from "@/data/arcades.json"

let zoom = ref(6)
let center = ref([38, 139.69])


</script>

<template>
  s
  <main class="w-50">
    <l-map v-model:zoom="zoom" v-model:center="center">
      <l-tile-layer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    layer-type="base"
                    name="Stadia Maps"
                    attribution='&copy; 
      <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      >
      </l-tile-layer>
        <l-marker v-for="arcade in arcades.features.slice(0,10)" :lat-lng="arcade.geometry.coordinates.reverse()">
      </l-marker>
      <l-marker v-for="arcade in arcades.features.slice(0,10)" :lat-lng="arcade.geometry.coordinates.reverse()"></l-marker>

    </l-map>
  </main>
</template>

<style scoped >


</style>