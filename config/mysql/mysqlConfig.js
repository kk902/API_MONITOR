const mysqlConfig = {
  host: process.env.MYSQL_HOST || "",
  port: process.env.MYSQL_PORT || "",
  user: process.env.MYSQL_USER || "",
  password: process.env.MYSQL_PASSWORD || ""
}
const mysqlDatabase = ["dse", "store_operation_manager"]

module.exports = { mysqlConfig, mysqlDatabase }
