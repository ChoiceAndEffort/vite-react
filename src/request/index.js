/*
 * @Author: lg
 * @Date: 2024-01-04 10:09:48
 * @LastEditors: lg
 * @LastEditTime: 2024-01-04 10:37:02
 * @Description: 
 * @FilePath: \vite-react\src\request\index.js
 */
/*
 * @Author: lg
 * @Date: 2024-01-04 10:09:48
 * @LastEditors: lg
 * @LastEditTime: 2024-01-04 10:09:58
 * @Description:
 * @FilePath: \vite-react\src\request\index.js
 */
import axios from 'axios';

class HttpRequest {
  constructor(options) {
    this.instance = axios.create(options);
    this.addRequestInterceptor(options);
    this.addResponseInterceptor(options);
  }
  addRequestInterceptor(options) {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  addResponseInterceptor(options) {
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

const { instance: ajax } = new HttpRequest({
  // baseURL: 'http://localhost:3001',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default ajax;
