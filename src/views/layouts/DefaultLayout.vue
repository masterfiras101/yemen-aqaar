<script setup>

import DefaultHeader from '/src/components/Header/DefaultHeader.vue';
</script>


<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex  h-screen overflow-hidden">
    <!-- ===== Sidebar End ===== -->
    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col   overflow-y-auto overflow-x-hidden">
      
      <!-- ===== Header Start ===== -->
      <DefaultHeader/>
      <!-- ===== Header End ===== -->
      
      <!-- ===== Main Content Start ===== -->
      <main>
        <div  class="mx-auto dark:bg-slate-500  min-h-screen max-w-screen-2xl p-6 md:p-5 2xl:p-10">
          <slot></slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
      
    <!-- <AssetsSidebar/> -->
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>