import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./styles/global.css";
ReactDOM.createRoot(document.getElementById("app")).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);