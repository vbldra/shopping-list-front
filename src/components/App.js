import React, { useEffect, useReducer, useState, useContext } from "react";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import ListToBuy from "./ListToBuy";
import ListChecked from "./ListChecked";
import Footer from "./Footer";

export const AppContext = React.createContext(null);

function App() {
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            // fetch from API
            case "fetch":
                return action.data;

            case "add":
                return console.log("added", action.name);

            case "change":
                return console.log("change", action.name);

            case "delete":
                return console.log("delete", action.name);

            default:
                return state;
        }
    }, []);

    //  Fetching data from db once
    useEffect(() => {
        async function fetchAPI() {
            const res = await fetch("/items");
            const db = await res.json();
            dispatch({ type: "fetch", data: db });
        }
        fetchAPI();
    }, []);

    console.log(items)
    const itemsToBuy = items.filter(el => el.toBuy)
    const itemsChecked = items.filter(el => !el.toBuy)

    return (
        <div className="App">
            <AppContext.Provider value={{ itemsToBuy, itemsChecked, dispatch }}>
                <Header />
                <InputField />
                <ListToBuy />
                <ListChecked />
                <Footer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
