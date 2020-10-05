import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import ConnectedRouter from "connected-react-router/immutable";
import AdminArea  from "./components/AdminArea/index";
//import {AppBar} from "./components/AppBar";
//import CustomerArea from "./components/CustomerArea";
//import Welcome from "./components/Welcome";


import {history} from "./Redux/store";
console.log("AdminArea : ", AdminArea);
const Routes = ({}) => {
    return (
        <ConnectedRouter history={history}>
            {/*<Auth>*/}
            {/*<AppBar/>*/}
            <AdminArea/>

            <div id={"page-content"}>
                <div className={'content-wrapper'}>
                    <div className={'content'}>
                    <Switch>
                        <Route path="/" exact={true} >
                            <AdminArea/>
                        </Route>
                        {/*<Route path="/admin" component={AdminArea}/>*/}
                        {/*<Route path="/customer"component={CustomerArea}/>*/}
                    </Switch>
                    </div>
                </div>
                </div>
            {/*</Auth>*/}
        </ConnectedRouter>
    );
};



export default Routes;