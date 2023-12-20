const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

  
  app.use(
    "/BE",
    createProxyMiddleware({
      target: "http://54.180.159.30:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/BE": "", // URL ^/BE -> 공백 변경
      },
    })
  );

  app.use(
    createProxyMiddleware("/cnet/openapi", {
      target: "https://www.career.go.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/api/university": "",
      },
    })
  );
};
