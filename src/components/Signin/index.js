import React, { useState } from "react";
import {  FormGroup, FormControl } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import "../style.css";


export  class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', type: '', clicked: false, appears: true};
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        this.setState({appears: false});
        this.props.onSignin(this.state.email, this.state.password, this.state.type);
    }
    render(){
        return (
            <div>
                {!this.state.clicked?
                <Button color="inherit" onClick={(e) => this.setState({"clicked": true})}>Signin</Button>:
                this.state.appears ?
                    <div className="Login">
                        <h3 className="labelLogin">Signin</h3>
                        <form>
                        <label className="labelLogin">Email</label>
                        <FormControl
                            className="input"
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState({"email": e.target.value})}
                        />
                        </form>
                        <form>
                            <label className="labelLogin">Password</label>
                            <FormControl
                            className="input"
                            value={this.state.password}
                            onChange={e => this.setState({"password": e.target.value})}
                            type="password"
                         />
                        </form>
                        <form>
                            <label className="labelLogin">Type</label>
                            <FormControl
                                className="input"
                                value={this.state.type}
                                onChange={e => this.setState({"type": e.target.value})}
                                type="text"
                            />
                        </form>
                    <Button variant="contained" color="primary" disabled={!this.validateForm()} onClick={(e) => this.handleSubmit(e)}>Sign in</Button>
                    </div> : null

            }
            </div>)
    }
};

export default Signin;