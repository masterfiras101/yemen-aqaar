

<script setup>
import { useSidebarStore } from '@/stores/sidebar'


const { toggleSidebar } = useSidebarStore()
const sidebarStore = useSidebarStore()


import DarkModeSwitcher from './DarkModeSwitcher.vue';




</script>

<template>
  <header class="fixed  bottom-0  z-99 bg-white dark:border-strokedark dark:bg-slate-900 lg:top-0 lg:sticky   flex w-full ">
    <div class="flex flex-grow items-center justify-between lg:justify-center lg:gap-x-10 py-4 px-4 shadow-2 md:px-6 2xl:px-11">



<!--           
           <div class="items-center justify-between">
            <i class="font-extr">
              e
            </i>
          </div>
          <div class="items-center justify-between">
            <l class="font-bold text-black dark:text-white">
              إضافة
            </l>
            <l class="font-bold m-2 text-black dark:text-white">
              إضافة
            </l>
             <l class=" font-bold m-2 text-black dark:text-white">

              إضافة
            </l>
          </div> -->

          <!-- <AssetsCustomDropdown/> -->
<div class="">
   <router-link class="" to="/admin">
            <!--logo icon when responsive with phone-->
            <div class="block items-center justify-center ">

                <button
                       class="flex pl-3">
                       <img src="@/assets/imgs/svg/ic_services.svg" alt=""/>
   
                    </button>
                    <account-text class="text-sm">الإعدادات</account-text>
            </div>
            </router-link>
      </div>


      <div class="">
   <router-link class="" to="/chats-page">
            <!--logo icon when responsive with phone-->
            <div class="block items-center justify-center">

                <button
                       class="flex pl-3">
                       <img src="@/assets/imgs/svg/ic_chats.svg" alt=""/>
   
                    </button>
                    <account-text class="text-sm">المحادثات</account-text>
            </div>
            </router-link>
      </div>

      <div class="">
   <router-link class="" to="/real-estate-create">
            <!--logo icon when responsive with phone-->
            <div class="block items-center justify-center">

                <button
                       class="flex pl-2">
                       <img class="" style="" src="@/assets/imgs/svg/ic_add_real_estate.svg" alt=""/>
   
                    </button>
                    <account-text class="">إضافة</account-text>
            </div>
            </router-link>
      </div>

      <div class="">
   <router-link class="" to="/search-page">
            <!--logo icon when responsive with phone-->
            <div class="block items-center justify-center ">

                <button
                       class="flex pl-1">
                       <img src="@/assets/imgs/svg/ic_search_map.svg" alt=""/>
   
                    </button>
                    <account-text class="">بحث</account-text>
            </div>
            </router-link>
      </div>

      <div class="">
   <router-link class="" to="/login">
            <!--logo icon when responsive with phone-->
            <div class="block items-center justify-center ">

                <button
                       class="flex pl-3 pr-3" >
                       <img  src="@/assets/imgs/svg/ic_account.svg" alt=""/>
   
                    </button>
                    <account-text class="">حسابي</account-text>
            </div>
            </router-link>
      </div>
      
      
      <div class="hidden lg:flex lg:justify-end">
        <DarkModeSwitcher/>
      </div>
    </div>
  </header>
</template>



