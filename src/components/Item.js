import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Item.scss";

import { AppContext } from "../components/App";

function Item(props) {
  const { deleteItem, updateItem, checkItem } = useContext(AppContext);
  const [newItemName, setNewItemName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // "Purchase" item and move to "done"
  const handleClickItem = () => {
    !isEditing && checkItem(props.data);
  };

  // Edit item
  // Click on the Pencil button
  const handleClickEdit = () => {
    setIsEditing(!isEditing);
  };
  // Change the state while typing
  const handleEditChange = (e) => {
    setNewItemName(e.target.value);
  };
  // Submit new name and close edit-form
  const handleUpdateItemName = (e) => {
    e.preventDefault();
    newItemName.length > 0 && updateItem(props.data, newItemName);
    setIsEditing(false);
    setNewItemName("");
  };

  // Delete
  const handleClickDelete = () => {
    deleteItem(props.data._id);
  };

  return (
    <div className="Item">
      {!isEditing ? (
        <>
          <p
            className="item-name name"
            value={props.data.title}
            onClick={handleClickItem}
          >
            {props.data.title}
          </p>
          <button
            className="to-edit-btn item-btn hover-btn"
            onClick={handleClickEdit}
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </>
      ) : (
        <>
          <form
            id="editForm"
            className="edit-form name"
            onSubmit={handleUpdateItemName}
          >
            <input
              className="edit-input"
              type="text"
              name="item"
              placeholder={props.data.title}
              onChange={handleEditChange}
              value={newItemName}
            />
          </form>
          <button
            className="edit-submit-btn item-btn hover-btn"
            onClick={handleUpdateItemName}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </>
      )}
      <button
        className="delete-btn item-btn hover-btn"
        onClick={handleClickDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Item;