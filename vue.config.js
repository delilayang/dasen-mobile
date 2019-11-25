let path = require('path');

module.exports = {
    baseUrl: './',
    pwa: {
        name: 'mobileV2',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent',
        themeColor: '#235cb3ed'
    },
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                includePaths: ["src/style"]
            }
        }
    }
    /*
    chainWebpack: (config) => {
        config
        .module
        .rule('scss')
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
            includePaths: ["src/style"]
        })
    }
    */
    /*
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    

   chainWebpack: config => {
    config.module
        .rule('i18n')
        .resourceQuery(/blockType=i18n/)
        .use('i18n')
            .loader('@kazupon/vue-i18n-loader')
            .end()
        .use('yaml-loader')
            .loader('yaml-loader')
            .end();
    }
    */
}