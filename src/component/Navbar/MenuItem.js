import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
    const { name, img, to, exact } = props;

    return (
        <li>
            <NavLink exact={exact} to={to} className='menu-item'>
                <div className='menu-icon'>
                    <img src={img} alt='' ></img>
                </div>
                <span>{name}</span>
            </NavLink>
        </li >
    )
}

export default MenuItem;
