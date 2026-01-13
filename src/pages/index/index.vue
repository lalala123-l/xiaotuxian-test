<template>
  <view class="index">
    <custom-navbar></custom-navbar>
    <Swiper :list="bannerList"></Swiper>
    <CatergoryPanel :list="categoryList"></CatergoryPanel>
    <HotPanel :list="hotList" />
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import Swiper from './components/Swiper.vue'

import type { BannerItem, ClassifyItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import bannerMock from '@/mock/banner.json'
import CatergoryPanel from './components/CatergoryPanel.vue'
import { getClassifListyAPI, getHomeHotAPI } from '@/api/home'
import HotPanel from './components/HotPanel.vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<ClassifyItem[]>([])

const getClassifLisfy = async () => {
  const res = await getClassifListyAPI()
  if (res.code == 1) {
    categoryList.value = res.result
  }
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  bannerList.value = bannerMock.data
  getClassifLisfy()
})
</script>
<style lang="scss">
//
</style>
