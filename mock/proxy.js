var api = require('./api')

const target = 'http://doctor.hotfix.gengmei.cc'
// const target = 'http://localhost:10086'
// const target = 'http://doctor.hotfix1.gengmei.cc'

// 可以修改请求内容
const onProxyReq = proxyReq => {}

module.exports = api.reduce((result, curr) => {
    result[curr] = {
        target,
        onProxyReq,
        changeOrigin: true
    }
    return result
}, {})
