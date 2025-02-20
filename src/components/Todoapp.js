import { useState, useEffect } from "react";
import '../index.css';


export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="todo-container">To-Do App</h1>
      <div className="todo-header">
        <div className="todo-input-container">
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button 
          className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 bg-gray-100 rounded-lg border ${task.completed ? "line-through text-gray-500" : "text-gray-700"}`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer hover:text-blue-500">
              {task.text}
            </span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}