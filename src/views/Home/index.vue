<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HomeCategory from '@/views/Home/components/HomeCate.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import homeProduct from '@/views/Home/components/HomeProduct.vue'
import HomePanel from '@/views/Home/components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct /> 
  <HomePanel title="新鲜好物" sub-tiele="新鲜好物 好多商品">
    <div>
      新鲜好物的插槽
    </div>
  </HomePanel>
  <HomePanel title="人气推荐" sub-tiele="人气推荐 好多商品">
    <div>
      人去推荐的插槽
    </div>
  </HomePanel>
</template>