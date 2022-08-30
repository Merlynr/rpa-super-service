'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 添加映射关系
  // router.verb('path-match',controllerAction)
  const { router, controller } = app;
  router.get('/index', controller.home.index);
  router.redirect('/','/home/index',302)
  router.get('/new',controller.new.index)
  
};
