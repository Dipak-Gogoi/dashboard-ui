import React from 'react';
import { Card } from 'antd';
import { ExclamationCircleOutlined, UpOutlined, DownOutlined, MoreOutlined, MenuOutlined, CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import classes from './OngoingProjects.module.css';
import MoreOngoingProjects from './MoreOngoingProjects';

const OngoingProjects = (props) => {


    return (
        <div className={classes['projects-card-content']}>
            <div className={classes['projects-header']}>
                <div className={classes['project-header-sub-one']}>
                    <p> Ongoing Projects</p>
                    <ExclamationCircleOutlined className={classes['header-icon']} />
                </div>
                <div className={classes['project-header-sub-two']} onClick={props.handleClick}>
                    {props.openMoreProjects ? (
                        <>
                            <p>See less</p>
                            <UpOutlined />
                        </>
                    ) : (
                            <>
                                <p>See all</p><DownOutlined />
                            </>
                        )}
                </div>
            </div>
            <div className={classes['project-card']}>
                <Card style={{ width: 225, marginRight: '15.3px' }} className={classes['project-card-body']}>
                    <div className={classes['project-card-header']}>
                        <img src='./images/Ellipse 9.svg' alt='' />
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
                    <div className={classes['time-user']} style={{ color: '#F04D3E' }}>
                        <ClockCircleOutlined />
                        <p> 3 Hours Left</p>
                        <div className={classes['users-icon']}>
                            <img src='./images/user 1.png' alt='' />
                            <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                            <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                        </div>
                    </div>
                </Card>



                <Card style={{ width: 225, marginRight: '15.3px' }} className={classes['project-card-body']}>
                    <div className={classes['project-card-header']}>
                        <img src='./images/Ellipse 3.svg' alt='' />
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
                        <p> 4 Days Left</p>
                        <div className={classes['users-icon']}>
                            <img src='./images/user 1.png' alt='' />
                            <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                            <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                        </div>
                    </div>
                </Card>



                <Card style={{ width: 225 }} className={classes['project-card-body']}>
                    <div className={classes['project-card-header']}>
                        <img src='./images/Ellipse 2.svg' alt='' />
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
                        <p> 4 Days Left</p>
                        <div className={classes['users-icon']}>
                            <img src='./images/user 1.png' alt='' />
                            <img src='./images/user 2.png' alt='' className={classes['user-two']} />
                            <img src='./images/user 3.png' alt='' className={classes['user-three']} />
                        </div>
                    </div>
                </Card>
            </div>
            {props.openMoreProjects ? <MoreOngoingProjects /> : ''}
        </div>
    )
}

export default OngoingProjects
