/* eslint-disable */
module.exports = {
    devServer: {
        hot: true,
        hotOnly: true,
        disableHostCheck: true,
        historyApiFallback: true,
        // public: '0.0.0.0:8000',
        port: 8000,
    },
    chainWebpack: config => {
        config.optimization.splitChunks({
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\\/]node_modules[\\\\/]/,
                    priority: -10,
                    chunks: 'initial',
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true,
                },
            },
        });
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });
    },
    configureWebpack: {
        output: {
            filename: process.env.NODE_ENV === 'production'
                ? 'js/[name].[chunkhash].js'
                : 'js/[name].[hash].js',
            chunkFilename: process.env.NODE_ENV === 'production'
                ? 'js/[name].[chunkhash].js'
                : 'js/[name].[hash].js',
        },
    },
    pluginOptions: {
      lintStyleOnBuild: false,
      stylelint: {}
    }
};
