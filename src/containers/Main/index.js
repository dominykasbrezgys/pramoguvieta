import React,{Component} from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content'
import style from './style.css'

class Main extends Component {

    render(){
		return(
			<div className={style.main}>
				<Header/>
				<Content/>
			</div>
		);
    }
}

export default Main;