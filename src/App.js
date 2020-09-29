import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = (props) => {
  // const initialStates = {};
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  // console.log(output);
  return (
    <div>
      <p>
        現在の{name}は{price}です
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
