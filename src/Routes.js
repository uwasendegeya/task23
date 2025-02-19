import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext"; 
import ToDoList from "./ToDoList";

function Routing() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ToDo" element={<ToDoList/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routing;
