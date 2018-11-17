import React, {Suspense} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

// project files

class PublicLayout extends React.PureComponent {
  render() {
    const {location} = this.props;
    // const { pathname } = location;
    return (
      <div>
        <h1>Layout</h1>
        <Suspense fallback={<div>loading....</div>}>
          <Switch>
            {this.props.routes.map(Item => (
              <Route
                key={Item.key} path={Item.path}
                render={props => <Item.component {...props} />}
                exact={Item.exact}
              />
            ))}
            <Redirect from="/" to="/exception/404"/>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default PublicLayout;
