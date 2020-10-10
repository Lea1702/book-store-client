import React from "react";
import { FormControl } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import "../style.css";
import {connect} from "react-redux";
import {onLogin} from "../../Store/actions";
import {ToastContainer} from "react-toastify";

export  class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', appears: false};
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleCancel(e) {
        this.setState({appears: false});
    }

    handleSubmit(event) {
        this.setState({appears: false});
        this.props.onLogin(this.state.email, this.state.password);
    }

    render(){
        return (
            <div>
                <Button color="inherit" onClick={(e) => this.setState({"appears": true})}>Login</Button>
                {this.state.appears ?
                    <div className="Login">
                        <h3 className="labelLogin">Login</h3>
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
                    <Button variant="contained" color="primary" disabled={!this.validateForm()} onClick={(e) => this.handleSubmit(e)}>Log in</Button>
                        <Button variant="contained" color="primary"  onClick={(e) => this.handleCancel(e)}>Cancel</Button>
                    </div> : null
            }
                <ToastContainer />
            </div>)
    }
};

export default connect(null, {onLogin})(Login);