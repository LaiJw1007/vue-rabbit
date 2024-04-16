// 封装倒计时逻辑函数
import dayjs from 'dayjs'
import { ref , computed, onUnmounted} from "vue"
export const useCountDown = ()=>{
    // 1. 响应式数据
    let timer = null
    const time = ref(0)
    // 格式化时间 为xx分xx秒
    const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    // 2. 开启倒计时的函数
    const start = (currentTime)=>{
        // 开始倒计时逻辑
        // 核心逻辑的编写：每隔1s减1
        time.value = currentTime   // 不能直接用formatTime
        timer = setInterval(()=>{
            time.value--
        },1000)
    }
    // 组件卸载时清除定时器  
    onUnmounted(() => {  
        timer && clearInterval(timer)  
      });   
    
    // 4. 重置倒计时的函数  
    const reset = (totalSeconds) => {  
      time.value = totalSeconds; // 重置倒计时时间  
    };  
    
    return {  
      formatTime,  
      start,  
      reset // 可以选择性地暴露 reset 函数  
    };
}