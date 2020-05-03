const  {
    createProxyMiddleware
} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/orange",createProxyMiddleware({
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/orange":""
        }
    }))
}