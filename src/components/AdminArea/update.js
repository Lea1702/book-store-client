import React, {Component} from 'react';
import Login from "../../Containers/Login";
import {SearchBook} from "../SearchBook";
import {FormControl} from "react-bootstrap";
import {toast} from "react-toastify";
import {Create} from "./create";

export  class Update extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("props.bookSelected : ", props.bookSelected);
        this.state = {update: false, title: props.bookSelected.title, publisher: props.bookSelected.publisher, author: props.bookSelected.author};
    }

    validateForm() {
        return this.state.title.length > 0 && this.state.publisher.length > 0 && this.state.author.length > 0;
    }

    handleSubmit(event) {
        try {
            this.props.onUpdateBook(this.state.title, this.state.publisher, this.state.author, this.props.bookSelected.id);
            toast("Book updated successfully !");
            this.props.getBooksList();
        }
        catch {
            toast("could not update book");
        }
    }


    render(){
        return (
            <div>
                {this.state.update?
            <div>
                <label>Title</label>
                <input value={this.state.title}
                       onChange={e => this.setState({"title": e.target.value})} type="text"/>
                <label>Author</label>
                <input value={this.state.author}
                       onChange={e => this.setState({"author": e.target.value})} type="text"/>
                <label>Publisher</label>
                <input value={this.state.publisher}
                       onChange={e => this.setState({"publisher": e.target.value})} type="text"/>

                <button disabled={!this.validateForm()} onClick={(e) => this.handleSubmit(e)}>Send update</button>
                <button onClick={() => this.setState({"update": false})}>Cancel</button>
            </div>:
                <button onClick={() => this.setState({"update": true})}>Update</button>
                }
            </div>
        );
    }

}

