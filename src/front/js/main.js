import React from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./index.css";


const root = createRoot(document.querySelector("#app"));

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
