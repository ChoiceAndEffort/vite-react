/*
 * @Author: lg
 * @Date: 2023-11-08 09:06:01
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 15:48:40
 * @Description:
 * @FilePath: \vite-react\src\views\home\index.jsx
 */

import useStore from '@/store/index'

import { useObserver } from 'mobx-react-lite';

function Home() {
  const { authStore, counterStore } = useStore()
  return useObserver(() => (
    <>
      {/* {authStore.loginInfo.nickName} */}
      {JSON.stringify(authStore.loginInfo)}
      <p>Count: {counterStore.count}</p>
      <button onClick={counterStore.increment}>Increment</button>
      <button onClick={counterStore.decrement}>Decrement</button>
    </>
  ));
}

export default Home;
