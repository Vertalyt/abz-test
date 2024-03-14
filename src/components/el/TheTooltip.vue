<template>
  <div class="relative inline-block">
    <slot></slot>
    <div
      v-if="isSHow"
      class="absolute z-10 px-2 py-1 text-white bg-gray-700 rounded-md shadow-lg"
    >
      {{ content }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  content: {
    type: String,
    required: true
  },
  isSHow: {
    type: [Boolean],
    required: true
  }
})


</script>

<script>
export default {
  name: 'TheTooltip'
}
</script>
