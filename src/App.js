import React from "react"
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {AdminArea} from "./components/AdminArea/index"
import  CustomerArea from "./components/CustomerArea/index"
import * as actionCreator from "./Store/actions"
import {connect} from "react-redux";
import MenuBar from "./components/AppBar";
import Create from "./components/AdminArea/create";


class App extends React.Component {
    componentDidMount() {
        this.props.getBooksList();
    };

    render() {
        return (
            <Router>
                <MenuBar/>
                <div>
                    <Route path="/public" >
                        <CustomerArea booksList={this.props.booksList} purchasedBooks={this.props.purchasedBooks} />
                    </Route>
                    <Route path="/admin" >
                        {
                            this.props.isLoggedOn ?
                                this.props.booksList.length === 0 ?
                                    <div>
                                        <Create />
                                        <h4>No books</h4>
                                    </div>:
                                    <AdminArea userData={this.props.userData} booksList={this.props.booksList}  bookSelected={this.props.bookSelected}  />:
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
        booksList: state.booksList,
        bookSelected: state.bookSelected,
        purchasedBooks: state.purchasedBooks,
        userData: state.userData
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getBooksList:  () => dispatch(actionCreator.getBooksList())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)