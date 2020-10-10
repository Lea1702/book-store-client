import React from "react";
import "./style.css"

export class PurchasedBooks extends React.Component {
    render(){
        return (
            <div>
                <h2>Purchased books :</h2>
                <ul>{this.props.purchasedBooks.map((book) =>
                    <li key={book.id}>
                        {book.title}
                    </li>)
                }
                </ul>
            </div>
            )
    }
}