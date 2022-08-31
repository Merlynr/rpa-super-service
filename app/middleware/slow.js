/*
 * @Author: Merlynr
 * @Date: 2022-08-31 15:40:03
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-31 15:50:44
 * @Description: 慢查询中间件
 */
module.exports = (options, app) => {
  return async function (ctx, next) {
    const startTime = Date.now();
    await next();
    const consume = Date.now() - startTime;
    const { threshold = 0 } = options || {};
    if (consume > threshold) {
      console.log(`${ctx.url}请求耗时${consume}毫秒`);
    }
  };
};
