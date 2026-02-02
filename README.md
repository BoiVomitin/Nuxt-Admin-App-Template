# Nuxt 3 Admin Template

這是一個使用 Nuxt 3 實作的全端 Vue 專案樣板，整合了後端 Server Routes 與前端功能。

## 主要功能

1.  **全端整合**:
    - 使用 Nuxt Server Routes (`server/api/`) 實作後端 API。
    - 前端使用 `useFetch` 直接溝通內部 API。

2.  **登入驗證**:
    - **Backend**: `server/api/auth/login.post.ts` 驗證帳密並回傳 Token。
    - **Frontend**: Pinia Store (`stores/auth.ts`) 使用 `useCookie` 儲存 Token，達成 SSR 相容的狀態持久化。
    - **Middleware**: `middleware/auth.global.ts` 全域路由守衛，防止未登入存取。

3.  **動態選單**:
    - **Backend**: `server/api/menu.get.ts` 提供選單資料。
    - **Frontend**: Sidebar 元件在 Server 端渲染時即抓取選單資料。

## 專案結構

- `server/api/`: 後端 API (登入、選單)。
- `stores/`: Pinia 狀態管理。
- `layouts/`: 包含 Header 與 Sidebar 的主要版面。
- `pages/`: 頁面路由 (`login`, `index`)。
- `middleware/`: 路由守衛。

## 快速開始

1.  安裝依賴:
    ```bash
    npm install
    ```

2.  啟動開發伺服器:
    ```bash
    npm run dev
    ```

3.  瀏覽 `http://localhost:3000`，使用 `admin` / `admin` 登入。
