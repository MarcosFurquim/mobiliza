const path = require("path");
const { dirname } = require("path");
module.exports = {
  mode: "production",
  entry: {
    scripts: "./assets/scripts/scripts.js",
  },
  output: {
    path: __dirname + "/assets/scripts/",
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + "/assets/scripts/",
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
  },
};
