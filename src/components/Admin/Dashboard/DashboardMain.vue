
<script setup>
import DarkModeSwitcher from '@/components/Header/DarkModeSwitcher.vue';
import { ref } from 'vue';
import BottomSheetContent from '@/components/BottomSheet/BottomSheetContent.vue';
import BottomSheetNotification from '@/components/BottomSheet/BottomSheetNotification.vue';
const bottomSheetRef = ref(null);

// Function to open the Bottom Sheet
const openBottomSheet = () => {
  bottomSheetRef.value.showBottomSheet = true; // Show Bottom Sheet
};
</script>

<template>

  <header
    class="sticky  top-0 z-99 flex w-full bg-white dark:border-strokedark dark:bg-slate-900"
  >
    <div class="flex flex-grow  items-center justify-between lg:justify-center lg:gap-x-10 py-4 px-4 shadow-2 md:px-6 2xl:px-11  ">
        <div class="lg:hidden md:hidden xl:hidden">
          <DarkModeSwitcher/>
        </div>
        <div class="">
        <router-link class="" to="/search-page">
            <!--logo icon when responsive with phone-->
            <div class="flex items-center justify-center">
              <account-text class="">لوحة التحكم</account-text>
                <button
                       class="flex pl-3 w-4 h-2 pr-3" >
                       <img  src="@/assets/imgs/svg/ic_arrow_right.svg" alt="arrow_right"/>
                    </button>
            </div>
            </router-link>
      </div>
    </div>
  </header>


  <section id="#services">
    <div class="mt-4  text-right">
        <p class="font-bold">إدارة المستتخدمين</p>
        <div class="block p-4 pr-3 pl-4 lg:flex lg:justify-end lg:gap-x-3">
                 <div
              class="flex  bg-white dark:border-strokedark dark:bg-slate-900 mb-1 justify-end  lg:justify-center   text-gray-600 transition-colors duration-300 transform shadow-2 rounded-lg  dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/admin/users" class=" px-4 gap-x-2   flex py-3 font-bold">
                  <user_service_text class="">
                      المستتخدمين
                    </user_service_text>
              </router-link>

            </div>    
    
            
                     <div
              class="flex  bg-white dark:border-strokedark dark:bg-slate-900 mb-1 justify-end  lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      العملاء
                    </user_service_text>
              </router-link>
            </div>

                      <div
                class="flex  bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                    <user_service_text>
                        المحظورين
                      </user_service_text>
                </router-link>

              </div>   

        </div>
    </div>

  </section>
    <section id="#aqaar-app-manage">
    <div class="mt-2 mb-5  text-right">
        <p class="font-bold">إدارة العقارات</p>
        <div class="block p-4 lg:flex lg:justify-end lg:gap-x-3">
   
                 <div
              class="flex mb-1 justify-end bg-white dark:border-strokedark dark:bg-slate-900 lg:justify-center   text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold">
                  <user_service_text class="">
                      العقارات
                    </user_service_text>
              </router-link>

            </div>    
    
    

                     <div
              class="flex mb-1 bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      الإعلانات
                    </user_service_text>
              </router-link>

            </div>   
                       <div
              class="flex mb-1 bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      إدارة التقارير
                    </user_service_text>
              </router-link>

            </div>   

                       <div
              class="flex mb-1 bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      طلبات البحث
                    </user_service_text>
              </router-link>

            </div>   
                       <div
              class="flex mb-1 bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      إدارة الإشعارات
                    </user_service_text>
              </router-link>

            </div>   
                       <div
              class="flex mb-1 bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      إدارة وحدات العقارات
                    </user_service_text>
              </router-link>

            </div>   
                       <div
              class="flex mb-1 bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      إدارة انواع العقارات
                    </user_service_text>
              </router-link>

            </div>   
                       <div
              class="flex bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                     إدارة فئات العقارات
                    </user_service_text>
              </router-link>

            </div>   
        </div>
    </div>
  </section>
  <section id="#aqaar-app-services  ">
    <div class="mt-2 mb-30   text-right">
        <p class="font-bold ">خدمات التطبيق</p>
        <div class="block mt-5  lg:flex lg:justify-end lg:gap-x-10">
   
                 <div
              class="flex bg-white dark:border-strokedark dark:bg-slate-900 justify-end lg:justify-center   text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold">
                  <user_service_text class="">
                      إعلانات اليوم
                    </user_service_text>
              </router-link>

            </div>    
    
    

                     <div
              class="flex bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      طلبات البحث
                    </user_service_text>
              </router-link>
            </div>   
            
                  <div
              class="flex bg-white dark:border-strokedark dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            </div> 
            <div class="bg-white dark:border-strokedark rounded-lg flex dark:bg-slate-900 lg:items-center justify-end lg:justify-center text-gray-600  dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <div class=" px-4 gap-x-2 flex py-3 font-bold text-center r"> 
                <BottomSheetNotification/>
                 
              </div>
            </div>
            <div>
            <!-- Trigger the Bottom Sheet from another button -->
            <!-- <button @click="openBottomSheet" class="py-2 px-4  bg-blue-500 text-black rounded-lg hover:bg-blue-600">
              افتح تقييم الموقع
            </button> -->

            <!-- Use the Bottom Sheet component -->
          </div>

        </div>
    </div>
  </section>


  <!-- 
    <section id="#user_services" class=" lg:block   justify-center ">
    <div class="lg:flex lg:justify-between">
            <div></div>
     <div
              class="flex items-center justify-center lg:justify-center lg:w-50  mt-4 text-gray-600 transition-colors duration-300 transform border border-green-500 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text class="text-green-500">
                      خدمة العملاء
                    </user_service_text>
                    <img class="" style="width: 30px;" src="@/assets/imgs/svg/ic_support.svg" alt="Account"/>
              
              </router-link>

            </div>
            <div
              class="flex items-center justify-center lg:justify-center lg:w-50  mt-4 text-gray-600 transition-colors duration-300 transform border border-green-500 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="/assets-dashboard" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text class="text-green-500">
                      خدمة العملاء
                    </user_service_text>
                    <img class="" style="width: 30px;" src="@/assets/imgs/svg/ic_support.svg" alt="Account"/>
              
              </router-link>

            </div>
            <div></div>
    </div>



            
            
  </section>
  -->

</template>



