import React from "react";
import "./settings.css"
import {Button, Radio, Checkbox} from "antd";
import {Typography, Tabs} from "antd";
const { Title } = Typography;
const { TabPane } = Tabs;

const plainOptions = ['Новые ЖК', 'Новая школа'];

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        if (!this.state.active) {
            return (
                <Button onClick={() => this.setState({
                    active: true,
                })}>Настройки</Button>
            );
        }
        else {
            return (
                <div class={"settings"}>
                    <Title level={2}>Настройка</Title>
                    <div className={"section_chooser"}>
                        <Tabs defaultActiveKey={"1"}>
                            <TabPane tab={"Человек"} key={"1"}>
                                <div className={"scrollable_form"}>
                                    <div className={"form_section"}>
                                        <Title level={4}>Пол</Title>
                                        <Radio.Group value={"3"}>
                                            <Radio value={"1"}>Мужчины</Radio>
                                            <Radio value={"2"}>Женщины</Radio>
                                            <Radio value={"3"} checked>Неважно</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Возраст</Title>
                                        <Radio.Group>
                                            <Radio value={"1"}>Молодые</Radio>
                                            <Radio value={"2"}>Средние</Radio>
                                            <Radio value={"3"}>Пожилые</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Доход</Title>
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value={"1"}>Небольшой</Radio.Button>
                                            <Radio.Button value={"2"}>Средний</Radio.Button>
                                            <Radio.Button value={"3"}>Высокий</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab={"Место"} key={"2"}>
                                <div className={"scrollable_form"}>
                                    <div className={"form_section"}>
                                        <Title level={4}>Метро</Title>
                                        <Radio.Group value={"2"}>
                                            <Radio value={"1"}>Близко</Radio>
                                            <Radio value={"2"} checked>Неважно</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Трафик</Title>
                                        <Radio.Group value={"2"}>
                                            <Radio value={"1"}>Побольше</Radio>
                                            <Radio value={"2"} >Неважно</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Рядом</Title>
                                        <Checkbox.Group options={plainOptions} defaultValue={[]} />
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                        <Button block type={"primary"} onClick={() => this.setState({
                            active: false,
                        })}>Применить</Button>
                    </div>

                </div>
            );
        }

    }
}