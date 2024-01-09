import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [taskComplete, setTaskComplete] = useState(0);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    setCount(count + 1);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setCount(count - 1);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );

    setTaskComplete(
      (prevTaskComplete) =>
        prevTaskComplete +
        (todos.find((todo) => todo.id === id)?.completed ? -1 : 1)
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const count = JSON.parse(localStorage.getItem("count"));
    const taskComplete = JSON.parse(localStorage.getItem("taskComplete"));
    if (todos && todos.length > 0) {
      setTodos(todos);
      setCount(count);
      setTaskComplete(taskComplete);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("taskComplete", JSON.stringify(taskComplete));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="main min-h-screen py-8 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className=" font-bold text-center mb-1 mt-2  headLine">
            Manage Your Daily Tasks
          </h1>
          <div className="taskcom text-center mb-3 font-semibold ">
            {taskComplete} of {count} tasks
          </div>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
