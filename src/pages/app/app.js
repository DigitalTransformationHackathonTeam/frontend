import React from 'react';
import './app.css';
import MapView from "../../components/map";
import CategorySelector from "../../components/category_selector";
import Settings from "../../components/settings";
import Info from "../../components/info";

const App = () => (
    <div className="outer_wrap">
        <div className="cat_select">
            <CategorySelector/>
        </div>
        <div className="info-polygon">
            <Info/>
        </div>
        <div className="settings-area">
            <Settings/>
        </div>
        <div className="map-container">
            <MapView/>
        </div>
    </div>
);

export default App;