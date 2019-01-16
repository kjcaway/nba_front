import React from 'react';
import styles from './List.module.css'
import ListItem from './ListItem'

class List extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={styles.container}>
                <ul className={styles.mList}>
                    <li><ListItem /></li>
                    <li><ListItem /></li>
                    <li><ListItem /></li>
                    <li><ListItem /></li>
                </ul>
            </div> 
        )
    }
}

export default List;