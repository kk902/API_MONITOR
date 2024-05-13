const {specifyValueSort} = require('../../config/config')
const sortHandleResult = (result)=>{
    const apiMap = new Map();
    let indexApi = 0
    let finalResult = []
    //去重
    result.forEach(({_id,method,api,code,message,success,create_time,source,sourceLibrary,sourceIndex})=>{
        
        let item = {_id,method,api,code,message,success,create_time,source,sourceLibrary,sourceIndex,count: 1,completeInformation: null}
        if(apiMap.has(api)) {
            const indexFinalResult = apiMap.get(api)
            finalResult[indexFinalResult].count ++
        }
        if(!apiMap.has(api)) {
            apiMap.set(api,indexApi++)
            finalResult.push(item)
        }
    })
    //排序
    finalResult.sort(specifyValueSort('count',-1))
    return finalResult
}
module.exports = sortHandleResult
    