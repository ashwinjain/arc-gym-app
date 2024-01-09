import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { SectionList } from "react-native";

const products = [
  { name: "Lower Level", id: 1 },
  { name: "Concourse Level", id: 2 },
  { name: "Upper Level", id: 3 },
];

function ListItem() {
  function handleListItemClick() {
    console.log("clicked");
  }

  const listItems = products.map((product) => (
    // create a list of product items with each item having a unique id and onclick event
    <li key={product.id} onClick={handleListItemClick}>
      {product.name}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function Button() {
  return <button> Click me</button>;
}
function App() {
  return <Button />;
}

export default App;
