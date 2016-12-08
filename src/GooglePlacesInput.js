import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class GooglePlaceInput extends Component {
  constructor(props){
        super(props);
        this.state = {
            placeHolderText : "Search for location",
        }  
    }

    render(){
        return (
            <GooglePlacesAutocomplete
                    placeholder={this.state.placeHolderText}>
                    query={{
                        key: 'AIzaSyCzH41BKC2B6Q_b4RvYeW2jIZQCUCFpnW0',
                        language: 'en', // language of the results
                        types: '(cities)', // default: 'geocode'
                    }}
            </GooglePlacesAutocomplete>
        )
    }
}
