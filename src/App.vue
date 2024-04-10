<script setup>

</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView/>
  <div class="test">
    test scss
  </div>
</template>

<style scoped lang="scss">
  .test{
    // vite config配置了自动按需导入
    color:$priceColor
  }
</style>
