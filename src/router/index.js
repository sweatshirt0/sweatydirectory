import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import News from '../views/News'

const routes = [
    {
        path: '/news',
        name: 'News',
        component: News,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
