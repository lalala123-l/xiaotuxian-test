<template>
  <view class="search-viewpoint">
    <view class="search-box">
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
  </view>
</template>

<script setup lang="ts">
import { useHistoryStore } from '@/stores'
import { ref, reactive, toRefs, onMounted } from 'vue'
const searchHistoryStore = useHistoryStore()
const emit = defineEmits(['handleSearch'])
//输入框
const searchValue = ref('') // 搜索框绑定的值
const showHistory = ref<boolean>(false) // 是否显示历史记录（默认隐藏）
const historyList = ref([])

//点击按钮触发搜索事件并且把记录存入历史记录中
const handleButtonClick = () => {
  const validValue = searchValue.value.trim()
  if (!validValue) return // 空值校验，避免无效记录）
  searchHistoryStore.addHistory(validValue)
  emit('handleSearch', validValue)
  showHistory.value = false
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
}

const handleSearchConfirm = () => {
  const keyword = searchValue.value
  searchHistoryStore.addHistory(keyword)
  showHistory.value = false
  emit('handleSearch', keyword)
}
</script>
<style scoped lang="scss">
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
</style>
