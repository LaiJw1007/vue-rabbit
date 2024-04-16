<template>
  <div>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <!--二级路由出口 添加key 破坏复用机制 强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView/>
    <LayoutFooter/>
  </div>
</template>

<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue"
import LayoutFixed from "./components/LayoutFixed.vue";
// 触发获取导航列表的aiction
import { useCategoryStore } from "@/stores/categoryStore";
import { onMounted } from "vue";
const categoryStore = useCategoryStore()  //实例对象
onMounted(()=>categoryStore.getCategory())  //公共组件触发action，分类列表已经存到pinia里
</script>

<style>

</style>