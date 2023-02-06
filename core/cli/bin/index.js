#! /usr/bin/env node

const importLocal = require('import-local')

if (importLocal(__filename)) {
  require('npmlog').info('cil', '正在使用 lake-cli local version')
} else {
  // require('')
}

require('../lib/index')()
