import React from 'react';
import Search from './search/Search'
import List from './listview/List'
import Menu from './menu/Menu'
import styles from './SearchTemplate.module.css'


class SearchTemplate extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.content}>
                    <Search />
                    <List />
                </div>
            </React.Fragment>
        )
    }
}

export default SearchTemplate;