import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Login} from './Login/index'
import {Logout} from "./Logout";
import {Link} from "react-router-dom";




export  class MenuBar extends React.Component {
    render(){
        return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            Books shop
                        </Typography>
                        { this.props.isLoggedOn ?
                            <Logout onLogout={this.props.onLogout}/>:
                            <Login onLogin={this.props.onLogin}/>
                        }
                        <Link to="/public">Public Page</Link>
                        <Link to="/admin">Admin Page</Link>
                    </Toolbar>
                </AppBar>
        )
    }
}

