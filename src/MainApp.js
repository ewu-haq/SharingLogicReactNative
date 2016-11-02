import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class sharingiosnandroidproject extends Component {
  render() {
    return (
        <View style ={styles.container}>
        <MapView
            style={styles.map}
            region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
            }}
        >
       </MapView>
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

