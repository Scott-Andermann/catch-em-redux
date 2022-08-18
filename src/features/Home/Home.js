import React, { useState } from "react";
import { addName, selectName } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState(useSelector(selectName));
  const [stored, setStored] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const storeName = () => {
    if (name.length > 0) {
      dispatch(addName(name));
      alert(`Name changed to: ${name}`)
      setStored(true);
    }
  };

  const nameForm = () => {
    return (
      <div>
        <input onChange={onChange} value={name}></input>
        <button onClick={storeName}>Set Name</button>
      </div>
    )
  }

  const welcomeForm = () => {
    return (
      <div>
        <h3>Welcome {name}</h3>
        <button onClick={() => setStored(false)}>Click to change name</button>
      </div>

    )
  }

  return (
    <div className="App">
      <h2>Homepage</h2>
      {stored ? welcomeForm() : nameForm()}
    </div>
  );
}

export default App;
