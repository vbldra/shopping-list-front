import React, { useState, useContext } from "react";

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
        setInputText("")
    };

    return (
        <div className="InputField">
            <form className="items-form" onSubmit={handleSubmit}>
                <label className="input-item">
                    <input
                        type="text"
                        name="item"
                        value={inputText}
                        onChange={handleChange}
                    />
                </label>
                <button className="btn" type="submit" value="add">Add</button>
            </form>
            <p>What you want to buy?</p>
        </div>
    );
}

export default InputField;
