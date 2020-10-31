import React from 'react';
import './app.css';
import MapView from "../../components/map";
import CategorySelector from "../../components/category_selector";
import Settings from "../../components/settings";
import Info from "../../components/info";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenProperties: null,
            map_api_url: 'http://0.0.0.0:8091/api/location_optimizer/find_best_district',
        };
    }

    setProperties(new_properties) {
        this.setState({
            chosenProperties: new_properties,
        })
    }

    render() {
        return (
            <div className="outer_wrap">
                <div className="cat_select">
                    <CategorySelector/>
                </div>
                <div className="info-polygon">
                    <Info properties={this.state.chosenProperties}/>
                </div>
                <div className="settings_area">
                    <Settings/>
                </div>
                <div className="map-container">
                    <MapView setchosencard={(properties) => this.setProperties(properties)}
                             api_url={this.state.map_api_url}/>
                </div>
            </div>
        )
    }
}