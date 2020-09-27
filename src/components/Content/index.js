import React,{Component} from 'react';
import Map from './Map';
import Sidebar from './Sidebar';
import style from './style.css';

class Content extends Component {

    render(){
      return(
        <div className={style.content}>
          <Sidebar/>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=[API_KEY]&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`, width: `100%`}} />}
            containerElement={<div style={{ height: `100%`, width: `100%`}} />}
            mapElement={<div style={{ height: `100%`, width: `100%`}} />}
          />
        </div>
      );
    }
}

export default Content;
