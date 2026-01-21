<template name="skeleton">
  <view class="sk-container">
    <view class="category category data-v-4046d630 data-v-4046d630">
      <view class="search-box search-box data-v-4046d630 data-v-4046d630">
        <view
          is="uni_modules/cc-SearchBarHisView/components/cc-SearchBarHisView/cc-SearchBarHisView"
          class="data-v-4046d630 data-v-4046d630"
        >
          <view class="data-v-b5f8f678 SearchBarHisView--data-v-b5f8f678">
            <view
              class="data-v-b5f8f678 SearchBarHisView--data-v-b5f8f678"
              style="display: flex; width: 100vw"
            >
              <view
                is="uni_modules/cc-SearchBarHisView/components/cc-SearchBarHisView/uni-search-bar/uni-search-bar"
                class="r SearchBarHisView--r data-v-b5f8f678 SearchBarHisView--data-v-b5f8f678"
                style="width: calc(100vw - 52px)"
              >
                <view class="uni-searchbar bar--uni-searchbar">
                  <view
                    class="uni-searchbar__box bar--uni-searchbar__box"
                    style="border-radius: 6px; background-color: #ffffff"
                  >
                    <view
                      class="uni-searchbar__box-icon-search bar--uni-searchbar__box-icon-search"
                    >
                      <view
                        is="uni_modules/cc-SearchBarHisView/components/cc-SearchBarHisView/uni-icons/uni-icons"
                      >
                        <text
                          class="uni-icons icons--uni-icons uniui-search icons--uniui-search sk-pseudo sk-pseudo-circle"
                          style="color: #c0c4cc; font-size: 18px"
                        ></text>
                      </view>
                    </view>
                    <view
                      class="uni-searchbar__box-search-input bar--uni-searchbar__box-search-input sk-image"
                      maxlength="100"
                      placeholder="请输入产品名称、关键字"
                      type="text"
                      value="true"
                      focus="true"
                      selection-start="-1"
                      selection-end="-1"
                      cursor="-1"
                    ></view>
                  </view>
                </view>
              </view>
              <view
                class="data-v-b5f8f678 SearchBarHisView--data-v-b5f8f678 sk-transparent sk-text-34-0000-509 sk-text"
                style="width: 52px; line-height: 50px"
              >
                搜索
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="categories categories data-v-4046d630 data-v-4046d630">
        <scroll-view scroll-y="true" class="primary primary data-v-4046d630 data-v-4046d630">
          <view class="item data-v-4046d630 active sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-503 sk-text"
              >居家</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-763 sk-text"
              >美食</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-476 sk-text"
              >服饰</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-496 sk-text"
              >母婴</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-733 sk-text"
              >个护</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-851 sk-text"
              >严选</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-337 sk-text"
              >数码</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-793 sk-text"
              >运动</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-701 sk-text"
              >杂项</text
            >
          </view>
        </scroll-view>
        <scroll-view
          enable-back-to-top="true"
          scroll-y="true"
          class="secondary secondary data-v-4046d630 data-v-4046d630"
        >
          <xtx-swiper class="banner banner data-v-4046d630 data-v-4046d630"></xtx-swiper>
          <view class="panel panel data-v-4046d630 data-v-4046d630">
            <view class="title title data-v-4046d630 data-v-4046d630">
              <text class="name data-v-4046d630 sk-transparent sk-text-26-6667-124 sk-text"
                >居家生活用品</text
              >
              <navigator
                class="more data-v-4046d630 sk-transparent sk-text-30-0000-330 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section data-v-4046d630 data-v-4046d630">
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-190 sk-text"
                >
                  钻石陶瓷涂层多用锅18cm 小奶锅</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-655 sk-text"
                    >149.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-716 sk-text"
                >
                  极光限定 珠光蓝珐琅锅</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-573 sk-text"
                    >199.00</text
                  >
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel data-v-4046d630 data-v-4046d630">
            <view class="title title data-v-4046d630 data-v-4046d630">
              <text class="name data-v-4046d630 sk-transparent sk-text-26-6667-640 sk-text"
                >收纳</text
              >
              <navigator
                class="more data-v-4046d630 sk-transparent sk-text-30-0000-190 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section data-v-4046d630 data-v-4046d630">
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-843 sk-text"
                >
                  给衣柜减减肥，真空防潮压缩袋</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-559 sk-text"
                    >79.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-935 sk-text"
                >
                  爆款明星好物，抽屉式透明储物柜</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-233 sk-text"
                    >129.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-813 sk-text"
                >
                  衣柜省空间神器，棉麻涤·收纳挂袋</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-681 sk-text"
                    >55.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-443 sk-text"
                >
                  换季好帮手，大容量防尘衣物收纳袋</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-834 sk-text"
                    >69.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-680 sk-text"
                >
                  可水洗的布艺收纳盒</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-502 sk-text"
                    >29.90</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-96 sk-text"
                >
                  开发员自留款，带滚轮双层脏衣篓</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-203 sk-text"
                    >125.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-707 sk-text"
                >
                  拉开抽屉不凌乱，磨砂抽屉整理盒套装</view
                >
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-182 sk-text"
                >
                  全能收纳王，棉麻涤·收纳盒</view
                >
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style>
@import '../style/category.scss';

.sk-transparent {
  color: transparent !important;
}

.sk-text-34-0000-509 {
  background-image: linear-gradient(
    transparent 34%,
    #eeeeee 0%,
    #eeeeee 66%,
    transparent 0%
  ) !important;
  background-size: 100% 100rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-503 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-763 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-476 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-496 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-733 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-851 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-337 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-793 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-701 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-26-6667-124 {
  background-image: linear-gradient(
    transparent 26.6667%,
    #eeeeee 0%,
    #eeeeee 73.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-30-0000-330 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-14-2857-190 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-655 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-716 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-573 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-26-6667-640 {
  background-image: linear-gradient(
    transparent 26.6667%,
    #eeeeee 0%,
    #eeeeee 73.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-30-0000-190 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-14-2857-843 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-559 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-935 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-233 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-813 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-681 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-443 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-834 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-680 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-502 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-96 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-203 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-707 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-text-14-2857-182 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
