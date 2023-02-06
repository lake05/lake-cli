module.exports = core

const semver = require('semver')
const colors = require('colors/safe')

// require .js/.json/.node
// .js => module.exports/exports
// .json => JSON.parse
// any => .js
const log = require('@lake-cli/log')
const pkg = require('../package.json')
const constant = require('./const')

function core() {
  try {
    checkPackageVersion()
    checkNodeVersion()
  } catch (e) {
    log.error(e.message)
  }
}

function checkNodeVersion() {
  const currentVersion = process.version
  const lowestVersion = constant.LOWEST_NODE_VERSION

  if (!semver.gte(currentVersion, lowestVersion)) {
    throw new Error(
      colors.red(`lake-cli 需要安装 v${lowestVersion} 以上的版本的Node.js`),
    )
  }
}

function checkPackageVersion(params) {
  log.info('cli', pkg.version)
  log.success('test', 'success...')
}
