import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {HighImpact} from './pages/logs.jsx';
import './index.css';
// import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HighImpact/> 
  </StrictMode>,
)
