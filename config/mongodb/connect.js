//先引入mongoose模块
const mongoose = require("mongoose")
const mongoConfig = require("./mongoConfig")

const mongoUrl = process.env.MONGODB_URL || "mongodb:27017/"

// 创建Schema
const schema = new mongoose.Schema({
  success: { type: Boolean },
  api: { type: String },
  ip: { type: String },
  method: { type: String },
  url: { type: String },
  code: { type: String },
  message: { type: String },
  data: { type: String },
  request_time: { type: String },
  response_time: { type: String },
  version: { type: String },
  uuid: { type: String },
  platform_version_name: { type: String },
  platform_version_code: { type: String },
  platform_version_weapp: { type: String },
  platform_version_sdk: { type: String },
  api_chann: { type: String },
  channel: { type: String },
  tenancy_id: { type: String },
  source: { type: String },
  t: { type: String },
  create_time: { type: Date }
})
//连接数据库服务器
const logs = []
mongoConfig.forEach(item => {
  const db = mongoose.createConnection(mongoUrl + item.mongodb + process.env.MONGO_PARAMS || "")
  db.on("connected", err => {
    if (err) console.log(`连接mongo数据库${item.mongodb}失败：${err}`)
    else console.log(`连接mongo数据库${item.mongodb}成功！`)
  })
  const log = db.model(item.collection, schema, item.collection)
  logs.push(log)
})

module.exports = logs
