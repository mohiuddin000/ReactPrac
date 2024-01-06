import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addcount() {
    setCount(count + 1);
  }

  function removecount(params) {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }
  return (
    <>
      <div className="main">
        <div className="count"> count {count}</div>
        <div className="button">
          <button className="buttonc" onClick={addcount}>
            increment
          </button>
          <button className="buttonc" onClick={removecount}>
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
