import React from 'react';
import './app.css';
import MapView from "../../components/map";
import CategorySelector from "../../components/category_selector";

const App = () => (
    <div>
        <CategorySelector/>
        <div id="map-container">
            <MapView/>
        </div>
    </div>

);

export default App;