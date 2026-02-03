import { describe, test, expect } from 'vitest'

// 為了方便測試，我們先把函式寫在這裡
// 在真實專案中，通常會把這個函式放在 utils/ 或 composables/ 資料夾再 import 進來
function calculatePrice(price: number, isMember: boolean) {
    return isMember ? price * 0.9 : price;
}

describe('價格計算器', () => {
    test('會員應該獲得九折優惠', () => {
        expect(calculatePrice(100, true)).toBe(88);
    })

    test('非會員應該維持原價', () => {
        expect(calculatePrice(100, false)).toBe(100);
    })
})