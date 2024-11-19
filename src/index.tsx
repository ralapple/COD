import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CitationsPage from './Citations';
import Timeline from './Timeline';
import AboutPage from './About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/COD">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/citations" element={<CitationsPage />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
