
<template>
  <div class="flex flex-col  items-center gap-3">
   <h1 class="text-2xl sm:text-4xl font-semibold text-white">
    Test assignment for front-end developer
   </h1>
   <p class="text-xs sm:text-base text-white">
    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
   </p>

   <ButtonItem 
   text="Sign Up"
   />

  </div>
</template>


<script setup>
import ButtonItem from './el/ButtonItem.vue';


</script>

<script>
export default {
  name: 'HeadPromo',
}
</script>

