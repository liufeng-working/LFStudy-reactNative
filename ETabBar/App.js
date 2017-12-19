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
  TabBarIOS,
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
        {/*头部*/}
        <View style={styles.titleViewStyle}>
          <Text style={styles.barTitleStyle}>选项卡切换</Text>
        </View>

        {/*选项卡*/}
        <TabBarIOS
          barTintColor='black'
          tintColor='orange'
        >

          {/*第一块*/}
          <TabBarIOS.Item
            title='张三'
            badge='3'
          >

          </TabBarIOS.Item>

          {/*第二块*/}
          <TabBarIOS.Item
            systemIcon='search'
          >

          </TabBarIOS.Item>

         {/*第三块*/}
          <TabBarIOS.Item
            systemIcon='bookmarks'
          >

          </TabBarIOS.Item>

          {/*第四块*/}
          <TabBarIOS.Item
            systemIcon='downloads'
          >

          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },

  titleViewStyle: {
    marginTop: 34,
    alignItems: 'center'
  },

  barTitleStyle: {
    backgroundColor: 'blue',
    color: 'white',
  },
});
