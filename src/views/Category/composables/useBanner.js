// 封装banner轮播图相关的业务代码
import {ref,onMounted} from 'vue'
import { getBannerAPI } from "@/apis/home";
// 获取banner轮播图
export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result; //通过打印查看数组存放在result里
  };
  onMounted(() => getBanner());
  return {bannerList}
}