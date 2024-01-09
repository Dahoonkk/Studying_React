const path = require("path");

module.exports = {
    mode: 'development',

    // 시작점
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },

    // 웹팩 작업을 통해 생성된 결과물
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    }
}