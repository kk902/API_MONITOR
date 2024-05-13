const task = require('./task/monitorTask')//添加要监听的接口任务
const MONITOR_TIME = 10 * 1000//定义监听频率
const schedule = ()=>{
    setInterval(task,MONITOR_TIME)
    // setTimeout(task,0)
}
module.exports = schedule
