<!--
此文件为开发者工具生成，生成时间: 2026/1/14上午10:07:02
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
        :refresher-enabled="true"
        :scroll-y="true"
        class="page-scroll page-scroll"
        lower-threshold="50"
      >
        <view is="pages/index/components/CatergoryPanel">
          <view
            class="Cp-container CatergoryPanel--Cp-container data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
          >
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-836 sk-text"
                >居家</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-229 sk-text"
                >锦鲤</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-326 sk-text"
                >服饰</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-672 sk-text"
                >母婴</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-793 sk-text"
                >个护</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-222 sk-text"
                >严选</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-688 sk-text"
                >数码</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-130 sk-text"
                >运动</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-940 sk-text"
                >杂项</text
              >
            </view>
            <view
              class="classify-item CatergoryPanel--classify-item data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e"
            >
              <image
                class="icon CatergoryPanel--icon data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-image"
              >
              </image>
              <text
                class="data-v-7e6f2c1e CatergoryPanel--data-v-7e6f2c1e sk-transparent sk-text-14-2857-27 sk-text"
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
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-117 sk-text"
                  >特惠推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-441 sk-text"
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
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-359 sk-text"
                  >爆品推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-231 sk-text"
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
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-728 sk-text"
                  >一站买全</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-373 sk-text"
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
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-282 sk-text"
                  >省心生活</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-549 sk-text"
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
      </scroll-view>
    </view>
  </view>
</template>
<style scoped lang="scss">
/*
此文件为开发者工具生成，生成时间: 2026/1/14上午10:07:02

在 D:\project-demo\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-5714-565 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-698 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}

.sk-text-14-2857-836 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-229 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-326 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-672 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-793 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-222 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-688 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-130 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-940 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-27 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-117 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-441 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-359 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-231 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-728 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-373 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-282 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-549 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
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
