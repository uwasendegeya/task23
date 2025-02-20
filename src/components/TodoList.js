import React from "react";
import TodoItem from "./TodoItem";
import '../index.css';


export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul></div>
  );
}
