// webpack.config.js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const SOURCE_DIR = path.resolve(__dirname, "src");
const TEMPLATE = path.resolve(SOURCE_DIR, "index.html");
const ENTRYPOINT = path.resolve(SOURCE_DIR, "index.jsx");
const BUILD_DIR = path.resolve(__dirname, "build");

// Default mode to development
process.env["NODE_ENV"] = process.env["NODE_ENV"] || "development";

// Plugin for injecting js into index.html
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: TEMPLATE,
  filename: "index.html",
  inject: "head"
});

// ENV plugin - loads .env and current environment
const ENVPlugin = new Dotenv();

/************************** DEFAULT CONFIG **************************/

const default_config = {
  entry: ["@babel/polyfill", ENTRYPOINT],
  mode: process.env["NODE_ENV"],
  resolve: {
    extensions: [ ".js", ".jsx", ".css", ".scss", ".sass" ],
    alias: {
      "@root": __dirname, // avoids relative import hell
      "@src": SOURCE_DIR
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env", "@babel/preset-react" ]
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR,
    publicPath: "/" // serve /build as /
  },
  plugins: [ HTMLWebpackPluginConfig, ENVPlugin ],
  devServer: {
    port: 8080,
    historyApiFallback: true, // redirects 404s to index.html (need for react router)
    proxy: {} // Send API requests on localhost to API server to get around CORS.
  }
};

/*************************** ENV CONFIGS ***************************/

const dev_config = {
  devtool: "source-map"
};

const prod_config = {};

/***************************** EXPORT *****************************/

const env_config = process.env["NODE_ENV"] === "production" ? prod_config : dev_config;
const config = Object.assign({}, default_config, env_config);
module.exports = config;
