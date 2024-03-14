<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue"

const layouts = {
  main : MainLayout
}

const route = useRoute()
const metaLayout = computed( () => route.meta.layout )

</script>

<template>

    <component :is="layouts[metaLayout]" v-if="metaLayout" />

</template>

