// 封装分类数据业务相关代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute(); //获取route实例
  const getCategory = async (id = route.params.id) => {
    //路由初始化参数：即当前页面参数
    console.log("route:" + route);
    // const res = await getCategoryAPI(route.params.id); // 接口定义params传参
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  // 目标：在路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id); // 存在问题，使用最新的路由参数请求最新的分类数据
  });
  return {categoryData}
}
