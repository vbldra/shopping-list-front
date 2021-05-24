import React, { useEffect, useReducer, useState, useContext } from "react";
import axios from "axios";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import ListToBuy from "./ListToBuy";
import ListChecked from "./ListChecked";
import Footer from "./Footer";

export const AppContext = React.createContext(null);

function App() {
    const [items, setItems] = useState([]);

    //  Fetching data from db once
    useEffect(() => {
        async function fetchAPI() {
            try {
                const res = await axios.get("/items");
                setItems(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAPI();
    }, []);

    const addItem = async (value) => {
        const newItem = { title: value };
        const res = await axios.post("/items", newItem);
        setItems([...items, res.data]);
    };

    const updateItem = async (item, newValue) => {
        const updatedItem = JSON.parse(JSON.stringify(item));
        updatedItem.title = newValue;
        const res = await axios.put(`/items/${item._id}`, updatedItem);
        items.map((e) => {
            if (e._id === res.data._id) {
                e.title = newValue;
            }
            return e
        });
        setItems([...items]);
    };

    const deleteItem = async (id) => {
        const res = await axios.delete(`/items/${id}`);
        const newItemsArr = items.filter((e) => e._id !== res.data._id);
        setItems(newItemsArr);
    };

    // console.log(items);
    const itemsToBuy = items.filter((el) => el.toBuy);
    const itemsChecked = items.filter((el) => !el.toBuy);

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    itemsToBuy,
                    itemsChecked,
                    addItem,
                    deleteItem,
                    updateItem,
                }}
            >
                <Header />
                <InputField />
                <div className="flex">
                    <ListToBuy />
                    <ListChecked />
                </div>
                <Footer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
