module.exports = (startTime, endTime, apis) => {
  const messageBody = {
    config: {
      wide_screen_mode: true
    },
    header: {
      template: "red",
      title: {
        content: "⏰  接口告警",
        tag: "plain_text"
      }
    }
  }
  const elements = []
  // const detailedMessageRoute = server + `/api/message?index=${index}&exampleRequestId=` 路由 暂时不用
  apis.forEach(item => {
    elements.push({
      tag: "markdown",
      content: `○ 接口名称：**${item.api}**\n○ 错误信息：**${item.message}**\n○ 来源信息：**${item.source}**\n○ 其他信息：**${item.count}条** / **${item.method}** / **${item.code}**\n○ 错误示例：${item.completeInformation}`
    })
    elements.push({ tag: "hr" })
  })
  elements.push({
    tag: "note",
    elements: [
      {
        tag: "plain_text",
        content: `数据来源：软件研发部自研简易版接口监控平台\n开始时间：${startTime}\n结束时间：${endTime}\n接口环境：${
          process.env.NODE_ENV || "development"
        }`
      }
    ]
  })
  return { elements, ...messageBody }
}
// ${detailedMessageRoute+item.exampleRequestId}
