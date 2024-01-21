import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById("root");

// Use createRoot instead of ReactDOM.render
const rootInstance = createRoot(root);

// Render the App component inside createRoot
rootInstance.render(
  <Router>
    <App />
  </Router>
);
