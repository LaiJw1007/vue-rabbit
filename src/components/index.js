// 把components中的所有组件都进行全局话注册
// 通过插件的方式
import ImagesView from './ImagesView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentPlugin = {
    install(app){  // 固定方法install  固定参数app
        app.component('XtxImagesView',ImagesView)  //app.component('组件名字',组件配置对象)
        app.component('XtxSku',XtxSku)
    }
}