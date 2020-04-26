
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function () {

    var configs = require('./development.js')();

    configs.forEach(function (config) {
        config.devtool = false;
        if (config.name == "plugin")
            config.output.filename = '[name].min.js';

        // config.output.publicPath = 'https://lab.morioh.com/v-lightbox/';

        // if (config.target == "node") {
        //     config.plugins.push(new CleanWebpackPlugin({ default: ['dist/*'] }));

        // };

    });

    return configs;
}