<template>
  <view class="order-list-container">
    <!-- 顶部Tab导航 -->
    <view class="tab-container">
      <scroll-view scroll-x class="tab-scroll" :show-scrollbar="false" @scroll="onTabScroll">
        <view class="tab-wrapper">
          <view
            v-for="tab in tabs"
            :key="tab.key"
            class="tab-item"
            :class="{ active: activeTab === tab.key }"
            @click="switchTab(tab.key)"
          >
            <text class="tab-text">{{ tab.title }}</text>
          </view>
        </view>
      </scroll-view>
      <!-- 滑动指示器 -->
      <view
        class="tab-indicator"
        :style="{
          left: indicatorLeft + 'px',
          width: indicatorWidth + 'px',
        }"
      ></view>
    </view>

    <!-- 订单列表 -->
    <scroll-view scroll-y class="order-scroll" @scrolltolower="loadMore">
      <view v-if="loading" class="loading">
        <text>加载中...</text>
      </view>
      <view v-else-if="orderList.length === 0" class="empty">
        <image src="/src/static/images/blank.png" mode="aspectFit"></image>
        <text>暂无订单</text>
      </view>
      <view v-else class="order-list">
        <view v-for="order in orderList" :key="order.id" class="order-item">
          <!-- 订单头部 -->
          <view class="order-header">
            <text class="order-time">{{ formatTime(order.createTime) }}</text>
            <text class="order-status">{{ getOrderStatusText(order.orderState) }}</text>
          </view>

          <!-- 订单商品列表 -->
          <view class="order-goods">
            <view
              v-for="sku in order.skus"
              :key="sku.id"
              class="goods-item"
              @click="goToGoodsDetail(sku.spuId)"
            >
              <image :src="sku.image" mode="aspectFit" class="goods-image"></image>
              <view class="goods-info">
                <text class="goods-name">{{ sku.name }}</text>
                <text class="goods-attrs">{{ sku.attrsText }}</text>
                <view class="goods-price-count">
                  <text class="goods-price">¥{{ sku.curPrice.toFixed(2) }}</text>
                  <text class="goods-count">x{{ sku.quantity }}</text>
                </view>
              </view>
            </view>
          </view>

          <!-- 订单底部 -->
          <view class="order-footer">
            <view class="order-total">
              <text class="total-text">共{{ order.totalNum }}件商品 合计：</text>
              <text class="total-price">¥{{ order.payMoney.toFixed(2) }}</text>
            </view>
            <view class="order-actions">
              <button
                v-if="order.orderState === 1"
                class="action-btn cancel"
                @click="cancelOrder(order.id)"
              >
                取消订单
              </button>
              <button
                v-if="order.orderState === 1"
                class="action-btn pay"
                @click="goToPay(order.id)"
              >
                去支付
              </button>
              <button
                v-if="order.orderState === 2"
                class="action-btn"
                @click="remindShip(order.id)"
              >
                提醒发货
              </button>
              <button
                v-if="order.orderState === 3"
                class="action-btn"
                @click="confirmReceipt(order.id)"
              >
                确认收货
              </button>
              <button
                v-if="order.orderState === 4"
                class="action-btn"
                @click="goToEvaluate(order.id)"
              >
                去评价
              </button>
              <button class="action-btn" @click="goToDetail(order.id)">查看详情</button>
            </view>
          </view>
        </view>
      </view>

      <!-- 加载更多 -->
      <view v-if="hasMore" class="load-more" @click="loadMore">
        <text>加载更多</text>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import type { OrderItem } from '@/types/order'
import { getMemberOrderAPI } from '@/api/order'

const router = useRouter()

// Tab配置
const tabs = [
  { key: 'all', title: '全部' },
  { key: 'pending_pay', title: '待付款' },
  { key: 'pending_ship', title: '待发货' },
  { key: 'pending_receive', title: '待收货' },
  { key: 'pending_evaluate', title: '待评价' },
]

