/*
 * @Author: lg
 * @Date: 2023-11-14 14:00:59
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 15:46:26
 * @Description: 
 * @FilePath: \vite-react\src\views\layout\layout-header.jsx
 */
import './layout-header.scss'

import React, { useState } from 'react';
import { Switch } from 'antd';
import { useSelector } from 'react-redux';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        key: 'exit',
        label: '退出登录',
    },
]
function LayoutHeader({ collapsed, theme, updateThemeFn }) {
    const navigate = useNavigate();

    const changeTheme = (value) => {
        // setTheme(value ? 'dark' : 'light');
        let a = value ? 'dark' : 'light'
        updateThemeFn(a)
    };
    // const selectLoginInfoStore = useSelector(selectLoginInfo);


    const handleMenuClick = (e) => {
        console.log(e.key, 666666666)
        if (e.key === 'exit') {
            navigate('/login')
        }
    };

    return <div className='header' >
        <div className="left" style={{ width: collapsed ? 56 : 256 }}>logo</div>
        <div className="right">
            <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            test
            {/* {selectLoginInfoStore.nickName} */}
            <Dropdown
                menu={{
                    items, onClick: handleMenuClick,
                }}

            >
                {/* <a onClick={(e) => e.preventDefault()}> */}
                <Space>
                    <DownOutlined />
                </Space>
                {/* </a> */}
            </Dropdown>
        </div>
    </div >
}
export default LayoutHeader