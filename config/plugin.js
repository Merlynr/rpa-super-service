"use strict";

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   static: {
//     enable: true,
//     package: "egg-router-plus",
//   },
// };
// {app_root}/config/plugin.js
exports.routerPlus = {
  enable: true,
  package: "egg-router-plus",
};
exports.nunjucks = {
  enable: true,
  package: "egg-view-nunjucks",
};
exports.handlebars = {
  enable: true,
  package: "egg-view-handlebars",
};
exports.ejs = {
  enable: true,
  package: "egg-view-ejs",
};
exports.mongoose = {
  enable: true,
  package: "egg-mongoose",
};
