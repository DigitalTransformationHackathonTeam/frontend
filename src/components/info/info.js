import React from 'react'
import {Card, Empty} from "antd";
import "./info.css"


export default class Info extends React.Component {

    state = {
        is_filled: false,
    };


    render() {
        if (this.state.is_filled) {
            return (
                <Card className="info-card">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                </Card>
            )
        } else {
            return (
                <Card className="info-card">
                    <h1>Точка №Х</h1>
                    <p>
                        <b>Скоринг:</b> 6/10
                    </p>
                    <p><h3>Почему перспективно</h3>
                    Строится новый ЖК. Рядом появится школа и детский сад. Население - приемущественно женщины с выским доходом.
                    </p>
                    <p></p>
                </Card>
            )
        }

    }
}