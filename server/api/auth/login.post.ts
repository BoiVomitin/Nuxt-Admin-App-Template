export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { username, password } = body

    // 模擬後端驗證邏輯
    if (username === 'admin' && password === 'admin') {
        return {
            success: true,
            token: 'mock-nuxt-jwt-token',
            user: {
                username: 'admin',
                role: 'administrator',
                name: '系統管理員'
            }
        }
    } else {
        throw createError({
            statusCode: 401,
            statusMessage: '帳號或密碼錯誤'
        })
    }
})
