import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {purchaseBook} from "../Store/actions";

class Purchase extends React.Component {
    async handlePurchase (e) {
        let res = await this.props.purchaseBook(this.props.bookSelected.id, this.props.bookSelected.title);
        toast(res);
    }

    notify = () => toast("You need to login in order to purchase");
    render(){
        return (
            <div>
            {this.props.isLoggedOn ?
                <Button className="button1" variant="contained" color="primary" onClick={(e) => this.handlePurchase(e)}>Purchase</Button> :
                <div>
                    <Button  className="button1" variant="contained" color="primary" onClick={(e)=>this.notify(e)}>Purchase</Button>
                </div>
            }
                <ToastContainer />
            </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedOn: state.isLoggedOn,
        bookSelected: state.bookSelected
    }
};

export default connect(mapStateToProps, {purchaseBook})(Purchase);