/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style= {styles.container}>
      <Text style = {styles.welcome}>Welcome to Wearable Electronic App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign:'center',
    margin:10,
  },
  instructions:{
    textAlign: 'center',
    color:'#333333',
    marginBottom:5,
  }
});

