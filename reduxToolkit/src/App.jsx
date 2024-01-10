import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodoList from "./components/AddTodoList";
import Todos from "./components/Todos";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <AddTodoList />
            <Todos />
        </>
    );
}

export default App;
