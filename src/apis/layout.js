import httpInstance from "@/utils/http";
// 接口方法
export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}