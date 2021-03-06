/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapViewExample from './src/examples/MapViewExample';

import App from './src/App/App.js';
import {Morkab as MorkabStore} from './src/Store';

let morkabStore = new MorkabStore();
morkabStore.getComponentList();

export default class Morkab extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <App store={morkabStore} onDrop={(comp)=>morkabStore.addComponentToPage(comp)} />
      </View>
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

AppRegistry.registerComponent('morkab', () => Morkab);
