import React, {Component} from 'react';
import {toast, ToastContainer} from "react-toastify";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {getBooksList, onDeleteBook} from "../../Store/actions";

class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onDeleteBook(this.props.bookSelected.id);
        this.props.getBooksList();
    }

    render(){
        return (
            <div>
                <Button className="button1" variant="contained" color="secondary"  onClick={(e) => this.handleSubmit(e)}>Delete book</Button>
                <ToastContainer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        booksList: state.booksList,
        bookSelected: state.bookSelected
    }
};

export default connect(mapStateToProps, {onDeleteBook, getBooksList})(Delete);

