import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  InteractionManager,
} from 'react-native';


class HomeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      time: '',
    }
  }
  componentDidMount() {
    let count = 0;
    setInterval(()=>{
      count ++;
      // InteractionManager.runAfterInteractions(() => {
        this.setState({
          msg: count,
          time: new Date().getTime(),
        });
      // })
    },2000)
  }
  render() {
    return (
      <TouchableHighlight
        onPress={() => {this.props.itemPress(this.props.rowData)}}
      >
      <View style={{flex: 1, height: 50, flexDirection: 'row', backgroundColor: '#cccccc', margin: 5,}}>
        <Image
          style={{width: 50, height: 50,}}
          source={require('../img/123.png')}
        />
      <View style={{flex: 1, height: 50}}>
        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize: 20}}>
              {this.props.rowData}
            </Text>
          </View>
          <View>
          </View>
            <Text style={{fontSize: 20}}>
              {this.state.msg}
            </Text>
          <View>
            <Text style={{fontSize: 20}}>
              {this.state.time}
            </Text>
          </View>
        </View>
        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontSize: 20}}>
              {this.props.rowData}
            </Text>
          </View>
          <View>
          </View>
            <Text style={{fontSize: 20}}>
              {this.state.msg}
            </Text>
          <View>
            <Text style={{fontSize: 20}}>
              {this.state.time}
            </Text>
          </View>
        </View>
      </View>
      </View>
      </TouchableHighlight>
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

export default HomeListItem;
