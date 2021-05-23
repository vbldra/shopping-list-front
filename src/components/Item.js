import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons'

import "./Item.scss";

function Item(props) {
    return (
        <div className="Item">
            <p className={props.data.toBuy ? "itemToBuy" : "itemChecked"}>
                {props.data.title}
            </p>
            <div className="buttons">
                <button className="rename-btn"><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button className="delete-btn"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    );
}

export default Item;
