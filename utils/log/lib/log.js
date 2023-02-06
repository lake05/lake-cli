const log = require('npmlog')

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'
log.heading = 'lake' // 修改前缀
log.headingStyle = { fg: 'black', bg: 'yellow' }
log.addLevel('success', 2000, { fg: 'green', bold: true })

module.exports = log
