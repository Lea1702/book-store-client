import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
//import "./Index.css";


export  class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', clicked: false};
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        console.log("handleSubmit : ");
        console.log("email : ", this.state.email);
        console.log("password : ", this.state.password);
        this.props.onLogin(this.state.email, this.state.password);
    }
    render(){
        return (
            <div>
                {!this.state.clicked?
                <button onClick={(e) => this.setState({"clicked": true})}>Login</button>:
            <div className="Login">
                    <form>
                        <label>Email</label>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState({"email": e.target.value})}
                        />
                    </form>
                    <form>
    <                   label>Password</label>
                        <FormControl
                            value={this.state.password}
                            onChange={e => this.setState({"password": e.target.value})}
                            type="password"
                        />
                    </form>
                <button disabled={!this.validateForm()} onClick={(e) => this.handleSubmit(e)}>Click</button>

            </div>}
            </div>)
    }
};

export default Login;