/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1661870789513_3374";

  // add your middleware config here
  config.middleware = ["slow"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 后缀是 .nj 时使用 nunjunks 模板引擎
  // 后缀是 .hbs 时使用 handlebars 模板引擎
  // 后缀是 .ejs 时使用 ejs 模板引擎
  // 当未指定后缀时默认为 .html
  // 当未指定模板引擎时默认为 nunjunks
  config.view = {
    defaultExtension: ".nj",
    defaultViewEngine: "nunjucks",
    mapping: {
      ".nj": "nunjucks",
      ".hbs": "handlebars",
      ".ejs": "ejs",
    },
  };
  config.mongoose = {
    client: {
      url: "mongodb://127.0.0.1/example",
      options: {},
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
