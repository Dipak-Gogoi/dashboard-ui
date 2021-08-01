import React, { useState } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import MenuItem from './MenuItem';


const menuItems = [
    { name: 'Dashboard', exact: true, to: '/', img: './images/Home.svg' },
    { name: 'Campaigns', exact: true, to: '/campaigns', img: './images/Campaigns.svg' },
    { name: 'Clients', exact: true, to: '/clients', img: './images/Clients.svg' },
    { name: 'Analytics', exact: true, to: '/analytics', img: './images/Analytics.svg' },
    { name: 'Reports', exact: true, to: '/reports', img: './images/Reports.svg' },
    { name: 'Calendar', exact: true, to: '/calendar', img: './images/Calendar.svg' },
    { name: 'Support', exact: true, to: '/support', img: './images/Support.svg' },
]

const SideMenu = (props) => {
    const [inActive, setInActive] = useState(true);


    const toggleButtom = () => {
        setInActive(!inActive);
    };


    return (
        <div className={`side-menu ${inActive ? '' : 'inactive'}`}>
            <div className='main-menu'>
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                exact={menuItem.exact}
                                img={menuItem.img}
                                to={menuItem.to}

                            />
                        ))
                    }
                </ul>
                <div className='toggle-menu-btn' onClick={toggleButtom}>
                    {inActive ? (<LeftOutlined />) : (<RightOutlined />)}
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
