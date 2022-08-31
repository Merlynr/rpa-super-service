"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  // 添加映射关系
  // router.verb('path-match',controllerAction)
  const { router, controller } = app;
  router.get("/index", controller.home.index);
  router.redirect("/", "/index", 302);
  router.get("/new", controller.new.index);

  // 使用模板
  router.get("/ejs", controller.home.ejs);
  router.get("/handlebars", controller.home.handlebars);
  router.get("/nunjunks", controller.home.nunjunks);

  const demoRouter = app.router.namespace("/demo");
  demoRouter.get("/test", app.controller.demo.test.index);
  demoRouter.post("/post", app.controller.demo.post.index);
};
