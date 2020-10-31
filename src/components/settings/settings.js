import React from "react";
import "./settings.css"
import {Button, Radio, Checkbox} from "antd";
import {Typography, Tabs} from "antd";
import * as Constants from "../../constants";
const { Title } = Typography;
const { TabPane } = Tabs;


export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,

            genderSet: null,
            ageSet: null,
            moneySet: null,
            metroSet: null,
            trafficSet: null,
            houseSet: null,
            schoolSet: null,

            setProcess: props.processChanges,
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
                <div className={"settings"}>
                    <Title level={2}>Настройка</Title>
                    <div className={"section_chooser"}>
                        <Tabs defaultActiveKey={"1"}>
                            <TabPane tab={"Человек"} key={"1"}>
                                <div className={"scrollable_form"}>
                                    <div className={"form_section"}>
                                        <Title level={4}>Пол</Title>
                                        <Radio.Group value={this.state.genderSet} onChange={(e) => this.setState({
                                            genderSet: e.target.value,
                                        })}>
                                            <Radio value={Constants.settingTags.man}>Мужчины</Radio>
                                            <Radio value={Constants.settingTags.woman}>Женщины</Radio>
                                            <Radio value={null}>Неважно</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Возраст</Title>
                                        <Radio.Group value={this.state.ageSet} onChange={(e) => this.setState({
                                            ageSet: e.target.value,
                                        })}>
                                            <Radio value={Constants.settingTags.young}>Молодые</Radio>
                                            <Radio value={null}>Неважно</Radio>
                                            <Radio value={Constants.settingTags.old}>Пожилые</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Доход</Title>
                                        <Radio.Group buttonStyle="solid" value={this.state.moneySet} onChange={(e) => this.setState({
                                            moneySet: e.target.value,
                                        })}>
                                            <Radio.Button value={Constants.settingTags.poor}>Небольшой</Radio.Button>
                                            <Radio.Button value={Constants.settingTags.middle_money}>Средний</Radio.Button>
                                            <Radio.Button value={Constants.settingTags.rich}>Высокий</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab={"Место"} key={"2"}>
                                <div className={"scrollable_form"}>
                                    <div className={"form_section"}>
                                        <Title level={4}>Метро</Title>
                                        <Radio.Group value={this.state.metroSet} onChange={(e) => this.setState({
                                            metroSet: e.target.value,
                                        })}>
                                            <Radio value={Constants.settingTags.metro}>Близко</Radio>
                                            <Radio value={null}>Неважно</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Трафик</Title>
                                        <Radio.Group value={this.state.trafficSet} onChange={(e) => this.setState({
                                            trafficSet: e.target.value,
                                        })}>
                                            <Radio value={Constants.settingTags.traffic}>Побольше</Radio>
                                            <Radio value={null} >Неважно</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className={"form_section"}>
                                        <Title level={4}>Рядом</Title>
                                        <Checkbox checked={this.state.houseSet != null} onChange={(e) => this.setState({
                                            houseSet: e.target.checked ? Constants.settingTags.house : null,
                                        })}>Новые ЖК</Checkbox>
                                        <Checkbox checked={this.state.schoolSet != null} onChange={(e) => this.setState({
                                            schoolSet: e.target.checked ? Constants.settingTags.school : null,
                                        })}>Новая школа</Checkbox>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                        <Button block type={"primary"} onClick={() => {
                            this.state.setProcess({
                                gender: this.state.genderSet,
                                age: this.state.ageSet,
                                money: this.state.moneySet,
                                metro: this.state.metroSet,
                                traffic: this.state.trafficSet,
                                house: this.state.houseSet,
                                school: this.state.schoolSet,
                            });
                            this.setState({
                                active: false,
                            });
                        }}>Применить</Button>
                    </div>

                </div>
            );
        }
    }
}
