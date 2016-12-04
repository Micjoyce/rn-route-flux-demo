import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,TouchableNativeFeedback
} from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  goBackPress() {
    window.requestAnimationFrame(() => {
      Actions.pop();
    });
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.goBackPress()}
      >
        <View style={{flex: 1, backgroundColor: '#cccccc'}}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </TouchableNativeFeedback>
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

export default Detail;
