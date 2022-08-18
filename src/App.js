import React, { useState } from "react";
import { addName } from "./features/Home/homeSlice";
import { sendData } from "./components/Socket/Socket";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const storeName = () => {
    dispatch(addName(name));
  };

  return (
    <div className="App">
      <h2>Homepage</h2>
      <input onChange={onChange} value={name}></input>
      <button onClick={storeName}>Set Name</button>
    </div>
  );
}

export default App;
