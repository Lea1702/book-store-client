import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import * as services from '../services/services'
import 'react-toastify/dist/ReactToastify.css';


export  class Purchase extends React.Component {


    async handlePurchase (e) {
        let res = await services.purchaseBook(this.props.bookSelected.id);
        console.log("res handlePurchase : ", res);
        toast(res);
    }

    notify = () => toast("You need to login in order to purchase");
    render(){
        return (

            <div>
            {this.props.isLoggedOn ?
                <button onClick={(e) => this.handlePurchase(e)}>Purchase</button> :
                <div>
                    <button onClick={(e)=>this.notify(e)}>Purchase</button>
                </div>

            }
                <ToastContainer />

            </div>
    )
    }


}

