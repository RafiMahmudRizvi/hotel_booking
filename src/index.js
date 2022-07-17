//react
import React from 'react';

//react-dom
import ReactDOM from 'react-dom/client';

//react-router-dom
import {
  BrowserRouter
} from "react-router-dom";

//components
import App from './App';

//css
import './css/index.css'

//----------------------------------------------------------------//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//----------------------------------------------------------------//


