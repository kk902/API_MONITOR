const getTime = require('../../config/time/time')
const {filterDataDuringCreationTime} = require('../../config/config')
const collectApiCorrespondingData = require('./collectApiCorrespondingData')
const selectMongo = require('./selectMongo')
const selectMysql = require('./selectMysql')

const monitorTask = async ()=>{
    const endTime = new Date()
    const startTime = getTime(endTime,-10) //获取十秒前的时间
    const filterByCreateTime = filterDataDuringCreationTime(startTime, endTime)
    let mongoResult = [], mysqlResult = []
    //筛选mongo错误消息
    mongoResult = await selectMongo(filterByCreateTime)
    //筛选mysql错误消息
    mysqlResult = await selectMysql(startTime,endTime)
    
    const finalResult = [...mongoResult,...mysqlResult]
    await collectApiCorrespondingData(finalResult,startTime,endTime)
}

module.exports = monitorTask
