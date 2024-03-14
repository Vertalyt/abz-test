
<template>
  <div class="flex flex-col p-3 m-3 gap-3 items-center justify-center bg-white rounded-xl">
    <div class="w-16 h-16">
      <img :src="date.photo" loading="lazy" :alt="`avatar ${date.name}`">
    </div>


   <h3>{{ date.name }}</h3>

   <p>{{ date.position }}</p>

   <TheTooltip 
   :content="date.email"
    :isSHow="isSHow"
   >
    <p 
    @mouseover="isSHow = true"
    @mouseleave="isSHow = false"
    >{{ date.email }}</p>
   </TheTooltip>


   <p>{{ date.phone }}</p>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import TheTooltip from '../components/el/TheTooltip.vue';

defineEmits({});
defineProps({
  date: {
    type: Object,
    required: true
  }
})

const isSHow = ref(false)

</script>

<script>
export default {
  name: 'UserCard',
}
</script>

./el/TheTooltip.vue