import React from 'react';
import SearchContainer from '../containers/search/SearchContainer'
import List from './listview/List'
import common_styles from './Common.module.css'


class SearchTemplate extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div className={common_styles.content}>
                <SearchContainer />
            </div>
        )
    }
}

export default SearchTemplate;