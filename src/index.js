import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Partfirst from './Part1';
import Partsecond from './Part2';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Partfirst />
    <Partsecond />
  </React.StrictMode>
);


