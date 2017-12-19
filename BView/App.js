/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const dimensions = require('Dimensions');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',}}>
          <Text style={{backgroundColor: 'red', height: 30}}>11111</Text>
          <Text style={{backgroundColor: 'orange', height: 20}}>22222</Text>
          <Text style={{backgroundColor: 'yellow', height: 10}}>33333</Text>
          <Text style={{backgroundColor: 'blue', height: 25}}>44444</Text>
        </View>

        <View>
          <Text>当前宽度是：{dimensions.get('window').width}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'gray',
    marginTop: 30,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }
});
