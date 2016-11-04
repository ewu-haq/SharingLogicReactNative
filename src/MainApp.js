import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import Login from './FacebookLogIn'
export default class sharingiosnandroidproject extends Component {
  render() {
    return (
        <View style ={styles.container}>
            <Login />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
   map: {
   position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
 },
  
});

