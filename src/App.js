import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={appStyle}>
      <h1>Theme Toggle App</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;