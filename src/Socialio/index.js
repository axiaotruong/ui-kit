// Libraries
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import {
  UikContainerVertical,
  UikContainerHorizontal,
} from '../containers'

import * as pages from './pages'

import Chat from './components/Chat'
import Navigation from './components/Navigation'
import Header from './components/Header'

const Social = () => (
  <UikContainerVertical>
    <Header />
    <UikContainerHorizontal>
      <Navigation />

      {/* router */}
      <Switch>
        <Route
          component={ pages.Profile }
          exact
          path="/social/profile"
          strict
        />
        <Redirect to="/social/profile" />
      </Switch>

      <Chat />
    </UikContainerHorizontal>
  </UikContainerVertical>
)

export default Social
