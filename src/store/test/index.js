import {
  // action, makeObservable, observable,
  makeAutoObservable
} from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   increment: action.bound, // 可以设置bound属性修改this指向
    //   decrement: action.bound,
    // });
    makeAutoObservable(this, {}, { autoBind: true });
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const counterStore = new CounterStore();

export default counterStore;
