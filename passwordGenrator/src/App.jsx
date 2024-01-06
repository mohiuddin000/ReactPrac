import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  function refreshPass() {
    passwordGenarator();
  }
  const passwordGenarator = useCallback(() => {
    let pass = "";
    let str = "MNBVCXZLKJHGFDSAPOIUYTREWQasdfghjklpoiuytrewqzxcvbnm";

    if (numberAllowed) str += "1234506789";
    if (characterAllowed) str += "!@#$%^&*()_}{?><";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClickboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenarator();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <div className="body">
      <div className="main">
        <h2 className="heading">Password genrator</h2>
        <div className="password">
          <input
            type="text"
            value={password}
            id="pass"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="copy" onClick={copyPasswordToClickboard}>
            copy
          </button>
          <button className="copy" onClick={refreshPass}>
            Refresh
          </button>
        </div>
        <div className="lowerbody">
          <div className="slider">
            <input
              type="range"
              name="range"
              id="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">Length :{length} </label>
          </div>
          <div className="number">
            <input
              type="checkbox"
              name="number"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="char">
            <input
              type="checkbox"
              name="char"
              id="char"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
