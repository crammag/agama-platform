
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');


module.exports = {

    devtool: 'source-map',

    context: resolve(__dirname, 'src'),

    entry: './index.ts',

    output: {
        filename: 'agama.platform.js',
        path: resolve(__dirname, 'dist'),
        library: ['agama', 'platform'],
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.ts?$/,
                use: 'awesome-typescript-loader'
            }
        ]
    },

    node: {
        process: false
    },

    plugins: [
        new CheckerPlugin()
    ]

};
