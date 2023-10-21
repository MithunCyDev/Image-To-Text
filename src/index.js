import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OCRScanner from './OCRScanner';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OCRScanner />
  </React.StrictMode>
);

reportWebVitals();
