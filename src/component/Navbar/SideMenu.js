import React, { useState, useEffect } from 'react';
import { HomeFilled, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import MenuItem from './MenuItem';


const menuItems = [
    { name: 'Dashboard', exact: true, to: '/', iconClassName: 'bi bi-person' },
    { name: 'Campaigns', exact: true, to: '/campaigns', iconClassName: 'bi bi-journal-medical' },
    { name: 'Clients', exact: true, to: '/clients', iconClassName: 'bi bi-gear' },
    { name: 'Analytics', exact: true, to: '/analytics', iconClassName: 'bi bi-gear' },
    { name: 'Reports', exact: true, to: '/reports', iconClassName: 'bi bi-gear' },
    { name: 'Calendar', exact: true, to: '/calendar', iconClassName: 'bi bi-gear' },
    { name: 'Support', exact: true, to: '/support', iconClassName: 'bi bi-gear' },
]

const SideMenu = () => {
    const [inActive, setInActive] = useState(true);


    const toggleButtom = () => {
        setInActive(!inActive);
    };


    return (
        <div className={`side-menu ${inActive ? 'inactive' : ''}`}>
            <div className='main-menu'>
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                exact={menuItem.exact}
                                iconName={menuItem.iconClassName}
                                to={menuItem.to}

                            />
                        ))
                    }
                </ul>
                <div className='toggle-menu-btn' onClick={toggleButtom}>
                    {inActive ? (<ArrowRightOutlined />) : (<ArrowLeftOutlined />)}
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
