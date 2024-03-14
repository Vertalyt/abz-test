<template>
  <div class="w-full bg-white font-mono text-base">
    <div class="flex justify-between items-center max-w-[1024px] mx-auto">
      <div class="flex gap-1 items-center pl-5 md:pl-16 xl:px-0">
        <LogoItems /> 
        <h1 class="text-base font-semibold text-gray-700 uppercase ">TestTask</h1>
      </div>

      <div class="flex gap-3 py-3 px-2 sm:px-4 md:px-10 lg:pl-6 lg:pr-16 xl:px-0">
        <ButtonItem text="Users" @on-click="console.log('click')" />
        <ButtonItem text="Sign Up" @on-click="console.log('click')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonItem from '@/components/el/ButtonItem.vue'
import LogoItems from '@/assets/img/LogoItems.vue'

defineEmits({})
defineProps({})
</script>

<script>
export default {
  name: 'MenuItem'
}
</script>
