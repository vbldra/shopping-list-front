import React, { useContext } from "react";

import "./ListToBuy.scss";

import { AppContext } from "../components/App";
import Item from "./Item";

function ListToBuy() {
    const { itemsToBuy } = useContext(AppContext);
    return (
        <div className="items-list ListToBuy">
            {itemsToBuy.map((e) => (
                <Item data={e} key={e.id} />
            ))}
        </div>
    );
}

export default ListToBuy;
