module.exports = {
    runtimeCompiler: false,
    configureWebpack: {
        output: {
            libraryExport: "default"
        },
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000
            }
        }
    },
    devServer: {
        https: false,
        port: 8809,
        open: true,
        disableHostCheck: true
    },
    chainWebpack(config) {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
        config
            .plugin('fork-ts-checker')
            .tap(args => {
                args[0].tsconfig = './tsconfig.json';
                return args
            })
    }
};
