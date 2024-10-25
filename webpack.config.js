const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production': 'development',
        entry: './assets/js/script.js',  // Your JS entry file
        output: {
            filename: 'script.min.js',  // Minified JS output file
            path: path.resolve(__dirname, 'dist'),  // Output folder
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],  // CSS loader
        },
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isProduction ? 'style.min.css' : 'style.css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),  // Minifies JS
            new CssMinimizerPlugin(),  // Minifies CSS
        ],
    },
  };
};