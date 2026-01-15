<template>
  <view class="index">
    <custom-navbar />
    <scroll-view
      class="page-scroll"
      lower-threshold="50"
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      scroll-y
      @scrolltolower="onScrolltolower"
    >
      <Swiper :list="bannerList"></Swiper>
      <PanelSkeleton v-if="isLoading" />
      <template v-else>
        <CatergoryPanel :list="categoryList"></CatergoryPanel>
        <HotPanel :list="hotList" />
        <XtxGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import Swiper from '@/components/Swiper.vue'

import type { BannerItem, ClassifyItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import bannerMock from '@/mock/banner.json'
import hotListMock from '@/mock/hotList.json'
import CatergoryPanel from './components/CatergoryPanel.vue'
import { getClassifListyAPI, getHomeHotAPI } from '@/api/home'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import PanelSkeleton from './components/PanelSkeleton.vue'

const guessRef = ref<InstanceType<typeof XtxGuess>>()
// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<ClassifyItem[]>([])
const hotList = ref<HotItem[]>([])
const isTriggered = ref(false)
const isLoading = ref(true)

const getClassifLisfy = async () => {
  const res = await getClassifListyAPI()
  if (res.code == 1) {
    if (Array.isArray(res.result)) {
      const _data = res.result.map((item) => {
        if (item.icon) {
          item.icon = item.icon.replace(/^http:\/\//, 'https://')
        }
        return item
      })
      categoryList.value = _data
    }
  }
}

// const getHomeHotData = async () => {
//   const res = await getHomeHotAPI()
//   hotList.value = res.result
//   console.log('hotlist', hotList.value)
// }

const resetData = () => {
  getClassifLisfy()
  guessRef.value?.resetData()
  guessRef.value?.getMore()
  uni.stopPullDownRefresh()
}
//下拉刷新
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData()
  await Promise.all([getClassifLisfy(), guessRef.value?.getMore()])
  // 关闭动画
  isTriggered.value = false
}

const onScrolltolower = () => {
  console.log('1111')
  guessRef.value?.getMore()
}

onLoad(async () => {
  isLoading.value = true
  bannerList.value = bannerMock.data as []
  hotList.value = hotListMock.result
  // 等待分类数据加载完成后再隐藏骨架屏
  await getClassifLisfy()
  isLoading.value = false
})
</script>
<style lang="scss">
.index {
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: #fff;

  .page-scroll {
    height: calc(100vh - 32rpx);
  }
}
</style>
