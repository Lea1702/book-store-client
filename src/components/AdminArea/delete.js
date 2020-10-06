import React, {Component} from 'react';
import Login from "../../Containers/Login";
import {SearchBook} from "../SearchBook";
import {FormControl} from "react-bootstrap";
import {toast} from "react-toastify";

export  class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        try {
            this.props.onDeleteBook(this.props.bookSelected.id);
            this.props.getBooksList();
            toast("Book deleted successfully !");
        }
        catch {
            toast("could not delete book");
        }
    }


    render(){
        return (
                <button onClick={(e) => this.handleSubmit(e)}>Delete book</button>
        );
    }

}

