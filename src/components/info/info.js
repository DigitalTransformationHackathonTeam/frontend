import React from 'react'
import {Card, Empty, Tag} from "antd";
import "./info.css"


export default class Info extends React.Component {

    render() {
        const {properties} = this.props;
        if (properties === null) {
            return (
                <Card className="info-card">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                </Card>
            )
        } else {
            return (
                <Card className="info-card">
                    <h1>Точка №{properties.id + 1}</h1>
                    <p>
                        <b>Скоринг:</b> {Math.floor(properties.score)}/100
                    </p>
                    <span className="text-info-style">Почему перспективно:</span>
                    <div>
                        <Tag color="blue">{properties.explanation}</Tag>
                    </div>
                </Card>
            )
        }

    }
}
