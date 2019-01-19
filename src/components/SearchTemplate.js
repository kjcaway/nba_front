import React from 'react';
import Search from './search/Search'
import List from './listview/List'
import common_styles from './Common.module.css'


class SearchTemplate extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={common_styles.content}>
                <Search />
                <List />
            </div>
        )
    }
}

export default SearchTemplate;