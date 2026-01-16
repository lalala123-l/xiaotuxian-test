<template>
  <view class="my-page">
    <!-- 顶部背景 & 导航栏 -->
    <view class="header-bg">
      <!-- 用户信息 -->
      <view style="display: flex; justify-content: space-between">
        <view class="user-info" v-if="memberStore.profile">
          <image class="avatar" src="../../static/images/car.png" mode="aspectFill" />
          <view class="user-text">
            <text class="user-nickname">{{ memberStore.profile.nickname }}</text>
          </view>
        </view>
        <view class="user-info" v-else>
          <image class="avatar" src="../../static/images/car.png" mode="aspectFill" />
          <view class="user-text">
            <text class="user-nickname">未登录</text>
          </view>
        </view>

        <navigator
          class="settings"
          url="/pages/settingpage/settingpage"
          open-type="navigate"
          hover-class="navigator-hover"
        >
          设置
        </navigator>
      </view>
      <!-- 会员卡条 -->
      <view class="member-card">
        <text class="member-title">通用会员卡</text>
        <text>></text>
      </view>
    </view>

    <!-- 内容区 -->
    <view class="content">
      <!-- 我的订单 -->
      <view class="card order-card">
        <view class="card-header">
          <text class="card-title">我的订单</text>
          <view class="card-header-right">
            <text class="card-link">全部</text>
            <text class="icon-arrow">&gt;</text>
          </view>
        </view>
        <view class="card-body order-list">
          <view class="order-item">
            <view class="order-icon">
              <image class="order-icon" src="../../static/images/daishouhuo.png" />
            </view>
            <text class="order-text">待支付</text>
          </view>
          <view class="order-item">
            <view class="order-icon">
              <image class="order-icon" src="../../static/images/daishouhuo.png" />
            </view>
            <text class="order-text">待收货</text>
          </view>
          <view class="order-item">
            <view class="order-icon">
              <image class="order-icon" src="../../static/images/daishouhuo.png" />
            </view>
            <text class="order-text">已完成</text>
          </view>
          <view class="order-item">
            <view class="order-icon">
              <image class="order-icon" src="../../static/images/daishouhuo.png" />
            </view>
            <text class="order-text">售后</text>
          </view>
        </view>
      </view>

      <!-- 常用设置 -->
      <view class="card setting-card">
        <view class="card-header">
          <text class="card-title">常用设置</text>
        </view>
        <view class="card-body setting-list">
          <view class="setting-item">
            <view class="setting-icon setting-icon-orange"></view>
            <text class="setting-text">领券中心</text>
          </view>
          <view class="setting-item">
            <view class="setting-icon setting-icon-yellow"></view>
            <text class="setting-text">我的卡券</text>
          </view>
          <view class="setting-item">
            <view class="setting-icon setting-icon-blue"></view>
            <text class="setting-text">收货地址</text>
          </view>
          <view class="setting-item">
            <view class="setting-icon setting-icon-green"></view>
            <text class="setting-text">联系客服</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
</script>

<style lang="scss" scoped>
.my-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.header-bg {
  background: linear-gradient(180deg, #d9efff 0%, #f5f9ff 100%);
  padding: 40rpx 32rpx 120rpx;
  position: relative;
}

.nav-bar {
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  width: 80rpx;
}

.icon-back {
  font-size: 40rpx;
  color: #333;
}

.nav-title {
  font-size: 34rpx;
  font-weight: 600;
  color: #111;
}

.nav-right {
  width: 120rpx;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-dot {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background-color: #555;
  margin-left: 10rpx;
}

.nav-camera {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  border: 2rpx solid #555;
  margin-left: 16rpx;
}

.user-info {
  margin-top: 100rpx;
  display: flex;
  align-items: center;
}

.settings {
  margin-top: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ddd;
}

.user-text {
  margin-left: 24rpx;
}

.user-nickname {
  font-size: 32rpx;
  font-weight: 600;
  color: #111;
}

.member-card {
  position: absolute;
  left: 32rpx;
  right: 32rpx;
  bottom: -44rpx;
  height: 86rpx;
  border-radius: 20rpx 20rpx 0 0;
  background: linear-gradient(119deg, #292929 0%, #525252 100%);
  padding: 0 32rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.member-title {
  font-size: 28rpx;
  color: #fff;
}

.icon-arrow {
  font-size: 28rpx;
  color: #fff;
}

.content {
  z-index: 888;
  flex: 1;
  padding: 30rpx 32rpx 32rpx;
}

.card {
  background-color: #fff;
  border-radius: 24rpx;
  padding: 24rpx 24rpx 32rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.04);
}

.order-card {
  margin-bottom: 32rpx;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #111;
}

.card-header-right {
  display: flex;
  align-items: center;
}

.card-link {
  font-size: 26rpx;
  color: #999;
  margin-right: 6rpx;
}

.card-body {
  margin-top: 24rpx;
}

.order-list {
  display: flex;
  justify-content: space-between;
}

.order-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order-icon {
  width: 72rpx;
  height: 72rpx;
  border-radius: 24rpx;
  border: 4rpx solid #eee;
  position: relative;
}

.order-text {
  margin-top: 12rpx;
  font-size: 24rpx;
  color: #333;
}

.badge {
  position: absolute;
  top: -10rpx;
  right: -10rpx;
  min-width: 32rpx;
  padding: 2rpx 6rpx;
  border-radius: 50rpx;
  background-color: #ff4d4f;
  color: #fff;
  font-size: 20rpx;
  text-align: center;
}

.setting-list {
  display: flex;
  justify-content: space-between;
}

.setting-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.setting-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}

.setting-icon-orange {
  background-color: #ff8a65;
}

.setting-icon-yellow {
  background-color: #ffca28;
}

.setting-icon-blue {
  background-color: #42a5f5;
}

.setting-icon-green {
  background-color: #66bb6a;
}

.setting-text {
  margin-top: 12rpx;
  font-size: 24rpx;
  color: #333;
}
</style>
