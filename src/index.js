import React from 'react';
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'leaflet/dist/leaflet.css';

const TITLE = 'Открывашка';

ReactDOM.render(
    <span>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <App/>
    </span>,
    document.getElementById('root')
);
