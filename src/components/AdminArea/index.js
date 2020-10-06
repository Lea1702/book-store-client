import React, {Component} from 'react';
import Login from "../../Containers/Login";
import {SearchBook} from "../SearchBook";
import {Update} from "./update";
import {Delete} from "./delete";

import {Create }from "./create";

export class AdminArea extends Component {
    render(){
        return (
            <div >
                <Create onCreateBook={this.props.onCreateBook}     getBooksList={this.props.getBooksList}
                />
                <SearchBook bookSelected={this.props.bookSelected} booksList={this.props.booksList}  selectBook={this.props.selectBook}/>
                {this.props.bookSelected ?
                    <div>
                        <Update bookSelected={this.props.bookSelected} onUpdateBook={this.props.onUpdateBook}                                                getBooksList={this.props.getBooksList}
                                getBooksList={this.props.getBooksList}
                        />
                        <Delete bookSelected={this.props.bookSelected} onDeleteBook={this.props.onDeleteBook}                                                getBooksList={this.props.getBooksList}
                                getBooksList={this.props.getBooksList}
                        />
                    </div>
:
                    null
                }

            </div>
        );
    }

}

