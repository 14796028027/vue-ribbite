<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue'

import { useCategoryStore } from '@/stores/category';

const CategoryStore = useCategoryStore()

onMounted(() => CategoryStore.getCategory())


</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <RouterView />
  <LayoutFooter />
</template>