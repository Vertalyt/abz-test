
<template>
  <div class="mx-auto">
    <HeaderBanner>
        <HeadPromo />
    </HeaderBanner>

  </div>
</template>


<script setup>
import HeaderBanner from './HeaderBanner.vue';
import HeadPromo from './HeadPromo.vue';

defineEmits({});
defineProps({})
</script>

<script>
export default {
  name: 'HeaderItem',
}
</script>
