const { resolve } = require("path");
const plugins = require("./plugins");

const outputDir = resolve(__dirname, "../build");
const outputFilename = "ganache-core.docker.cli1.js";
module.exports = {
  entry: [
    "./cli1.js"
  ],
  target: "node",
  output: {
    path: outputDir,
    filename: outputFilename,
    library: "Ganache-Cli1",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "shebang-loader"
      }
    ]
  },
  resolve: {
    alias: {
      "./build/ganache-core.node.cli1.js": "./lib.js"
    }
  },
  plugins: plugins(outputDir, outputFilename),
  mode: "production"
};
