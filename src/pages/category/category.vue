<template>
  <view class="category" v-if="isFinish">
    <view class="search-box">
      <!-- <cc-SearchBarHisView
        searchPlaceHolder="请输入产品名称、关键字"
        @hisClick="selHisClick"
        @searchClick="goSearchClick"
      ></cc-SearchBarHisView> -->
      <uni-search-bar
        @confirm="handleSearchConfirm"
        :focus="true"
        v-model="searchValue"
        @blur="handleBlur"
        @focus="handleFocus"
        cancel-button="none"
      >
      </uni-search-bar>
      <button class="search-btn" hover-class="button-hover" @click="handleButtonClick">搜索</button>
    </view>
    <!-- 历史搜索记录列表（获取焦点时显示，失去焦点/搜索后可隐藏） -->
    <view class="history-list" v-if="showHistory && searchHistoryStore.historyList.length > 0">
      <view class="history-header">
        <text>历史搜索</text>
        <text class="clear-all" @click="clearAllHistory">清空全部</text>
      </view>
      <view
        class="history-item"
        v-for="(item, index) in searchHistoryStore.historyList"
        :key="index"
      >
        <!-- 点击历史记录，回填到搜索框 -->
        <text class="history-keyword" @click="handleHistoryClick(item)">{{ item }}</text>
        <!-- 删除单条历史记录 -->
        <text class="delete-item" @click="deleteSingleHistory(index)">×</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          :class="{ active: index === activeIndex }"
          @tap="activeIndex = index"
        >
          <text class="nam e">
            {{ item.name }}
          </text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view enable-back-to-top class="secondary" scroll-y>
        <!-- 焦点图 -->
        <XtxSwiper class="banner" :list="bannerList" />
        <!-- 内容区域 -->
        <view class="panel" v-for="item in subCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <PageSkeleton v-else />
</template>

<script setup lang="ts">
import { getCategoryTopAPI } from '@/api/category'
import { getHomeBannerAPI } from '@/api/home'
import type { CategoryTopItem } from '@/types/category'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import { useHistoryStore } from '@/stores'
const PageSkeleton = defineAsyncComponent(
  () => import('@/pages/category/components/PageSkeleton.vue'),
)

//输入框
const searchValue = ref('') // 搜索框绑定的值
const showHistory = ref<boolean>(true) // 是否显示历史记录（默认隐藏）

//点击按钮触发搜索事件并且把记录存入历史记录中
const handleButtonClick = () => {
  searchHistoryStore.addHistory(searchValue.value)
}

//清空全部记录
const clearAllHistory = () => {
  searchHistoryStore.clearAllHistory()
  uni.removeStorageSync('searchHistory')
}

// 输入框获取焦点
const handleFocus = () => {
  showHistory.value = !showHistory.value
}

// 4. 搜索框失焦事件：延迟隐藏
const handleBlur = () => {
  setTimeout(() => {
    showHistory.value = false
  }, 300)
}

//点击历史记录回填到搜索框
const handleHistoryClick = (item: string) => {
  searchValue.value = item
}

//删除单条历史记录
const deleteSingleHistory = (index: number) => {
  searchHistoryStore.deleteHistory(index)
  showHistory.value = true
  console.log(showHistory.value)
}

const handleSearchConfirm = () => {
  const keyword = searchValue.value
  searchHistoryStore.addHistory(keyword)
  showHistory.value = false
  console.log('搜索关键词：', keyword)
  // 跳转搜索结果页...
}

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerAPI(2)
  bannerList.value = res.result
}

// 获取分类列表数据
const categoryList = ref<CategoryTopItem[]>([])
const activeIndex = ref(0)
const getCategoryTopData = async () => {
  const res = await getCategoryTopAPI()
  categoryList.value = res.result
}

// 提取当前二级分类数据
const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children || []
})
// 是否数据加载完毕
const isFinish = ref(false)
// 页面加载
onLoad(async () => {
  await Promise.all([getBannerData(), getCategoryTopData()])
  isFinish.value = true
})

const searchHistoryStore = useHistoryStore()
const loadHistoryFromStorage = () => {
  const historyStr = uni.getStorageSync('searchHistory') || '[]'
  historyList.value = JSON.parse(historyStr)
}
onMounted(() => {
  loadHistoryFromStorage()
})
</script>

<style lang="scss" scoped>
/* 1. 让当前页面高度固定，不随内容变高 */
page {
  height: 100%;
  overflow: hidden;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 150rpx;
    height: 60rpx;
  }
}

/* 历史记录列表样式 */
.history-list {
  position: absolute;
  top: 80rpx;
  padding: 20rpx;
  width: 100%;
  background-color: #f8f9fa;
  border-radius: 16rpx;
  z-index: 999;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
  color: #666;
  font-size: 28rpx;
}

.clear-all {
  color: #007aff;
}

/* 历史记录项样式 */
.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16rpx 0;
  border-bottom: 1rpx solid #eee;
  font-size: 30rpx;
}

.history-item:last-child {
  border-bottom: none;
}

.history-keyword {
  color: #333;
}

.delete-item {
  color: #999;
  font-size: 36rpx;
  margin-left: 20rpx;
}

.uni-searchbar {
  width: 100%;
}

.search-result {
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}

.search-result-text {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 0px;
}

.uni-mt-10 {
  margin-top: 10px;
}

.icon-search {
  &::before {
    margin-right: 10rpx;
  }
}

.category {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}

/* 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #595c63;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }

  .active {
    background-color: #fff;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: #27ba9b;
    }
  }
}

.primary .item:last-child::after,
.primary .active::after {
  display: none;
}

/* 二级分类 */
.secondary {
  background-color: #fff;

  .carousel {
    height: 200rpx;
    margin: 0 30rpx 20rpx;
    border-radius: 4rpx;
    overflow: hidden;
  }

  .panel {
    margin: 0 30rpx 0rpx;
  }

  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: #333;
    font-size: 28rpx;
    border-bottom: 1rpx solid #f7f7f8;

    .more {
      float: right;
      padding-left: 20rpx;
      font-size: 24rpx;
      color: #999;
    }
  }

  .more {
    &::after {
      font-family: 'erabbit' !important;
      content: '\e6c2';
    }
  }

  .section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;

    .goods {
      width: 150rpx;
      margin: 0rpx 20rpx 20rpx 0;

      &:nth-child(3n) {
        margin-right: 0;
      }

      .image {
        width: 150rpx;
        height: 150rpx;
      }

      .name {
        padding: 5rpx;
        font-size: 22rpx;
        color: #333;
      }

      .price {
        padding: 5rpx;
        font-size: 18rpx;
        color: #cf4444;
      }

      .number {
        font-size: 24rpx;
        margin-left: 2rpx;
      }
    }
  }
}
</style>
