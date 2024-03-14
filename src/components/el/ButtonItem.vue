
<template>
  <button
  :type="isType"
  :class="styleBtn"
  :disabled="computedDisable === true"
  @click="emit('on-click')"
  >
   {{ text }}
  </button>

</template>


<script setup>
import { computed } from 'vue';

const emit = defineEmits({
  'on-click': null,
});
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  isDisabled: {
    type: Boolean,
    required: false,
  },
  isType: {
    type: String,
    required: false,
    default: 'button'
  }
})

const computedDisable = computed( () => props.isDisabled )
const styleBtn = computed(() => {
  const isColorDisable = computedDisable.value === true ? 'bg-gray-300 hover:bg-gray-300' : 'bg-yellow-300 hover:bg-yellow-400'
  return ['border rounded-2xl px-5 py-1 text-xs sm:text-base font-semibold text-gray-700', isColorDisable]
})


</script>

<script>
export default {
  name: 'ButtonItem',
}
</script>

