const path = require('path')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.hello/,
            use: [
                {loader: path.resolve('./src/hello-loader.js')}
            ]
        }]
    }
}