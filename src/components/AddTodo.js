import React from "react";
import { useState } from "react";
import '../index.css';


export default function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="todo-button"
      >
        Add
      </button>
    </form>
  );
}
