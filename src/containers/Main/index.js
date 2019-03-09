import React,{Component} from 'react';
import Header from '../../components/Header';
import Map from '../../components/Content';
import Content from '../../components/Content/Map'

class Main extends Component {

    render(){
		return(
			<div>
				<Header/>
				<Content>
					<Map
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWG1q1QgdGadc84gmWLrdbHY0VLN03xFg&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `800px` }} />}
						containerElement={<div style={{ height: `800px` }} />}
						mapElement={<div style={{ height: `800px` }} />}
					/>
				</Content>
			</div>
		);
    }
}

export default Main;