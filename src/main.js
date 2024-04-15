// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from './directives'
import {componentPlugin} from '@/components'
// 判断是否进入视口区域


// 测试接口函数
// import { getCategory } from './apis/testAPI' 
// getCategory().then(res=>{
//     console.log(res);
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(lazyPlugin)  // 引入懒加载指令插件并注册 install执行
app.use(componentPlugin)   //全局组件注册