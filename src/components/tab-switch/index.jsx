import React, { useState } from 'react'
import './index.scss'

export default function TabSwitch({ tabs = [], onTabChange = () => { } }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.value || 1);

    const styles = {
        display: 'flex',
        width: '300px',
    };
    const stylesLi = {
        flex: 1,
    };
    return (
        <ul style={styles}>
            {tabs?.map((item, index) => (
                <li
                    style={stylesLi}
                    key={index}
                    onClick={() => handleTabClick(item)}
                    className={index + 1 === activeTab ? 'active' : ''}
                >
                    {item.label}
                </li>
            ))}
        </ul>
    );
}
