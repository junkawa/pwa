module.exports = {
    mode: 'production',
    entry: {
        app: './src/js/index.js'
    },
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle.js'
    }
};
