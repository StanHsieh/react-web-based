import Router from 'koa-router'

const router = new Router()

router.get('/mock-app-data', async (ctx, next) => {
  ctx.body = {
    aaa: 1,
    bbb: 2,
    ccc: 3
  }
})

router.get('/mock-home-data', async (ctx, next) => {
  ctx.body = {
    ddd: 1,
    eee: 2,
    fff: 3
  }
})

export default router.routes()