import React from 'react';
import { Card } from 'antd';
import { ExclamationCircleOutlined, StarFilled, MoreOutlined, MessageOutlined, CheckOutlined } from '@ant-design/icons';

import classes from './AllProjects.module.css';

const AllProjects = () => {
    return (
        <div className={classes['all-projects']}>
            <div className={classes['all-projects-headers']}>
                <p className={classes['all-projects-headers-p']}>Today <button style={{ color: '#4D34D7' }}>23</button></p>
                <p>This Week <button>23</button></p>
                <p>Over duw <button>04</button></p>
                <ExclamationCircleOutlined style={{ paddingBottom: 8, color: '#6E7191' }} />
            </div>
            <div className={classes['all-projects-cards-content']}>
                <div className={classes['all-projects-cards']}>
                    <Card style={{ width: 214, marginRight: '15.3px', paddingRight: '2px' }} className={classes['all-project-card-body']}>
                        <div className={classes['all-projects-card-header']} style={{ color: '#F04D3E' }}>
                            <div className={classes.dot} style={{ background: '#F04D3E' }}></div>
                            <p>6 hours left</p>
                        </div>
                        <div className={classes['all-projects-cards-title']}>
                            <img src='./images/Ellipse 1.svg' alt='' />
                            <p>July social Media... </p>
                            <StarFilled style={{ color: ' #EBA83A' }} />
                            <MoreOutlined style={{ marginLeft: '2px' }} />
                        </div>
                        <div className={classes['all-projects-cars-footer']}>
                            <button className={classes['message-button']} style={{ background: '#F3F1FF', border: '0.5px solid #715DDF' }}>
                                <MessageOutlined />
                                <div className={classes['message-dot']}></div>
                                <p>06</p>
                            </button>
                            <button className={classes['attach-button']}>
                                <img src='./images/attach-button.svg' alt='' />
                            </button>
                            <div className={classes['check-button-box']}>
                                <button className={classes['check-button']}>
                                    <CheckOutlined className={classes['check-button-icon']} />
                                </button>
                            </div>
                        </div>
                    </Card>


                    <Card style={{ width: 214, marginRight: '15.3px' }} className={classes['all-project-card-body']}>
                        <div className={classes['all-projects-card-header']} style={{ color: '#4D34D7' }}>
                            <div className={classes.dot} style={{ background: '#4D34D7' }}></div>
                            <p>3 days left</p>
                        </div>
                        <div className={classes['all-projects-cards-title']}>
                            <img src='./images/Ellipse 3.svg' alt='' />
                            <p>July social Media... </p>
                            <StarFilled style={{ color: ' #EBA83A' }} />
                            <MoreOutlined style={{ marginLeft: '2px' }} />
                        </div>
                        <div className={classes['all-projects-cars-footer']} >
                            <button className={classes['message-button']} style={{ background: '#F7F7FC', border: '0.5px solid #D6D7E3', color: '#A0A3BD' }}>
                                <MessageOutlined />
                                <p>03</p>
                            </button>
                            <button className={classes['attach-button']}>
                                <img src='./images/attach-button.svg' alt='' />
                            </button>
                            <div className={classes['check-button-box']}>
                                <button className={classes['check-button']}>
                                    <CheckOutlined className={classes['check-button-icon']} />
                                </button>
                            </div>
                        </div>
                    </Card>


                    <Card style={{ width: 214, marginRight: '15.3px' }} className={classes['all-project-card-body']}>
                        <div className={classes['all-projects-card-header']} style={{ color: '#4E4B66' }}>
                            <div className={classes.dot} style={{ background: '#4E4B66' }}></div>
                            <p>12 April, 2021</p>
                        </div>
                        <div className={classes['all-projects-cards-title']}>
                            <img src='./images/Ellipse 1.svg' alt='' />
                            <p>July social Media... </p>
                            <StarFilled style={{ color: ' #EBA83A' }} />
                            <MoreOutlined style={{ marginLeft: '2px' }} />
                        </div>
                        <div className={classes['all-projects-cars-footer']}>
                            <button className={classes['message-button']} style={{ background: '#F7F7FC', border: '0.5px solid #D6D7E3', color: '#A0A3BD' }}>
                                <MessageOutlined />
                                <p>23</p>
                            </button>
                            <button className={classes['attach-button']}>
                                <img src='./images/attach-button.svg' alt='' />
                            </button>
                            <div className={classes['check-button-box']}>
                                <button className={classes['check-button']}>
                                    <CheckOutlined className={classes['check-button-icon']} />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default AllProjects;
