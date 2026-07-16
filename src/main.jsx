import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import TaskProvider from "./context/TaskProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <App />
        <Toaster position="top-right"/>
      </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>
);