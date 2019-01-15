import React from 'react';
import Search from './search/Search'
import List from './listview/List'


class SearchTemplate extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <div>
                <Search />
                <List />
            </div>
        )
    }
}

export default SearchTemplate;