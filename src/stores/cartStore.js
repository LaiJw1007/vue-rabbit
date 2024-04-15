// 封装购物车模块

import {defineStore} from 'pinia'
import {ref,computed} from 'vue'

export const useCartStore = defineStore('cart',()=>{
    // 1. 定义state 
    const cartList = ref([])
    // 定义action
    // 加入购物车
    const addCart = (goods)=>{
        // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item)=>goods.skuId === item.skuId )
        if(item){  // 购物车里的这个商品已存在
            item.count = item.count + goods.count
        }else{
            cartList.value.push(goods)
        }
    }
    // 删除购物车action
    const delCart = (skuId)=>{
        // 思路：1. 找到要删除项的下标值 -splice
        const idx = cartList.value.findIndex((item)=>skuId === item.skuId)
        cartList.value.splice(idx,1)
        // 2. 使用数组中的过滤方法 -filter
        // cartList.value  = cartList.value.filter((item)=>item.skuId != skuId)
        // console.log('faar:',farr); 
    }

    // 单选功能
    const singleCheck = (skuId,selected)=>{
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item)=>item.skuId === skuId)
        item.selected = selected
    }

    // 全选功能
    const allCheck = (selected)=>{
        cartList.value.forEach(item=>item.selected = selected)
    }

    // 计算属性
    // 1. 总数量 所有项的count之和
    const allCount = computed(()=>cartList.value.reduce((prev,cur)=>prev+cur.count ,0))
    // 2. 总价 所有项的count*price之和
    const allPrice = computed(()=>cartList.value.reduce((prev,cur)=>prev+cur.count * cur.price ,0))
    // 3. 已选择数量
    const selectedCount = computed(()=>cartList.value.filter(item=>item.selected).reduce((prev,cur)=>prev+cur.count ,0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(()=>cartList.value.filter(item=>item.selected).reduce((prev,cur)=>prev+cur.count * cur.price ,0))
    // 是否全选 所有sku的selected是否为true
    const isAll = computed(()=>cartList.value.every((item)=>item.selected))
    return{
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck
    }
},{
    persist:true
})