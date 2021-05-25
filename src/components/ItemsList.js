import React, { useContext } from "react";

import "./ItemsList.scss";

import Item from "./Item";
import { AppContext } from "../components/App";

function ItemsList(props) {
    const { itemsToBuy, itemsChecked } = useContext(AppContext);
    // console.log(itemsToBuy);
    const items = props.type === "checked" ? itemsChecked : itemsToBuy

    const listItems = items.map((e) => (
        <Item data={e} key={e._id} />
    ))

    return (
        <div
            className={
                props.type === "checked"
                    ? "items-list items-checked"
                    : "items-list items-to-buy"
            }
        >
            {listItems}
        </div>
    );
}

export default ItemsList;
