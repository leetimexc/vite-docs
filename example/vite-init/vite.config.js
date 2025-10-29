console.error('ssss vite config')
export default {
    base: './',
    // 配置选项
    define: {
        __APP_VERSION__: JSON.stringify('1.0.0'),
        __API_URL__: "window.__backend_api_url"
    }
}