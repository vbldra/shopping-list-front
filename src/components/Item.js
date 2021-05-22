import React from "react";

import './Item.scss'

function Item() {
    return (
        <div className="Item">
            <p>Item</p>
            <button>Rename</button>
            <button>Delete</button>
        </div>
    );
}

export default Item;
