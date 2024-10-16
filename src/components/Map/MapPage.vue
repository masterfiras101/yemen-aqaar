<template>
  <div class="map-container h-screen">
    <div v-html="googleMap"></div>
    <div class="flex justify-center mt-12 ">
      <button @click="getLocation" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">تحديد موقعي</button>

    </div>
    
    <!-- شعار ونافذة توضيحية -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
        <h2 class="text-xl font-semibold mb-4">تفعيل الموقع</h2>
        <p class="mb-4 text-gray-600">نحتاج إلى إذنك لتحديد موقعك وعرض الخريطة حسب موقعك الجغرافي.</p>
        <button @click="closeModal" class="bg-red text-white py-2 px-10 mr-2 rounded hover:bg-red-600">إلغاء</button>
        <button @click="getLocation" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2">تفعيل الموقع</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const latitude = ref(15.3976832);  // خط العرض الافتراضي
const longitude = ref(44.1516032); // خط الطول الافتراضي
const showModal = ref(true);       // التحكم في إظهار أو إخفاء النافذة المنبثقة

const googleMap = ref(`
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d123091.46706496697!2d${longitude.value}!3d${latitude.value}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1729028961599!5m2!1sar!2s" 
    width="600" height="450" style="border:0;" 
    allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
`);

const getLocation = () => {
  showModal.value = false; // إخفاء النافذة عند طلب الموقع
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      updateMap();
    }, error => {
      if (error.code === error.PERMISSION_DENIED) {
        alert('تم رفض إذن الوصول إلى الموقع. الرجاء السماح بالوصول إلى موقعك من إعدادات المتصفح.');
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        alert('الموقع غير متوفر. الرجاء التحقق من إعدادات جهازك.');
      } else if (error.code === error.TIMEOUT) {
        alert('انتهت المهلة دون تحديد الموقع. الرجاء المحاولة مرة أخرى.');
      } else {
        alert('لم يتم تحديد الموقع. الرجاء التحقق من إذن الوصول إلى الموقع.');
      }
    });
  } else {
    alert('ميزة تحديد الموقع غير مدعومة في هذا المتصفح.');
  }
};


const updateMap = () => {
  googleMap.value = `
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d123091.46706496697!2d${longitude.value}!3d${latitude.value}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1729028961599!5m2!1sar!2s" 
      width="600" height="450" style="border:0;" 
      allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
};

const closeModal = () => {
  showModal.value = false; // إغلاق النافذة بدون تفعيل الموقع
};
</script>

