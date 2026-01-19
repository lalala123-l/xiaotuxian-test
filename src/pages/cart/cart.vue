<template>
  <!-- 购物车页面容器 -->
  <view class="cart-page">
    <!-- 购物车主体 -->
    <view class="cart-body">
      <!-- 门店选择栏 -->
      <view class="store-bar">
        <text class="cart-label">购物车</text>
        <view class="store-selector">
          <uni-icons type="location" size="16" color="#4cd964"></uni-icons>
          <text class="store-name">门店名称</text>
          <uni-icons type="arrowright" size="14"></uni-icons>
        </view>
        <view class="store-ops">
          <!-- 可选：全局编辑/完成，一键切换所有商品模式 -->
          <text class="edit-btn" @click="handleGlobalEdit">
            {{ isGlobalEditMode ? '完成全部' : '编辑全部' }}
          </text>
          <text class="clear-btn" @click="handleClear">清空</text>
        </view>
      </view>

      <!-- 商品列表 -->
      <view class="goods-list">
        <!-- 商品项：每个商品独立编辑状态 -->
        <checkbox-group @change="handleCartCheckChange">
          <view class="goods-item" v-for="(item, index) in cartList" :key="item.id || index">
            <view class="goods-check">
              <checkbox :checked="item.selected" :value="item.id" />
            </view>
            <view class="goods-img">
              <image :src="item.picture" mode="aspectFit"></image>
            </view>
            <view class="goods-info">
              <text class="goods-name">{{ item.name }}</text>
              <text class="goods-spec">{{ item.attrsText }}</text>
              <text class="goods-tag">同店每200减15 | 库存紧张</text>
              <view class="price-group">
                <text class="original-price">¥{{ item.nowOriginalPrice }}</text>
                <text class="coupon-price">¥{{ item.nowPrice }} 券后价</text>
              </view>
            </view>
            <!-- 编辑模式：当前商品显示 ± 按钮 -->
            <view class="goods-count" v-if="item.isItemEdit" @click.stop>
              <button
                class="count-btn"
                @click="minusCount(index)"
                :disabled="cartList[index].count <= 1"
              >
                -
              </button>
              <input
                class="count-value"
                type="number"
                v-model.number="cartList[index].count"
                @blur="handleItemBlur(index)"
              />
              <button class="count-btn" @click="plusCount(index)">+</button>
            </view>

            <!-- 普通模式：当前商品显示 × 数量，点击切换为编辑模式 -->
            <view class="goods-count" v-else @click.stop="handleItemSwitchEdit(index)">
              <text class="count-value">×{{ item.count }}</text>
            </view>
          </view>
        </checkbox-group>
      </view>
    </view>
    <!-- 底部结算栏 -->
    <view class="cart-footer">
      <view class="footer-check">
        <checkbox :checked="selectedAll" value="selectedAll" @click="handleCheckAll" />
      </view>
      <view class="footer-total">
        <text class="total-label">合计:</text>
        <text class="total-price">¥{{ totalPrice }}</text>
      </view>
      <button class="del-btn" @click="handleDelete">删除</button>
      <button class="settle-btn" @click="handleSettle">结算</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { deleteMemberCartAPI, getMemberCartAPI } from '@/api/cart'
import { useMemberStore } from '@/stores'
import type { CartItem } from '@/types/cart'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref, computed, watch } from 'vue'

const isGlobalEditMode = ref<boolean>(false)
const selectedAll = ref(false)
// 扩展 CartItem：添加 selected（单选状态）、isItemEdit（单个商品编辑状态）
const cartList = ref<
  (CartItem & {
    isItemEdit: boolean // 核心：单个商品的独立编辑状态
  })[]
>([])

// 合计价格计算（仅选中商品）
const totalPrice = computed(() => {
  if (!cartList.value.length) return '0.00'
  const total = cartList.value.reduce((sum, item) => {
    if (item.selected) {
      return sum + Number(item.nowPrice) * item.count
    }
    return sum
  }, 0)
  return total.toFixed(2)
})

