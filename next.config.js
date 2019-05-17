const withSass = require('@zeit/next-sass')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config, options) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        // Further custom configuration here
        return config;
    }
})