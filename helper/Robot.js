const generateLarkEmergencyCardMessage = require("./generateLarkEmergencyCardMessage");
const axios = require("axios");
const moment = require("moment")

/**
 * 机器人类，可发送机器人消息
 * @author 
 * @date 2023年04月10日
 * @example const robot = new Robot("HOOK URL"); robot.sendEmergencyMessage([{api,method,code,message,count,exampleRequestId}])
 */
class Robot {

    constructor(robotHookUrl, environment) {
        this.robotHookUrl = robotHookUrl;
        this.environment = environment || "development";
    }


    get robotHookID() {
        if (!this.robotHookUrl) return "";
        const temp = this.robotHookUrl.split("/");
        return temp[temp.length - 1];
    }

    /**
     * 发送紧急消息
     * @param emergencyAPIs List<{api,method,code,message,count,exampleRequestId}>
     * @param start_time 13位时间戳，数字格式
     * @param end_time 13位时间戳，数字格式
     */
    async sendEmergencyMessage(emergencyAPIs, start_time, end_time) {
        if (!this.robotHookID || !emergencyAPIs?.length) return Promise.resolve();
        emergencyAPIs = emergencyAPIs.slice(0, 10);//最多发送前十个API的信息
        const messageBody = generateLarkEmergencyCardMessage(this._dateFormat(start_time), this._dateFormat(end_time), emergencyAPIs);
        return this.fetchLarkServer(messageBody);
    }


    _dateFormat(timestamp) {
        return moment(Number(timestamp)).format("YYYY-MM-DD HH:mm:ss");
    }

    async fetchLarkServer(body) {
        const args = {
            hookId: this.robotHookID,
            secret: "MDz3pARmrEwR8iEBBamG4b",
            msgType: "interactive",
            content: body
        }
        return axios({
            method: "POST",
            url: "",
            data: args
        })
    }
}

module.exports = Robot;
