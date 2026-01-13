<template>
  <view class="Cp-container">
    <view class="classify-item" v-for="item in props.list" :key="item.id">
      <img :src="item.icon" alt="" />
      <text>{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { ClassifyItem } from '@/types/home'

// 定义 props 接收
const props = defineProps<{
  list: ClassifyItem[]
}>()
</script>
<style scoped lang="scss">
.Cp-container {
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;

  .classify-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      display: inline-block;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
