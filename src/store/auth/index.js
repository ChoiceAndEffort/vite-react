import { makeAutoObservable, runInAction } from 'mobx';
import { loginApi } from '@/api/auth';
class AuthStore {
  loginInfo = {
    nickName: 'ddd'
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async login() {
    try {
      const res = await loginApi();
      if (res.code === 200) {
        runInAction(() => {
          this.loginInfo = res.data;
        });

        // console.log(res.data, 'mobx-res');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const authStore = new AuthStore();

export default authStore;
