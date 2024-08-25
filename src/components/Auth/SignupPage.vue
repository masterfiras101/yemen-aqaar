<script setup>


</script>

<template>
  <!-- Start Header Section With Login Form -->
  <section id="signup_page" class="  dark:border-strokedark dark:bg-slate-900 ">


          <div class="mx-auto max-w-4xl mb-20 relative  isolate px-6  lg:px-14   sm:py-48 lg:py-20">

        <div
          class="flex w-full max-w-sm justify-center  overflow-hidden rounded-lg  dark:bg-slate-900 lg:max-w-4xl">



          <div class="w-full px-6 py-8 md:px-8 lg:w-1/2 ">

           
         
            <h1 class="text-xl font-extrabold text-center lg:text-2xl 2xl:text-2xl">
                   قم بإنشاء حساب في منصة
              <span
                class="text-transparent bg-gradient-to-tr bg-clip-text  from-green-500 dark:from-green-300 dark:via-green-300 dark:to-green-500">
                يمن <span
                  class="text-transparent bg-gradient-to-tr bg-clip-text from-green-500 dark:from-green-300 dark:via-green-300 dark:to-green-500">عقار</span>
             
              </span>

            </h1>

            <p class="mt-3 text-1xl text-center text-gray-600 dark:text-gray-200">
              من فضلك قم بادخل البيانات المطلوبة     </p>
        

            <div class="flex items-center justify-between mt-4">
              <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

                <div class=" mt-5">
              <label class="flex justify-center mb-2  font-bold text-gray-600 dark:text-gray-200"
                for="LoginCode">اسم المستخدم </label>
              <div class=" flex items-center">

                <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="#14B16F" viewBox="0 0 24 24" stroke="#14B16F" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>

                <input type="text"
                  class="block w-full py-3 text-center text-gray-700 bg-white border-none rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-green-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="ادخل  اسم المستخدم هنا">
              </div>
            </div>
                        <div class=" mt-5">
              <label class="flex justify-center mb-2  font-bold text-gray-600 dark:text-gray-200"
                for="LoginCode">البريد الإلكتروني</label>
              <div class=" flex items-center">

                <span class="absolute">
                 
            <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#14B16F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#14B16F" stroke-width="2" stroke-linecap="round"/>
            </svg>
                </span>

                <input type="text"
                  class="block w-full py-3 text-center text-gray-700 bg-white border-none rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="ادخل البريد الإلكتروني هنا">
              </div>
            </div>
            <div class="">
              <label class="flex justify-center mb-2  font-bold text-gray-600 dark:text-gray-200"
                for="LoginCode"> كلمة المرور</label>
              <div class=" flex items-center">

                <span class="absolute">
                  <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                            fill="#14B16F" />
                    <path
                            d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                            fill="#FFFFFF" />
                    <path
                            d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                            fill="#14B16F" />
                    </svg>
                </span>

                <input type="password"
                  class="block w-full py-3 text-center text-gray-700 bg-white border-none rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="ادخل كلمة المرور هنا">
              </div>
            </div>
               <div class="">
              <label class="flex justify-center mb-2  font-bold text-gray-600 dark:text-gray-200"
                for="LoginCode"> تأكيد كلمة المرور </label>
              <div class=" flex items-center">

                  <input type="password"
                  class="block w-full py-3 text-center text-gray-700 bg-white border-none rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="تأكيد كلمة المرور هنا">
                  <span class="absolute">

                    <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                            fill="#14B16F" />
                    <path
                            d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                            fill="#FFFFFF" />
                    <path
                            d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                            fill="#14B16F" />
                    </svg>
                  </span>
              </div>
            </div>



            <div
              class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border border-green-500 hover:border-white rounded-lg dark:border-green-500 dark:text-green-200 hover:bg-green-500 hover:text-white dark:hover:bg-green-600">
              <router-link to="" class="w-5/6 px-4 py-3 font-bold text-center">
                تسجيل
              </router-link>

            </div>
              <div class="flex flex-col items-center justify-center mt-4">
       

              <a href="#" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"></a>
              <router-link to="/login" class="w-5/6 px-4 py-3  font-bold text-center">
              لدي حساب
            </router-link>

              <!-- <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> -->
            </div>
           
          </div>
        </div>

      </div>
  </section>
  <!-- End Header Section -->



</template>

