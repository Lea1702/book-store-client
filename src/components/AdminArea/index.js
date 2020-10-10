import React, {Component} from 'react';
import SearchBook from "../SearchBook";
import Update from "./update";
import Delete from "./delete";
import Create from "./create";

export class AdminArea extends Component {
    render(){
        return (
            <div >
                {this.props.userData.type === "admin" ?
                    <div>
                        <Create/>
                        <SearchBook/>
                        {this.props.bookSelected ?
                            <div>
                                <Update key={this.props.bookSelected.id}/>
                                <Delete/>
                            </div> :
                            null
                        }
                    </div> :
                    <h3>You do not have the permissions to access admin page</h3>
                }
            </div>
        );
    }
}

