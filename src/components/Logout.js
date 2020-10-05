import React from "react";

export  class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        this.props.onLogout();
    }
    render(){
        return (

                <button onClick={(e) => this.handleSubmit(e)}>Log out</button>

            )
    }
}

