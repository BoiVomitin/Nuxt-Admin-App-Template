export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()

    // 如果已經登入，且嘗試訪問登入頁，重導到首頁
    if (to.path === '/login' && authStore.isAuthenticated) {
        return navigateTo('/')
    }

    // 如果未登入，且訪問非登入頁，重導到登入頁
    if (to.path !== '/login' && !authStore.isAuthenticated) {
        return navigateTo('/login')
    }
})
