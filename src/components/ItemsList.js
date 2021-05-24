import React, { useContext } from "react";

import "./ItemsList.scss";

import Item from "./Item";

function ItemsList(props) {
    return (
        <div
            className={
                props.type === "checked"
                    ? "items-list items-checked"
                    : "items-list items-to-buy"
            }
        >
            {props.items.map((e) => (
                <Item data={e} key={e._id} />
            ))}
        </div>
    );
}

export default ItemsList;
