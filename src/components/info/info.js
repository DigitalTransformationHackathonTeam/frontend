import React from 'react'
import {Card, Empty} from "antd";
import "./info.css"


export default class Info extends React.Component {
    render() {
        return (
            <Card className="info-card">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            </Card>
        )
    }
}