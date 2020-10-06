import React from "react"
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom'
import {AdminArea} from "./components/AdminArea/index"
import {CustomerArea} from "./components/CustomerArea/index"

import * as actionCreator from "./Store/actions"
import {connect} from "react-redux";
import {Create} from "./components/AdminArea/create";
import {MenuBar} from "./components/AppBar";


class App extends React.Component {

    componentDidMount() {
        this.props.getBooksList();
    };


    render() {
        return (
            <Router>
                <MenuBar isLoggedOn={this.props.isLoggedOn}  onLogin={this.props.onLogin}  onLogout={this.props.onLogout}
                         onSignin={this.props.onSignin}/>
                <div>
                    <Route path="/public" >
                        <CustomerArea isLoggedOn={this.props.isLoggedOn} bookSelected={this.props.bookSelected} booksList={this.props.booksList} selectBook={this.props.selectBook}  purchaseBook={this.props.purchaseBook}/>
                    </Route>
                    <Route path="/admin" >
                        {
                            this.props.isLoggedOn ?

                                this.props.booksList.length === 0 ?
                                    <div>
                                        <Create onCreateBook={this.props.onCreateBook}/>
                                        <h4>No books</h4>
                                    </div>:
                                    <AdminArea booksList={this.props.booksList}  selectBook={this.props.selectBook}
                                               bookSelected={this.props.bookSelected} onUpdateBook={this.props.onUpdateBook}
                                               onCreateBook={this.props.onCreateBook} onDeleteBook={this.props.onDeleteBook}
                                               getBooksList={this.props.getBooksList}
                                    />
                                        :
                                <h2>You have to login</h2>}
                    </Route>
                </div>
            </Router>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        isLoggedOn: state.isLoggedOn,
        loginError: state.loginError,
        booksList: state.booksList,
        bookSelected: state.bookSelected
    }
};

const mapDispatchToProps = dispatch => {
    return{
        onLogin: (email, password) => dispatch(actionCreator.onLogIn(email, password)),
        onLogout:  () => dispatch(actionCreator.onLogout()),
        getBooksList:  () => dispatch(actionCreator.getBooksList()),
        selectBook: (book) => dispatch(actionCreator.selectBook(book)),
        purchaseBook: (book_id) => dispatch(actionCreator.purchaseBook(book_id)),
        onUpdateBook: (title, publisher, author, id) => dispatch(actionCreator.onUpdateBook(title, publisher, author, id)),
        onDeleteBook: (book_id) => dispatch(actionCreator.onDeleteBook(book_id)),
        onCreateBook: (title, publisher, author) => dispatch(actionCreator.onCreateBook(title, publisher, author)),
        onSignin: (email, password, type) => dispatch(actionCreator.onSignin(email, password, type))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)