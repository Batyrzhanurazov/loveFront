import { createRouter, createWebHistory } from "vue-router"
import { Routes, RoutesToPath } from "./routes.enum"
import {useUserStore} from "@/stores/user.ts";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: RoutesToPath[Routes.AuthPage],
            name: Routes.AuthPage,
            component: () => import("../views/AuthPage.vue"),
        },
        {
            path: RoutesToPath[Routes.AdminPage],
            name: Routes.AdminPage,
            component: () => import("../views/AdminPage.vue"),
            meta: { requiresAuth: true, role: 'Admin' }
        },
        {
            path: RoutesToPath[Routes.LovePage],
            name: Routes.LovePage,
            component: () => import("../views/AmiraPage.vue"),
            meta: { requiresAuth: true }
        },
    ]
})

router.beforeEach(async (to) => {
    const userStore = useUserStore()

    await userStore.init()

    if (to.meta.requiresAuth && !userStore.role) {
        return { name: Routes.AuthPage }
    }

    if (to.meta.role && to.meta.role !== userStore.role) {
        return { name: Routes.LovePage }
    }

    if (to.name === Routes.AuthPage && userStore.role) {
        if (userStore.role === "Admin") {
            return { name: Routes.AdminPage }
        }

        return { name: Routes.LovePage }
    }

    return true
})
export default router