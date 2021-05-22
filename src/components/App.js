import React from "react";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import ListToBuy from "./ListToBuy";
import ListChecked from "./ListChecked";
import Footer from "./Footer";

async function checkAPI() {
    const res = await fetch('/items')
    const data = await res.json()
    console.log(data)
}
checkAPI()

function App() {
    return (
        <div className="App">
            <Header />
            <InputField />
            <ListToBuy />
            <ListChecked />
            <Footer />
        </div>
    );
}

export default App;
