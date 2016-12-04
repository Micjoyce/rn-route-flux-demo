import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableNativeFeedback,
  InteractionManager,
  requestAnimationFrame,
} from 'react-native';

import HomeListItem from './HomeListItem';

class Home extends Component {
  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this.itemPress = this.itemPress.bind(this);
    var arr = [];
    for (var i = 0; i < 10; i++) {
      arr.push(i)
    }
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(arr),
    };
  }
  itemPress(rowData) {
    // InteractionManager.runAfterInteractions(() => {
    //   Actions.detail(rowData);
    // });
    window.requestAnimationFrame(() => {
      Actions.detail(rowData);
    });
  }
  _renderRow(rowData) {
    return (
      <HomeListItem rowData={rowData} itemPress={this.itemPress} />
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        initialListSize={100}
        pageSize={100}
      />
    );
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

export default Home;
