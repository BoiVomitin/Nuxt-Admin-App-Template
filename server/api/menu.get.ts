export default defineEventHandler((event) => {
    // 模擬從資料庫取得選單結構
    return [
        {
            id: '1',
            label: '系統管理',
            icon: 'settings', // 這裡的 icon 名稱通常對應前端的 icon component 或 class
            children: [
                { id: '1-1', label: '使用者管理', path: '/users' },
                { id: '1-2', label: '角色權限', path: '/roles' }
            ]
        },
        {
            id: '2',
            label: '報表中心',
            icon: 'chart',
            children: [
                { id: '2-1', label: '銷售報表', path: '/reports/sales' },
                { id: '2-2', label: '庫存報表', path: '/reports/inventory' }
            ]
        }
    ]
})
