// 封装购物车模块

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./userStore";
import {inserCartAPI, findNewCartListAPI, delCartAPI} from '@/apis/cart'

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token); //是否登录  计算属性返回值为一个计算属性ref
    // 1. state
    const cartList = ref([]);
    // 2. action

    // 获取最新购物车列表action
    const updateNewList = async ()=>{
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }


    // 加入购物车
    const addCart = async (goods) => {
      const {skuId,count} = goods
      if (isLogin.value) { // 登录之后的加入购物车逻辑
          await inserCartAPI({skuId,count})
          updateNewList()
      } else { // 本地购物车逻辑
        // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) { // 购物车里的这个商品已存在
          item.count = item.count + goods.count;
        } else {
          cartList.value.push(goods);
        }
      }
    };

    // 删除购物车action
    const delCart = async (skuId) => {
      if(isLogin.value){
        await delCartAPI([skuId])
        updateNewList()
      }else{
        // 思路：1. 找到要删除项的下标值 -splice
        const idx = cartList.value.findIndex((item) => skuId === item.skuId);
        cartList.value.splice(idx, 1);
        // 2. 使用数组中的过滤方法 -filter
        // cartList.value  = cartList.value.filter((item)=>item.skuId != skuId)
        // console.log('faar:',farr);
      }
      
    };


    // 清除购物车
    const clearCart = ()=>{
      cartList.value = []
    }

    

    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    // 全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    // 计算属性
    // 1. 总数量 所有项的count之和
    const allCount = computed(() =>
      cartList.value.reduce((prev, cur) => prev + cur.count, 0)
    );
    // 2. 总价 所有项的count*price之和
    const allPrice = computed(() =>
      cartList.value.reduce((prev, cur) => prev + cur.count * cur.price, 0)
    );
    // 3. 已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((prev, cur) => prev + cur.count, 0)
    );
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((prev, cur) => prev + cur.count * cur.price, 0)
    );
    // 是否全选 所有sku的selected是否为true
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      clearCart,
      updateNewList
    };
  },
  {
    persist: true,
  }
);
