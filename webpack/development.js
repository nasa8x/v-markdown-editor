var www = require('./www');
var plugin = require('./plugin');

module.exports = function (env) {
  return [plugin, www];
}
