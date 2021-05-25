import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./InputField.scss";

import { AppContext } from "../components/App";

function InputField() {
    const { addItem } = useContext(AppContext);

    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputText.length >= 1) {
            addItem(inputText);
        }
        setInputText("");
    };

    return (
        <div className="InputField">
            <form className="items-form" onSubmit={handleSubmit}>
                <input
                    className="input-item"
                    type="text"
                    placeholder="Add something here"
                    name="item"
                    value={inputText}
                    onChange={handleChange}
                />
                <button className="add-btn" type="submit" value="add">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    );
}

export default InputField;
