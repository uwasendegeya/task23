// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../index.css';


export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (title) => {
    const newTodo = { title, completed: false };
    axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error("Error adding todo:", error));
  };

  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return { todos, addTodo, deleteTodo };
}
