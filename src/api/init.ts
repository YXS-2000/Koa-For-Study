module.exports = async function Init(ctx: any) {
  // console.log(process.env);
  ctx.body = {
    message: 'Hello World!',
    data: { env: process.env.NODE_ENV }
  };
};