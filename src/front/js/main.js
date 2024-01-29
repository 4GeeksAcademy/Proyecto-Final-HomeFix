import React from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { MaterialTailwindControllerProvider } from "../../front/js/context";

import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