// 活跃的Tab
const activeTab = ref('all')
// Tab指示器样式
const indicatorLeft = ref(0)
const indicatorWidth = ref(0)
// 订单列表
const orderList = ref<OrderItem[]>([])
// 加载状态
const loading = ref(false)
// 分页
const page = ref(1)
const pageSize = ref(10)
const hasMore = ref(true)

// Tab对应的订单状态
const tabOrderState = {
  all: 0,
  pending_pay: 1,
  pending_ship: 2,
  pending_receive: 3,
  pending_evaluate: 4,
}

// 切换Tab
const switchTab = (key: string) => {
  if (activeTab.value === key) return
  activeTab.value = key
  // 重置分页
  page.value = 1
  hasMore.value = true
  orderList.value = []
  // 获取订单列表
  getOrderData()
  // 更新指示器位置
  updateIndicator()
}

// 更新指示器位置
const updateIndicator = async () => {
  await nextTick()
  const tabItems = uni.createSelectorQuery().selectAll('.tab-item')
  tabItems
    .boundingClientRect((rects) => {
      const activeIndex = tabs.findIndex((tab) => tab.key === activeTab.value)
      if (rects && rects[activeIndex]) {
        indicatorLeft.value = rects[activeIndex].left
        indicatorWidth.value = rects[activeIndex].width
      }
    })
    .exec()
}

// 滚动事件
const onTabScroll = () => {
  // 可以添加滚动时的其他逻辑
}

// 获取订单列表
const getOrderData = async () => {
  if (loading.value || !hasMore.value) return

  loading.value = true
  try {
    const orderState = tabOrderState[activeTab.value as keyof typeof tabOrderState]
    const res = await getMemberOrderAPI({
      page: page.value,
      pageSize: pageSize.value,
      orderState,
    })
    if (page.value === 1) {
      orderList.value = res.items
    } else {
      orderList.value = [...orderList.value, ...res.items]
    }

    // 判断是否还有更多数据
    hasMore.value = orderList.value.length < res.counts
    page.value++
  } catch (error) {
    hasMore.value = false
    uni.showToast({
      title: '获取订单失败',
      icon: 'none',
    })
  } finally {
    loading.value = false
  }
}

// 加载更多
const loadMore = () => {
  if (!loading.value && hasMore.value) {
    getOrderData()
  }
}

