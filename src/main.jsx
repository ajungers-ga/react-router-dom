// src/main.jsx

// 1. Import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 2 Import BrowserRouter from React Router
import { BrowserRouter } from 'react-router-dom';

// 3. Wrap the App in BrowserRouter to enable client-side routing
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
