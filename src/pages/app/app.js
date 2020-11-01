import React from 'react';
import './app.css';
import MapView from "../../components/map";
import CategorySelector from "../../components/category_selector";
import Settings from "../../components/settings";
import Info from "../../components/info";
import * as Constants from "../../constants";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenProperties: null,
            map_api_url: Constants.api_url + '/api/location_optimizer/find_best_district/Moscow/pharmacy',
            cur_key: 1,
        };
    }

    onCategorySelectorChange = (value) => {
        const new_key = this.state.cur_key + 1;
        this.setState({
            map_api_url: `${Constants.api_url}/api/location_optimizer/find_best_district/Moscow/${value[1]}`,
            cur_key: new_key,
        });
    }

    setProperties(new_properties) {
        this.setState({
            chosenProperties: new_properties,
        })
    }

    processSettingsChange(settings) {
        let new_url = Constants.api_url + '/api/location_optimizer/find_best_for_tag/Moscow?';
        Object.entries(settings).forEach((a) => {
            if (a[1] != null) {
                new_url += '&tag=' + a[1].toString();
            }
        });
        this.setState({
            map_api_url: new_url,
            cur_key: this.state.cur_key + 1,
        });
        console.log(new_url);
    }

    render() {
        return (
            <div className="outer_wrap">
                <div className="cat_select">
                    <CategorySelector onCategorySelectorChange={this.onCategorySelectorChange} />
                </div>
                <div className="info-polygon">
                    <Info properties={this.state.chosenProperties}/>
                </div>
                <div className="settings_area">
                    <Settings processChanges={(settings) => this.processSettingsChange(settings)}/>
                </div>
                <div className="map-container">
                    <MapView setchosencard={(properties) => this.setProperties(properties)}
                             api_url={this.state.map_api_url} key={this.state.cur_key}/>
                </div>
            </div>
        )
    }
}