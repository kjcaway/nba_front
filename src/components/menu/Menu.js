import React from 'react';
import styles from './Menu.module.css'


class Menu extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul className={styles.menu}>
                        <a><li>Home</li></a>
                        <a><li>About</li></a>
                        <a><li>Info</li></a>
                        <a><li>Contact</li></a>
                        <a><li>Show me more</li></a>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;