<script setup>
// 定义props
defineProps({
    title:{   //主标题
        type:String
    },
    subTitle:{  //副标题
        type:String
    }
})
</script>

<template>
  <!-- 
    新鲜好物和人气推荐组件的封装
   -->
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 props传入-->
        <h3>
          {{title}}<small>{{subTitle}}</small>
        </h3>
      </div>
      <!-- 主体内容区域 用插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>