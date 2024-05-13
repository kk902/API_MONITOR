const express = require('express')
const router = express.Router()

//导入需要的处理函数模块
const showMessage = require('./showMessage')

// 发布文章的路由
router.get('/message', showMessage)

module.exports = router