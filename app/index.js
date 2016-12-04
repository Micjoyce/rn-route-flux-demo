import React, { Component } from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Home from './scenes/Home';
import Detail from './scenes/Detail';
// 路由配置
const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="home" duration={0} component={Home} initial>
    </Scene>
    <Scene key="detail" duration={0} component={Detail}/>
  </Scene>
);

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class app extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default app;
