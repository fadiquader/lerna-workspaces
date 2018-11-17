import React, { Component } from 'react';
import { Button } from 'antd';
//
import { services } from '@shabab/controllers';
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
        {this.props.children}
      </div>
    );
  }
}


export default App;
