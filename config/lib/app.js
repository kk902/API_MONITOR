// 导入 express
const express = require('express')
// 创建服务器的实例对象
const app = express()

app.use(express.urlencoded({ extended: false }))

//接口跨域
const cors = require('cors')
app.use(cors())

app.set('view engine','ejs')

//导入定时模块
const schedule = require('../../schedule/schedule')

//导入router
const router = require('../../router/router')
app.use('/api',router)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  if(err) res.send(err)
})

module.exports.start = ()=>{
  // 启动服务器
  app.listen( process.env.PORT || 3008, () => {
    schedule()
    console.log('Schedule: Start');
  })
}

