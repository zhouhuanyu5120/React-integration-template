const { createProxyMiddleware } = require('http-proxy-middleware');
//  代理
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://robot.yueshang.store/api',
      pathRewrite: {
        "^/api": ""
      },
      changeOrigin: true,
    })
  );
};