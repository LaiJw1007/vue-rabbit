import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from '@/apis/layout';

// 存放公共数据、方法
export const useCategoryStore = defineStore("category", () => {   // '模块名'，逻辑函数
  // 导航列表的---数据---管理
  const categoryList = ref([]);   //-------state---------- 导航列表数据
  const getCategory = async () => {   //-------action-------- 获取导航数据的方法
    const res = await getCategoryAPI();  // 返回的是promise 所以加await
    console.log('categoryList:',res);
    categoryList.value = res.result; //通过打印查看数组存放在result里
  }
  return{
    categoryList,
    getCategory
  }
});
