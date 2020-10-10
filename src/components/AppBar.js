import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login/index'
import Logout from "./Logout";
import Signin from "./Signin";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class MenuBar extends React.Component {
    render(){
        return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            Books shop
                        </Typography>

                        <Link to="/public">Public Page</Link>
                        {this.props.userData.type === "admin" ?
                        <Link to="/admin">Admin Page</Link>:
                        null}
                        { this.props.isLoggedOn ?
                            <Logout />:
                            <Login />
                        }
                        <Signin />
                    </Toolbar>
                </AppBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
        isLoggedOn: state.isLoggedOn
    }
};

export default connect(mapStateToProps)(MenuBar);