const mongoLogs = require('../../config/mongodb/connect')
const mongoSource = require('../../config/mongodb/mongoConfig')
const {knownHighRiskLogicalErrors,successStatus} = require('../../config/config')
const selectMongo = async (filterByCreateTime) => {
    let finalResult = []
    for(let index=0;index<mongoLogs.length;index++) {
        let result = await mongoLogs[index]
        .find({...filterByCreateTime,...knownHighRiskLogicalErrors,...successStatus})
        .select('api method code message success create_time _id')
        //筛出来的每一条数据都放在同一个数组里
        for(const item of result) {
            item.source = 'mongo://' + mongoSource[index].mongodb + '/' + mongoSource[index].collection
            item.sourceLibrary = 'mongo'
            item.sourceIndex = index
            finalResult.push(item)
        }
    }
    return finalResult
}
module.exports = selectMongo
