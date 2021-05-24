import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faCheckCircle,
    faCircle,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./Item.scss";

import { AppContext } from "../components/App";

function Item(props) {
    const { deleteItem, updateItem } = useContext(AppContext);
    const [newText, setNewText] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    // Rename
    // Click on the Pencil button
    const handleClickRename = () => {
        setIsClicked(!isClicked); 
    };
    // Change the state while typing
    const handleRenameChange = (e) => {
        setNewText(e.target.value);
    };
    // Submit new name and close rename-form
    const handleRenameSubmit = (e) => {
        e.preventDefault();
        updateItem(props.data, newText);
        setIsClicked(false)
    };

    // Delete
    const handleClickDelete = () => {
        deleteItem(props.data._id);
    };

    return (
        <div className="Item">
            <FontAwesomeIcon
                icon={props.data.toBuy ? faCircle : faCheckCircle}
            />
            {isClicked ? (
                <form className="rename-form" onSubmit={handleRenameSubmit}>
                    <label className="rename-item">
                        <input
                            type="text"
                            name="item"
                            placeholder={props.data.title}
                            value={newText}
                            onChange={handleRenameChange}
                        />
                    </label>
                    <button className="btn" type="submit" value="rename">
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </form>
            ) : (
                <p className={props.data.toBuy ? "itemToBuy" : "itemChecked"}>
                    {props.data.title}
                </p>
            )}

            <div className="buttons">
                <button className="rename-btn" onClick={handleClickRename}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button className="delete-btn" onClick={handleClickDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default Item;
