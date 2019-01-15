import React from 'react';
import styles from './List.module.css'

class ListItem extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={styles.item}>
                <label>Name : </label>
                <span className={styles.fRight}>kangjongchan</span>
            </div>
        )
    }
}

export default ListItem;