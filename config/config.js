// const banuUrl = 'http://scpcs.banu.cn:6625'

//根据指定值升降序 1升序 -1降序
const specifyValueSort = (value,order=1)=>{
    return function(first,second){
        return (first[value] - second[value]) * order
    }
}

const server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + (process.env.HOST || '127.0.0.1') + ':' + (process.env.PORT || '3008')

//筛选指定创建时间内的数据
const filterDataDuringCreationTime = (startTime, endTime) => {
    return {
        create_time: {
            $gte: startTime,
            $lt: endTime
        }
    }
}

//筛选message的错误信息
const knownHighRiskLogicalErrors = {
    message: {
        $in: [
            /^Cast to string failed for value/i,
            /^Cast to Number failed for value/i,
            /is not defined$/i,
            /^Cannot read property/i,
            /^Request failed with status code/i,
            /^invalid code/i,
            /^connect ECONNREFUSED/i,
            /is not a function$/i,
            /Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer/i
        ]
    }
}

//筛选message的错误信息
const mysqlKnownHighRiskLogicalErrors = 
'Cast to string failed for value|Cast to Number failed for value|is not defined|Cannot read property|Request failed with status code|invalid code|connect ECONNREFUSED|is not a function|Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'

const successStatus = {success: false}
const robotHookUrl = ''//自动化接口测试/监控 群机器人
// const robotHookUrl = ''//test 群机器人

module.exports = {specifyValueSort, server, filterDataDuringCreationTime, knownHighRiskLogicalErrors, successStatus,robotHookUrl,mysqlKnownHighRiskLogicalErrors}
