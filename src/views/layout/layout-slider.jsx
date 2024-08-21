/*
 * @Author: lg
 * @Date: 2023-11-14 13:15:07
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 16:39:07
 * @Description: 
 * @FilePath: \vite-react\src\views\layout\layout-slider.jsx
 */
import React, { useState } from 'react';
import {
    AppstoreOutlined, MailOutlined, SettingOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu, Switch, Button } from 'antd';
import './layout-slider.scss'
import { useNavigate, Outlet, useLocation } from 'react-router-dom';


const items = [
    {
        "key": "/home",
        "icon": <AppstoreOutlined />,
        "label": "个人中心"
    },
    {
        "key": "/personnel-management",
        "icon": <MailOutlined />,
        "label": "人事管理",
        children: [
            {
                "key": "/personnel-management/organization",
                "icon": '',
                "label": "组织架构",
            },
            {
                "key": "/personnel-management/personnel-information",
                "icon": '',
                "label": "人员信息",
            },
            {
                "key": "/personnel-management/role-configuration",
                "icon": '',
                "label": "角色配置",
            }
        ]
    },
    {
        "key": "/project-list",
        "icon": <AppstoreOutlined />,
        "label": "项目列表"
    },
];



function LayoutSlider({ }) {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const [current, setCurrent] = useState('1');

    const navigate = useNavigate()
    const location = useLocation();

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(e.key)
    };



    return <div className='layout-slider-root' style={{ width: 256 }}>
        {/* <Button type="primary" onClick={toggleCollapsed} className="slider-switch">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}

        <Menu
            onClick={onClick}
            defaultSelectedKeys={['/personnel-management']}
            defaultOpenKeys={[]}
            mode={mode}
            theme={theme}
            items={items}
        />

    </div >
}
export default LayoutSlider