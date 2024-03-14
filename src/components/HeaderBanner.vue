
<template>
  <div class="relative flex justify-center items-center">
    <picture>
  <source media="(min-width: 1170px)" width="1170px" height="650px" srcset="@/assets/img/screensaver_1170.webp" alt="banner big">
  <source media="(min-width: 1025px) and (max-width: 1169px)" width="1170px" height="650px" srcset="@/assets/img/screensaver_1170.webp"  alt="banner big">
  <source media="(min-width: 769px) and (max-width: 1024px)" width="1024px" height="650px" srcset="@/assets/img/screensaver_1024.webp"  alt="banner medium">
  <source media="(min-width: 361px) and (max-width: 768px)" width="768px" height="500px"  srcset="@/assets/img/screensaver_768.webp"  alt="banner small">
  <source media="(min-width: 360px)" width="360px" height="500px"  srcset="@/assets/img/screensaver_360.webp"  alt="banner small">
  <img src="@/assets/img/screensaver_360.webp" width="360px" height="500px" alt="banner small">
  </picture>

  <!-- Псевдоэлемент для затемнения -->
  <div class="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

  <div class="absolute w-80 sm:w-96 h-full flex flex-col justify-center items-center text-center">
    <slot></slot>
  </div>


  </div>

</template>


<script setup>
defineEmits({});
defineProps({})
</script>

<script>
export default {
  name: 'HeaderBanner',
}
</script>

