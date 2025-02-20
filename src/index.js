import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import { Provider } from "react-redux";
import store from "./store"; 
import Routing from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Routing />
    </Provider>
  </React.StrictMode>
);
