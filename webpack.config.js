function buildConfig(env) {
  return require('./webpack.' + env + '.js')(env)
}

module.exports = buildConfig;