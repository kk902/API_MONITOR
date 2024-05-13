const Robot = require('../../helper/Robot')
const sortHandleResult = require('./sortHandleResult')
const addDetailHandleResult = require('./addDetailHandleResult')
const {robotHookUrl} = require('../../config/config')
const collectApiCorrespondingData = async (result, startTime, endTime) => {
    const robot = new Robot(process.env.ROBOT_HOOK || robotHookUrl)
    const sortResult = sortHandleResult(result)//对收集的结果进行排序处理
    const addDetailResult = await addDetailHandleResult(sortResult)//对排好序的结果添加完整信息
    const start_time = startTime.getTime();
    const end_time = endTime.getTime();
    robot.sendEmergencyMessage(addDetailResult, start_time, end_time)
    console.log(new Date(end_time), `执行成功，本周期查询到${result?.length || 0}条异常数据`);
}
module.exports = collectApiCorrespondingData
