import React from "react";
import '../index.css';


export default function TodoItem({ todo, deleteTodo }) {
    return (
      <div className="todo-item">
      <li className="flex justify-between p-3 bg-gray-100 rounded-lg border">
        <span className={todo.completed ? "line-through text-gray-500" : "text-gray-700"}>
          {todo.title}
        </span>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </li>
      </div>
    );
  }
  