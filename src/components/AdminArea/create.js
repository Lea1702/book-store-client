import React, {Component} from 'react';
import Login from "../../Containers/Login";
import {SearchBook} from "../SearchBook";
import {FormControl} from "react-bootstrap";
import {toast} from "react-toastify";

export  class Create extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {create: false, title: "", publisher: "", author: ""};
    }

    validateForm() {
        return this.state.title.length > 0 && this.state.publisher.length > 0 && this.state.author.length > 0;
    }

    handleSubmit(event) {
        try {
            this.props.onCreateBook(this.state.title, this.state.publisher, this.state.author);
            toast("Book created successfully !");
            this.props.getBooksList();
        }
        catch {
            toast("could not create book");
        }
    }


    render() {
        return (
            <div>
                    {this.state.create?
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
                <button disabled={!this.validateForm()} onClick={(e) => this.handleSubmit(e)}>Create</button>
                        <button onClick={() => this.setState({"create": false})}>Cancel</button>
                        </div>:
                        <button onClick={() => this.setState({"create": true})}>Create</button>                        }
                </div>
        );
    }

}