// 核心：单个商品切换为编辑模式（点击普通模式的×数量触发）
const handleItemSwitchEdit = (index: number) => {
  // 仅切换当前索引商品的编辑状态，其他商品保持不变
  cartList.value[index].isItemEdit = true
}

const handleCartCheckChange = (e: any) => {
  const selectedGoodsIds = e.detail.value as string[]
  console.log('e', e)
  cartList.value = cartList.value.map((item) => ({
    ...item,
    selected: selectedGoodsIds.includes(item.id.toString()),
  }))
  selectedAll.value =
    cartList.value.length > 0 ? selectedGoodsIds.length === cartList.value.length : false
}

const handleItemBlur = (index: number) => {
  cartList.value[index].isItemEdit = false
  // 兜底：确保数量至少为 1
  if (cartList.value[index].count < 1) {
    cartList.value[index].count = 1
  }
}

const handleGlobalEdit = () => {
  isGlobalEditMode.value = !isGlobalEditMode.value
  // 遍历所有商品，同步切换编辑状态
  cartList.value = cartList.value.map((item) => ({
    ...item,
    isItemEdit: isGlobalEditMode.value,
  }))
  uni.showToast({
    title: isGlobalEditMode.value ? '进入批量编辑模式' : '退出批量编辑模式',
    icon: 'none',
  })
}

const handleDelete = async () => {
  uni.showModal({
    title: '提示',
    content: '确定清空购物车吗？',
    success: async (res) => {
      if (res.confirm) {
        selectedAll.value = false
        isGlobalEditMode.value = false
        //调用清空购物车api
        const ids = cartList.value.filter((v) => v.selected === true).map((v) => v.id)
        try {
          await deleteMemberCartAPI({ ids })
          getCartList()
        } catch (e) {
          console.log(e)
        }
      }
    },
  })
}

// 清空购物车
const handleClear = () => {
  uni.showModal({
    title: '提示',
    content: '确定清空购物车吗？',
    success: (res) => {
      if (res.confirm) {
        selectedAll.value = false
        isGlobalEditMode.value = false
        //调用清空购物车api
        clearAllCart()
      }
    },
  })
}
//清空购物车请求
const clearAllCart = async () => {
  const ids = cartList.value.map((v) => v.id)
  try {
    await deleteMemberCartAPI({ ids })
    getCartList()
  } catch (e) {
    console.log(e)
  }
}

// 减少单个商品数量
const minusCount = (index: number) => {
  if (cartList.value[index].count <= 1) return
  cartList.value[index].count--
}

// 增加单个商品数量
const plusCount = (index: number) => {
  cartList.value[index].count++
}

// 全选/取消全选
const handleCheckAll = () => {
  cartList.value = cartList.value.map((item) => ({
    ...item,
    selected: !selectedAll.value,
  }))
  console.log(selectedAll.value)
}

// 结算逻辑
const handleSettle = () => {
  const hasselectedGoods = cartList.value.some((item) => item.selected)
  if (!hasselectedGoods) {
    uni.showToast({ title: '请选择要结算的商品', icon: 'none' })
    return
  }
  uni.showToast({ title: `即将结算，合计¥${totalPrice.value}`, icon: 'none' })
}

// 获取购物车列表（初始化每个商品的独立编辑状态为 false：默认普通模式）
const getCartList = async () => {
  try {
    const res = await getMemberCartAPI()
    cartList.value = res.result.map((item: CartItem) => ({
      ...item,
      isItemEdit: false, // 初始化：所有商品默认处于普通模式
    }))
  } catch (error) {
    console.error('获取购物车列表失败：', error)
  }
}

// 监听购物车列表变化，同步更新全选状态
watch(
  () => cartList.value,
  (newList) => {
    if (!newList.length) {
      selectedAll.value = false
      return
    }
    selectedAll.value = newList.every((item) => item.selected)
  },
  { deep: true },
)

