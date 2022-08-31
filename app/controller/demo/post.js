"use strict";

const Controller = require("egg").Controller;

class PostController extends Controller {
  async index() {
    const { ctx, service } = this;
    const createRule = {
      title: { type: "string" },
      content: { type: "string" },
    };
    // 校验和组装参数
    ctx.validate(createRule);
    const data = Object.assign(ctx.request.body, {
      author: ctx.session.userId,
    });
    // 调用 Service 进行业务处理
    const res = await service.post.create(data);
    // 响应客户端数据
    ctx.body = { id: res.id };
    ctx.status = 201;
  }
}

module.exports = PostController;
