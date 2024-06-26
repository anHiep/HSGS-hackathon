const path = require('path');

module.exports = {
    entry: './src/index.js', // adjust entry point based on your project
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    "child_process": false
    // Add any other webpack configurations you need
};
