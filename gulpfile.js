const { src, dest, parallel } = require('gulp')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')

function js(){
    return src('./src/js/**/*.ts')
        .pipe(webpackStream({
            output:{
                filename: 'static/js/bundle.js'
            },
            resolve:{
                extensions:['.ts', '.js', '.json']
            },
            module:{
                rules:[
                    {
                        test:/\.ts$/,
                        loader:'ts-loader',
                        exclude: /node_modules/
                    }
                ]
            },
            mode:'production'
        }), webpack)
        .pipe(dest('./dist'))
}

exports.js = js
exports.default = parallel(js)