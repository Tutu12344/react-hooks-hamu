import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = (props) => {
  // const initialStates = {};
  // const [name, setName] = useState(props.name);
  const [state, setState] = useState(props);
  const { name, price } = state;
  // const [price, setPrice] = useState(props.price);
  // console.log(output);
  const reset = () => {
    setState(props);
  };
  return (
    <div>
      <p>
        現在の{name}は{price}です
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>
        -1
      </button>
      <button onClick={reset}>reset</button>

      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </div>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
