import React,{Component} from 'react';
import style from './style.css';
import Logo from './Logo';

class Header extends Component {

    render(){
		return(
			<div className={style.header}>
				<Logo/>
				
			</div>
		);
    }
}

export default Header;