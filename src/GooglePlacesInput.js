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
                    placeholder={this.state.placeHolderText}
                    
                    minLength={2} // minimum length of text to search 
                    autoFocus={false}
                    listViewDisplayed='auto'    // true/false/undefined 
                    fetchDetails={true}
                    renderDescription={(row) => row.terms[0].value} // display street only 
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true 
                    console.log(data);
                    console.log(details);
                    }}
                    getDefaultValue={() => {
                    return ''; // text input default value 
                    }}
                   query={{
                        key: 'AIzaSyA6JO5lRIYHGTLwbKOwIlJhLSLDH9alzxA',
                        language: 'en', // language of the results
                        types: '(cities)', // default: 'geocode'
                    }}
                    styles={{
                    description: {
                        fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                    }}
            
                    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list 
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch 
                    GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro 
                    }}
                    GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search 
                    rankby: 'distance',   
                    types: 'food',
                    }}
            
            
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities 
            
                    //predefinedPlaces={[homePlace, workPlace]}>
                    >
                    
            </GooglePlacesAutocomplete>
        )
    }
}
