<template class="viewpoint">
  <!-- 列表1 -->
  <view class="list" v-if="memberStore.profile">
    <navigator url="/pagesMember/address/address" hover-class="none" class="item arrow">
      我的收货地址
    </navigator>
  </view>
  <!-- #ifdef MP-WEIXIN -->
  <!-- 列表2 -->
  <view class="list">
    <button hover-class="none" class="item arrow" open-type="openSetting">授权管理</button>
    <button hover-class="none" class="item arrow" open-type="feedback">问题反馈</button>
    <button hover-class="none" class="item arrow" open-type="contact">联系我们</button>
  </view>
  <!-- #endif -->
  <!-- 列表3 -->
  <view class="list">
    <button hover-class="none" class="item arrow">关于小兔鲜儿</button>
  </view>
  <button @click="handleLogout" :loading="isLoding">退出登录</button>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
const isLoding = ref<boolean>(false)
const handleLogout = () => {
  uni.showModal({
    title: '确认退出',
    content: '确认退出当前账号？',
    success: function (res) {
      if (res.confirm) {
        isLoding.value = true
        setTimeout(() => {
          console.log('正在退出')
          isLoding.value = false
          memberStore.clearProfile()
          uni.switchTab({
            url: '/pages/my/my',
          })
        }, 1000)
      } else if (res.cancel) {
        return
      }
    },
  })
  //清除用户登录信息
}
</script>
<style scoped lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  padding: 20rpx;
}

/* 列表 */
.list {
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 10rpx;

  .item {
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #333;
    border-top: 1rpx solid #ddd;
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: #fff;

    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }

    &:first-child {
      border: none;
    }

    &::after {
      right: 5rpx;
    }
  }

  .arrow::after {
    content: '\e6c2';
    position: absolute;
    top: 50%;
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 操作按钮 */
.action {
  text-align: center;
  line-height: 90rpx;
  margin-top: 40rpx;
  font-size: 32rpx;
  color: #333;

  .button {
    background-color: #fff;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
}
</style>
