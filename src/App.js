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

import * as actionCreator from "./Store/actions"
import {connect} from "react-redux";


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
    }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>




const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated
        ? <p>
            Welcome! <button onClick={() => {
            fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
        : <p>You are not logged in.</p>
))

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

                    <Route path="/public" component={Public}>


                        {this.props.booksList.length === 0 ?
                            <h4>Waiting for books...</h4> :
                            <SearchBook booksList={this.props.booksList}/>
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
                                    <h4>Waiting for books...</h4> :
                                    <SearchBook booksList={this.props.booksList}/>
                                        :
                                <h2>You have to login</h2>}
                    </Route>
                    <PrivateRoute path='/protected' component={Protected}/>
                </div>
            </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedOn: state.isLoggedOn,
        loginError: state.loginError,
        booksList: state.booksList
    }
};

const mapDispatchToProps = dispatch => {
    return{
        onLogin: (email, password) => dispatch(actionCreator.onLogIn(email, password)),
        onLogout:  () => dispatch(actionCreator.onLogout()),
        getBooksList:  () => dispatch(actionCreator.getBooksList())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)