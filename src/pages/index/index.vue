<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//  首页-热门推荐数据类型
const homehotList = ref<HotItem[]>([])
const getHotItemData = async () => {
  const res = await getHomeHotAPI()
  homehotList.value = res.result
}

// 生命周期函数,页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotItemData()
})

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底
const onScrolltolower = () => {
  // console.log('滚动触底啦')
  guessRef.value?.getMore()
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 前台页面 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 推荐页面 -->
    <HotPanel :list="homehotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
