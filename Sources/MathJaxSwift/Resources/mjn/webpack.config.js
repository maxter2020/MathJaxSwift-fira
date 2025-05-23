var path = require('path');

module.exports = {
    entry: {
        chtml: "./converters/chtml.js",
        mml:   "./converters/mml.js",
        svg:   "./converters/svg.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        library: "[name]",
        libraryTarget: "var"
    },
    resolve: {
        alias: {
            // Explicitly prefer Fira font over Modern font
            'mathjax-font': path.resolve(__dirname, 'node_modules/mathjax-fira-font')
        }
    },
    mode: "production"
};