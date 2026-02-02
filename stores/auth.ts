import { defineStore } from 'pinia'

interface UserInfo {
    username: string
    role: string
    name: string
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<UserInfo | null>(null)
    // 使用 useCookie 讓 token 可以在 SSR 與 Client 端同步
    const token = useCookie<string | null>('auth_token')

    const isAuthenticated = computed(() => !!token.value)

    async function login(username: string, password: string) {
        try {
            const { data, error } = await useFetch('/api/auth/login', {
                method: 'POST',
                body: { username, password }
            })

            if (error.value) {
                throw new Error(error.value.statusMessage || '登入失敗')
            }

            if (data.value && data.value.success) {
                token.value = data.value.token
                user.value = data.value.user
                return true
            }
            return false
        } catch (e) {
            console.error(e)
            return false
        }
    }

    function logout() {
        token.value = null
        user.value = null
        navigateTo('/login')
    }

    return {
        user,
        token,
        isAuthenticated,
        login,
        logout
    }
})
