'use strict';

const path = require('path');

console.log(path.join(process.cwd(), './.babelrc'))

module.exports = {
    entry: './src/pages/index/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test : /\.jsx?$/,
                loader : 'babel-loader',
                options: {
                    configFile: path.join(process.cwd(), './.babelrc')
                }
            },
            {
                test: /\.less?$/,
                use: [
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            includePaths: [path.join(process.cwd(), "./src")]
                        }
                    }
                ]
            }
        ]
    }
};
