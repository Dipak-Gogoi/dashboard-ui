import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, StarOutlined } from '@ant-design/icons';

const Topbar = () => {
    return (
        <div className='top-bar'>
            <div className='logo-icon'>
                <img src='./images/briidge-logo.png' alt='' />
            </div>
            <div className='search-input'>
                <Input placeholder='Search' />
                <SearchOutlined className='search-icon' />
            </div>
            <div className='star'>
                <StarOutlined className='star-icon' />
                <p>Starred</p>
            </div>
            <div className='at'>
                @
                <p>Mentions</p>
            </div>
            <div className='create-button'>
                <Button type="primary"><p><span>+</span>Create</p></Button>
            </div>
            <div className='notification'>
                <img src='images/notification.svg' alt='' />
                <button><p>11</p></button>
            </div>
            <div className='user'>
                <img src='./images/avatar.svg' alt='' />
                <p>Bhavya Thakkar</p>
            </div>
        </div>
    )
}

export default Topbar;
