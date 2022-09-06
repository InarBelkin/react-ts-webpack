const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths')

module.exports = {
    // Where webpack looks to start building the bundle
    entry: {
        app: './src/index.tsx',
    },
    // Where webpack outputs the assets and bundles
    output: {
        filename: '[name].bundle.js',
        path: paths.build,
        clean: true,
    },

    plugins: [

        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
            title: 'Production',
            template: paths.public + "/index.html",
            filename: 'index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },

            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    }


};
