import React,{Component} from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, MarkerWithLabel } from 'react-google-maps';


const MARKERS = [
    { lat: 55.1694, lng: 23.8813 },
    { lat: 54.1694, lng: 23.8813 },
    { lat: 53.1694, lng: 23.8813 },
    { lat: 52.1694, lng: 23.8813 },
    { lat: 51.1694, lng: 23.8813 },
    { lat: 55.1694, lng: 22.8813 },
    { lat: 55.1694, lng: 21.8813 },
    { lat: 55.1694, lng: 20.8813 },
    { lat: 55.1694, lng: 19.8813 },
    { lat: 55.1694, lng: 18.8813 }
];


class Map extends Component {

    onZoomChanged = () => {
        console.log('zoomedzommed');
        console.log(this.refs.map);
        console.log(this.refs.map.getZoom());
        console.log(this.refs.map.getBounds());
    };

    onCenterChanged = () => {
        console.log('lat: '+ this.refs.map.getCenter().lat());
        console.log('lng: '+this.refs.map.getCenter().lng());
        console.log(this.refs.map.getBounds().ma);
        console.log(this.refs.map.getBounds().ga);
    }

    renderMarkers = () => {
        return (
            MARKERS.map((marker)=> {
                return <Marker position={marker}/>
            })
        );
    }

    render(){
        const google=window.google;

		return(
            <GoogleMap
                ref='map'
                onZoomChanged={this.onZoomChanged}
                onCenterChanged={this.onCenterChanged}
                defaultZoom={7}
                defaultCenter={{ lat: 55.1694, lng: 23.8813 }}
            >
                {this.renderMarkers()}
            </GoogleMap>
		);
    }
}

export default withScriptjs(withGoogleMap(Map));