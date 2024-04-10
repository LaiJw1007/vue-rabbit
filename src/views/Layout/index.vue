<template>
  <div>我是首页
    <!-- 二级路由出口 -->
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>
  </div>
</template>

<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue"
</script>

<style>

</style>