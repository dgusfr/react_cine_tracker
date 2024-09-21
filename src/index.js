import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "routes";
import { FilmeProvider } from "contextos/FilmeContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <FilmeProvider>
      <AppRoutes />
    </FilmeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
