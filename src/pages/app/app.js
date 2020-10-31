import React from 'react';
import './app.css';
import MapView from "../../components/map";
import CategorySelector from "../../components/category_selector";
import Settings from "../../components/settings";
import Info from "../../components/info";

export default class App {

    state = {
        chosenProperties: {},
    }

    setProperties(new_properties) {
        this.state.chosenProperties = new_properties;
    }

    render() {
        return (
            <div className="outer_wrap">
                <div className="cat_select">
                    <CategorySelector/>
                </div>
                <div className="info-polygon" chosenProperies={this.state.chosenProperties}>
                    <Info/>
                </div>
                <div className="settings_area">
                    <Settings/>
                </div>
                <div className="map-container">
                    <MapView/>
                </div>
            </div>
        )
    }
}