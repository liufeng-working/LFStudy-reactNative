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
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}>
          <TextInput style={styles.inputStyle} />

          <TouchableOpacity activeOpacity={0.5} onPress={this.renderPress()}>
          <Text style={styles.innerViewStyle}>我是文本，但是可以点击</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  // 按下鼠标
  renderPress() {
    console.log('按下鼠标');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  scrollViewStyle: {
    backgroundColor: 'blue',
  },

  inputStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 36,
  },

  innerViewStyle: {
    backgroundColor: 'red',
    height: 50,
    marginTop: 20,
  },
});
