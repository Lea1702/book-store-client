import React from "react"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'
import {Login} from "./components/Login/index"
import {Logout} from "./components/Logout"
import {SearchBook} from "./components/SearchBook"
import {Purchase} from "./components/Purchase"
import {AdminArea} from "./components/AdminArea/index"

import * as actionCreator from "./Store/actions"
import {connect} from "react-redux";
import {Create} from "./components/AdminArea/create";


class App extends React.Component {

    componentDidMount() {
        console.log("in here");
        this.props.getBooksList();
    };

    render() {
        return (
            <Router>
                <div>
                    <ul>
                    { this.props.isLoggedOn ?
                        <Logout onLogout={this.props.onLogout}/>:
                        <Login onLogin={this.props.onLogin}/>
                    }
                    </ul>
                    <ul>
                        <li><Link to="/public">Public Page</Link></li>
                        <li><Link to="/admin">Admin Page</Link></li>
                    </ul>

                    <Route path="/public" >
                        {this.props.booksList.length === 0 ?
                            <h4>Waiting for books...</h4> :
                            <div>
                                <SearchBook bookSelected={this.props.bookSelected} booksList={this.props.booksList} selectBook={this.props.selectBook} />
                                {console.log("this.props.bookSelected : ", this.props.bookSelected)}
                                {this.props.bookSelected ?
                                <Purchase bookSelected={this.props.bookSelected} isLoggedOn={this.props.isLoggedOn}
                                          purchaseBook={this.props.purchaseBook}
                                />:
                                    null}
                            </div>
                        }
                    </Route>
                    <Route path="/admin" >
                        {
                            console.log("this.props.isLoggedOn : ", this.props.isLoggedOn)
                        }
                        {
                            console.log("this.props.booksList : ", this.props.booksList)
                        }
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

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)