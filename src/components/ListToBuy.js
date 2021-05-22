import React from "react";

import './ListToBuy.scss'

import Item from "./Item";

function ListToBuy() {
    return (
        <div className="ListToBuy">
            <p>List with items to buy</p>
            <Item />
        </div>
    );
}

export default ListToBuy;
