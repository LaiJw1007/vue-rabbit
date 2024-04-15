// 管理用户数据相关
import {defineStore} from 'pinia'
import { ref } from 'vue'
import {loginAPI} from '@/apis/user'
export const useUserStore = defineStore("user",()=>{
    // 用户管理----数据----state
    const userInfo = ref({})
    // 定义获取接口数据的----action-----函数
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        console.log('用户：',res);
        userInfo.value = res.result
    }
    return{
        userInfo,
        getUserInfo
    }
},{
    persist:true //持久化数据
})