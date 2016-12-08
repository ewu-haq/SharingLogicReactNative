import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import GoogleMap from './GoogleMap'
import Login from './FacebookLogIn'
import GooglePlaceInput from './GooglePlaceInput';

export default class sharingiosnandroidproject extends Component {
  constructor(props){
    super(props);
  }

  setState(textChanged){
    this.state.text = textChanged;
  }

  render() {
    return (
        <View style ={styles.container}>
        <GooglePlaceInput style={styles.inputTextStyle}/>
        <GoogleMap style={styles.map}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
   map: {
   flex : 11
 },
 inputTextStyle:{
   flex : 1,
   borderColor: 'gray',
   borderWidth: 1
 }
  
});

