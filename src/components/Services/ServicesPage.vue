
<template>
    
  <header
    class="sticky  top-0 z-99 flex w-full bg-white"
  >
    <div class="flex flex-grow  items-center justify-end lg:justify-end lg:gap-x-10 py-4 px-4 shadow-2 md:px-6 2xl:px-11">

      <div class="">
   <router-link class="" to="/search-page">
            <!--logo icon when responsive with phone-->
            <div class="flex items-center justify-center ">

                <account-text class="">الخدمات</account-text>
                <button
                       class="flex pl-3 pr-3" >
                       <img  src="@/assets/imgs/svg/ic_arrow_right.svg" alt="arrow_right"/>
   
                    </button>
            </div>
            </router-link>
      </div>
      

    </div>
  </header>

  <section id="#user_services" class=" lg:block   justify-center ">
    <div class="lg:flex lg:justify-between">
            <div></div>

     <div
              class="flex items-center justify-center lg:justify-center lg:w-50  mt-4 text-gray-600 transition-colors duration-300 transform border border-green-500 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="#" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text class="text-green-500">
                      خدمة العملاء
                    </user_service_text>
                    <img class="" style="width: 30px;" src="@/assets/imgs/svg/ic_support.svg" alt="Account"/>
                
              </router-link>

            </div>
            <div></div>
    </div>


            <div class="flex flex-row justify-between lg:justify-center lg:gap-x-5 mt-2 items-center">
                <div id="developers_services" class=" p-3 items-center justify-center lg:justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <router-link to="#" class="block   font-bold -px-4">
                        <img class="ml-3" style="width:40px;" src="@/assets/imgs/svg/ic_support.svg" alt="Account"/>
                           
                            <user_service_text class="text-title-services">
                            خدمات الطورين
                        </user_service_text>

                    </router-link>
                </div>
                <div id="selling_rental_commission" class=" p-2 pt-3 pb-3 items-center justify-center lg:justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <router-link to="#" class="block font-bold -px-7">
                          <img class="ml-5" style="width: 40px;" src="@/assets/imgs/svg/ic_support.svg" alt="Account"/>
                          
                          <user_service_text class="text-title-services">
                            عمولة البيع والتأجير
                          </user_service_text>
              </router-link>
                </div>
                <div id="subscribe" class="p-3   items-center justify-center lg:justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <router-link to="/admin/users" class="block font-bold  px-3">
                    <img class="" style="width: 40px;" src="@/assets/imgs/svg/ic_support.svg" alt="Account"/>
                  <user_service_text class="text-title-services">
                    المستخدمين
                  </user_service_text>
                  
              </router-link>
                </div>
            </div>
            
  </section>
  <section id="#services">
    <div class="mt-4  text-right">
        <p>الخدمات</p>
        <div class="block p-4 pr-3 pl-4 lg:flex lg:justify-end lg:gap-x-3">
   
                 <div
              class="flex bg-white  justify-end  lg:justify-center   text-gray-600 transition-colors duration-300 transform shadow-2 rounded-lg  dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="#" class=" px-4 gap-x-2   flex py-3 font-bold">
                  <user_service_text class="">
                      إعلانات اليوم
                    </user_service_text>
              </router-link>

            </div>    
    
            
                     <div
              class="flex bg-white justify-end  lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="#" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      عقود الإيجار
                    </user_service_text>
              </router-link>
 
            </div>

                     <div
              class="flex bg-white lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="#" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      طلبات البحث
                    </user_service_text>
              </router-link>

            </div>   

        </div>
    </div>

  </section>
  <section id="#aqaar-app">
    <div class="mt-2 mb-5  text-right">
        <p>تطبيق عقار</p>
        <div class="block p-4 lg:flex lg:justify-end lg:gap-x-3">
   
                 <div
              class="flex justify-end bg-white lg:justify-center   text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="#" class=" px-4 gap-x-2 flex py-3 font-bold">
                  <user_service_text class="">
                      إعلانات اليوم
                    </user_service_text>
              </router-link>

            </div>    
    
    

                     <div
              class="flex bg-white lg:items-center justify-end lg:justify-center text-gray-600 transition-colors duration-300 transform shadow-2  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <router-link to="#" class=" px-4 gap-x-2 flex py-3 font-bold text-center">
                  <user_service_text>
                      طلبات البحث
                    </user_service_text>
              </router-link>

            </div>   

        </div>
    </div>
      
    
  </section>
</template>

