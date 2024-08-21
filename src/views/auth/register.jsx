/*
 * @Author: lg
 * @Date: 2024-01-04 11:55:10
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 15:46:15
 * @Description: 
 * @FilePath: \vite-react\src\views\auth\register.jsx
 */
import React from 'react'
import { BgImgDiv } from '@/styles/div-css/bg-css.js';

import { Button } from 'antd';
import { registerApi } from '@/api/auth'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate = useNavigate();
    const handleToRegister = async () => {
        const res = await registerApi({
            account: '18824399999',
            pwd: '123456',
        })
        if (res.code === 200) {
            navigate('/login');
        }

    }
    const handleToLogin = () => {
        navigate('/login');
    }
    return (
        <BgImgDiv bgimage="src/assets/images/bg.webp">
            <Button type="primary" onClick={handleToRegister} >注册</Button>
            <Button type="text" onClick={handleToLogin} >去登录</Button>
        </BgImgDiv >
    )
}
