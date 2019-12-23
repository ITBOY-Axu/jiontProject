const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('测试')
})
app.listen('3000', () => { console.log('后端服务启动端口号:http://localhost:3000') })