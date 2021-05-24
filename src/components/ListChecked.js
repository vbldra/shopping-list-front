import React, { useContext } from "react";

import './ListChecked.scss'

import { AppContext } from "../components/App";
import Item from "./Item";

function ListChecked() {
    const { itemsChecked } = useContext(AppContext);
    return (
        <div className="items-list ListChecked">
            {itemsChecked.map((e) => (
                <Item data={e} key={e.id} />
            ))}
        </div>
    );
}

export default ListChecked;
