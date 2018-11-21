module.exports = {
    entry: {
        app: `${__dirname}/src/main.js`
    },
    output:{
        filename: "bundle-[hash].js",
        path: `${__dirname}/build`,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                excludes: /node_module/,
                loader: 'babel-loader'
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
