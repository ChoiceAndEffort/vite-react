/*
 * @Author: lg
 * @Date: 2023-09-06 16:34:47
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 15:33:46
 * @Description:
 * @FilePath: \vite-react\mock\account\index.js
 */
import { MockMethod } from 'vite-plugin-mock';

const TIME_OUT = 500;

export default [
  /**
   * @description: 登录接口
   * @return {*}
   */
  {
    type: 'post',
    url: '/api/account/login',
    timeout: TIME_OUT,
    response: ({ query, body }) => {
      return {
        code: 200,
        msg: '登录成功',
        data: {
          token: 'lg001',
          nickName:'lg-哥哥哥',
          company:"枣阳大公司",
          menuList:[],
        },
        success: true,
        timestamp: Date.now()
      };
    }
  }
];
