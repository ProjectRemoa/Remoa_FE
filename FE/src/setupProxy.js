const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/BE",
    createProxyMiddleware({
      // target: "http://54.180.159.30:8080",
      target: "http://52.78.43.73:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/BE": "",
      },
    })
  );
};
