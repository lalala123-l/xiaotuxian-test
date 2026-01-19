import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const SEARCH_HISTORY_KEY = 'searchHistory'
const MAX_HISTORY_LENGTH = 20

export const useHistoryStore = defineStore(
  'searchHistoryStore',
  () => {
    const historyList = ref<string[]>([])
    const initHistory = () => {
      try {
        const historyStr = uni.getStorageSync('SEARCH_HISTORY_KEY')
        historyList.value = JSON.parse(historyStr) || []
      } catch (error) {
        console.error('加载搜索历史失败：', error)
        historyList.value = []
        uni.setStorageSync(SEARCH_HISTORY_KEY, '[]')
      }
    }
    //保存历史记录
    const addHistory = (val: string) => {
      if (historyList.value.find((v) => v == val)) {
        return
      }
      //加载到数组的头部
      historyList.value.unshift(val)
    }
    const deleteHistory = (index: number) => {
      if (index < 0 || index >= historyList.value.length) return
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
