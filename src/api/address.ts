import { http } from '@/utils/http'

export const getAddressListAPI = () => {
  return http({
    url: '/member/address',
    method: 'GET',
  })
}
