import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class GooglePlacesInput extends Component {
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
                        key: 'AIzaSyA6JO5lRIYHGTLwbKOwIlJhLSLDH9alzxA',
                        language: 'en', // language of the results
                        types: '(cities)', // default: 'geocode'
                    }}
            </GooglePlacesAutocomplete>
        )
    }
}
