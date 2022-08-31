"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async ejs() {
    const { ctx } = this;
    const items = await ctx.service.view.viewService.getItems();
    await ctx.render("ejs.ejs", { items });
  }

  async handlebars() {
    const { ctx } = this;
    const items = await ctx.service.view.viewService.getItems();
    await ctx.render("handlebars.hbs", { items });
  }

  async nunjunks() {
    const { ctx } = this;
    const items = await ctx.service.view.viewService.getItems();
    await ctx.render("nunjunks.nj", { items });
  }
}

module.exports = HomeController;
