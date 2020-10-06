import React from "react";
import Searchable from 'react-searchable-dropdown';
import * as actionCreator from "../Store/actions";
import {connect} from "react-redux";

export class SearchBook extends React.Component {


    componentWillMount() {
        this.getOptionsBooksList();
    };

    handleSelect (option) {
        console.log("option.value : ", option.value);
        for(let i in this.props.booksList){
            console.log("this.props.booksList[i].id : ", this.props.booksList[i].id);
            if(this.props.booksList[i].id === option.value){
                console.log("hello");
                this.props.selectBook(this.props.booksList[i]);
                break;
            }
        }
    }

    getOptionsBooksList () {
        let booksArray = [];
        for (let i = 0; i < this.props.booksList.length; i++){
            booksArray.push({"value": this.props.booksList[i].id, "label": this.props.booksList[i].title});
        }
        console.log("booksArray : ", booksArray);
        this.setState({booksList: booksArray});
    }


    render(){
        return (
        <Searchable
            value="" //if value is not item of options array, it would be ignored on mount
            placeholder="Search" // by default "Search"
            notFoundText="No result found" // by default "No result found"
            options={this.state.booksList}
            onSelect={option => this.handleSelect(option)}
            listMaxHeight={200} //by default 140
        />
            )
    }


}
