/*
 * @Author: lg
 * @Date: 2023-11-14 11:09:34
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 16:05:39
 * @Description: 
 * @FilePath: \vite-react\src\views\layout\index.jsx
 */
import { Outlet } from "react-router-dom"
import './index.scss'
import LayoutSlider from './layout-slider'
import LayoutHeader from './layout-header'
import React, { useState } from 'react';
function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState('dark');
    return <>
        <div className="root-container">
            <header >
                <LayoutHeader collapsed={collapsed} theme={theme} updateThemeFn={setTheme} />
            </header>
            <div className="content">
                <LayoutSlider collapsed={collapsed}  theme={theme} updateCollapsedFn={setCollapsed} />
                <div className="right">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>


    </>
}
export default Layout