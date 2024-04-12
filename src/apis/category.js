import request from '@/utils/http'

export function getCategoryAPI(id){
    return request({
        url:'/category',
        params:{   //详情看接口文档
            id
        }
    })
}