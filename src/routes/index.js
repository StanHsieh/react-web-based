import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as C from '../containers'

const routes = (
  <Route path="/" component={C.App}>
    <IndexRoute component={C.Home}/>
    <Route path="foo" component={C.Foo}/>
    <Route path="bar" component={C.Bar}/>
  </Route>
)

export default routes
