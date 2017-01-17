import koa from 'koa'
import path from 'path'
import mount from 'koa-mount'
import serve from 'koa-static'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import configureStore from '../store/configureStore'
import routes from '../routes'

import mockApi from './mock-api'

const app = new koa()

let staticOption = {}
if (process.env.NODE_ENV === 'production') {
  staticOption.maxage = 60*60*24*1000*365
}

app.use(mount('/__build__', serve(path.resolve(__dirname, '../../dist/'), staticOption)))

// mock api
app.use(mockApi)

app.use(async (ctx, next) => {
  const memoryHistory = createMemoryHistory(ctx.url)
  const store = configureStore(memoryHistory)
  const {
    error, 
    redirectLocation, 
    renderProps
  } = await new Promise((resolve) => {
    match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
      resolve({ error, redirectLocation, renderProps })
    })
  }) 
  if (error) {
    ctx.status = 500
    ctx.body = { message: error }
  } else if (redirectLocation) {
    ctx.redirect(302, redirectLocation.pathname + redirectLocation.search)
  } else if (renderProps) {
    const content = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps}/>
      </Provider>
    )
    ctx.body = '<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>)
    await next()
  }   
})

app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})

const HTML = ({ content, store }) => (
  <html>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src="/__build__/bundle.js"/>
    </body>
  </html>
)
