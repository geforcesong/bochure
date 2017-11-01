const path = require('path');

module.exports = {
    entry: './dist/web/views/common/public/ts/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
