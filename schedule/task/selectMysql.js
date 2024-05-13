const {mysqlKnownHighRiskLogicalErrors} = require('../../config/config')
const {mysqlLogs,mysqlLen} = require('../../config/mysql/connect')
const selectMysql = async (...conduct) => {
    const sql = `select api,code,message,success,create_time,request_id as _id from log where success=-1 && create_time >= ? && create_time< ? && message REGEXP ?`
    const finalResult = [];
    for(let index=0;index<mysqlLen;index++) {
        const result = await mysqlLogs(index,sql,...conduct, mysqlKnownHighRiskLogicalErrors)
        finalResult.push(...result)
    }
    return finalResult
}
module.exports = selectMysql