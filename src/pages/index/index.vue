<template>
  <view class="index">
    <custom-navbar></custom-navbar>
    <Swiper :list="bannerList"></Swiper>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import Swiper from './components/Swiper.vue'

import type { BannerItem } from '@/types/home'
import { getHomeBannerAPI } from '@/api/home'
import { onLoad } from '@dcloudio/uni-app'
import bannerMock from '@/mock/banner.json'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
// const getHomeBannerData = async () => {
//   const res = await getHomeBannerAPI()
//   bannerList.value = res.result
// }
onLoad(() => {
  bannerList.value = bannerMock.data
})
</script>
<style lang="scss">
//
</style>
