import React,{Component} from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, MarkerWithLabel } from 'react-google-maps';

class Map extends Component {
    render(){
        const google=window.google;
        
		return(
            <GoogleMap
                defaultZoom={7}
                defaultCenter={{ lat: 55.1694, lng: 23.8813 }}
            >
                <Marker position={{lat: 54.6872, lng:25.2797}} />
                    {/* <MarkerWithLabel
                        position={{ lat: 54.6872, lng: 25.2791 }}
                        labelAnchor={new google.maps.Point(0, 0)}
                        labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
                    >
                        <div>Hello There!</div>
                    </MarkerWithLabel> */}
            </GoogleMap>
		);
    }
}

export default withScriptjs(withGoogleMap(Map));