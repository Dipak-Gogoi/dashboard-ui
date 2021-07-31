import React from 'react';
import { Card } from 'antd';
import {
    DownCircleOutlined,
    AreaChartOutlined,
    ReconciliationOutlined,
    ThunderboltOutlined,
    HourglassOutlined,
    CheckCircleOutlined,
    CheckOutlined
} from '@ant-design/icons';
import classes from './ProjectStatus.module.css';

const ProjectStatus = () => {
    return (
        <div className={classes['project-status-content']}>
            <div className={classes['project-status-card']}>
                <div className={classes['project-status-card-header']}>
                    <div className={classes['project-status-card-header-sub']}>
                        <p>Projects Status</p>
                        <DownCircleOutlined style={{ marginLeft: ' 4.25px' }} />
                    </div>
                    <div className={classes['project-status-card-header-graph']}>
                        <AreaChartOutlined className={classes['graph-button-icon']} />
                        <button>See Analytics</button>
                    </div>
                </div>
                <div className={classes['project-status-card-content']}>
                    <Card style={{ width: 159, height: 105 }} bodyStyle={{ paddingTop: "10px" }} className={classes['project-card-body']}>
                        <ReconciliationOutlined style={{ width: 14, color: '#EBA83A' }} />
                        <p style={{ fontSize: 16, fontWeight: 500, color: '#4E4B66' }}>Planning</p>
                        <p style={{ fontSize: 24, fontWeight: 700, color: '#EBA83A' }}>24</p>
                    </Card>
                    <Card style={{ width: 159, height: 105 }} bodyStyle={{ paddingTop: "10px" }} className={classes['project-card-body']}>
                        <ThunderboltOutlined style={{ width: 14, color: '#2FBBA4' }} />
                        <p style={{ fontSize: 16, fontWeight: 500, color: '#4E4B66' }}>Planning</p>
                        <p style={{ fontSize: 24, fontWeight: 700, color: '#2FBBA4' }}>13</p>
                    </Card>
                    <Card style={{ width: 159, height: 105 }} bodyStyle={{ paddingTop: "10px" }} className={classes['project-card-body']}>
                        <HourglassOutlined style={{ width: 14, color: '#F04D3E' }} />
                        <p style={{ fontSize: 16, fontWeight: 500, color: '#4E4B66' }}>Planning</p>
                        <p style={{ fontSize: 24, fontWeight: 700, color: '#F04D3E' }}>08</p>
                    </Card>
                    <Card style={{ width: 159, height: 105 }} bodyStyle={{ paddingTop: "10px" }} className={classes['project-card-body']}>
                        <CheckCircleOutlined style={{ width: 14, color: '#4D34D7' }} />
                        <p style={{ fontSize: 16, fontWeight: 500, color: '#4E4B66' }}>Planning</p>
                        <p style={{ fontSize: 24, fontWeight: 700, color: '#4D34D7' }}>60</p>
                    </Card>
                </div>
            </div>
            <div className={classes['project-status-todo-content']}>
                <div className={classes['project-status-todo']}>
                    <Card title='Todo' style={{ width: 338, backgroundColor: '#F7F7FC' }} className={classes['project-status-todo-card']}>
                        <div className={classes['project-status-todo-list']} style={{ paddingBottom: '30px' }}>
                            <div className={classes['todo-list-checkbox']}>
                                <div className={classes['todo-list-checkbox-button']}>
                                    <button />
                                    <p>Retouched calender, Project & task cards</p>
                                </div>
                                <div className={classes['todo-list-checkbox-button']} style={{ marginTop: 19 }}>
                                    <button>
                                        <CheckOutlined className={classes['todo-list-checkbox-button-check']} style={{ fontSize: 10 }} />
                                    </button>
                                    <p>Retouched whole typhography of app in to <br /> make it look clean and minimal</p>
                                </div>
                                <div className={classes['todo-list-checkbox-button']} style={{ marginTop: 19 }}>
                                    <button />
                                    <p>Create button position changed</p>
                                </div>
                                <div className={classes['todo-list-checkbox-button']} style={{ marginTop: 19 }}>
                                    <button />
                                    <p>Send Himanshu Updates</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProjectStatus;
