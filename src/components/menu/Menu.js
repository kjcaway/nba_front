import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Menu.module.css'

class Menu extends React.Component {
    constructor(props){
        super();
    }

    clickHandler = () => {
        let menuIcon = document.getElementById('menu-icon');
        menuIcon.click();
    }

    render(){
        return (
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    <input type="checkbox" id='menu-icon'/>
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul className={styles.menu}>
                        <li><NavLink exact to="/" onClick={this.clickHandler.bind(this)}>선수 검색</NavLink></li>
                        <li><NavLink to="/test" onClick={this.clickHandler.bind(this)}>테스트</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;