/*
 * @Author: lg
 * @Date: 2023-11-08 08:59:37
 * @LastEditors: lg
 * @LastEditTime: 2023-11-09 14:33:34
 * @Description:
 * @FilePath: \vite-react\src\App.jsx
 */
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
// import Router from './router/index';
import { routes } from './router/index';

import { Suspense } from 'react'
function App() {
  // const [count, setCount] = useState(0);
  const ele = useRoutes(routes);

  return (
    <>
    {/* Suspense包裹异步组件 */}
      <Suspense>
        {/* <Router></Router> */}
        {ele}

      </Suspense>
    </>



  );
}

export default App;
