
#!/bin/bash

echo "🚀 開始手動部署正式環境 (Production)..."

# 1. 下載最新的 Image (確保我們拿到最新的程式碼)
docker pull ghcr.io/boivomitin/nuxt-admin-app-template:latest

# 2. 停止正在跑的舊容器
echo "🛑 停止舊容器..."
docker stop nuxt-prod

# 3. 移除舊容器 (為了讓名字騰出來給新的用)
echo "🗑️ 移除舊容器..."
docker rm nuxt-prod

# 4. 啟動新容器 (注意：這裡要用你設定的 8083 port)
echo "🔥 啟動新容器..."
docker run -d --name nuxt-prod -p 8083:3000 --label com.centurylinklabs.watchtower.enable=false ghcr.io/boivomitin/nuxt-admin-app-template:latest

echo "✅ 正式環境部署完成！請檢查 http://localhost:8083"