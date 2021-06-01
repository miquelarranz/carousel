const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'amd',
		library: 'reactApp',
	},
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
		modules: [__dirname, 'node_modules'],
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
	},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};