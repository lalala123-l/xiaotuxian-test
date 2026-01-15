import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useHistoryStore = defineStore(
  'searchHistoryStore',
  () => {
    //历史列表信息
    const historyList = ref<string[]>(['毛衣', '手套', '口红'])
    // 2. 初始化：从本地缓存加载历史记录
    const initHistory = () => {
      const historyStr = uni.getStorageSync('searchHistory') || '[]'
      historyList.value = JSON.parse(historyStr)
    }
    //保存历史记录
    const addHistory = (val: string) => {
      if (historyList.value.find((v) => v == val)) {
        return
      }
      historyList.value.push(val)
    }
    const deleteHistory = (index: number) => {
      historyList.value.splice(index, 1)
    }
    //清除历史信息
    const clearAllHistory = () => {
      historyList.value = []
    }
    //监听状态变化，同步到本地缓存
    watch(
      historyList,
      (newList) => {
        uni.setStorageSync('searchHistory', JSON.stringify(newList))
      },
      { deep: true },
    )

    initHistory()
    return {
      historyList,
      addHistory,
      deleteHistory,
      clearAllHistory,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          return uni.setStorageSync(key, value)
        },
      },
    },
  },
)
