<!--
 * @Author: lg
 * @Date: 2023-11-14 15:46:05
 * @LastEditors: lg
 * @LastEditTime: 2023-11-14 15:53:17
 * @Description: 
 * @FilePath: \vite-react\readme-hook函数.md
-->


## useEffect 
>  useEffect是 React Hooks 中的一个函数，用于在函数组件中执行副作用操作。副作用操作通常包括数据获取、订阅更新、手动操作 DOM 等。useEffect 可以让你在函数组件中实现类似于生命周期方法（如 componentDidMount、componentDidUpdate、componentWillUnmount）的功能。useEffect 接受两个参数：一个是副作用函数，另一个是依赖项数组。

```jsx
//useEffect 中的副作用函数会在组件挂载后和每次 count 更新后执行。同时，由于传入了 count 作为依赖项数组，所以只有当 count 发生变化时，副作用函数才会被重新执行。
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // 在组件挂载后和每次更新后执行副作用函数
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 发生变化时才会重新执行副作用函数

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

- componentDidMount 方法会在组件挂载后立即调用，通常用于执行一次性的初始化操作，如数据获取、订阅事件等。这个阶段适合进行组件初始化需要的操作。

- componentDidUpdate componentDidUpdate(prevProps, prevState) 会在组件更新后立即调用，首次渲染不会执行。它允许你对组件更新前后的 props 和 state 进行比较，并在需要时执行相应的操作。在这个阶段可以处理状态变化后的逻辑

- componentWillUnmount  会在组件被卸载及销毁前立即调用，通常用于清理工作，如取消订阅、清除计时器等。这个阶段适合执行一些清理和资源释放的操作。

- 使用 useEffect 来替代上述生命周期方法的功能。例如，可以在 useEffect 中模拟 componentDidMount 和 componentWillUnmount 的效果，并在 useEffect 的依赖项数组中加入需要监测的状态，以达到类似 componentDidUpdate 的效果。