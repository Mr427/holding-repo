const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: (process.env.NODE_ENV === "development")? "inline-source-map" : false,
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
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: "css-loader",
                        options: {}
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {}
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            }
        ]
    }
};
