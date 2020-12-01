
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    node: {
        global: false
    },
    module: {
        rules: [
            {
                test: /\.html/,
                use: [
                    "html-loader"
                ]
            }
        ]
    }
};
