/*
 * @Author: lg
 * @Date: 2023-11-08 08:59:37
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 15:22:33
 * @Description: 
 * @FilePath: \vite-react\src\main.jsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css';
import '@/styles/reset.scss'
import { BrowserRouter } from 'react-router-dom';

import store from './store/index'
// import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />


    </BrowserRouter>
  </React.StrictMode>
);
