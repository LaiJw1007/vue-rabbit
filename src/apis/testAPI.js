import httpInstance from "@/utils/http";

export function getCategory(){
    // 返回的是一个promise 这样在调用getCategory时 就可以通过.then拿到结果
    return httpInstance({
        url: 'home/category/head'
    })
}