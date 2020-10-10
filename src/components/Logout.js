import React from "react";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {onLogout} from '../Store/actions'

class Logout extends React.Component {
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

export default connect(null, {onLogout})(Logout);