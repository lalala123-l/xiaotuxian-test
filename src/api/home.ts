import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

//首页广告区
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: { distributionSite },
  })
}
