<!--
此文件为开发者工具生成，生成时间: 2026/1/21下午2:48:39
使用方法：
在 D:\project-demo\heima-shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\project-demo\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="index index">
      <scroll-view
        refresher-enabled="true"
        scroll-y="true"
        class="page-scroll page-scroll"
        lower-threshold="50"
      >
        <view is="components/Swiper" current="0" autoplay="false">
          <view class="carousel Swiper--carousel data-v-7bf11638 Swiper--data-v-7bf11638">
            <swiper
              circular="true"
              class="data-v-7bf11638 Swiper--data-v-7bf11638"
              current="0"
              interval="3000"
              autoplay="false"
            >
              <swiper-item
                class="data-v-7bf11638 Swiper--data-v-7bf11638"
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  transform: translate(0%, 0px) translateZ(0px);
                "
              >
                <navigator
                  class="navigator Swiper--navigator data-v-7bf11638 Swiper--data-v-7bf11638"
                  hover-class="none"
                >
                  <image
                    class="image Swiper--image data-v-7bf11638 Swiper--data-v-7bf11638 sk-image"
                    mode="aspectFill"
                  >
                  </image>
                </navigator>
              </swiper-item>
            </swiper>
            <view class="indicator Swiper--indicator data-v-7bf11638 Swiper--data-v-7bf11638">
              <text
                class="dot Swiper--dot data-v-7bf11638 Swiper--data-v-7bf11638 active Swiper--active"
              ></text>
              <text class="dot Swiper--dot data-v-7bf11638 Swiper--data-v-7bf11638"></text>
              <text class="dot Swiper--dot data-v-7bf11638 Swiper--data-v-7bf11638"></text>
            </view>
          </view>
        </view>
        <view is="pages/index/components/CatergoryPanel">
          <view
            class="Cp-container CatergoryPanel--Cp-container data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
          >
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-607 sk-text"
                >居家</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-979 sk-text"
                >锦鲤</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-700 sk-text"
                >服饰</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-688 sk-text"
                >母婴</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-339 sk-text"
                >个护</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-293 sk-text"
                >严选</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-310 sk-text"
                >数码</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-889 sk-text"
                >运动</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-317 sk-text"
                >杂项</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              ></image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-331 sk-text"
                >品牌</text
              >
            </view>
          </view>
        </view>
        <view is="pages/index/components/HotPanel">
          <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-920 sk-text"
                  >特惠推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-349 sk-text"
                  >舒适床品套装，限时折扣</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-70 sk-text"
                  >爆品推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-511 sk-text"
                  >新鲜水果组合，销量TOP1</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-696 sk-text"
                  >一站买全</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-757 sk-text"
                  >床品四件套，居家必备</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-578 sk-text"
                  >省心生活</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-358 sk-text"
                  >新鲜橙子，当季优选</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
                <image class="image HotPanel--image sk-image" mode="scaleToFill"></image>
              </navigator>
            </view>
          </view>
        </view>
        <view is="components/XtxGuess" class="r r">
          <view class="caption XtxGuess--caption"></view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style lang="scss">
/* #ifdef H5 || APP-PLUS */
/* 修复 H5 端骨架屏样式异常 */
/* 原因：H5 端样式自动开启 scoped 隔离，导致骨架屏的基础样式被隔离 */
@import '../style/category.scss';
@import '../style/hot.scss';
@import '@/components/styles/XtxSwiper.scss';

/* #endif */
.sk-transparent {
  color: transparent !important;
}

.sk-text-6-2500-422 {
  background-image: linear-gradient(
    transparent 6.25%,
    #eeeeee 0%,
    #eeeeee 93.75%,
    transparent 0%
  ) !important;
  background-size: 100% 27.907rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-988 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-607 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-979 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-700 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-688 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-339 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-293 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-310 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-889 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-317 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-331 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-920 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-349 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-70 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-511 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-696 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-757 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-578 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-358 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
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
