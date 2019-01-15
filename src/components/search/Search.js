import React from 'react';
import styles from './Search.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class Search extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={styles.wrap}>
                <div className={styles.search}>
                    <input type="text" className={styles.searchTerm} placeholder="Write player name"/>
                    <button type="submit" className={styles.searchButton}>
                    <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;