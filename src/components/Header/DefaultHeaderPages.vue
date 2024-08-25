

<template>
  <header
    class="sticky top-0 z-99 flex w-full bg-white"
  >
    <div class="flex flex-grow items-center justify-end lg:justify-end lg:gap-x-10 py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div class="">
        <router-link class="" :to="searchPageRoute">
          <div class="flex items-center justify-center ">
            <account-text class="">{{ servicesText }}</account-text>
            <button class="flex pl-3 pr-3" @click="handleArrowClick">
              <img src="@/assets/imgs/svg/ic_arrow_right.svg" alt="arrow_right" />
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    searchPageRoute: {
      type: String,
      required: true
    },
    servicesText: {
      type: String,
      required: true
    },
    handleArrowClick: {
      type: Function,
      required: true
    }
  }
}
</script>