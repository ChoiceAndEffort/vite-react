// 封装统一导出的store
import React, { createContext, useContext } from 'react';
// 两个store文件
import authStore from './auth/index';
import counterStore from './test/index';

// 声明一个 RootStore
class RootStore {
  authStore = authStore;
  counterStore = counterStore;
}

const store = new RootStore();
// 创建一个上下文对象，用于跨级组件通讯
// 如果createContext提供了默认值，不需要Provider
const Context = createContext(store);
// 自定义hook
export default function useStore() {
  return useContext(Context);
}
