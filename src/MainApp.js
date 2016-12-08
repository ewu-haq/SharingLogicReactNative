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

export default class sharingiosnandroidproject extends Component {
  constructor(props){
    super(props);
    this.state = {
      InputTextPlaceHolder: "Type a location here",
      text: "Location"
    }
  }

  setState(textChanged){
    this.state.text = textChanged;
  }

  render() {
    return (
        <View style ={styles.container}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder= {this.state.InputTextPlaceHolder}
          onChangeText={(text) => this.setState({text})}
        />
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

