# --- 第一階段：建置環境 (Builder) ---
FROM node:20-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 1. 先複製 package.json 和 lock 檔 (利用 Docker Cache 加速安裝)
COPY package*.json ./

# 2. 安裝所有套件 (包含 devDependencies)
RUN npm install

# 3. 複製剩餘的所有程式碼
COPY . .

# 4. 執行 Nuxt 建置 (產出 .output 資料夾)
RUN npm run build

# --- 第二階段：正式環境 (Production) ---
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 從第一階段複製編譯好的 .output 資料夾
COPY --from=builder /app/.output ./.output

# 設定環境變數 (讓 Nuxt 監聽所有 IP，而不只是 localhost)
ENV HOST=0.0.0.0
ENV PORT=3000

# 暴露 Port 3000
EXPOSE 3000

# 啟動指令 (指向 Nitro 伺服器入口)
CMD ["node", ".output/server/index.mjs"]