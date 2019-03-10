import React,{Component} from 'react';
import SidebarItem from './SidebarItem';
import style from './style.css';

class Sidebar extends Component {
    render(){
        
		return(
    <div className={style.sidebar}>
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
    </div>
		);
    }
}

export default Sidebar;