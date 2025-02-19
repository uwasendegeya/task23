import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask, deleteTask } from "./tasksSlice";
import "./ToDoList.css"; 

function ToDoList() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        className="todo-input"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-btn" onClick={handleAddTask}>Add Task</button>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            {task.text}
            <div>
              <button className="task-btn complete-btn" onClick={() => dispatch(toggleTask(task.id))}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button className="task-btn delete-btn" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
