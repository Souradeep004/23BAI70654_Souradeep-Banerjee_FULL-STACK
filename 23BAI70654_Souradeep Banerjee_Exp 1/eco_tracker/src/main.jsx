import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './pages/dashboard.jsx';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard/> 
  </StrictMode>,
)
