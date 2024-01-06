import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="body" style={{ backgroundColor: color }}>
        <div className="button">
          <div className="bar">
            <button
              className="buttonsize "
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => setColor("black")}
            >
              black
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              white
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              purple
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              olive
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              purple
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              gray
            </button>
            <button
              className="buttonsize "
              style={{ backgroundColor: "silver" }}
              onClick={() => setColor("silver")}
            >
              silver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
