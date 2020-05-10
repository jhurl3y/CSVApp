const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/react"],
                    },
                },
            },
            {
                // jinja/nunjucks templates
                test: /\.jinja$/,
                loader: "jinja-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new CleanWebpackPlugin(), new ManifestPlugin()],
};
