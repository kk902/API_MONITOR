const ejs = require('ejs')
const path = require('path')
const logs = require('../config/mongodb/connect')
const showMessage = (req,res)=>{
    const index = req.query.index
    const exampleRequestId = req.query.exampleRequestId
    logs[index].find({_id: exampleRequestId}).then(result=>{
        res.send(result)
        //调用此方法 args，data 可能会缺失
        // let sendResult = []
        // ejs.renderFile(path.join(__dirname,'index.html'),{sendResult: result[0].toJSON()}, (err,str)=>{
        //     sendResult = str
        // }); 
        // res.send(sendResult)
    })
}
module.exports = showMessage