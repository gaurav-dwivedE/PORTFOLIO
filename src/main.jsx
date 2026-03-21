import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';  // Your main app component
import './index.css';         // Import your CSS file
import { ThemeProvider } from "./components/theme/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);