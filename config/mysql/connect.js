//先引入mysql模块
const mysql = require("mysql")
const { mysqlConfig, mysqlDatabase } = require("./mysqlConfig")

const config = mysqlConfig
//连接数据库服务器
const db = []
mysqlDatabase.forEach(item => {
  config.database = item
  const dbItem = mysql.createConnection(config)
  db.push(dbItem)
})

const mysqlLen = db.length

const mysqlLogs = (index, str, ...conduct) => {
  return new Promise((resolve, reject) => {
    db[index].query(str, [...conduct], (err, result) => {
      if (err) reject(err)
      const finalResult = []
      result.forEach(res => {
        let item = JSON.parse(JSON.stringify(res))
        if (str !== "select * from log where request_id=?")
          item = {
            ...item,
            method: null,
            source: `mysql://${mysqlDatabase[index]}/log`,
            sourceLibrary: "mysql",
            sourceIndex: index
          }
        finalResult.push(item)
      })
      resolve(finalResult)
    })
  })
}

module.exports = { mysqlLogs, mysqlLen }
