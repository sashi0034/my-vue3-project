
import {createRouter, createWebHistory} from "vue-router"


const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../Home.vue")
    },
    {
        path: "/clock",
        name: "SimpleClock",
        component: () => import("../SimpleClock.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

