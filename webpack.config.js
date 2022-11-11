const path = require("path");
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        client: {
            progress: true,
        },
        compress: false,
        host: "127.0.0.1",
        port: 8080
    }
};
