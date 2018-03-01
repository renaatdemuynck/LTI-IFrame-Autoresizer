const path = require('path');

module.exports = {
    entry: {
        'tool-provider': './demo/src/tool-provider.js',
        'tool-consumer': './demo/src/tool-consumer.js'
    },
    output: {
        path: path.resolve(__dirname, 'demo/public/scripts'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'lti-iframe-autoresizer': path.resolve(__dirname, 'src/autoresizer.js')
        }
    }
};
