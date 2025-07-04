// src/main.jsx or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter as Router } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'; // Import your global styles
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/hello-world-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// This is the entry point of the React application.
// It renders the App component wrapped in BrowserRouter for routing support.
// The React.StrictMode is used to highlight potential problems in the application.
// It helps in identifying unsafe lifecycles, legacy API usage, and other issues.
// The application is mounted to the root element in the HTML file.
