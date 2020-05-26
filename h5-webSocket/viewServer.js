//! 展示界面的服务器
const express = require('express')
const app = express()
const PORT = 5000
const HOST_NAME = 'localhost'
const path = require('path')

app.use(express.static(path.join(__dirname,'./client')))

app.listen(PORT,HOST_NAME,() => {
  console.log(`网页展示的url是: http://${ HOST_NAME }:${ PORT }`)
})
