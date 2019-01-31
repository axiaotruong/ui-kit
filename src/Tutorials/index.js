// Libraries
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import {
  UikContainerVertical,
  UikContainerHorizontal,
} from '../containers'

// Containers

import * as pages from './pages'


import Navigation from './components/Navigation'
import Header from './components/Header'

export default class Tutorials extends Component {
  render() {
    return (
      <UikContainerVertical>
        <Header />
        <UikContainerHorizontal>
          <Navigation />
          <Switch>
            <Route
              component={ pages.Animations }
              exact
              path="/tutorials/animations"
              strict
            />
            <Redirect to="/tutorials/animations" />
          </Switch>
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}
