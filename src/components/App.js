import React, { useEffect, useReducer, useState, useContext } from "react";
import axios from "axios";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import ItemsList from "./ItemsList";
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
        item.title = newValue
        const res = await axios.put(`/items/${item._id}`, item);
        items.map((e) => {
            if (e._id === res.data._id) {
                e.title = newValue;
            }
            return e;
        });
        setItems(items);
    };

    const checkItem = async (item) => {
        item.toBuy = !item.toBuy
        const res = await axios.put(`/items/${item._id}`, item);
        items.map((e) => {
            if (e._id === res.data._id) {
                e.toBuy = !res.data.toBuy;
            }
            return e;
        });
        setItems(items);
    };

    const deleteItem = async (id) => {
        const res = await axios.delete(`/items/${id}`);
        const newItemsArr = items.filter((e) => e._id !== res.data._id);
        setItems(newItemsArr);
    };
    
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
                    checkItem
                }}
            >
                <Header />
                <InputField />
                <div className="flex">
                    <ItemsList items={itemsToBuy}/>
                    <ItemsList items={itemsChecked} type="checked"/>
                </div>
                <Footer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
