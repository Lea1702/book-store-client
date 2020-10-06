import React from "react";
import Button from '@material-ui/core/Button';

export  class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        this.props.onLogout();
    }
    render(){
        return (

                <Button variant="contained" color="inherit"  onClick={(e) => this.handleSubmit(e)}>Log out</Button>

            )
    }
}

