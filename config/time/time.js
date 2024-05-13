//获取指定时间，参数为时间，秒数
const getTime = (date=new Date(),seconds=0)=>{ 
    const time = date.getTime() + seconds * 1000
    return new Date(time)
}
module.exports = getTime