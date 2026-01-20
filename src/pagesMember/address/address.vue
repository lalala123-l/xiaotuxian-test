<template>
  <view class="address-page">
    <view
      class="address-item"
      v-for="item in addressList"
      :key="item.id"
      @click="handleSelect(item)"
    >
      <view class="home-info">
        {{ item.fullLocation }}
        <text class="default-tag" v-if="item.isDefault == 1">默认</text>
      </view>
      <view class="person-info">
        <text>{{ item.receiver }}</text>
        <text>{{ item.contact }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getAddressListAPI } from '@/api/address'
import { useAddressStore } from '@/stores/modules/address'
import type { AddressItem } from '@/types/address'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const addressList = ref<AddressItem[]>([])

const getAddressList = async () => {
  const res = await getAddressListAPI()
  addressList.value = res.result as AddressItem[]
}

const addressStore = useAddressStore()
const handleSelect = (item: AddressItem) => {
  addressStore.changeSelectedAddress(item)
  console.log(item)
  uni.navigateBack({ delta: 1 })
}
onLoad(() => {
  getAddressList()
})
</script>

<style lang="scss">
.address-page {
  padding: 30rpx;
  height: 100%;
  background-color: #fff;

  .address-item {
    padding: 20rpx;
    border-bottom: 2px solid #f7f7f7;

    .home-info {
      margin-bottom: 10rpx;

      .default-tag {
        color: rgb(35, 141, 141);
        border: 1px solid rgb(35, 141, 141);
        border-radius: 4rpx;
        margin-left: 10rpx;
      }
    }
  }
}
</style>
