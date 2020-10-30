import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app';
import 'leaflet/dist/leaflet.css';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
