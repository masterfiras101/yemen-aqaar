<template>
    <section class="container px-4 mx-auto">
        <div class="sm:flex grid grid-cols-4 sm:items-center sm:justify-center">

            <div class="col-start-1 col-end-4 ">
                <div class="flex justify-center gap-x-3">

                    <span
                        class="px-3 rounded-lg font-medium border bg-white dark:bg-gray-900 text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">40
                    </span>عدد
                    <h2 class="text-lg font-medium text-gray-800  dark:text-white">المستخدمين</h2>
                </div>
                <!--
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">T
            months.</p>
                    -->
            </div>
            <!--
                <div class=" col-start-1 col-end-4  m-1">
                    <div class="flex justify-center gap-x-3">
    
                        <span
                            class="px-3  rounded-lg font-medium border bg-white dark:bg-gray-900 text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2
                        </span>عدد
                        <h2 class="text-lg font-medium text-gray-800  dark:text-white">المستخدمين</h2>
                    </div>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">T
            months.</p>
        </div>
        <div class="col-start-1 col-end-4">
            <div class="flex justify-center gap-x-3">

                <span
                    class="px-3  rounded-lg font-medium border bg-white dark:bg-gray-900 text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">240
                </span>عدد
                <h2 class="text-lg font-medium text-gray-800  dark:text-white">المستتخدمين</h2>
            </div>
                    -->
                <!--
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">T
            months.</p>
        </div>
                    -->


        </div>

        <div class="mt-6 md:flex md:items-center md:justify-between">
            <div
                class="inline-flex overflow-hidden bg-white dark:bg-gray-900 border divide-x rounded-lg  rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                <button
                    class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                    الكل
                </button>

                <button
                    class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    المحظورين
                </button>

                <button
                    class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    عليهم بلاغ
                </button>
            </div>
            <div class="relative flex items-center mt-4 md:mt-0">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>

                <input type="text" placeholder="Search"
                    class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="flex items-center mt-4 gap-x-2  flex-col">
               
                <button
                    class="flex    items-center justify-center  px-7 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span>اضافة مستخدم</span>
                </button>
            </div>


        </div>
                <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-12">
                <div
                    class="inline-block bg-white border border-stroke lg:ml-80  xl:ml-100  px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-2 py-2 align-middle md:px-6 lg:px-1">
                    <div class="overflow-hidden   md:rounded-lg">
                        <table class="">
                            <thead v-for="usr in users_data_table_headers " :key="id" class="">
                                <tr class="bg-gray-2 text-left dark:bg-meta-4">

                                    <th scope="col"
                                        class=" text-center pl-8 px-10 py-3.5 text-sm font-normal min-w-[100px]   text-black dark:text-white xl:pl-12">
                                        {{ usr.user_actions }}

                                    </th>


                                    <th scope="col"
                                        class=" px-8 text-center text-sm min-w-[90px] font-medium text-black dark:text-white">
                                         {{usr.user_image}}

                                    </th>


                                    <th scope="col"
                                        class="  px-4  text-sm min-w[90px] text-center  font-medium text-black dark:text-white">
                                         {{usr.user_type}}

                                    </th>
                                    <th scope="col"
                                        class="  px-4  text-sm min-w[90px] text-center  font-medium text-black dark:text-white">
                                        {{usr.user_phone}}

                                    </th>
                                    <th scope="col"
                                        class=" gap-x-2  text-sm min-w[90px] text-center  font-medium text-black dark:text-white">
                                        {{usr.user_email}}
                                    </th>
                                    <th scope="col"
                                        class="px-4 pl-10 text-sm min-w[80px] text-center  font-medium text-black dark:text-white">
                                        <button class="flex items-center gap-x-3 focus:outline-none">
                                            <span>{{ usr.user_name }}</span>

                                            
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-for="user in users" :key="user.id"  class=" ">
                                <tr>


                                    <td class="py-5 px-4 pl-10 lg:pl-12 font-medium text-black dark:text-white">
                                        <div class="flex items-center space-x-3.5">
                                            <RouterLink :to="{path: `/admin/users/users-edit/`+user.user_id}">

                                                <button class="hover:text-primary">
                                                    <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                                        fill="" />
                                                    <path
                                                        d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                                        fill="" />
                                                </svg>
                                                <!-- /admin/users/users-edit -->
                                            </button>
                                                </RouterLink>

                                            <button class="hover:text-primary">
                                                <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                                                        fill="" />
                                                    <path
                                                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                                                        fill="" />
                                                    <path
                                                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                                                        fill="" />
                                                    <path
                                                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                                                        fill="" />
                                                </svg>
                                                
                                            </button>


                                        </div>
                                    </td>
                                    <td
                                        class="px-1 py-4 text-sm font-medium text-black dark:text-white whitespace-nowrap">
                                        <div v-if="user.filename"
                                            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 dark:bg-gray-800">
                                            <!-- {{user.images.filename}} -->
                                            <!-- <img class="w-30"  :src="'http://192.168.0.162:8000/Images/${user.filename}'" :alt="user.filename"/> -->
                                            <img class="w-10 h-10" :src="`${url}/Images/${user.filename}`" :alt="user.filename" @error="user.filename = null" />


                                        </div>
                                    </td>
                                    <td
                                        class="px-1 py-4 text-sm font-medium text-black dark:text-white whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            {{user.phone}}
                                        </div>
                                    </td>
                                    <td
                                        class="px-8 py-4 text-sm font-medium text-black dark:text-white whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            {{user.type}}
                                        </div>

                                    </td>
                                    <td
                                        class="px-1 py-4 text-sm font-medium text-black dark:text-white whitespace-nowrap">
                                        <div>

                                            <p class="text-gray-500 dark:text-gray-400">{{user.email}}</p>
                                        </div>
                                    </td>

                                    <td
                                        class="px-4 py-4 text-sm font-medium text-black dark:text-white whitespace-nowrap">

                                        <div>

                                            <p class="text-sm font-bold ">
                                                {{user.username}}</p>

                                            <!--
                                                    <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                                        catalogapp.io</p>
                                                    -->
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

       <div class="mt-6 flex-col sm:flex sm:items-center sm:justify-center ">


            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                <a href="#"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        السابق
                    </span>
                </a>

                <a href="#"
                    class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        التالي
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
            <div class="text-sm justify-center mt-5 flex text-gray-500 dark:text-gray-400">
                <span class="font-medium text-gray-700 dark:text-gray-100">
                    الصفحات
                </span> 
            </div>
        </div>
    </section>
</template>

<script setup>

import axios from 'axios'

import { ref, onMounted } from 'vue';

import users_data from '@/data/UsersData.json'
const  users_data_table_headers = ref(users_data)

const url = "http://192.168.0.162:8000";
const users = ref([]);



async function getUsers() {
try {
    const res = await axios.get(`${url}/api/get_user`);
    users.value = res.data.data;
    console.log(res.data)
} catch (error) {
    console.log('Error fetching users:', error);
}
}
onMounted(getUsers);

</script>