const memberStore = useMemberStore()
// 页面加载获取购物车数据
onShow(() => {
  if (memberStore.profile) {
    getCartList()
  }
})
</script>

<style scoped lang="scss">
.cart-page {
  min-height: 100vh;
  background-color: #f5f5f5;

  .cart-body {
    padding: 20rpx;

    .store-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20rpx;

      .cart-label {
        font-size: 32rpx;
        font-weight: 600;
        margin-right: 10rpx;
      }

      .store-selector {
        display: flex;
        align-items: center;
        gap: 8rpx;
        font-size: 28rpx;
        color: #333;
      }

      .store-ops {
        display: flex;
        gap: 20rpx;
        font-size: 28rpx;
        color: #666;

        .edit-btn,
        .clear-btn {
          padding: 4rpx 8rpx;
          cursor: pointer;
        }
      }
    }

    .goods-list {
      background-color: #fff;
      border-radius: 16rpx;
      overflow: hidden;

      .goods-item {
        display: flex;
        align-items: center;
        padding: 20rpx;
        border-bottom: 1rpx solid #f5f5f5;

        &:last-child {
          border-bottom: none;
        }

        .goods-check {
          width: 44rpx;
          padding-right: 10rpx;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .goods-img {
          width: 120rpx;
          height: 120rpx;
          margin-right: 20rpx;

          image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8rpx;
          }
        }

        .goods-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8rpx;

          .goods-name {
            font-size: 28rpx;
            color: #333;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          .goods-spec {
            font-size: 24rpx;
            color: #666;
          }

          .goods-tag {
            font-size: 22rpx;
            color: #ff672b;
          }

          .price-group {
            display: flex;
            align-items: center;
            gap: 10rpx;
            margin-top: 8rpx;

            .original-price {
              font-size: 24rpx;
              color: #999;
              text-decoration: line-through;
            }

            .coupon-price {
              font-size: 28rpx;
              color: #ff3b30;
              font-weight: 500;
            }
          }
        }

        .goods-count {
          display: flex;
          align-items: center;
          gap: 8rpx;
          font-size: 28rpx;

          // 普通模式下添加点击光标，提示可点击
          &:not(:has(.count-btn)) {
            cursor: pointer;
          }

          .count-btn {
            width: 40rpx;
            height: 40rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            border: 1rpx solid #eee;
            border-radius: 4rpx;
            background-color: #f5f5f5;

            &:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          }

          .count-value {
            background-color: #f5f5f5;
            width: 50rpx;
            height: 40rpx;
            line-height: 40rpx;
            text-align: center;
            border: none;
            outline: none;
            font-size: 28rpx;
          }
        }
      }
    }
  }

  .cart-footer {
    position: fixed;
    bottom: 80rpx;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16rpx 20rpx;
    background-color: #fff;
    border-top: 1rpx solid #eee;

    .footer-check {
      display: flex;
      align-items: center;
      gap: 8rpx;
      font-size: 28rpx;
      color: #333;
    }

    .footer-total {
      display: flex;
      align-items: center;
      gap: 8rpx;
      font-size: 28rpx;

      .total-label {
        color: #666;
      }

      .total-price {
        color: #ff3b30;
        font-size: 32rpx;
        font-weight: 600;
      }
    }

    .del-btn {
      height: 60rpx;
      line-height: 60rpx;
      padding: none;
      background: #fff;
      color: #7c7777;
    }

    uni-button {
      border: none;
      margin: 0;
    }

    uni-button:after {
      border: none;
    }

    .settle-btn {
      width: 200rpx;
      height: 60rpx;
      margin-right: 0;
      line-height: 60rpx;
      text-align: center;
      background-color: #333;
      color: #fff;
      border-radius: 30rpx;
      font-size: 28rpx;
    }
  }
}
</style>
