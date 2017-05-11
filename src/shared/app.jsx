import React from 'react'

import { Switch } from 'react-router'
import { Route } from 'react-router'

import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'

import {
    HOME_PAGE_ROUTE,
    HELLO_PAGE_ROUTE,
    HELLO_ASYNC_PAGE_ROUTE,
} from './routes'

import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'
import { APP_NAME } from './config'

const App = () =>
      <div>
      <h1>{APP_NAME}</h1>
      <Nav />
      <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
      </Switch>
     </div>

export default App
