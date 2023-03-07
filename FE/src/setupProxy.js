const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/BE",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
            pathRewrite: {
                '^/BE': '' // URL ^/BE -> 공백 변경
            }
        })
    )
}