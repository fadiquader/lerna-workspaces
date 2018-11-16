import React, { Component } from 'react';
import { Button } from 'antd';
//
import { services } from '@shabab/controllers';

import logo from './logo.svg';
import styles from './App.less';

class App extends Component {
  componentDidMount() {
    services.User.posts()
      .then(res => {
        console.log('ress ', res)
      })
      .catch(err => {

      })
  }
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <Button size="large" type="primary">Hi from Ant Design</Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
