import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  const [btnColor, setBtnColor] = useState("white");

  const handleChange = (event) => {
    setInput(event.target.value);
    setBtnColor("white");
  };

  const handleAdd = (event) => {
    if (input !== "") {
      setItemsArray([...itemsArray, input]);
      setInput("");
    } else {
      setBtnColor("red");
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button style={{ backgroundColor: btnColor }} onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
