import '@/assets/common.scss'
import router from "@/router";
import {createApp} from 'vue'
import App from '@/App.vue'

/* 创建应用 */
const app = createApp(App)
app.use(router)
app.mount('#app')