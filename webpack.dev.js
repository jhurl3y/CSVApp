const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "[name].js",
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
});
