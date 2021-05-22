import React from "react";

import './ListChecked.scss'

import Item from "./Item";

function ListChecked() {
    return (
        <div className="ListChecked">
            <p>List with checked items</p>
            <Item />
        </div>
    );
}

export default ListChecked;
