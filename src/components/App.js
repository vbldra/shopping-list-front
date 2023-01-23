import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import ItemsList from "./ItemsList";
import Footer from "./Footer";

export const AppContext = React.createContext(null);

/** ENV VARIABLES **/
const URL = process.env.REACT_APP_BACKEND

function App() {
    const [items, setItems] = useState([]);

    //  Fetching data from db once
    useEffect(() => {
        async function fetchAPI() {
            try {
                const res = await axios.get(`${URL}/items`);
                setItems(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAPI();
    }, []);

    const addItem = async (value) => {
        const newItem = { title: value };
        const res = await axios.post(`${URL}/items`, newItem);
        setItems([...items, res.data]);
    };

    const updateItem = async (item, newValue) => {
        item.title = newValue;
        const res = await axios.put(`${URL}/items/${item._id}`, item);
        const updatedItem = items.map((e) => {
            if (e._id === res.data._id) {
                e.title = newValue;
            }
            return e;
        });
        setItems(updatedItem);
    };

    const checkItem = async (item) => {
        item.toBuy = !item.toBuy;
        const res = await axios.put(`${URL}/items/${item._id}`, item);
        const updatedItem = items.map((e) => {
            if (e._id === res.data._id) {
                e.toBuy = res.data.toBuy;
            }
            return e;
        });
        setItems(updatedItem);
    };

    const deleteItem = async (id) => {
        const res = await axios.delete(`${URL}/items/${id}`);
        const newItemsArr = items.filter((e) => e._id !== res.data._id);
        setItems(newItemsArr);
    };

    const itemsToBuy = items.filter((el) => el.toBuy);
    const itemsChecked = items.filter((el) => !el.toBuy);
    
    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    addItem,
                    deleteItem,
                    updateItem,
                    checkItem,
                    itemsToBuy,
                    itemsChecked
                }}
            >
                <Header />
                <InputField />
                <div className="flex">
                    <ItemsList />
                    <ItemsList type="checked" />
                </div>
                <Footer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
