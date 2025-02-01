/**
 * Entry point for the React (JavaScript) Vite app.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

// Mount the React app to the DOM element with id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
