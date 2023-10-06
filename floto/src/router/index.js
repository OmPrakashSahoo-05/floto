import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Land from "@/views/Land.vue"
import Sign from "@/views/Sign.vue"
import Demo from "@/views/Demo.vue"
import Signup from "@/views/Signup.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home},
    { path: "/login", component: Login},    
    { path: "/land", component: Land},
    { path: "/sign", component: Sign},
    { path: "/demo", component: Demo},
    { path: "/signup", component: Signup}
  ]
})

export default router
