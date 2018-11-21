const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: `${__dirname}/src/main.js`
    },
    output:{
        filename: "bundle-[hash].js",
        path: `${__dirname}/build`,
        publicPath: "/"
    },
    plugins: [
        new HTMLPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                excludes: /node_module/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract(
                    [
                        "css-loader", 
                        "sass-loader"
                    ]
                )
            }
        ]
    }
};
