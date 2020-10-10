import React from "react";
import Searchable from 'react-searchable-dropdown';
import {connect} from "react-redux";
import {selectBook} from "../Store/actions";
import "./style.css"

class SearchBook extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {booksList: []};
    }

    handleSelect (option) {
        this.props.selectBook(this.props.booksList[option.value]);
    }

    render(){
        return (
            <div>
            {!this.props.booksListPending && this.props.booksArray?
            <Searchable
                className="dropdown"
                value="" //if value is not item of options array, it would be ignored on mount
                placeholder="Search" // by default "Search"
                notFoundText="No result found" // by default "No result found"
                options={this.props.booksArray}
                onSelect={option => this.handleSelect(option)}
                listMaxHeight={200} //by default 140
            />:
            <h2>pending</h2>}
            </div>
            )
    }
}

const mapStateToProps = state => {
    if (state.bookSelected) {
        return {
            booksList: state.booksList,
            booksListPending: state.booksListPending,
            bookSelected_title : state.booksList[state.bookSelected.id].title,
            booksArray: state.booksArray
        }
    }
    return {
        booksList: state.booksList,
        booksArray: state.booksArray,
        booksListPending: state.booksListPending
    }
};

export default connect(mapStateToProps, {selectBook})(SearchBook);