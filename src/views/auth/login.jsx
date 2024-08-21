/*
 * @Author: lg
 * @Date: 2023-11-14 13:01:20styled-components传参
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 15:41:29
 * @Description: 
 * @FilePath: \vite-react\src\views\account\login.jsx
 */

import { Button } from 'antd';
import { BgImgDiv } from '@/styles/div-css/bg-css.js';
import { useNavigate } from 'react-router-dom';
import useStore from '@/store/index'


function Login() {

    const { authStore } = useStore()
    const navigate = useNavigate();
    const handleToLogin = () => {
        // console.log('登录按钮 ');
        authStore.login({ account: '18888888888', password: 123456 })
        navigate('/home', {
            replace: true
        });

    };
    const handleToRegister = () => {
        navigate('/register');
    }

    const loginStyle = {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center'
    }
    // bgImage="https://lmg.jj20.com/up/allimg/1113/051220112022/200512112022-1-1200.jpg"
    return <BgImgDiv bgimage="src/assets/images/bg.webp">
        {/* {loginInfo.nickName} {selectLoginInfo2.nickName} */}
        <Button type="primary" onClick={handleToLogin} >登录</Button>
        <Button type="text" onClick={handleToRegister} >去注册</Button>
    </BgImgDiv >
}
export default Login