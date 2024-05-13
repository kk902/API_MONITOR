const mongoLogs = require('../../config/mongodb/connect')
const {mysqlLogs} = require('../../config/mysql/connect')

const addDetailHandleResult = async (result) => {
    let finalResult = []
    for(const res of result) {
        const index = res.sourceIndex
        const id = res._id
        const sql = `select * from log where request_id=?`
        let item = res
        if(res.sourceLibrary === 'mongo') {
            item.completeInformation = JSON.stringify(await mongoLogs[index].find({_id: id}))
        }
            
        if(item.sourceLibrary === 'mysql') {
            const array = await mysqlLogs(index,sql,id)
            item.completeInformation = JSON.stringify(array[0])
        }
        finalResult.push(item)
    }
    return finalResult
}
module.exports = addDetailHandleResult