<template>
  <view class="Cp-container">
    <view class="classify-item" v-for="item in props.list" :key="item.id">
      <image class="icon" :src="item.icon" alt="" />
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
@import '../style/category.scss';
</style>
