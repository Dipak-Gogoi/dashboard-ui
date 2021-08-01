import React from 'react';
import { Card } from 'antd';
import { MoreOutlined, MenuOutlined, CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import classes from './OngoingProjects.module.css';

const MoreOngoingProjects = (props) => {
    return (
        <div className={classes['project-card']}>
            <Card style={{ width: 225, marginRight: '15.3px' }} className={classes['project-card-body']}>
                <div className={classes['project-card-header']}>
                    <img src='./images/Ellipse 12.svg' alt='' />
                    <p>Product Release</p>
                    <MoreOutlined />
                </div>
                <div className={classes['progress-bar']}>
                    <div className={classes['progress-bar-one']}>
                        <div className={classes['progress-bar-two']}></div>
                    </div>
                </div>
                <div className={classes['complete-status']}>
                    <MenuOutlined className={classes['complete-status-list-icon']} />
                    <CheckOutlined className={classes['complete-status-tick-icon']} />
                    <p>2/6</p>
                </div>
                <div className={classes['time-user']} style={{ color: '#2FBBA4' }}>
                    <ClockCircleOutlined />
                    <p> 5 Days Left</p>
                    <div className={classes['users-icon']}>
                        <img src='./images/user 1.png' alt='' />
                        <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                        <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                    </div>
                </div>
            </Card>

            <Card style={{ width: 225, marginRight: '15.3px' }} className={classes['project-card-body']}>
                <div className={classes['project-card-header']}>
                    <img src='./images/Ellipse 5.svg' alt='' />
                    <p>Marketing Activiti...</p>
                    <MoreOutlined />
                </div>
                <div className={classes['progress-bar']}>
                    <div className={classes['progress-bar-one']}>
                        <div className={classes['progress-bar-three']}></div>
                    </div>
                </div>
                <div className={classes['complete-status']}>
                    <MenuOutlined className={classes['complete-status-list-icon']} />
                    <CheckOutlined className={classes['complete-status-tick-icon']} />
                    <p>2/6</p>
                </div>
                <div className={classes['time-user']} style={{ color: '#2FBBA4' }}>
                    <ClockCircleOutlined />
                    <p> 5 Days Left</p>
                    <div className={classes['users-icon']}>
                        <img src='./images/user 1.png' alt='' />
                        <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                        <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                    </div>
                </div>
            </Card>

            <Card style={{ width: 225 }} className={classes['project-card-body']}>
                <div className={classes['project-card-header']}>
                    <img src='./images/Ellipse 10.svg' alt='' />
                    <p>Design Briidge App</p>
                    <MoreOutlined />
                </div>
                <div className={classes['progress-bar']}>
                    <div className={classes['progress-bar-one']}>
                        <div className={classes['progress-bar-one-one']}></div>
                    </div>
                </div>
                <div className={classes['complete-status']}>
                    <MenuOutlined className={classes['complete-status-list-icon']} />
                    <CheckOutlined className={classes['complete-status-tick-icon']} />
                    <p>2/6</p>
                </div>
                <div className={classes['time-user']} style={{ color: '#2FBBA4' }}>
                    <ClockCircleOutlined />
                    <p> 6 Days Left</p>
                    <div className={classes['users-icon']}>
                        <img src='./images/user 1.png' alt='' />
                        <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                        <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                    </div>
                </div>
            </Card>


            <Card style={{ width: 225 }} className={classes['project-card-body']}>
                <div className={classes['project-card-header']}>
                    <img src='./images/Ellipse 4.svg' alt='' />
                    <p>Design Briidge App</p>
                    <MoreOutlined />
                </div>
                <div className={classes['progress-bar']}>
                    <div className={classes['progress-bar-one']}>
                        <div className={classes['progress-bar-one-one']}></div>
                    </div>
                </div>
                <div className={classes['complete-status']}>
                    <MenuOutlined className={classes['complete-status-list-icon']} />
                    <CheckOutlined className={classes['complete-status-tick-icon']} />
                    <p>2/6</p>
                </div>
                <div className={classes['time-user']} style={{ color: '#2FBBA4' }}>
                    <ClockCircleOutlined />
                    <p> 7 Days Left</p>
                    <div className={classes['users-icon']}>
                        <img src='./images/user 1.png' alt='' />
                        <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                        <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                    </div>
                </div>
            </Card>


            <Card style={{ width: 225 }} className={classes['project-card-body']}>
                <div className={classes['project-card-header']}>
                    <img src='./images/Ellipse 6.svg' alt='' />
                    <p>Design Briidge App</p>
                    <MoreOutlined />
                </div>
                <div className={classes['progress-bar']}>
                    <div className={classes['progress-bar-one']}>
                        <div className={classes['progress-bar-one-one']}></div>
                    </div>
                </div>
                <div className={classes['complete-status']}>
                    <MenuOutlined className={classes['complete-status-list-icon']} />
                    <CheckOutlined className={classes['complete-status-tick-icon']} />
                    <p>2/6</p>
                </div>
                <div className={classes['time-user']} style={{ color: '#2FBBA4' }}>
                    <ClockCircleOutlined />
                    <p> 7 Days Left</p>
                    <div className={classes['users-icon']}>
                        <img src='./images/user 1.png' alt='' />
                        <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                        <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                    </div>
                </div>
            </Card>


            <Card style={{ width: 225 }} className={classes['project-card-body']}>
                <div className={classes['project-card-header']}>
                    <img src='./images/Ellipse 7.svg' alt='' />
                    <p>Design Briidge App</p>
                    <MoreOutlined />
                </div>
                <div className={classes['progress-bar']}>
                    <div className={classes['progress-bar-one']}>
                        <div className={classes['progress-bar-one-one']}></div>
                    </div>
                </div>
                <div className={classes['complete-status']}>
                    <MenuOutlined className={classes['complete-status-list-icon']} />
                    <CheckOutlined className={classes['complete-status-tick-icon']} />
                    <p>2/6</p>
                </div>
                <div className={classes['time-user']} style={{ color: '#2FBBA4' }}>
                    <ClockCircleOutlined />
                    <p> 8 Days Left</p>
                    <div className={classes['users-icon']}>
                        <img src='./images/user 1.png' alt='' />
                        <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                        <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default MoreOngoingProjects;
