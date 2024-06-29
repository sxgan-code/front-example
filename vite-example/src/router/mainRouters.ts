import type {RouteRecordRaw} from "vue-router";

const mainRouters: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'root',
        redirect: '/main',
    },
    {
        path: '/main',
        name: 'main',
        component: () => import("@/views/MainPage.vue"),
    },
]
export default mainRouters

