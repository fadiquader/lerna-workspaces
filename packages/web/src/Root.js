// npm packages
import React, { Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { LocaleProvider } from 'antd';
import arEG from 'antd/lib/locale-provider/ar_EG';
//  project files
import App from './App'
import { getRouterData } from './common/router';
import './themes/index.less';

const history = createBrowserHistory();

const Root = () => {
  const routerData = getRouterData();
  // const NotFound = routerData['/exception/404'];
  return (
    <Router history={history}>
      <LocaleProvider locale={arEG}>
        <App>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {Object.keys(routerData).map(path => {
                  const route = routerData[path];
                  const { component: RouteComponent, exact = false, routes = [] } = route;
                  return (
                    <Route
                      key={path}
                      path={path}
                      exact={exact}
                      render={props => <RouteComponent {...props} routes={routes} />}
                    />
                  );
                })}
              </Switch>
            </Suspense>
          </div>
        </App>
      </LocaleProvider>
    </Router>
  );
}

export default Root;
