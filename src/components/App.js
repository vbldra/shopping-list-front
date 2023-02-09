import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";

import Header from "./Header";
import InputField from "./InputField";
import Item from "./Item";
import Footer from "./Footer";

export const AppContext = React.createContext(null);

/** ENV VARIABLES **/
const URL = process.env.REACT_APP_BACKEND;

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //  Fetching data from db once
  useEffect(() => {
    async function fetchAPI() {
      try {
        const res = await axios.get(`${URL}/items`);
        setItems(res.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
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
    const updatedItem = items.map((e) => {
      if (e._id === item._id) {
        e.toBuy = item.toBuy;
      }
      return e;
    });
    setItems(updatedItem);
    await axios.put(`${URL}/items/${item._id}`, item);
  };

  const deleteItem = async (id) => {
    const newItemsArr = items.filter((e) => e._id !== id);
    setItems(newItemsArr);
    await axios.delete(`${URL}/items/${id}`);
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
          itemsChecked,
        }}
      >
        <Header />
        <InputField />
        {isLoading && "Loading.."}
        <div className="items-container flex">
          <div className="items-to-buy">
            {itemsToBuy.map((e) => (
              <Item data={e} type="item-to-buy" key={e._id} />
            ))}
          </div>
          <div className="items-purchased">
            {itemsChecked.map((e) => (
              <Item data={e} type="item-purchased" key={e._id} />
            ))}
          </div>
        </div>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
