import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import {
    UikPageFade,
} from './containers'
import routes from "./routes/routes";

class App extends Component {
    showContentMenus = (allRoutes) => {
        let result = false;
        if (Array.isArray(allRoutes) && allRoutes.length > 0) {
            result = allRoutes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ));
        }
        return <Switch>{result}</Switch>;
    }

    render() {
        return (
          <Router>
            <UikPageFade className='app'>
              {this.showContentMenus(routes)}
            </UikPageFade>
          </Router>
        );
    }
}

export default (App);
