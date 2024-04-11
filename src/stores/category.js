import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from '@/apis/layout';

// 存放公共数据、方法
export const useCategoryStore = defineStore("category", () => {
  // 导航列表的数据管理
  // 渲染模板
  const categoryList = ref([]);   //state 导航列表数据
  const getCategory = async () => {   //action 获取导航数据的方法
    // 返回的是promise 所以加await
    const res = await getCategoryAPI();
    console.log(res);
    categoryList.value = res.result; //通过打印查看数组存放在result里
  }
  return{
    categoryList,
    getCategory
  }
});
