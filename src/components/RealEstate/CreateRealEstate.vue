<template>
  <div v-if="showCookieBanner" class="fixed inset-0 flex items-center justify-center z-50 ">
    <div :class="['p-6 rounded-lg shadow-lg text-right max-w-lg', bgColor]">
      <p :class="[textColor]" class="mb-4">
        {{ message }}
        <a :href="learnMoreLink" class="underline" :class="[linkColor]">{{ learnMoreText }}</a>
      </p>
      <div class="flex flex-col items-end mb-4">
        <label v-for="cookie in cookies" :key="cookie.id" class="flex items-center">
            {{ cookie.name }}
            <input 
              type="checkbox" 
              v-model="cookie.accepted" 
              class="ml-2"
            />
        </label>
      </div>
      <button 
        @click="acceptCookies" 
        :class="[btnBgColor, btnTextColor, 'py-2 px-4 rounded hover:shadow-lg']"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// تعريف الخصائص (props) لإمكانية التخصيص
const props = defineProps({
  message: {
    type: String,
    default: 'يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك.'
  },
  learnMoreText: {
    type: String,
    default: 'تعرف على المزيد'
  },
  learnMoreLink: {
    type: String,
    default: '#'
  },
  buttonText: {
    type: String,
    default: 'قبول'
  },
  bgColor: {
    type: String,
    default: 'bg-white'
  },
  textColor: {
    type: String,
    default: 'text-gray-700'
  },
  linkColor: {
    type: String,
    default: 'text-blue-600'
  },
  btnBgColor: {
    type: String,
    default: 'bg-green-500'
  },
  btnTextColor: {
    type: String,
    default: 'text-white'
  }
});

// الحالة لتحديد ما إذا كانت الرسالة يجب أن تظهر
const showCookieBanner = ref(false);

// قائمة ملفات تعريف الارتباط
const cookies = ref([
  { id: 1, name: 'ملفات تعريف الارتباط الأساسية', accepted: false },
  { id: 2, name: 'ملفات تعريف الارتباط التحليلية', accepted: false },
  { id: 3, name: 'ملفات تعريف الارتباط الإعلانية', accepted: false }
]);

// دالة الموافقة
const acceptCookies = () => {
  // تخزين خيارات ملفات تعريف الارتباط
  const acceptedCookies = cookies.value.map(cookie => ({
    name: cookie.name,
    accepted: cookie.accepted
  }));
  localStorage.setItem('cookiesAccepted', JSON.stringify(acceptedCookies)); // تخزين القبول
  showCookieBanner.value = false; // إخفاء الرسالة
};

// التحقق من الموافقة عند تحميل الصفحة
onMounted(() => {
  // تحقق مما إذا كانت هناك موافقة سابقة
  const accepted = localStorage.getItem('cookiesAccepted');
  if (!accepted) {
    showCookieBanner.value = true; // عرض الرسالة إذا لم تكن هناك موافقة مسبقة
  } else {
    // يمكنك قراءة خيارات ملفات تعريف الارتباط من localStorage إذا كانت موجودة
    cookies.value = JSON.parse(accepted);
  }
});
</script>

<style scoped>
/* يمكنك إضافة أنماط مخصصة هنا إذا لزم الأمر */
</style>
