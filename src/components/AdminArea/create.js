import React, {Component} from 'react';
import {toast} from "react-toastify";
import Button from '@material-ui/core/Button';


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
                        <div className="Login">

                        <label>Title</label>
                <input value={this.state.title}
                       onChange={e => this.setState({"title": e.target.value})} type="text"/>
                <label>Author</label>
                <input value={this.state.author}
                       onChange={e => this.setState({"author": e.target.value})} type="text"/>
                <label>Publisher</label>
                <input  value={this.state.publisher}
                       onChange={e => this.setState({"publisher": e.target.value})} type="text"/>
                <Button variant="contained" color="primary" disabled={!this.validateForm()} onClick={(e) => this.handleSubmit(e)}>Create</Button>
                        <Button variant="contained" color="primary" onClick={() => this.setState({"create": false})}>Cancel</Button>
                        </div>:
                        <Button variant="contained" color="primary" onClick={() => this.setState({"create": true})}>Create</Button>                        }
                </div>
        );
    }

}

