const path = require('path');

module.exports = {
    entry: './src/es2015/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map", // Para ver codigo original en opciones de desarrollador del navegador
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
