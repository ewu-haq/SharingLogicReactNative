import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MapView from 'react-native-maps';

export default class GoogleMap extends Component{      

    constructor(props) {
        super(props);
        this.state =  {
            region : {
                latitude: 33.764120,
                longitude: -118.005987,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,},
            markers : {
                tesingMaker1: {

                },
                testingMarker2:{
                    
                }
            },
            mapType: "satellite",
            
        };
    }

    onRegionChange(region){
        this.state.region = region;
    }

    setState(region)
    {
        this.state.region = region;
    }

    render(){
        var mapStyle =  this.props.style;
        return (
                <MapView    style = {mapStyle}
                            region = {this.state.region}
                            mapType = {this.state.mapType}>
                    
                    
                </MapView>
        );
    }
}