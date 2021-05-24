import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Item.scss";

import { AppContext } from "../components/App";

function Item(props) {
    const { deleteItem, updateItem } = useContext(AppContext);
    const [isRename, setIsRename] = useState("");
    const [newText, setNewText] = useState("");

    // Renaming
    const handleClickRename = () => {
        setIsRename(props.data._id);
    };

    const handleRenameChange = (e) => {
        setNewText(e.target.value);
    }

    const handleRenameSubmit = (e) => {
        e.preventDefault();
        updateItem(props.data, newText)
        setIsRename("")
    }

    // Deleting
    const handleClickDelete = () => {
        deleteItem(props.data._id);
    };

    return (
        <div className="Item">
            {isRename===props.data._id ? (
                <form
                    className="rename-form"
                    onSubmit={handleRenameSubmit}
                >
                    <label className="rename-item">
                        <input
                            type="text"
                            name="item"
                            value={newText}
                            onChange={handleRenameChange}
                        />
                    </label>
                    <button className="btn" type="submit" value="rename">
                        Rename
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
