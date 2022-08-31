"use strict";

const { app, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/demo/post.test.js", () => {
  //   it("should assert", async () => {
  //     const pkg = require("../../../package.json");
  //     assert(app.config.keys.startsWith(pkg.name));

  //     // const ctx = app.mockContext({});
  //     // yield ctx.service.xx();
  //   });

  it("简单post测试单元 /demo/post", async () => {
    const data = {
      title: "New Post",
      content: "New content",
    };
    const response = await app.post("/demo/post", data);
    assert.equal(response.statusCode, 200);
    assert(response.payload.length > 0);
  });
});
