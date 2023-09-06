import { createApp } from 'vue'
import App from '@/App.vue'

// 引入清除默认样式
import '@/style/reset.scss'
// 引入全局组件 顶部 底部 
import hospitalTop from '@/components/hospital_TOP/index.vue'
import hosiptalBottom from '@/components/hospital_Bottom/index.vue'
// 引入vue-router核心插件并安装
import router from './router'
// 引入pinia仓库
import pinia from '@/store'
// 引入element-ui插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element插件语言更改
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app =createApp(App)
app.component('HospitalTop',hospitalTop)
app.component('HospitalBottom',hosiptalBottom)
app.use(router)
app.use(ElementPlus,{
    locale:zhCn
})
// 安装pinia仓库
app.use(pinia)
app.mount('#app')


