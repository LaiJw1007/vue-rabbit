// 获取订单详情（以及支付结果）
import request from '@/utils/http'

export const getOrderAPI = (id)=>{
    return request({
        url:`/member/order/${id}`,
    })
}