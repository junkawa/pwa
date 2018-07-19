module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/index.js'
    },
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle.js'
    }
};
