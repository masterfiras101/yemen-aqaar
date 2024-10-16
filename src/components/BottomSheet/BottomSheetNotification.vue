<!-- components/BottomSheet.vue -->
<template>
  <div>
    <!-- Bottom Sheet Trigger Button (Optional) -->
    <button 
      @click="showBottomSheet = true" 
      class="   text-gray-100 rounded-lg "
    >
       تقييم المنصة
    </button>

    <!-- Bottom Sheet -->
    <transition name="slide-up">
      <div v-if="showBottomSheet" class="fixed bottom-0 left-0 right-0 z-50 bg-gray-400 dark:bg-slate-950">
        <div class=" bg-gray dark:bg-slate-900 w-full pt-12 mb-15 max-w-lg mx-auto rounded-t-lg shadow-lg p-6 relative">
          <!-- Close Button -->
          <button 
            @click="showBottomSheet = false" 
            class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
             <span class="block absolute right-3 h-full w-full rotate-45">
              <span
                class="absolute left-2.5 top-0 block h-5.5 w-0.5 rounded-sm bg-white  delay-300 duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-[0]': !showBottomSheet }"
              ></span>
              <span
                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-6 rounded-sm bg-white duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-200': !showBottomSheet}"
              ></span>
             
            </span>
          </button>

          <!-- Site Description -->
          <h2 class="text-xl font-bold  mb-4">وصف المنصة</h2>
          <p class="text-gray-700 mb-6">
            هذا الموقع يهدف إلى تقديم تجربة مميزة للمستخدم من خلال خدمات مبتكرة ومحتوى تفاعلي.
          </p>

          <!-- Star Rating -->
          <div class="mb-6 flex justify-between">
              <div class="flex space-x-2">
                <template v-for="i in 5" :key="i">
                  <svg 
                    @click="setRating(i)" 
                    :class="[i <= rating ? 'text-yellow-400' : 'text-gray-400', 'cursor-pointer']" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    class="w-6 h-6"
                  >
                    <path d="M9.049 3.303a1 1 0 011.902 0l1.614 4.94a1 1 0 00.95.69h5.183a1 1 0 01.617 1.807l-4.187 3.065a1 1 0 00-.364 1.118l1.614 4.94a1 1 0 01-1.539 1.118L10 15.09l-4.187 3.065a1 1 0 01-1.539-1.118l1.614-4.94a1 1 0 00-.364-1.118L1.337 9.74a1 1 0 01.617-1.807h5.183a1 1 0 00.95-.69L9.049 3.303z" />
                  </svg>
                </template>
              </div>
              <p class="text-lg font-semibold mb-2">قيم المنصة</p>
          </div>

          <!-- Submit Rating Button -->
          <button 
            @click="submitRating" 
            class="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full"
          >
            إرسال التقييم
          </button>
        </div>
      </div>
    </transition>

    <!-- Transparent Overlay when Bottom Sheet is visible -->
    <div 
      v-if="showBottomSheet" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40" 
      @click="showBottomSheet = false"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showBottomSheet = ref(false); // State for showing/hiding the Bottom Sheet
const rating = ref(0); // Star rating state

// Function to update the star rating
const setRating = (value) => {
  rating.value = value;
};

// Function to handle rating submission
const submitRating = () => {
  alert(`تم إرسال التقييم: ${rating.value} من 5 نجوم`);
  showBottomSheet.value = false; // Close Bottom Sheet after submission
};
</script>

<style scoped>
/* Add transition for bottom sheet slide up animation */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease;

}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
}
</style>
