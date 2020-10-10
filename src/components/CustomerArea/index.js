import React from 'react';
import SearchBook from "../SearchBook";
import Purchase from "../Purchase";
import {connect} from "react-redux";
import {PurchasedBooks} from "../PurchasedBooks";

const CustomerArea = (props) => {
    return (
        <div >
            {props.booksList.length === 0 ?
                <h4>Waiting for books...</h4> :
                <div>
                    <SearchBook/>
                    {props.bookSelected ?
                        <Purchase  />:
                        null}
                </div>
            }
            {props.purchasedBooks.length === 0 ?
                null:
            <PurchasedBooks purchasedBooks={props.purchasedBooks}/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        booksList: state.booksList,
        bookSelected: state.bookSelected,
        purchasedBooks: state.purchasedBooks,
        purchasedBooksLength: state.purchasedBooks.length
    }
};

export default connect(mapStateToProps)(CustomerArea);

