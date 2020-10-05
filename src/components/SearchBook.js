import React from "react";
import Searchable from 'react-searchable-dropdown';

export  class SearchBook extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("in here 2");
        // this.props.getBooksList();
    };


    render(){
        return (
        <Searchable
            value="" //if value is not item of options array, it would be ignored on mount
            placeholder="Search" // by default "Search"
            notFoundText="No result found" // by default "No result found"
            options={this.props.booksList}
            onSelect={option => {
                console.log(option); // as example - {value: '', label: 'All'}
            }}
            listMaxHeight={200} //by default 140
        />
            )
    }


}

