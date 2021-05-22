import React from "react";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import ListToBuy from "./ListToBuy";
import ListChecked from "./ListChecked";
import Footer from "./Footer";

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
