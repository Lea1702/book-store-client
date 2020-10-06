import React from 'react';
import SearchBook from "../SearchBook";
import {Purchase} from "../Purchase";


export const CustomerArea = (props) => {
    return (
        <div >
            {props.booksList.length === 0 ?
                <h4>Waiting for books...</h4> :
                <div>
                    <SearchBook  bookSelected={props.bookSelected} booksList={props.booksList} selectBook={props.selectBook} />
                    {console.log("this.props.bookSelected : ", props.bookSelected)}
                    {props.bookSelected ?
                        <Purchase bookSelected={props.bookSelected} isLoggedOn={props.isLoggedOn}
                                  purchaseBook={props.purchaseBook}
                        />:
                        null}
                </div>
            }
        </div>
    );
};