// 格式化时间
const formatTime = (time: string) => {
  const date = new Date(time)
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`
}

// 获取订单状态文本
const getOrderStatusText = (state: number) => {
  const statusMap = {
    1: '待付款',
    2: '待发货',
    3: '待收货',
    4: '待评价',
    5: '已完成',
    6: '已取消',
  }
  return statusMap[state as keyof typeof statusMap] || '未知状态'
}

// 跳转到商品详情
const goToGoodsDetail = (spuId: string) => {
  router.push(`/pages/goods/goods?id=${spuId}`)
}

// 跳转到订单详情
const goToDetail = (orderId: string) => {
  router.push(`/pagesOrder/detail/detail?id=${orderId}`)
}

// 去支付
const goToPay = (orderId: string) => {
  router.push(`/pagesOrder/payment/payment?id=${orderId}`)
}

// 取消订单
const cancelOrder = async (orderId: string) => {
  // 这里可以调用取消订单的API
  uni.showModal({
    title: '提示',
    content: '确定要取消订单吗？',
    success: async (res) => {
      if (res.confirm) {
        try {
          // 调用取消订单API
          // await cancelOrderApi(orderId)
          uni.showToast({
            title: '订单已取消',
            icon: 'success',
          })
          // 重新获取订单列表
          page.value = 1
          orderList.value = []
          getOrderData()
        } catch (error) {
          uni.showToast({
            title: '取消失败',
            icon: 'none',
          })
        }
      }
    },
  })
}

// 提醒发货
const remindShip = (orderId: string) => {
  // 这里可以调用提醒发货的API
  uni.showToast({
    title: '已提醒卖家发货',
    icon: 'success',
  })
}

// 确认收货
const confirmReceipt = async (orderId: string) => {
  // 这里可以调用确认收货的API
  uni.showModal({
    title: '提示',
    content: '确定要确认收货吗？',
    success: async (res) => {
      if (res.confirm) {
        try {
          // 调用确认收货API
          // await confirmReceiptApi(orderId)
          uni.showToast({
            title: '已确认收货',
            icon: 'success',
          })
          // 重新获取订单列表
          page.value = 1
          orderList.value = []
          getOrderData()
        } catch (error) {
          uni.showToast({
            title: '确认失败',
            icon: 'none',
          })
        }
      }
    },
  })
}

// 去评价
const goToEvaluate = (orderId: string) => {
  // 这里可以跳转到评价页面
  uni.showToast({
    title: '评价功能开发中',
    icon: 'none',
  })
}

// 初始化
onMounted(() => {
  // 更新指示器位置
  updateIndicator()
  // 获取订单列表
  getOrderData()
})
</script>

<style lang="scss" scoped>
.order-list-container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

/* Tab导航 */
.tab-container {
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  z-index: 10;
}

.tab-scroll {
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tab-wrapper {
  display: flex;
  justify-content: space-between;
  column-gap: 10rpx;
  padding: 0 20rpx;
}

.tab-item {
  padding: 24rpx 20rpx;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tab-text {
  font-size: 28rpx;
  color: #333;
  transition: color 0.3s;
}

.tab-item.active {
  .tab-text {
    color: #ff6b35;
    font-weight: 600;
  }
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  height: 4rpx;
  background-color: #ff6b35;
  transition: left 0.3s, width 0.3s;
}

/* 订单列表 */
.order-scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.loading {
  padding: 40rpx;
  text-align: center;
  color: #999;
  font-size: 28rpx;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  color: #999;

  image {
    width: 200rpx;
    height: 200rpx;
    margin-bottom: 20rpx;
  }

  text {
    font-size: 28rpx;
  }
}

.order-list {
  padding: 20rpx;
}

.order-item {
  background-color: #fff;
  border-radius: 12rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
}

/* 订单头部 */
.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24rpx 32rpx;
  border-bottom: 1px solid #f0f0f0;

  .order-time {
    font-size: 26rpx;
    color: #999;
  }

  .order-status {
    font-size: 28rpx;
    color: #ff6b35;
    font-weight: 600;
  }
}

/* 订单商品 */
.order-goods {
  padding: 24rpx 32rpx;
}

.goods-item {
  display: flex;
  margin-bottom: 24rpx;

  &:last-child {
    margin-bottom: 0;
  }

  .goods-image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 8rpx;
    background-color: #f5f5f5;
    margin-right: 24rpx;
  }

  .goods-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .goods-name {
    font-size: 28rpx;
    color: #333;
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 8rpx;
  }

  .goods-attrs {
    font-size: 24rpx;
    color: #999;
    margin-bottom: 16rpx;
  }

  .goods-price-count {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .goods-price {
      font-size: 32rpx;
      color: #ff6b35;
      font-weight: 600;
    }

    .goods-count {
      font-size: 26rpx;
      color: #666;
    }
  }
}

/* 订单底部 */
.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24rpx 32rpx;
  border-top: 1px solid #f0f0f0;
  background-color: #fafafa;
}

.order-total {
  display: flex;
  align-items: center;

  .total-text {
    font-size: 26rpx;
    color: #666;
    margin-right: 8rpx;
  }

  .total-price {
    font-size: 32rpx;
    color: #ff6b35;
    font-weight: 600;
  }
}

.order-actions {
  display: flex;
  gap: 16rpx;
}

.action-btn {
  padding: 12rpx 28rpx;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #666;
  font-size: 26rpx;
  border-radius: 30rpx;
  line-height: 1;

  &:active {
    opacity: 0.8;
  }

  &.cancel {
    border-color: #999;
    color: #999;
  }

  &.pay {
    border-color: #ff6b35;
    background-color: #ff6b35;
    color: #fff;
  }
}

/* 加载更多 */
.load-more {
  padding: 32rpx;
  text-align: center;
  color: #999;
  font-size: 28rpx;
  background-color: #fff;
  margin: 20rpx;
  border-radius: 12rpx;
}
</style>
