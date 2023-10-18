/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <p>
      <a href="https://github.com/chichi5454" target="_blank" rel="noreferrer">
        Open-source code
      </a>
      By Lauryn Mutai
    </p>
  </StrictMode>
);
