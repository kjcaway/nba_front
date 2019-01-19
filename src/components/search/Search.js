import React from 'react';
import styles from './Search.module.css'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class Search extends React.Component {
    constructor(props) {
        super();
    }


    /** test axios and proxy */
    clickSearchBtn = async () => {
        try {
            const response = await axios.get('/api/');
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.search}>
                    <input type="text" className={styles.searchTerm} placeholder="Write player name" />
                    <button type="submit" className={styles.searchButton} onClick={this.clickSearchBtn.bind(this)}>
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;