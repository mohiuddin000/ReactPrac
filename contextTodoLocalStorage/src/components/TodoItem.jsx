import React from "react";
import { useState } from "react";
import { useTodo } from "../context";
import "./TodoItem.css";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [time, setTime] = useState(todo.id);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg, id: time });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const timeset = (time) => {
    const currentDate = new Date(time);

    const monthNamesShort = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(currentDate);

    const formattedDate = `${currentDate.getDate()} ${monthNamesShort} `;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    return `${formattedDate}${formattedTime}`;
  };

  return (
    <div
      className={`main flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <div className="texttime">
        <input
          type="text"
          className={` font-bold border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => [setTodoMsg(e.target.value, setTime(e.target.id))]}
          readOnly={!isTodoEditable}
        />
        <div className="timeclass">{timeset(time)}</div>
      </div>
      {/* Edit, Save Button */}
      <div className="buttons">
        <button
          className=" inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
