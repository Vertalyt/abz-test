
<template>

    <MenuItem />

  <div 
  class="w-full bg-gray-100 font-mono text-base"
  >
    <RouterView />
  </div>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue';


</script>

<script>
export default {
  name: 'MainLayout',
}
</script>
