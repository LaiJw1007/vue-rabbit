// 管理用户数据相关
import {defineStore} from 'pinia'
import { ref } from 'vue'
import {loginAPI} from '@/apis/user'
import {useCartStore} from './cartStore'
import {mergeCartAPI} from '@/apis/cart'
export const useUserStore = defineStore("user",()=>{
    const cartStore = useCartStore()
    // 用户管理----数据----state
    const userInfo = ref({})
    // 定义获取接口数据的----action-----函数
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        console.log('用户：',res);
        userInfo.value = res.result
        // 合并购物车操作
        await mergeCartAPI(cartStore.cartList.map(item=>{
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        // 更新最新列表
        cartStore.updateNewList()
    }

    // 退出时清楚用户信息
    const clearUserInfo = ()=>{
        userInfo.value = {}
        // 执行清楚购物车的action
        cartStore.clearCart()
    }
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true //持久化数据
})