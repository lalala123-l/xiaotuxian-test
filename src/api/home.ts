import type { BannerItem, ClassifyItem } from '@/types/home'
import { http } from '@/utils/http'

//首页广告区
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: { distributionSite },
  })
}

//获取分类的信息
export const getClassifListyAPI = () => {
  return http<ClassifyItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

//获取热门推荐
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
